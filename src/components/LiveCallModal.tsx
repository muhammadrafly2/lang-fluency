"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, MicOff, PhoneOff, Volume2, VolumeX, Sparkles, 
  Languages, Lightbulb, Zap, TrendingUp, CheckCircle2, 
  MessageSquare, Award
} from "lucide-react";
import { Scenario, InCallTelemetry, ChatMessage, PhoneticGuide } from "@/types";
import { speakElena } from "@/utils/speechEngine";

interface BrowserSpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (() => void) | null;
  onresult: ((e: { resultIndex: number; results: Array<Array<{ transcript: string }> & { isFinal: boolean }> }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

interface WindowWithSpeech {
  SpeechRecognition?: new () => BrowserSpeechRecognition;
  webkitSpeechRecognition?: new () => BrowserSpeechRecognition;
}

export interface LiveCallModalProps {
  open: boolean;
  scenario: Scenario | null;
  onClose: () => void;
  onSessionComplete: (results: {
    xpGained: number;
    speakingMinutes: number;
    wordsAssim: number;
  }) => void;
  apiKey?: string;
  ttsSpeed?: number;
  ttsPitch?: number;
  ttsVoiceURI?: string;
  targetLanguage?: string;
}

export function LiveCallModal({
  open,
  scenario,
  onClose,
  onSessionComplete,
  apiKey,
  ttsSpeed = 0.94,
  ttsPitch = 1.02,
  ttsVoiceURI,
  targetLanguage = "english",
}: LiveCallModalProps) {
  // Call States: "idle" | "listening" | "processing" | "speaking"
  const [callState, setCallState] = useState<"idle" | "listening" | "processing" | "speaking">("idle");
  const [isLoudspeaker, setIsLoudspeaker] = useState(true);
  const [showTranslate, setShowTranslate] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showPromptsDrawer, setShowPromptsDrawer] = useState(false);

  // Live Telemetry
  const [telemetry, setTelemetry] = useState<InCallTelemetry>({
    clarityPct: 94,
    wpm: 138,
    pacingStatus: "Optimal",
    fillersCount: 0,
    flowMultiplier: 1.5,
  });
  const [flowMultiplierProgress, setFlowMultiplierProgress] = useState(65);
  const [callDurationSec, setCallDurationSec] = useState(0);

  // In-Call Messages & Streaming
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streamingTranscript, setStreamingTranscript] = useState("");
  const [currentTip, setCurrentTip] = useState(
    "Tip: Anchor assertions with tangible ROI metrics rather than subjective feelings."
  );
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<{ stop: () => void } | null>(null);
  const msgCounterRef = useRef<number>(0);
  const ttsCancelRef = useRef<(() => void) | null>(null);

  // Detect Japanese track or scenario
  const isJapanese =
    targetLanguage === "japanese" ||
    scenario?.id.startsWith("tokyo-") ||
    scenario?.id.startsWith("izakaya-") ||
    scenario?.id.startsWith("shinkansen-") ||
    /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(scenario?.aiFirstMessage || "");

  // Cleanup TTS on unmount
  useEffect(() => {
    return () => {
      if (ttsCancelRef.current) {
        ttsCancelRef.current();
        ttsCancelRef.current = null;
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Quick Prompts list for drawer
  const quickPrompts = [
    "Could you give an example?",
    "How would a native say that?",
    "Challenge my thesis",
    "Rephrase more politely",
    "Let's explore the counter-offer",
  ];

  // Elena's Natural Human Voice Helper
  const playTTS = useCallback((text: string) => {
    if (ttsCancelRef.current) {
      ttsCancelRef.current();
      ttsCancelRef.current = null;
    }

    if (!isLoudspeaker || typeof window === "undefined" || !("speechSynthesis" in window)) {
      setCallState("idle");
      return;
    }

    const cancel = speakElena(text, {
      voiceURI: ttsVoiceURI,
      rate: ttsSpeed,
      pitch: ttsPitch,
      targetLanguage: isJapanese ? "japanese" : "english",
      isLoudspeaker,
      onStart: () => setCallState("speaking"),
      onEnd: () => setCallState("idle"),
      onError: () => setCallState("idle"),
    });

    ttsCancelRef.current = cancel;
  }, [isLoudspeaker, ttsSpeed, ttsPitch, ttsVoiceURI, isJapanese]);

  // Initialize call session when modal opens
  useEffect(() => {
    if (!open || !scenario) return;

    const starterMsg: ChatMessage = {
      id: "starter",
      role: "ai",
      text: scenario.aiFirstMessage || "Welcome to the simulation. Let's begin.",
      timestamp: new Date(),
      executiveTip: "Assertive posture: keep an even pitch contour on closing statements.",
      phonetics: { word: "negotiation", ipa: "/nɪˌɡoʊ.ʃiˈeɪ.ʃən/" },
    };

    const timeout = setTimeout(() => {
      setCallDurationSec(0);
      setCallState("speaking");
      setMessages([starterMsg]);
      playTTS(starterMsg.text);
    }, 0);

    const timer = setInterval(() => {
      setCallDurationSec((prev) => prev + 1);
      setFlowMultiplierProgress((prev) => Math.min(prev + 0.8, 100));
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [open, scenario, playTTS]);

  // Scroll to bottom of transcript
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, streamingTranscript]);

  // Toggle Microphone & Speech Recognition
  const toggleListening = () => {
    if (callState === "listening") {
      stopSpeechRecognition();
    } else {
      startSpeechRecognition();
    }
  };

  const startSpeechRecognition = () => {
    if (typeof window === "undefined") return;
    const win = window as unknown as WindowWithSpeech;
    const SpeechAPI = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechAPI) {
      setCallState("listening");
      simulateSpokenInput("I believe a 20% increase is justified given our pipeline impact.");
      return;
    }

    try {
      const recognition = new SpeechAPI();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = isJapanese ? "ja-JP" : "en-US";

      recognition.onstart = () => {
        setCallState("listening");
      };

      recognition.onresult = (event: { resultIndex: number; results: Array<Array<{ transcript: string }> & { isFinal: boolean }> }) => {
        let interim = "";
        let final = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const item = event.results[i];
          if (item.isFinal) {
            final += item[0].transcript;
          } else {
            interim += item[0].transcript;
          }
        }

        if (final) {
          setStreamingTranscript("");
          handleUserSpeech(final);
        } else {
          setStreamingTranscript(interim);
        }
      };

      recognition.onerror = () => {
        setCallState("idle");
      };

      recognition.onend = () => {
        if (callState === "listening") {
          setCallState("idle");
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      simulateSpokenInput("I believe our track record delivers quantifiable ROI for this bracket.");
    }
  };

  const stopSpeechRecognition = () => {
    recognitionRef.current?.stop();
    setCallState("idle");
  };

  const simulateSpokenInput = (sampleText: string) => {
    setCallState("listening");
    let i = 0;
    const interval = setInterval(() => {
      i += 4;
      setStreamingTranscript(sampleText.slice(0, i));
      if (i >= sampleText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setStreamingTranscript("");
          handleUserSpeech(sampleText);
        }, 500);
      }
    }, 40);
  };

  const handleUserSpeech = async (userText: string) => {
    if (!userText.trim()) return;

    msgCounterRef.current += 1;
    const userMsg: ChatMessage = {
      id: `u-${msgCounterRef.current}`,
      role: "user",
      text: userText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setCallState("processing");

    const fillers = ["um", "uh", "like", "you know"];
    const detected = fillers.filter((f) => new RegExp(`\\b${f}\\b`, "i").test(userText));
    if (detected.length > 0) {
      setTelemetry((prev) => ({ ...prev, fillersCount: prev.fillersCount + detected.length }));
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: messages.slice(-4),
          scenarioId: scenario?.id,
          scenarioTitle: scenario?.title,
          apiKey,
        }),
      });

      if (!res.ok) throw new Error("API call failed");

      const data = await res.json();
      msgCounterRef.current += 1;
      const aiMsg: ChatMessage = {
        id: `ai-${msgCounterRef.current}`,
        role: "ai",
        text: data.response,
        timestamp: new Date(),
        feedback: data.feedback,
        phonetics: data.phonetics,
        executiveTip: data.executiveTip,
        clarityScore: data.clarityScore,
      };

      setMessages((prev) => [...prev, aiMsg]);

      if (data.executiveTip) setCurrentTip(data.executiveTip);
      if (data.clarityScore) {
        setTelemetry((prev) => ({ ...prev, clarityPct: data.clarityScore }));
      }

      playTTS(aiMsg.text);
    } catch {
      msgCounterRef.current += 1;
      const fallbackMsg: ChatMessage = {
        id: `ai-fb-${msgCounterRef.current}`,
        role: "ai",
        text: "That is an articulate point. Let's see how you defend that position under tighter budget constraints.",
        timestamp: new Date(),
        phonetics: { word: "constraints", ipa: "/kənˈstreɪnts/" },
        executiveTip: "Keep closing cadence downwards to signal executive authority.",
      };
      setMessages((prev) => [...prev, fallbackMsg]);
      playTTS(fallbackMsg.text);
    }
  };

  const handleEndCall = () => {
    if (ttsCancelRef.current) {
      ttsCancelRef.current();
      ttsCancelRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    stopSpeechRecognition();
    setShowSummaryModal(true);
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#070b14] flex flex-col justify-between overflow-hidden text-white animate-fade-in select-none">
      {/* Background Holographic Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] transition-all duration-1000 ${
          callState === "listening"
            ? "bg-cyan-500/25 scale-125"
            : callState === "speaking"
            ? "bg-purple-500/25 scale-110"
            : callState === "processing"
            ? "bg-amber-500/25 scale-100"
            : "bg-cyan-500/10 scale-90"
        }`} />
      </div>

      {/* ── Top Bar: Scenario Title & Call Timer ── */}
      <header className="relative z-10 px-6 pt-5 pb-3 flex items-center justify-between border-b border-white/10 backdrop-blur-md bg-black/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl overflow-hidden border border-cyan-400/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/elena-coach.jpg" alt="Elena AI" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-space font-bold text-white leading-tight">
                {scenario?.title || "Live Coaching Session"}
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono font-bold">
                {scenario?.cefrLevel || "C1"}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Coach Elena • In-Call Simulation</span>
            </p>
          </div>
        </div>

        {/* Call Timer & End button */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs font-bold text-cyan-300">
            {formatTimer(callDurationSec)}
          </div>
          <button
            onClick={handleEndCall}
            className="p-2.5 rounded-2xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 transition-colors"
            title="End Call"
          >
            <PhoneOff size={18} />
          </button>
        </div>
      </header>

      {/* ── Top HUD: Real-Time Speech Telemetry & Fluent Flow ── */}
      <div className="relative z-10 px-6 py-2.5 border-b border-white/5 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
        {/* Telemetry Pills */}
        <div className="flex items-center gap-2 text-xs">
          <div className="px-2.5 py-1 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 font-mono flex items-center gap-1.5">
            <Sparkles size={12} className="text-cyan-400" />
            <span>Clarity: <strong>{telemetry.clarityPct}%</strong></span>
          </div>

          <div className="px-2.5 py-1 rounded-xl bg-purple-400/10 border border-purple-400/20 text-purple-300 font-mono flex items-center gap-1.5">
            <TrendingUp size={12} className="text-purple-400" />
            <span>Pacing: <strong>{telemetry.pacingStatus}</strong> ({telemetry.wpm} WPM)</span>
          </div>

          <div className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-mono flex items-center gap-1.5">
            <span>Fillers: <strong className={telemetry.fillersCount > 0 ? "text-amber-400" : "text-emerald-400"}>
              {telemetry.fillersCount} count
            </strong></span>
          </div>
        </div>

        {/* Fluent Flow Multiplier Bar (+15 XP/min) */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
            <Zap size={11} className="fill-amber-400" /> Fluent Flow +15 XP/m
          </span>
          <div className="w-24 bg-white/10 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-amber-400 rounded-full transition-all duration-500 shadow-[0_0_8px_#00e5ff]"
              style={{ width: `${flowMultiplierProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Center Stage: Siri-Style Voice Orb & Dynamic State Visualizer ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-4 overflow-hidden">
        {/* Dynamic Siri-Style Voice Orb */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center my-2">
          <motion.div
            animate={{
              scale: callState === "listening" ? [1, 1.35, 1] : callState === "speaking" ? [1, 1.25, 1] : [1, 1.08, 1],
              opacity: callState === "listening" ? [0.4, 0.8, 0.4] : 0.3,
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/40 via-purple-500/40 to-cyan-300/30 blur-2xl pointer-events-none"
          />

          <motion.div
            animate={{
              scale: callState === "speaking" ? [1, 1.2, 1] : [1, 1.05, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-cyan-400/30 border-dashed pointer-events-none"
          />

          {/* Central Orb Button with Dynamic State Content */}
          <button
            onClick={toggleListening}
            className={`relative w-36 h-36 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-500 shadow-2xl border ${
              callState === "listening"
                ? "bg-[#0b1120] border-cyan-400 shadow-[0_0_50px_rgba(0,229,255,0.6)] scale-105"
                : callState === "speaking"
                ? "bg-[#0f172a] border-purple-400 shadow-[0_0_50px_rgba(139,92,246,0.5)]"
                : callState === "processing"
                ? "bg-[#0b1120] border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.4)] animate-pulse"
                : "bg-[#0f172a] border-white/15 hover:border-cyan-400/50 hover:scale-102"
            }`}
          >
            {callState === "listening" ? (
              <div className="flex items-center gap-1 h-8">
                {[1, 3, 5, 4, 6, 4, 5, 3, 1].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: [h * 3, h * 7, h * 3] }}
                    transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.06 }}
                    className="w-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00e5ff]"
                  />
                ))}
              </div>
            ) : callState === "speaking" ? (
              <div className="flex flex-col items-center gap-1.5">
                <Volume2 size={36} className="text-purple-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest">
                  Speaking
                </span>
              </div>
            ) : callState === "processing" ? (
              <div className="flex flex-col items-center gap-1.5">
                <Sparkles size={32} className="text-amber-400 animate-spin" />
                <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-widest">
                  Analyzing
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5">
                <Mic size={36} className="text-cyan-400" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Tap to Speak
                </span>
              </div>
            )}
          </button>
        </div>

        {/* State label */}
        <div className="flex items-center gap-2 mt-1">
          <span className={`w-2 h-2 rounded-full ${
            callState === "listening" ? "bg-cyan-400 animate-ping" : callState === "speaking" ? "bg-purple-400 animate-pulse" : "bg-emerald-400"
          }`} />
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            {callState === "listening"
              ? "Elena is listening..."
              : callState === "speaking"
              ? "Elena is speaking..."
              : callState === "processing"
              ? "Evaluating phonetics & syntax..."
              : "Microphone Ready • Push to speak"}
          </p>
        </div>

        {/* ── Live Phonetic Transcript & Intelligent Coaching Stream ── */}
        <div 
          ref={chatScrollRef}
          className="w-full max-w-xl flex-1 overflow-y-auto mt-4 px-2 flex flex-col gap-3 max-h-48 md:max-h-56"
        >
          {messages.map((m) => {
            const isAi = m.role === "ai";
            return (
              <div
                key={m.id}
                className={`flex flex-col gap-1 ${isAi ? "items-start" : "items-end"} animate-slide-up-fade`}
              >
                <span className="text-[10px] font-mono text-slate-500 uppercase px-2">
                  {isAi ? "Coach Elena" : "You (Rafly)"}
                </span>

                <div
                  className={`px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${
                    isAi
                      ? "bg-white/[0.06] border border-white/10 text-slate-100 rounded-tl-none"
                      : "bg-cyan-500/20 border border-cyan-400/40 text-cyan-50 rounded-tr-none shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                  }`}
                >
                  <p>{m.text}</p>

                  {m.phonetics && (
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="font-semibold text-cyan-300">{m.phonetics.word}</span>
                        <span className="font-mono text-[11px] text-purple-300 px-1.5 py-0.5 rounded-md bg-purple-500/20">
                          {m.phonetics.ipa}
                        </span>
                      </div>
                      <button
                        onClick={() => playTTS(m.phonetics!.word)}
                        className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-[10px] font-mono text-slate-300 flex items-center gap-1"
                      >
                        <Volume2 size={11} /> Listen
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {streamingTranscript && (
            <div className="flex flex-col items-end gap-1 animate-pulse">
              <span className="text-[10px] font-mono text-cyan-400 uppercase px-2">Transcribing...</span>
              <div className="px-4 py-3 rounded-2xl text-xs bg-cyan-500/10 border border-cyan-400/30 text-cyan-200 rounded-tr-none italic">
                &ldquo;{streamingTranscript}&rdquo;
              </div>
            </div>
          )}
        </div>

        {/* ── Contextual Suggestion Banner ── */}
        <div className="w-full max-w-xl mt-3 p-3 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-transparent border border-purple-500/20 flex items-center gap-2.5 text-xs">
          <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 flex-shrink-0">
            <Lightbulb size={14} />
          </div>
          <span className="text-slate-300 line-clamp-1 flex-1">
            {currentTip}
          </span>
        </div>
      </div>

      {/* ── Bottom Haptic Call Dock ── */}
      <footer className="relative z-10 px-6 py-4 glass-dock border-t border-white/10 flex flex-col gap-3">
        {/* Quick Prompts Drawer */}
        <AnimatePresence>
          {showPromptsDrawer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
            >
              {quickPrompts.map((phrase, i) => (
                <button
                  key={i}
                  onClick={() => {
                    handleUserSpeech(phrase);
                    setShowPromptsDrawer(false);
                  }}
                  className="whitespace-nowrap px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 font-medium transition-colors"
                >
                  &ldquo;{phrase}&rdquo;
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Call Action Buttons */}
        <div className="flex items-center justify-between max-w-xl mx-auto w-full gap-4">
          <button
            onClick={() => setShowPromptsDrawer(!showPromptsDrawer)}
            className={`p-3.5 rounded-2xl border transition-all ${
              showPromptsDrawer
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
            }`}
            title="Quick Prompts"
          >
            <MessageSquare size={18} />
          </button>

          <button
            onClick={() => setShowTranslate(!showTranslate)}
            className={`p-3.5 rounded-2xl border transition-all ${
              showTranslate
                ? "bg-purple-500/20 border-purple-400 text-purple-300"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
            }`}
            title="Translate Feedback"
          >
            <Languages size={18} />
          </button>

          {/* Central Push-to-Talk Mic */}
          <button
            onClick={toggleListening}
            className={`p-4 rounded-3xl transition-all duration-300 shadow-xl ${
              callState === "listening"
                ? "bg-cyan-400 text-slate-950 shadow-[0_0_25px_#00e5ff] scale-110"
                : "bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 hover:scale-105"
            }`}
          >
            {callState === "listening" ? <MicOff size={24} /> : <Mic size={24} />}
          </button>

          <button
            onClick={() => setIsLoudspeaker(!isLoudspeaker)}
            className={`p-3.5 rounded-2xl border transition-all ${
              isLoudspeaker
                ? "bg-white/5 border-white/10 text-cyan-400"
                : "bg-white/5 border-white/10 text-slate-500"
            }`}
            title="Loudspeaker mode"
          >
            {isLoudspeaker ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <button
            onClick={handleEndCall}
            className="p-3.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all"
            title="End Session"
          >
            <PhoneOff size={18} />
          </button>
        </div>
      </footer>

      {/* ── Post-Call Session Wrap-Up Report Modal ── */}
      <AnimatePresence>
        {showSummaryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 animate-fade-in">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel w-full max-w-md rounded-3xl p-6 border border-cyan-400/40 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center py-4 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-3xl bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                  <Award size={36} />
                </div>

                <div>
                  <h3 className="text-xl font-space font-extrabold text-white">
                    Session Complete!
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Roleplay: {scenario?.title}
                  </p>
                </div>

                {/* Performance Metrics Breakdown */}
                <div className="w-full grid grid-cols-3 gap-2 text-center text-xs mt-2">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">XP Earned</span>
                    <span className="text-base font-space font-extrabold text-amber-300">
                      +{scenario?.xpReward || 120} XP
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Speaking Delta</span>
                    <span className="text-base font-space font-extrabold text-cyan-300">
                      +{(callDurationSec / 60).toFixed(1)} mins
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Clarity Rating</span>
                    <span className="text-base font-space font-extrabold text-emerald-300">
                      {telemetry.clarityPct}%
                    </span>
                  </div>
                </div>

                <div className="w-full p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-left text-xs flex flex-col gap-1">
                  <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Coach Elena&apos;s Wrap-Up Note:
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    &ldquo;Brilliant conversational pacing and crisp executive vocabulary. Your active streak now unlocks the Day 5 vault chest!&rdquo;
                  </p>
                </div>

                <button
                  onClick={() => {
                    setShowSummaryModal(false);
                    onSessionComplete({
                      xpGained: scenario?.xpReward || 120,
                      speakingMinutes: Math.max(1, Math.round(callDurationSec / 60)),
                      wordsAssim: 4,
                    });
                    onClose();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-space font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_#00e5ff] mt-2"
                >
                  Claim Rewards & Update Rings
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
