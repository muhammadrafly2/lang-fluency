"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Volume2, Mic, MicOff, Check, AlertCircle, Sparkles,
  Flame, Award, ArrowRight, RotateCcw, Keyboard, Grid,
  BookOpen, HelpCircle, CheckCircle2, ChevronRight
} from "lucide-react";
import { PracticeUnit, PracticeQuestion } from "@/data/interactivePracticeData";
import { speakElena } from "@/utils/speechEngine";

interface InteractivePracticeModalProps {
  isOpen: boolean;
  unit: PracticeUnit | null;
  languageCode: string;
  onClose: () => void;
  onCompleteUnit: (results: { xpGained: number; accuracyPct: number }) => void;
  ttsVoiceURI?: string;
}

/**
 * Normalizes string for flexible grading:
 * removes punctuation, trims extra spaces, converts fullwidth to halfwidth.
 */
function normalizeAnswer(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'「」『』。、！？]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function InteractivePracticeModal({
  isOpen,
  unit,
  languageCode,
  onClose,
  onCompleteUnit,
  ttsVoiceURI,
}: InteractivePracticeModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [inputMode, setInputMode] = useState<"type" | "wordbank">("type");
  const [isListening, setIsListening] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<{ stop: () => void } | null>(null);

  // Active question
  const questions = unit?.questions || [];
  const currentQ: PracticeQuestion | undefined = questions[currentQuestionIndex];

  // Reset state when unit or index changes
  useEffect(() => {
    setUserInput("");
    setSelectedTokens([]);
    setHasChecked(false);
    setIsCorrect(null);
    setShowHint(false);
    setIsListening(false);
    if (textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 150);
    }
  }, [currentQuestionIndex, unit]);

  useEffect(() => {
    if (isOpen) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setIsFinished(false);
    }
  }, [isOpen]);

  if (!isOpen || !unit || !currentQ) return null;

  // Spoken audio helper
  const handlePlayPromptAudio = (textToPlay: string) => {
    speakElena(textToPlay, {
      voiceURI: ttsVoiceURI,
      targetLanguage: languageCode,
      rate: 0.92,
      pitch: 1.02,
    });
  };

  // Web Speech recognition for voice answering
  const toggleSpeechRecognition = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SpeechAPI = (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).SpeechRecognition ||
      (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechAPI) {
      alert("Speech recognition is not supported in this browser. Please type your answer.");
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
      recognition.lang = langMap[languageCode?.toLowerCase()] || "ja-JP";

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  // Word bank token click
  const handleTokenClick = (token: string, tokenIndex: number) => {
    if (hasChecked) return;
    setSelectedTokens((prev) => [...prev, token]);
  };

  const handleRemoveToken = (indexToRemove: number) => {
    if (hasChecked) return;
    setSelectedTokens((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Effective answer from either typed or wordbank
  const effectiveAnswer = inputMode === "type"
    ? userInput.trim()
    : selectedTokens.join(languageCode === "japanese" ? "" : " ").trim();

  // Check the answer
  const handleCheckAnswer = () => {
    if (!effectiveAnswer || hasChecked) return;

    const normalizedUser = normalizeAnswer(effectiveAnswer);
    const matches = currentQ.expectedAnswers.some((ans) => {
      const normExpected = normalizeAnswer(ans);
      return (
        normalizedUser === normExpected ||
        normalizedUser.includes(normExpected) ||
        normExpected.includes(normalizedUser)
      );
    });

    setIsCorrect(matches);
    setHasChecked(true);

    if (matches) {
      setScore((prev) => prev + currentQ.xpReward);
      // Play audio of the correct expression
      handlePlayPromptAudio(currentQ.expectedAnswers[0]);
    }
  };

  // Continue to next question or complete
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      onCompleteUnit({
        xpGained: score + (isCorrect ? currentQ.xpReward : 0),
        accuracyPct: Math.round(((score + (isCorrect ? currentQ.xpReward : 0)) / (questions.length * 15)) * 100),
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-3 sm:p-5 animate-fade-in select-none">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* ── Top Bar: Duolingo Section Header matching User Image 1 ── */}
        <div className="w-full bg-[#10b981] text-white px-5 py-3 flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-100 font-bold">
              SECTION {unit.sectionNumber}, UNIT {unit.unitNumber} • {unit.levelBadge}
            </span>
            <h2 className="text-base sm:text-lg font-space font-extrabold text-white leading-tight">
              {unit.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-white border border-white/20">
              <BookOpen size={16} />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── Progress Bar & Heart/Streak HUD ── */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between gap-4 border-b border-slate-100">
          {/* Animated Segmented Progress Bar */}
          <div className="flex-1 flex items-center gap-1.5">
            {questions.map((_, idx) => {
              const isPast = idx < currentQuestionIndex;
              const isCurrent = idx === currentQuestionIndex;
              return (
                <div
                  key={idx}
                  className={`h-2.5 flex-1 rounded-full transition-all duration-300 ${
                    isPast
                      ? "bg-emerald-500 shadow-2xs"
                      : isCurrent
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-slate-100"
                  }`}
                />
              );
            })}
          </div>

          {/* XP Score & Question Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
              <Sparkles size={13} className="text-amber-500" />
              <span>+{score} XP</span>
            </div>
            <span className="text-xs font-bold text-slate-400 font-mono">
              {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
        </div>

        {/* ── Main Exercise Canvas matching User Image 2 ── */}
        {!isFinished ? (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              
              {/* Coach Character & Speech Bubble (Matching Image 2) */}
              <div className="flex items-start gap-4">
                {/* Character Avatar */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-500 bg-amber-100 shadow-md">
                    <img
                      src="/aura-avatar.png"
                      alt={currentQ.coachName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" />
                </div>

                {/* Speech Bubble */}
                <div className="relative flex-1 bg-white border-2 border-slate-200 rounded-3xl p-4 sm:p-5 shadow-sm rounded-tl-xs">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        {currentQ.coachName} • Prompt
                      </div>
                      <p className="text-base sm:text-xl font-bold text-slate-900 mt-1 leading-snug">
                        {currentQ.prompt}
                      </p>
                      {currentQ.promptTranslation && (
                        <p className="text-xs text-slate-500 mt-1 font-medium">
                          {currentQ.promptTranslation}
                        </p>
                      )}
                    </div>

                    {/* Audio Listen Button */}
                    <button
                      type="button"
                      onClick={() => handlePlayPromptAudio(currentQ.prompt)}
                      className="w-9 h-9 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200 transition-colors cursor-pointer"
                      title="Listen with native pronunciation"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* ── User Input Canvas (Typing vs Word Bank) ── */}
              <div className="flex flex-col gap-3">
                {inputMode === "type" ? (
                  /* Mode A: Free Keyboard Typing (Matching Image 2 textarea) */
                  <div className="relative">
                    <textarea
                      ref={textareaRef}
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      disabled={hasChecked}
                      placeholder={
                        languageCode === "japanese"
                          ? "日本語で答えを入力してください... (Type answer in Japanese)"
                          : "Type your response here..."
                      }
                      rows={3}
                      className={`w-full p-4 rounded-2xl border-2 text-base font-medium transition-all outline-none resize-none shadow-inner ${
                        hasChecked
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-500 text-emerald-950"
                            : "bg-rose-50/50 border-rose-400 text-rose-950"
                          : "bg-slate-50 hover:bg-white focus:bg-white border-slate-200 focus:border-[#10b981] text-slate-900"
                      }`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleCheckAnswer();
                        }
                      }}
                    />

                    {/* Micro Voice Input inside Text Area */}
                    <button
                      type="button"
                      onClick={toggleSpeechRecognition}
                      className={`absolute bottom-3 right-3 p-2 rounded-xl transition-all cursor-pointer ${
                        isListening
                          ? "bg-rose-500 text-white animate-pulse"
                          : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                      }`}
                      title="Speak answer instead of typing"
                    >
                      {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                    </button>
                  </div>
                ) : (
                  /* Mode B: Word Bank Tiles Assembly (Matching Image 2 Grid mode) */
                  <div className="flex flex-col gap-3">
                    {/* Selected Tokens Tray */}
                    <div className="min-h-16 p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl flex flex-wrap gap-2 items-center">
                      {selectedTokens.length === 0 ? (
                        <span className="text-xs text-slate-400 font-medium italic px-2">
                          Tap word chips below to assemble your answer...
                        </span>
                      ) : (
                        selectedTokens.map((tok, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleRemoveToken(idx)}
                            className="px-3.5 py-1.5 rounded-xl bg-[#0f4a3c] text-white font-bold text-xs shadow-xs hover:bg-rose-600 transition-colors cursor-pointer"
                          >
                            {tok}
                          </button>
                        ))
                      )}
                    </div>

                    {/* Available Tokens in Word Bank */}
                    <div className="flex flex-wrap gap-2 p-2 justify-center">
                      {currentQ.wordBank.map((word, wIdx) => {
                        const countUsed = selectedTokens.filter((t) => t === word).length;
                        const countAvailable = currentQ.wordBank.filter((t) => t === word).length;
                        const isDepleted = countUsed >= countAvailable;

                        return (
                          <button
                            key={wIdx}
                            type="button"
                            disabled={isDepleted || hasChecked}
                            onClick={() => handleTokenClick(word, wIdx)}
                            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all border shadow-xs cursor-pointer ${
                              isDepleted
                                ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
                                : "bg-white hover:bg-emerald-50 text-slate-800 border-slate-300 hover:border-emerald-500 hover:scale-105 active:scale-95"
                            }`}
                          >
                            {word}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Hint toggle */}
                {currentQ.hint && (
                  <div className="flex items-center justify-between px-1">
                    <button
                      type="button"
                      onClick={() => setShowHint(!showHint)}
                      className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <HelpCircle size={13} />
                      <span>{showHint ? "Hide Hint" : "Need a Hint?"}</span>
                    </button>
                  </div>
                )}

                {showHint && currentQ.hint && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 animate-slide-up-fade">
                    💡 <strong>Hint:</strong> {currentQ.hint}
                  </div>
                )}
              </div>
            </div>

            {/* ── Bottom Controls & Check Button (Matching Image 2) ── */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
              {/* Toggle Input Mode: Keyboard vs Word Bank (The grid button in Image 2) */}
              <button
                type="button"
                onClick={() => setInputMode(inputMode === "type" ? "wordbank" : "type")}
                className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center border border-slate-200 transition-colors cursor-pointer shrink-0"
                title={inputMode === "type" ? "Switch to Word Bank" : "Switch to Keyboard"}
              >
                {inputMode === "type" ? <Grid size={20} /> : <Keyboard size={20} />}
              </button>

              {/* Big Vibrant CHECK Button (Matching Image 2) */}
              <button
                type="button"
                disabled={!effectiveAnswer || hasChecked}
                onClick={handleCheckAnswer}
                className={`flex-1 py-3.5 rounded-2xl font-space font-extrabold text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer ${
                  !effectiveAnswer || hasChecked
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                    : "bg-[#58cc02] hover:bg-[#46a302] text-white shadow-[#58cc02]/30 hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                CHECK
              </button>
            </div>
          </div>
        ) : (
          /* ── Unit Completion Celebratory Screen ── */
          <div className="p-8 flex flex-col items-center justify-center text-center gap-6 my-auto">
            <div className="w-20 h-20 rounded-3xl bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-[#0f4a3c] shadow-xl shadow-emerald-500/20">
              <Award size={44} />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                Unit Complete!
              </span>
              <h3 className="text-2xl font-space font-extrabold text-slate-900">
                {unit.title} Mastered!
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mt-1">
                You typed, listened, and answered conversational questions with native accuracy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">XP Earned</span>
                <span className="text-xl font-space font-extrabold text-amber-600 block mt-0.5">
                  +{score} XP
                </span>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">Accuracy</span>
                <span className="text-xl font-space font-extrabold text-emerald-600 block mt-0.5">
                  100%
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full max-w-xs py-4 rounded-2xl bg-[#0f4a3c] hover:bg-[#0a352a] text-white font-space font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0f4a3c]/25 transition-all cursor-pointer"
            >
              Continue to Roadmap
            </button>
          </div>
        )}

        {/* ── Evaluation Drawer Slide-Up (Correct / Solution Feedback) ── */}
        <AnimatePresence>
          {hasChecked && !isFinished && (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className={`p-5 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 select-none ${
                isCorrect
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                  : "bg-rose-50 border-rose-300 text-rose-950"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 text-white ${
                    isCorrect ? "bg-emerald-600" : "bg-rose-600"
                  }`}
                >
                  {isCorrect ? <Check size={22} /> : <AlertCircle size={22} />}
                </div>

                <div className="flex flex-col">
                  <span className={`text-base font-extrabold ${isCorrect ? "text-emerald-800" : "text-rose-800"}`}>
                    {isCorrect ? "Nicely done! / Great job!" : "Correct solution:"}
                  </span>

                  {!isCorrect && (
                    <span className="text-sm font-bold text-slate-900 mt-0.5">
                      {currentQ.expectedAnswers[0]}
                    </span>
                  )}

                  {currentQ.explanation && (
                    <p className="text-xs text-slate-600 mt-1 max-w-md leading-relaxed">
                      💡 {currentQ.explanation}
                    </p>
                  )}
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="button"
                onClick={handleNextQuestion}
                className={`w-full sm:w-auto px-7 py-3 rounded-2xl font-space font-extrabold text-xs uppercase tracking-wider text-white shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 shrink-0 ${
                  isCorrect
                    ? "bg-[#58cc02] hover:bg-[#46a302] shadow-[#58cc02]/30"
                    : "bg-rose-600 hover:bg-rose-700 shadow-rose-600/30"
                }`}
              >
                CONTINUE
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
