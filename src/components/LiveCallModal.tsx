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
import { getCoachPersona } from "@/utils/coachPersonas";

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
  const coachPersona = getCoachPersona(targetLanguage, ttsVoiceURI);

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
      targetLanguage: targetLanguage || (isJapanese ? "japanese" : "english"),
      isLoudspeaker,
      onStart: () => setCallState("speaking"),
      onEnd: () => setCallState("idle"),
      onError: () => setCallState("idle"),
    });

    ttsCancelRef.current = cancel;
  }, [isLoudspeaker, ttsSpeed, ttsPitch, ttsVoiceURI, isJapanese, targetLanguage]);

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
      const langMap: Record<string, string> = {
        japanese: "ja-JP",
        french: "fr-FR",
        korean: "ko-KR",
        german: "de-DE",
        spanish: "es-ES",
        english: "en-US",
      };
      recognition.lang = langMap[targetLanguage] || (isJapanese ? "ja-JP" : "en-US");

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
          targetLanguage,
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
    <div className="fixed inset-0 z-50 bg-[#f8fafc] flex flex-col justify-between overflow-hidden text-slate-900 animate-fade-in select-none">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-[140px] transition-all duration-1000 ${
            callState === "listening"
              ? "bg-emerald-400/25 scale-125"
              : callState === "speaking"
              ? "bg-[#0f4a3c]/15 scale-110"
              : callState === "processing"
              ? "bg-amber-400/20 scale-100"
              : "bg-emerald-300/15 scale-90"
          }`}
        />
      </div>

      {/* ── Top Bar: Scenario Title & Call Timer ── */}
      <header className="relative z-10 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-200/90 backdrop-blur-xl bg-white/85 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-2xl overflow-hidden border-2 border-emerald-500/80 shadow-xs bg-slate-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={coachPersona.avatarUrl} alt={coachPersona.name} className="w-full h-full object-cover" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-space font-extrabold text-slate-900 leading-tight">
                {scenario?.title || "Live Coaching Session"}
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0f4a3c] text-[10px] font-mono font-bold">
                {scenario?.cefrLevel || "C1"}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Coach {coachPersona.name.split(" ")[0]} • In-Call Simulation</span>
            </p>
          </div>
        </div>

        {/* Call Timer & End button */}
        <div className="flex items-center gap-2.5">
          <div className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs font-bold text-slate-800 shadow-2xs">
            {formatTimer(callDurationSec)}
          </div>
          <button
            onClick={handleEndCall}
            className="p-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition-colors shadow-2xs cursor-pointer"
            title="End Call"
          >
            <PhoneOff size={17} />
          </button>
        </div>
      </header>

      {/* ── Top HUD: Real-Time Speech Telemetry & Fluent Flow ── */}
      <div className="relative z-10 px-4 sm:px-6 py-2.5 border-b border-slate-200/80 bg-white/70 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shadow-2xs">
        {/* Telemetry Pills */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0f4a3c] font-mono flex items-center gap-1.5 shadow-2xs">
            <Sparkles size={12} className="text-emerald-600" />
            <span>Clarity: <strong className="font-extrabold">{telemetry.clarityPct}%</strong></span>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 font-mono flex items-center gap-1.5 shadow-2xs">
            <TrendingUp size={12} className="text-teal-600" />
            <span>Pacing: <strong className="font-extrabold">{telemetry.pacingStatus}</strong> ({telemetry.wpm} WPM)</span>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono flex items-center gap-1.5 shadow-2xs">
            <span>Fillers: <strong className={telemetry.fillersCount > 0 ? "text-amber-600 font-bold" : "text-emerald-700 font-bold"}>
              {telemetry.fillersCount} count
            </strong></span>
          </div>
        </div>

        {/* Fluent Flow Multiplier Bar (+15 XP/min) */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold text-[#0f4a3c] uppercase tracking-wider flex items-center gap-1">
            <Zap size={11} className="fill-amber-500 text-amber-500" /> Fluent Flow +15 XP/m
          </span>
          <div className="w-24 bg-slate-200/80 h-2 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-[#0f4a3c] rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${flowMultiplierProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Center Stage: Voice Orb & Dynamic Visualizer ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-3 overflow-hidden">
        {/* Dynamic Voice Orb */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center my-2">
          <motion.div
            animate={{
              scale: callState === "listening" ? [1, 1.35, 1] : callState === "speaking" ? [1, 1.25, 1] : [1, 1.08, 1],
              opacity: callState === "listening" ? [0.5, 0.9, 0.5] : 0.35,
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/40 via-teal-300/30 to-emerald-200/50 blur-2xl pointer-events-none"
          />

          <motion.div
            animate={{
              scale: callState === "speaking" ? [1, 1.15, 1] : [1, 1.04, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-1 rounded-full border-2 border-emerald-500/25 border-dashed pointer-events-none"
          />

          {/* Central Orb Button with Dynamic State Content */}
          <button
            onClick={toggleListening}
            className={`relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-500 shadow-xl border-2 ${
              callState === "listening"
                ? "bg-white border-emerald-500 shadow-[0_12px_40px_rgba(16,185,129,0.35)] scale-105"
                : callState === "speaking"
                ? "bg-[#0f4a3c] border-emerald-400 text-white shadow-[0_12px_40px_rgba(15,74,60,0.3)]"
                : callState === "processing"
                ? "bg-amber-50 border-amber-400 text-amber-800 shadow-[0_10px_30px_rgba(251,191,36,0.25)] animate-pulse"
                : "bg-white border-slate-200 text-slate-700 hover:border-emerald-500 hover:scale-102 shadow-lg shadow-emerald-950/5"
            }`}
          >
            {callState === "listening" ? (
              <div className="flex items-center gap-1 h-9">
                {[1, 3, 5, 4, 6, 4, 5, 3, 1].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: [h * 3, h * 7, h * 3] }}
                    transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.06 }}
                    className="w-1.5 bg-emerald-500 rounded-full shadow-xs"
                  />
                ))}
              </div>
            ) : callState === "speaking" ? (
              <div className="flex flex-col items-center gap-1.5 text-white">
                <Volume2 size={36} className="text-emerald-300 animate-pulse" />
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-emerald-100">
                  Speaking
                </span>
              </div>
            ) : callState === "processing" ? (
              <div className="flex flex-col items-center gap-1.5 text-amber-800">
                <Sparkles size={32} className="text-amber-500 animate-spin" />
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-amber-700">
                  Analyzing
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5 text-[#0f4a3c]">
                <Mic size={36} className="text-[#0f4a3c]" />
                <span className="text-[10px] font-mono font-extrabold text-slate-500 uppercase tracking-widest">
                  Tap to Speak
                </span>
              </div>
            )}
          </button>
        </div>

        {/* State label */}
        <div className="flex items-center gap-2 mt-1">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              callState === "listening"
                ? "bg-emerald-500 animate-ping"
                : callState === "speaking"
                ? "bg-[#0f4a3c] animate-pulse"
                : "bg-emerald-500"
            }`}
          />
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
            {callState === "listening"
              ? `${coachPersona.name.split(" ")[0]} is listening...`
              : callState === "speaking"
              ? `${coachPersona.name.split(" ")[0]} is speaking...`
              : callState === "processing"
              ? "Evaluating phonetics & syntax..."
              : "Microphone Ready • Push to speak"}
          </p>
        </div>

        {/* ── Live Phonetic Transcript & Intelligent Coaching Stream ── */}
        <div
          ref={chatScrollRef}
          className="w-full max-w-xl flex-1 overflow-y-auto mt-3 px-2 flex flex-col gap-3 max-h-44 md:max-h-52"
        >
          {messages.map((m) => {
            const isAi = m.role === "ai";
            return (
              <div
                key={m.id}
                className={`flex flex-col gap-1 ${isAi ? "items-start" : "items-end"} animate-slide-up-fade`}
              >
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase px-2">
                  {isAi ? `Coach ${coachPersona.name.split(" ")[0]}` : "You (Rafly)"}
                </span>

                <div
                  className={`px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] shadow-sm ${
                    isAi
                      ? "bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs"
                      : "bg-[#0f4a3c] text-white rounded-tr-xs"
                  }`}
                >
                  <p>{m.text}</p>

                  {m.phonetics && (
                    <div
                      className={`mt-2.5 pt-2 border-t flex items-center justify-between gap-2 ${
                        isAi ? "border-slate-100" : "border-emerald-600/50"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className={`font-bold ${isAi ? "text-[#0f4a3c]" : "text-emerald-200"}`}>
                          {m.phonetics.word}
                        </span>
                        <span
                          className={`font-mono text-[11px] px-1.5 py-0.5 rounded-md ${
                            isAi
                              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                              : "bg-emerald-900/60 text-emerald-100"
                          }`}
                        >
                          {m.phonetics.ipa}
                        </span>
                      </div>
                      <button
                        onClick={() => playTTS(m.phonetics!.word)}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer ${
                          isAi ? "bg-slate-100 hover:bg-slate-200 text-slate-700" : "bg-emerald-800 hover:bg-emerald-700 text-white"
                        }`}
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
              <span className="text-[10px] font-mono text-emerald-600 uppercase px-2 font-bold">Transcribing...</span>
              <div className="px-4 py-3 rounded-2xl text-xs bg-emerald-50 border border-emerald-200 text-emerald-950 rounded-tr-xs italic shadow-xs">
                &ldquo;{streamingTranscript}&rdquo;
              </div>
            </div>
          )}
        </div>

        {/* ── Contextual Suggestion Banner ── */}
        <div className="w-full max-w-xl mt-3 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-2.5 text-xs">
          <div className="w-7 h-7 rounded-xl bg-emerald-50 text-[#0f4a3c] border border-emerald-200 flex items-center justify-center shrink-0">
            <Lightbulb size={14} />
          </div>
          <span className="text-slate-600 font-medium line-clamp-1 flex-1">
            {currentTip}
          </span>
        </div>
      </div>

      {/* ── Bottom Haptic Call Dock ── */}
      <footer className="relative z-10 px-4 sm:px-6 py-3.5 bg-white/90 backdrop-blur-xl border-t border-slate-200/90 flex flex-col gap-2.5 shadow-lg">
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
                  className="whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 font-semibold transition-colors cursor-pointer"
                >
                  &ldquo;{phrase}&rdquo;
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Call Action Buttons */}
        <div className="flex items-center justify-between max-w-xl mx-auto w-full gap-3 sm:gap-4">
          <button
            onClick={() => setShowPromptsDrawer(!showPromptsDrawer)}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              showPromptsDrawer
                ? "bg-[#0f4a3c] text-white border-[#0f4a3c] shadow-sm"
                : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600"
            }`}
            title="Quick Prompts"
          >
            <MessageSquare size={18} />
          </button>

          <button
            onClick={() => setShowTranslate(!showTranslate)}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              showTranslate
                ? "bg-[#0f4a3c] text-white border-[#0f4a3c] shadow-sm"
                : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600"
            }`}
            title="Translate Feedback"
          >
            <Languages size={18} />
          </button>

          {/* Central Push-to-Talk Hero Mic */}
          <button
            onClick={toggleListening}
            className={`p-4 rounded-3xl transition-all duration-300 shadow-lg cursor-pointer ${
              callState === "listening"
                ? "bg-emerald-500 text-white shadow-emerald-500/30 scale-110 ring-4 ring-emerald-200"
                : "bg-[#0f4a3c] hover:bg-[#0a352a] text-white shadow-[#0f4a3c]/25 hover:scale-105"
            }`}
          >
            {callState === "listening" ? <MicOff size={24} /> : <Mic size={24} />}
          </button>

          <button
            onClick={() => setIsLoudspeaker(!isLoudspeaker)}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              isLoudspeaker
                ? "bg-emerald-50 border-emerald-200 text-[#0f4a3c]"
                : "bg-slate-50 border-slate-200 text-slate-400"
            }`}
            title="Loudspeaker mode"
          >
            {isLoudspeaker ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <button
            onClick={handleEndCall}
            className="p-3.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-500/20 transition-all cursor-pointer"
            title="End Session"
          >
            <PhoneOff size={18} />
          </button>
        </div>
      </footer>

      {/* ── Post-Call Session Wrap-Up Report Modal (Matching Image 2 in Emerald Style) ── */}
      <AnimatePresence>
        {showSummaryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-fade-in">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 shadow-2xl relative overflow-hidden text-slate-900"
            >
              <div className="text-center py-2 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-3xl bg-emerald-50 border-2 border-emerald-500/80 flex items-center justify-center text-[#0f4a3c] shadow-lg shadow-emerald-500/15">
                  <Award size={36} />
                </div>

                <div>
                  <h3 className="text-2xl font-space font-extrabold text-slate-900 tracking-tight">
                    Session Complete!
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Roleplay: {scenario?.title}
                  </p>
                </div>

                {/* Performance Metrics Breakdown */}
                <div className="w-full grid grid-cols-3 gap-2.5 text-center text-xs mt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">XP Earned</span>
                    <span className="text-lg font-space font-extrabold text-amber-600 mt-0.5 block">
                      +{scenario?.xpReward || 120} XP
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Speaking Delta</span>
                    <span className="text-lg font-space font-extrabold text-[#0f4a3c] mt-0.5 block">
                      +{(callDurationSec / 60).toFixed(1)} mins
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Clarity Rating</span>
                    <span className="text-lg font-space font-extrabold text-emerald-600 mt-0.5 block">
                      {telemetry.clarityPct}%
                    </span>
                  </div>
                </div>

                <div className="w-full p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-left text-xs flex flex-col gap-1.5 shadow-2xs">
                  <span className="font-bold text-[#0f4a3c] flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" /> Coach {coachPersona.name.split(" ")[0]}&apos;s Wrap-Up Note:
                  </span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
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
                  className="w-full py-4 rounded-2xl bg-[#0f4a3c] hover:bg-[#0a352a] text-white font-space font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#0f4a3c]/25 mt-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
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
