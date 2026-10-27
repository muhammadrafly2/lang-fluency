"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, Flame, Target, Edit3, BookOpen, ChevronDown, ChevronUp, 
  CheckCircle2, Lock, Play, Volume2, PhoneCall, Sparkles, 
  ArrowRight, Shield, Award, Check, Search, RotateCcw,
  Smartphone, Monitor, User, MessageSquare, Keyboard
} from "lucide-react";
import { SupportedLanguageOption } from "./LanguageSelectionSheet";
import { CourseRoadmap, RoadmapSection, Scenario } from "@/types";
import { getCourseRoadmap } from "@/data/learningRoadmaps";
import { JapaneseTopicModules } from "./JapaneseTopicModules";
import { LanguageEssentialsModules } from "./LanguageEssentialsModules";
import { CourseChaptersAccordion } from "./CourseChaptersAccordion";
import { speakElena, selectElenaVoice } from "@/utils/speechEngine";
import { getCoachPersona, CoachPersona } from "@/utils/coachPersonas";
import { PracticeUnit, getPracticeUnitsForLanguage } from "@/data/interactivePracticeData";

export interface CleanHomeDashboardProps {
  currentLanguage: SupportedLanguageOption;
  onOpenLanguageSheet: () => void;
  onStartCall: (scenarioId?: string) => void;
  onOpenSettings: () => void;
  onNavigateTab: (tab: "today" | "talk" | "quests" | "mastery") => void;
  streakDays: number;
  userXp: number;
  userGems: number;
  ttsVoices: SpeechSynthesisVoice[];
  ttsVoiceURI?: string;
  onOpenCurriculum?: () => void;
  onOpenPracticeUnit?: (unit: PracticeUnit) => void;
}

export function CleanHomeDashboard({
  currentLanguage,
  onOpenLanguageSheet,
  onStartCall,
  onOpenSettings,
  onNavigateTab,
  streakDays,
  userXp,
  userGems,
  ttsVoices,
  ttsVoiceURI,
  onOpenCurriculum,
  onOpenPracticeUnit,
}: CleanHomeDashboardProps) {
  // Level filter pill: "all" | "beginner" | "intermediate" | "advanced" | "expert"
  const [activeLevel, setActiveLevel] = useState<string>("beginner");

  // Expanded chapter IDs
  const [expandedChapterId, setExpandedChapterId] = useState<string>("ch-1");

  // Device display mode: "mobile" (phone preview frame) vs "desktop" (fluid widescreen layout)
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  // Speech preview
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const cancelPreviewRef = useRef<(() => void) | null>(null);

  // Dynamic course roadmap by selected language
  const course: CourseRoadmap = getCourseRoadmap(currentLanguage.code);
  const isJa = currentLanguage.code === "japanese";

  // Active AI Voice detection per selected language
  const activeVoice = selectElenaVoice(ttsVoices, {
    language: currentLanguage.code,
    isJapanese: isJa,
    preferredURI: ttsVoiceURI,
  });

  const defaultVoiceName =
    currentLanguage.code === "japanese" ? "Kyoko" :
    currentLanguage.code === "french" ? "Amélie" :
    currentLanguage.code === "korean" ? "Yuna" :
    currentLanguage.code === "german" ? "Anna" :
    currentLanguage.code === "spanish" ? "Mónica" : "Samantha";

  const voiceDisplayName = activeVoice
    ? activeVoice.name.replace(/Online \(Natural\)/gi, "Natural").replace(/Google /gi, "")
    : defaultVoiceName;

  // Resolve Coach Persona: American is always Elena Vance; others dynamically adapt to Voice Engine
  const persona: CoachPersona = getCoachPersona(currentLanguage.code, voiceDisplayName);

  const handlePreviewVoice = () => {
    if (cancelPreviewRef.current) {
      cancelPreviewRef.current();
      cancelPreviewRef.current = null;
      setIsPlayingVoice(false);
      return;
    }

    setIsPlayingVoice(true);
    const cancel = speakElena(persona.sampleText, {
      voiceURI: ttsVoiceURI,
      targetLanguage: currentLanguage.code,
      rate: isJa ? 0.96 : 0.94,
      pitch: 1.02,
      onEnd: () => setIsPlayingVoice(false),
      onError: () => setIsPlayingVoice(false),
    });
    cancelPreviewRef.current = cancel;
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* ── Top Bar Controls: Viewport Mode Switcher & Quick Alert ── */}
      <div className="w-full max-w-5xl flex items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-700 tracking-wide">
            Interactive Learning Canvas
          </span>
        </div>

        {/* Viewport resolution toggle: Mobile Preview vs Desktop View */}
        <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-full shadow-sm">
          <button
            type="button"
            onClick={() => setViewMode("desktop")}
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "desktop"
                ? "bg-[#0f4a3c] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Monitor size={13} />
            <span className="hidden sm:inline">Desktop View</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("mobile")}
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "mobile"
                ? "bg-[#0f4a3c] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Smartphone size={13} />
            <span>Mobile App View</span>
          </button>
        </div>
      </div>

      {/* ── Main Container: Adapts based on ViewMode ── */}
      <div
        className={`w-full transition-all duration-300 ${
          viewMode === "mobile"
            ? "max-w-[420px] rounded-[44px] shadow-2xl border-[10px] border-slate-900 bg-[#f8fafc] overflow-hidden my-4 ring-1 ring-slate-200"
            : "max-w-5xl"
        }`}
      >
        {/* Mobile Status Bar (9:41, wifi, battery, dynamic notch) */}
        {viewMode === "mobile" && (
          <div className="w-full bg-[#f8fafc] pt-3 px-7 pb-2 flex items-center justify-between text-xs font-semibold text-slate-800 border-b border-slate-100 select-none">
            <span>9:41</span>
            <div className="w-20 h-4 rounded-full bg-slate-900/10 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-slate-900/30" />
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>
        )}

        <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 bg-[#f8fafc] text-slate-900">
          {/* ── Screen 2 Header: Language Selector Pill, Streak & Notification Bell ── */}
          <div className="w-full flex items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
            {/* Language Flag Selector Button (Click opens LanguageSelectionSheet) */}
            <button
              type="button"
              onClick={onOpenLanguageSheet}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer group"
              title="Click to select language"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm border border-slate-200 text-lg">
                <span>{currentLanguage.flag}</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-900 group-hover:text-[#0f4a3c] transition-colors flex items-center gap-1">
                  <span>{currentLanguage.name}</span>
                  <ChevronDown size={14} className="text-slate-400 group-hover:text-[#0f4a3c]" />
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  Tap to change
                </span>
              </div>
            </button>

            {/* Right side stats: Streak 🔥 & Bell 🔔 */}
            <div className="flex items-center gap-2">
              {/* Streak Counter Pill matching image */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 shadow-sm">
                <Flame size={15} className="text-orange-500 fill-orange-500" />
                <span className="text-xs font-bold font-mono">{streakDays}</span>
              </div>

              {/* Notification Bell */}
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-colors relative"
                title="Notifications"
              >
                <Bell size={16} />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500" />
              </button>
            </div>
          </div>

          {/* ── Active Course Title ── */}
          <div className="flex flex-col gap-1 px-1">
            <h1 className="text-xl sm:text-2xl font-space font-extrabold text-slate-900 tracking-tight">
              {currentLanguage.courseTitle}
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Curriculum adjusted for {currentLanguage.name} • Live verbal practice & active feedback
            </p>
          </div>

          {/* ── 11 Topic Areas Curriculum Explorer Banner ── */}
          <div className="w-full bg-gradient-to-r from-[#0f4a3c] via-[#135d4b] to-emerald-800 rounded-3xl p-4 sm:p-5 text-white shadow-md shadow-emerald-950/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-emerald-700/50">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl shrink-0 border border-white/20 shadow-inner">
                📚
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                    Mastery Syllabus
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200 text-[10px] font-bold border border-emerald-400/30">
                    11 Areas • 22 Scenarios
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  Explore 11 Native Topic Areas & Realistic Dialogues
                </h3>
                <p className="text-[11px] sm:text-xs text-emerald-100/80 mt-0.5 line-clamp-1">
                  Key chunks, keigo/registers, natural fillers, common mistakes & role-play prompts
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 flex-wrap">
              {onOpenPracticeUnit && (
                <button
                  type="button"
                  onClick={() => {
                    const units = getPracticeUnitsForLanguage(currentLanguage.code);
                    if (units.length > 0) onOpenPracticeUnit(units[0]);
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Keyboard size={14} />
                  <span>Type & Speak</span>
                </button>
              )}
              {onOpenCurriculum && (
                <button
                  type="button"
                  onClick={onOpenCurriculum}
                  className="flex-1 sm:flex-none px-4 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white hover:bg-emerald-50 text-[#0f4a3c] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <BookOpen size={14} />
                  <span>Curriculum</span>
                </button>
              )}
            </div>
          </div>

          {/* ── Grid: Today's Goal & Course Progress (Responsive: 1 col on mobile, 2 col on desktop) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: Today's Goal matching image */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Target size={16} />
                  </div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Today&apos;s Goal
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onOpenSettings}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <Edit3 size={14} />
                </button>
              </div>

              <div>
                <span className="text-2xl font-space font-extrabold text-slate-900">
                  6/8 Tasks
                </span>
              </div>

              {/* Segmented Pill Bars matching image (mini vertical green bars) */}
              <div className="flex items-center gap-1.5 w-full pt-1">
                {Array.from({ length: 20 }).map((_, i) => {
                  const isFilled = i < 15; // 75% completed
                  return (
                    <div
                      key={i}
                      className={`h-5 flex-1 rounded-full transition-all ${
                        isFilled
                          ? "bg-emerald-500 shadow-sm"
                          : "bg-emerald-100/70"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-1 border-t border-slate-100">
                <span>Daily Speaking Target: 15 mins</span>
                <span className="text-emerald-700 font-bold">75% complete</span>
              </div>
            </div>

            {/* Card 2: Course Progress matching image */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Course Progress
                </span>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <span>Total</span>
                  <span className="text-slate-900 font-bold font-space">12/20</span>
                </div>
              </div>

              {/* Multi-segmented Colored Progress Bar matching image */}
              <div className="w-full flex h-3.5 rounded-full overflow-hidden bg-slate-100 gap-0.5 p-0.5">
                <div className="bg-emerald-700 rounded-l-full" style={{ width: "45%" }} title="Beginner (45%)" />
                <div className="bg-emerald-300" style={{ width: "20%" }} title="Intermediate (20%)" />
                <div className="bg-rose-400" style={{ width: "25%" }} title="Advanced (25%)" />
                <div className="bg-amber-400 rounded-r-full" style={{ width: "10%" }} title="Expert (15%)" />
              </div>

              {/* Legend with Colored Dots matching image */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-700 shrink-0" />
                  <span>Beginner <span className="text-slate-400 font-normal">(45%)</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 shrink-0" />
                  <span>Intermediate <span className="text-slate-400 font-normal">(20%)</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                  <span>Advanced <span className="text-slate-400 font-normal">(25%)</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Expert <span className="text-slate-400 font-normal">(15%)</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Level Filter Pills matching image: [Beginner] [Intermediate] [Advanced] [Expert] ── */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "beginner", label: "Beginner" },
              { id: "intermediate", label: "Intermediate" },
              { id: "advanced", label: "Advanced" },
              { id: "expert", label: "Expert" },
            ].map((lvl) => {
              const isActive = activeLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setActiveLevel(lvl.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0f4a3c] text-white shadow-md shadow-[#0f4a3c]/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {lvl.label}
                </button>
              );
            })}
          </div>

          {/* ── Available AI Assistant Voice Display Card (Elena Vance) ── */}
          <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 shadow-md bg-slate-100">
                  <img src={persona.avatarUrl} alt={persona.name} className="w-full h-full object-cover" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {persona.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
                    {persona.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {persona.role}
                </p>
                <span className="text-[11px] font-mono text-slate-400 mt-1">
                  Voice Engine: {voiceDisplayName}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePreviewVoice}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isPlayingVoice
                    ? "bg-emerald-600 text-white font-bold animate-pulse"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                }`}
              >
                <span>{isPlayingVoice ? "⏹️ Stop" : "🔊 Listen to Voice"}</span>
              </button>

              <button
                type="button"
                onClick={() => onStartCall()}
                className="px-5 py-2.5 rounded-full bg-[#0f4a3c] hover:bg-[#0a352a] text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-[#0f4a3c]/20 transition-all cursor-pointer"
              >
                <PhoneCall size={14} />
                <span>Start Practice Call</span>
              </button>
            </div>
          </div>

          {/* ── Interactive Core Learning Modules (adjusted per language) ── */}
          {isJa ? (
            <div className="pt-2">
              <JapaneseTopicModules
                onStartScenarioCall={onStartCall}
                ttsVoiceURI={ttsVoiceURI}
              />
            </div>
          ) : (
            <div className="pt-2">
              <LanguageEssentialsModules
                languageCode={currentLanguage.code}
                languageName={currentLanguage.name}
                onStartScenarioCall={onStartCall}
                ttsVoiceURI={ttsVoiceURI}
              />
            </div>
          )}

          {/* ── Dynamic Course Chapters & Lessons matching mockup ── */}
          <CourseChaptersAccordion
            sections={course.sections}
            languageCode={currentLanguage.code}
            onStartCall={onStartCall}
            onOpenPracticeUnit={onOpenPracticeUnit}
            ttsVoiceURI={ttsVoiceURI}
          />
        </div>

        {/* ── Bottom Navigation Dock matching image: Home, Course, Chatbot, Profile (inside mobile phone frame) ── */}
        {viewMode === "mobile" && (
          <div className="w-full bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-around shadow-lg">
            <button
              type="button"
              onClick={() => onNavigateTab("today")}
              className="flex flex-col items-center gap-1 text-[#0f4a3c]"
            >
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-xl">🏠</span>
            </div>
            <span className="text-[10px] font-bold">Home</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab("mastery")}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <BookOpen size={18} />
            </div>
            <span className="text-[10px] font-semibold">Course</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab("talk")}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <MessageSquare size={18} />
            </div>
            <span className="text-[10px] font-semibold">Chatbot</span>
          </button>

          <button
            type="button"
            onClick={onOpenSettings}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <User size={18} />
            </div>
            <span className="text-[10px] font-semibold">Profile</span>
          </button>
        </div>
        )}
      </div>
    </div>
  );
}
