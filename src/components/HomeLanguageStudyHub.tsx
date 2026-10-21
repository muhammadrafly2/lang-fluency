"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Globe2, Volume2, PhoneCall, CheckCircle2, 
  Clock, Target, BookOpen, Compass, ChevronDown, ChevronUp, 
  ArrowRight, Shield, Award, Play, Check
} from "lucide-react";
import { CourseRoadmap, RoadmapSection, RoadmapStep } from "@/types";
import { JAPANESE_COURSE_ROADMAP, ENGLISH_COURSE_ROADMAP } from "@/data/learningRoadmaps";
import { speakElena, selectElenaVoice } from "@/utils/speechEngine";
import { JapaneseTopicModules } from "./JapaneseTopicModules";

interface HomeLanguageStudyHubProps {
  selectedLanguage: "english" | "japanese";
  onSelectLanguage: (lang: "english" | "japanese") => void;
  onStartCall: (scenarioId?: string) => void;
  onNavigateToMastery: () => void;
  ttsVoices: SpeechSynthesisVoice[];
  ttsVoiceURI?: string;
}

export function HomeLanguageStudyHub({
  selectedLanguage,
  onSelectLanguage,
  onStartCall,
  onNavigateToMastery,
  ttsVoices,
  ttsVoiceURI,
}: HomeLanguageStudyHubProps) {
  const [expandedSectionId, setExpandedSectionId] = useState<string>(
    selectedLanguage === "japanese" ? "jp-sec-1" : "en-sec-1"
  );
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const previewCancelRef = useRef<(() => void) | null>(null);

  // Sync expanded section when language changes
  useEffect(() => {
    setExpandedSectionId(selectedLanguage === "japanese" ? "jp-sec-1" : "en-sec-1");
  }, [selectedLanguage]);

  // Clean up speech preview on unmount
  useEffect(() => {
    return () => {
      if (previewCancelRef.current) previewCancelRef.current();
    };
  }, []);

  const course: CourseRoadmap =
    selectedLanguage === "japanese" ? JAPANESE_COURSE_ROADMAP : ENGLISH_COURSE_ROADMAP;

  // Active AI Voice detection
  const isJa = selectedLanguage === "japanese";
  const activeVoice = selectElenaVoice(ttsVoices, { isJapanese: isJa, preferredURI: ttsVoiceURI });
  const voiceDisplayName = activeVoice
    ? activeVoice.name.replace(/Online \(Natural\)/gi, "Natural").replace(/Google /gi, "")
    : isJa
    ? "Elena (Tokyo Natural — 日本語)"
    : "Elena Vance (Oxford C2 — British)";

  const handlePreviewVoice = () => {
    if (previewCancelRef.current) {
      previewCancelRef.current();
      previewCancelRef.current = null;
      setIsPlayingVoice(false);
      return;
    }

    const sampleText = isJa
      ? "はじめまして！エレナです。自然な発音とビジネス敬語で、一緒に練習しましょう。"
      : "Hello! I'm Elena, your Oxford executive voice coach. Let's practice with natural clarity, poise, and confidence.";

    setIsPlayingVoice(true);
    const cancel = speakElena(sampleText, {
      voiceURI: ttsVoiceURI,
      targetLanguage: selectedLanguage,
      rate: isJa ? 0.96 : 0.94,
      pitch: 1.02,
      onEnd: () => setIsPlayingVoice(false),
      onError: () => setIsPlayingVoice(false),
    });
    previewCancelRef.current = cancel;
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-slide-up-fade">
      {/* ── Step 1: Study Language Selector Bar ── */}
      <div className="w-full bg-[#0d1424] border border-slate-800/80 rounded-3xl p-4 md:p-6 shadow-xl shadow-black/40 flex flex-col gap-4 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-72 h-32 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#00e5ff] uppercase">
                Active Study Language
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-space font-extrabold text-white">
              Choose What You Want to Study
            </h2>
          </div>

          <span className="text-[11px] text-slate-400 font-medium">
            Roadmap & AI Coach adjust automatically
          </span>
        </div>

        {/* Language Selection Cards (English vs Japanese) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
          {/* Option A: English */}
          <button
            onClick={() => onSelectLanguage("english")}
            className={`p-4 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden flex items-start justify-between gap-3 ${
              selectedLanguage === "english"
                ? "bg-gradient-to-br from-[#0e2136] via-[#102842] to-[#0d1c2d] border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.25)] ring-1 ring-[#00e5ff]"
                : "bg-[#111726] border-slate-800 hover:border-slate-700 hover:bg-[#141b2c]"
            }`}
          >
            <div className="flex items-start gap-3.5">
              <span className="text-3xl leading-none select-none">🇺🇸</span>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-tight">English Fluency</h3>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono font-bold">
                    CEFR B2-C2
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Oxford C2 Accent • Tech standup, salary negotiations & VC pitches
                </p>
                <div className="flex items-center gap-2 mt-2 text-[11px] text-cyan-300/80 font-mono">
                  <span>4 Sections</span>
                  <span>•</span>
                  <span>19.0 Hours</span>
                </div>
              </div>
            </div>

            {selectedLanguage === "english" && (
              <span className="w-5 h-5 rounded-full bg-[#00e5ff] text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_8px_#00e5ff]">
                <Check size={12} strokeWidth={3} />
              </span>
            )}
          </button>

          {/* Option B: Japanese */}
          <button
            onClick={() => onSelectLanguage("japanese")}
            className={`p-4 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden flex items-start justify-between gap-3 ${
              selectedLanguage === "japanese"
                ? "bg-gradient-to-br from-[#29111c] via-[#331522] to-[#1f0d15] border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.25)] ring-1 ring-rose-500"
                : "bg-[#111726] border-slate-800 hover:border-slate-700 hover:bg-[#141b2c]"
            }`}
          >
            <div className="flex items-start gap-3.5">
              <span className="text-3xl leading-none select-none">🇯🇵</span>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-tight">Japanese (日本語)</h3>
                  <span className="px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[10px] font-mono font-bold">
                    JLPT N5-N1
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tokyo Keigo & Daily Fluency • Izakaya, Shinkansen & Corporate pitch
                </p>
                <div className="flex items-center gap-2 mt-2 text-[11px] text-rose-300/80 font-mono">
                  <span>4 Sections</span>
                  <span>•</span>
                  <span>18.5 Hours</span>
                </div>
              </div>
            </div>

            {selectedLanguage === "japanese" && (
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-[0_0_8px_#f43f5e]">
                <Check size={12} strokeWidth={3} />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── Step 2: Available AI Assistant Voice Display Card ── */}
      <div className="w-full bg-[#111724] border border-slate-800/80 rounded-3xl p-5 md:p-6 shadow-lg shadow-black/40 flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -left-10 top-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Coach Profile & Voice Info */}
        <div className="flex items-center gap-4 relative z-10 flex-1">
          <div className="relative shrink-0">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-cyan-400/70 shadow-[0_0_20px_rgba(0,229,255,0.35)] bg-slate-800">
              <img
                src="/elena-coach.jpg"
                alt="Elena Vance"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#00e5ff] border-2 border-[#111724] shadow-[0_0_8px_#00e5ff]" />
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white tracking-tight">
                {isJa ? "Elena Vance (エレナ)" : "Elena Vance"}
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#0d2229] border border-cyan-500/30 text-[#00e5ff] text-[10px] font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
                AVAILABLE VOICE
              </span>
            </div>

            <p className="text-xs text-slate-300">
              {isJa
                ? "Tokyo Executive & Business Keigo Coach • Spoken Japanese"
                : "Oxford C2 Executive Voice Coach • Real-time Spontaneous Dialogue"}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[11px]">
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono">
                {voiceDisplayName}
              </span>
              <span className="text-slate-400">
                {isJa ? "Mora-timed • Pitch Accent" : "Oxford Accent • 0.94x Natural Cadence"}
              </span>
            </div>
          </div>
        </div>

        {/* Voice Actions: Test Voice & Start Session */}
        <div className="flex items-center gap-2.5 relative z-10 shrink-0">
          <button
            type="button"
            onClick={handlePreviewVoice}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
              isPlayingVoice
                ? "bg-[#00e5ff] text-slate-950 font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] animate-pulse"
                : "bg-[#182335] hover:bg-[#202e45] text-cyan-300 border border-cyan-500/30"
            }`}
          >
            <span>{isPlayingVoice ? "⏹️ Stop" : "🔊 Listen to Voice"}</span>
          </button>

          <button
            onClick={() => onStartCall()}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00d2ff] via-[#00c0ff] to-[#0099ff] text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            <PhoneCall size={14} className="fill-slate-950" />
            <span>Start Practice Call</span>
          </button>
        </div>
      </div>

      {/* ── Japanese Core Learning Modules & Topics (when Japanese is active) ── */}
      {selectedLanguage === "japanese" && (
        <JapaneseTopicModules
          onStartScenarioCall={onStartCall}
          ttsVoiceURI={ttsVoiceURI}
        />
      )}

      {/* ── Step 3: Active Study Plan & Learning Roadmap ── */}
      <div className="flex flex-col gap-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-[#00e5ff] flex items-center justify-center">
              <BookOpen size={17} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-space font-extrabold text-white">
                Study Plan: {course.trackLabel}
              </h3>
              <p className="text-xs text-slate-400">
                All 4 sections adjusted for {course.languageName} • Learning steps, examples & pronunciation
              </p>
            </div>
          </div>

          <button
            onClick={onNavigateToMastery}
            className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            <span>Explore 2D Constellation Map</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Section Accordions */}
        <div className="flex flex-col gap-3.5">
          {course.sections.map((section: RoadmapSection) => {
            const isExpanded = expandedSectionId === section.id;

            return (
              <div
                key={section.id}
                className={`bg-[#0d1424] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-cyan-500/40 shadow-lg shadow-black/40"
                    : "border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedSectionId(isExpanded ? "" : section.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="w-7 h-7 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-space font-bold text-xs flex items-center justify-center shrink-0">
                      {section.sectionNumber}
                    </span>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-white font-bold text-sm sm:text-base">
                          {section.title}
                        </span>
                        {section.titleJapanese && (
                          <span className="text-xs text-slate-400 font-medium">
                            ({section.titleJapanese})
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 text-[10px] font-mono font-bold border border-slate-700">
                          {section.levelBadge}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 truncate mt-0.5">
                        {section.goal}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <Clock size={12} />
                      <span>{section.totalEstimatedTime}</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </button>

                {/* Accordion Expanded Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="border-t border-slate-800/80 px-4 sm:px-6 pb-6 pt-4 flex flex-col gap-5 bg-[#090f1b]/50"
                    >
                      {/* Section Goal & Prerequisites Callout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-[#111928] border border-slate-800/80 rounded-xl p-3.5">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                            🎯 Section Goal
                          </span>
                          <p className="text-xs text-slate-200 leading-relaxed">
                            {section.goal}
                          </p>
                        </div>

                        <div className="bg-[#111928] border border-slate-800/80 rounded-xl p-3.5">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                            📋 Prerequisites
                          </span>
                          <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                            {section.prerequisites.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Learning Steps (Numbered List) */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                            Ordered Learning Steps ({section.learningSteps.length})
                          </span>
                          <span className="text-[11px] text-slate-400">
                            Est. {section.totalEstimatedTime}
                          </span>
                        </div>

                        <div className="space-y-3">
                          {section.learningSteps.map((step: RoadmapStep) => (
                            <div
                              key={step.stepNumber}
                              className="bg-[#101726] border border-slate-800/70 rounded-xl p-4 flex flex-col gap-2.5 hover:border-slate-700 transition-colors"
                            >
                              {/* Step Header */}
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-[#00e5ff] text-[11px] font-bold font-mono flex items-center justify-center">
                                    {step.stepNumber}
                                  </span>
                                  <h4 className="text-sm font-bold text-white">
                                    {step.title}
                                  </h4>
                                </div>
                                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                                  ⏱️ {step.estimatedTime}
                                </span>
                              </div>

                              {/* Target Content */}
                              <div className="bg-[#0a0f1a] border border-slate-800/60 rounded-lg p-3 flex flex-col gap-1.5">
                                {step.japaneseText && (
                                  <div className="text-sm font-semibold text-white tracking-wide">
                                    {step.japaneseText}
                                  </div>
                                )}
                                {step.romaji && (
                                  <div className="text-xs font-mono text-cyan-300/90 italic">
                                    {step.romaji}
                                  </div>
                                )}
                                <div className="text-xs text-slate-300 font-medium">
                                  Meaning: {step.englishMeaning}
                                </div>
                              </div>

                              {/* Example Sentence */}
                              {step.exampleSentence && (
                                <div className="text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5 space-y-1">
                                  {step.exampleSentence.japanese && (
                                    <div className="text-slate-100 font-medium">
                                      💬 {step.exampleSentence.japanese}
                                    </div>
                                  )}
                                  {step.exampleSentence.romaji && (
                                    <div className="text-slate-400 text-[11px] italic font-mono pl-5">
                                      {step.exampleSentence.romaji}
                                    </div>
                                  )}
                                  <div className="text-slate-300 text-[11px] pl-5">
                                    &ldquo;{step.exampleSentence.english}&rdquo;
                                  </div>
                                </div>
                              )}

                              {/* Pronunciation & Grammar Note */}
                              {step.notes && (
                                <div className="text-[11px] text-amber-300/90 bg-amber-950/20 border border-amber-500/20 rounded-lg p-2.5 flex items-start gap-2">
                                  <span>💡</span>
                                  <span className="leading-relaxed">{step.notes}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Practice Activities */}
                      <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                          Practice Activities & Roleplays
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {section.practiceActivities.map((act, i) => (
                            <div
                              key={i}
                              className="bg-[#111726] border border-slate-800/70 rounded-xl p-3 flex items-center justify-between gap-3"
                            >
                              <div className="flex flex-col min-w-0">
                                <span className="text-xs font-bold text-white truncate">
                                  {act.title}
                                </span>
                                <span className="text-[11px] text-slate-400 truncate">
                                  {act.description}
                                </span>
                              </div>

                              {act.scenarioId && (
                                <button
                                  onClick={() => onStartCall(act.scenarioId)}
                                  className="px-3 py-1.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-[#00e5ff] text-xs font-bold border border-cyan-500/40 flex items-center gap-1 shrink-0 transition-colors"
                                >
                                  <span>Start</span>
                                  <Play size={10} className="fill-current" />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
