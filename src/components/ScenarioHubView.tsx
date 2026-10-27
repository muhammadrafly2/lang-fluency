"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, Clock, Mic, Target, Star, FileText, 
  ArrowRight, RotateCcw, CheckCircle2, Shield, Lock, 
  SlidersHorizontal, Users, Palette, PlusCircle, Activity
} from "lucide-react";
import { Scenario } from "@/types";
import { getCoachPersona } from "@/utils/coachPersonas";

interface ScenarioHubViewProps {
  scenarios: Scenario[];
  onSelectScenario: (scenario: Scenario) => void;
  onOpenWarmup: () => void;
  onOpenStudio: () => void;
  onStartFreeCall: () => void;
  targetLanguage?: string;
  ttsVoiceURI?: string;
}

const WAVEFORM_BARS = [
  { minH: 16, maxH: 26, isWhite: false },
  { minH: 22, maxH: 34, isWhite: false },
  { minH: 28, maxH: 42, isWhite: false },
  { minH: 18, maxH: 28, isWhite: false },
  { minH: 24, maxH: 36, isWhite: false },
  { minH: 12, maxH: 20, isWhite: true },
  { minH: 22, maxH: 32, isWhite: false },
  { minH: 14, maxH: 22, isWhite: false },
  { minH: 20, maxH: 30, isWhite: true },
  { minH: 28, maxH: 42, isWhite: false },
  { minH: 18, maxH: 28, isWhite: false },
  { minH: 24, maxH: 36, isWhite: false },
  { minH: 16, maxH: 24, isWhite: false },
];

export function ScenarioHubView({
  scenarios,
  onSelectScenario,
  onOpenWarmup,
  onOpenStudio,
  onStartFreeCall,
  targetLanguage = "english",
  ttsVoiceURI,
}: ScenarioHubViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const coachPersona = getCoachPersona(targetLanguage, ttsVoiceURI);

  const categories = [
    { id: "All", label: "All" },
    { id: "Japanese", label: "Japanese (日本語)", icon: "🇯🇵" },
    { id: "Career & Tech", label: "Career & Tech", icon: "💼" },
    { id: "Daily Life", label: "Daily Life", icon: "☕" },
    { id: "Travel", label: "Travel", icon: "✈️" },
    { id: "Debate & Pitch", label: "Debate & Pitch", icon: "⚡" },
  ];

  const isJapaneseScenario = (s: Scenario) =>
    s.id.startsWith("tokyo-") ||
    s.id.startsWith("izakaya-") ||
    s.id.startsWith("shinkansen-") ||
    s.title.includes("Japanese") ||
    s.title.includes("日本語") ||
    s.starterPrompt.includes("Japanese");

  const filteredScenarios = scenarios.filter((s) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Japanese") return isJapaneseScenario(s);
    return s.category === selectedCategory;
  });

  const getScenarioImage = (id: string) => {
    if (id === "salary-negotiation") return "/salary-negotiation.jpg";
    if (id === "coffee-twist") return "/coffee-twist.jpg";
    if (id === "startup-pitch" || id === "tokyo-pitch-negotiation") return "/startup-pitch.jpg";
    if (id === "tokyo-tech-standup") return "/tech-standup.png";
    if (id === "izakaya-order") return "/coffee-twist.jpg";
    if (id === "shinkansen-trouble") return "/small-talk.png";
    return "/coffee-twist.jpg";
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-slide-up-fade">
      {/* ── Elena Vance Live AI Voice Coach Hero Card ── */}
      <div className="w-full bg-white border border-[#e2e8f0] rounded-3xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 relative overflow-hidden">
        {/* Subtle background glow on desktop */}
        <div className="hidden md:block absolute -left-10 top-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Left: Avatar, Info, and Waveform */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 relative z-10 flex-1">
          <div className="flex items-center justify-between md:justify-start gap-3.5">
            {/* Avatar with emerald active status dot */}
            <div className="relative shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-[#e2e8f0] bg-slate-100">
                <img
                  src={coachPersona.avatarUrl}
                  alt={coachPersona.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#10b981] border-2 border-white shadow-sm" />
            </div>

            {/* Name and subtitle */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm md:text-base font-bold text-[#0f172a] tracking-tight">{coachPersona.name}</h2>
                <svg className="w-3.5 h-3.5 text-[#10b981] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="hidden md:inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200 ml-1">
                  {coachPersona.badge}
                </span>
              </div>
              <span className="text-[11px] md:text-xs text-[#64748b]">
                {coachPersona.role}
              </span>
            </div>
          </div>

          {/* LIVE Pill (visible on mobile here) */}
          <span className="md:hidden px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold flex items-center gap-1.5 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            LIVE
          </span>

          {/* Waveform Visualizer */}
          <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-2xl py-3 px-4 flex items-center justify-around h-14 md:h-16 md:flex-1 md:max-w-md">
            {WAVEFORM_BARS.map((bar, i) => (
              <motion.span
                key={i}
                animate={{ height: [bar.minH, bar.maxH, bar.minH] }}
                transition={{
                  duration: 1.1 + (i % 4) * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.07,
                }}
                className={`w-1 md:w-1.5 rounded-full ${
                  bar.isWhite
                    ? "bg-[#0f4a3c] shadow-sm"
                    : "bg-[#10b981]"
                }`}
                style={{ height: `${bar.minH}px` }}
              />
            ))}
          </div>
        </div>

        {/* Right: Actions on Desktop, Full Width on Mobile */}
        <div className="flex items-center gap-3 relative z-10 w-full md:w-auto shrink-0">
          <span className="hidden md:flex px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold items-center gap-1.5 tracking-wider shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            LIVE
          </span>

          <button
            onClick={onStartFreeCall}
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#0f4a3c] text-white font-bold text-xs md:text-sm tracking-wide flex items-center justify-center gap-2 shadow-md hover:bg-[#0d3f33] active:scale-[0.99] transition-all whitespace-nowrap"
          >
            <PhoneCall size={16} className="fill-white" />
            <span>Tap to Start Free Call</span>
          </button>
        </div>
      </div>

      {/* ── Category Filter Chips & Studio Shortcut ── */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-0.5">
        <div className="flex items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all flex items-center gap-1.5 font-medium ${
                  isSelected
                    ? "bg-[#0f4a3c] text-white font-bold shadow-sm"
                    : "bg-white text-[#64748b] border border-[#e2e8f0] hover:bg-[#f8fafc]"
                }`}
              >
                {cat.icon && <span>{cat.icon}</span>}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={onOpenStudio}
          className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-[#f8fafc] border border-[#e2e8f0] text-xs font-semibold text-emerald-700 whitespace-nowrap transition-colors"
        >
          <PlusCircle size={14} />
          <span>Custom Studio</span>
        </button>
      </div>

      {/* ── 30s Articulation Warmup Card ── */}
      <div className="w-full bg-white border border-[#e2e8f0] rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 flex-1">
          <div className="flex items-center justify-between md:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#10b981] flex items-center justify-center shrink-0 border border-emerald-100">
              <Activity size={16} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#0f172a] font-bold text-sm leading-tight">
                30s Articulation Warmup
              </h3>
              <span className="text-amber-600 text-[9px] font-bold tracking-wider uppercase">
                DAILY VOCAL CALIBRATION
              </span>
            </div>
            <div className="md:hidden px-2.5 py-1 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#64748b] text-xs font-mono flex items-center gap-1">
              <Clock size={12} className="text-[#94a3b8]" />
              <span>00:30</span>
            </div>
          </div>

          {/* Quote Box */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3 text-[#64748b] text-xs leading-relaxed flex-1">
            &ldquo;Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?&rdquo;
          </div>
        </div>

        {/* Footer on mobile / Right block on desktop */}
        <div className="flex items-center justify-between md:justify-end gap-4 pt-0.5 md:pt-0 shrink-0">
          <div className="hidden md:flex px-2.5 py-1 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#64748b] text-xs font-mono items-center gap-1">
            <Clock size={12} className="text-[#94a3b8]" />
            <span>00:30</span>
          </div>

          <div>
            <span className="text-[#94a3b8] text-[10px] block leading-none mb-1">Last Score</span>
            <div className="flex items-baseline">
              <span className="text-[#10b981] font-bold text-sm">96%</span>
              <span className="text-[#64748b] text-xs ml-1.5 whitespace-nowrap">Native Cadence</span>
            </div>
          </div>

          <button
            onClick={onOpenWarmup}
            className="px-4 py-2 rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] text-xs font-semibold flex items-center gap-1.5 border border-[#e2e8f0] transition-all shadow-sm active:scale-95 whitespace-nowrap"
          >
            <Mic size={13} className="text-[#10b981]" />
            <span>Test Tone</span>
          </button>
        </div>
      </div>

      {/* ── Daily Challenges Section Header ── */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <Target size={18} className="text-[#10b981]" />
          <h2 className="text-[#0f172a] font-bold text-base md:text-lg tracking-tight">
            Daily Challenges
          </h2>
        </div>
        <span className="text-[#64748b] text-xs font-medium">
          Resets in 7h 42m
        </span>
      </div>

      {/* ── Daily Challenges Grid: 1 Col on Mobile, 3 Cols on Desktop ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredScenarios.map((scen, idx) => {
          const isMaster = scen.difficulty === "Master";
          const isHard = scen.difficulty === "Hard";
          const isEasy = scen.difficulty === "Easy";
          const isMed = scen.difficulty === "Medium";

          const xp = scen.xpReward ? `+${scen.xpReward} XP` : isMaster ? "+200 XP" : isHard ? "+120 XP" : isEasy ? "+40 XP" : "+50 XP";
          const bannerImg = scen.imageUrl || getScenarioImage(scen.id);
          const durationMins = scen.durationMinutes || 3;

          return (
            <div
              key={scen.id}
              className="w-full bg-white border border-[#e2e8f0] rounded-2xl p-4 flex flex-col justify-between gap-3 shadow-sm hover:border-[#10b981]/40 hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-3">
                {/* Badges and Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isMaster
                          ? "bg-blue-100 text-blue-700"
                          : isHard
                          ? "bg-red-100 text-red-700"
                          : isEasy
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-[#f1f5f9] text-[#64748b] border border-[#e2e8f0]"
                      }`}
                    >
                      {scen.difficulty}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200 flex items-center gap-1">
                      <span>✨</span>
                      <span>{xp}</span>
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-xs text-amber-400">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <Star
                      size={13}
                      className={
                        isEasy
                          ? "text-[#e2e8f0]"
                          : "fill-amber-400 text-amber-400"
                      }
                    />
                    <Star
                      size={13}
                      className={
                        isMaster || isMed
                          ? "fill-amber-400 text-amber-400"
                          : "text-[#e2e8f0]"
                      }
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#0f172a] font-bold text-sm flex items-center gap-1.5">
                    {scen.id.startsWith("izakaya") || scen.id.startsWith("shinkansen") || scen.id.startsWith("tokyo") ? (
                      <span className="text-xs">🇯🇵</span>
                    ) : null}
                    <span>{scen.title}</span>
                  </h3>
                  <p className="text-[#64748b] text-xs leading-relaxed line-clamp-2 md:line-clamp-3">
                    {scen.description}
                  </p>
                </div>

                {/* Image Banner */}
                <div className="relative h-28 md:h-36 w-full rounded-xl overflow-hidden bg-[#f1f5f9]">
                  <img
                    src={bannerImg}
                    alt={scen.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-medium border border-white/10 flex items-center gap-1">
                      <span>{scen.category === "Travel" ? "🚅" : scen.category === "Career & Tech" ? "💼" : scen.category === "Debate & Pitch" ? "🚀" : "☕"}</span>
                      <span className="truncate max-w-[120px]">{scen.category}</span>
                    </span>
                    <span className="px-2 py-1 rounded-full bg-black/50 backdrop-blur-md text-slate-200 text-[10px] font-mono border border-white/10">
                      Avg {durationMins}m
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between pt-1 border-t border-[#e2e8f0]">
                <div className="flex items-center gap-1.5 text-[#64748b] text-[11px] truncate mr-2">
                  <FileText size={13} className="shrink-0 text-[#10b981]" />
                  <span className="truncate">
                    {scen.keySkills?.slice(0, 2).join(" • ") || scen.subtitle}
                  </span>
                </div>

                <button
                  onClick={() => onSelectScenario(scen)}
                  className={`px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1 transition-all active:scale-95 shrink-0 ${
                    isMaster
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                      : "bg-[#0f4a3c] hover:bg-[#0d3f33] text-white shadow-sm"
                  }`}
                >
                  <span>Start Drill</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Custom Scenario Builder Card ── */}
      <div className="w-full bg-white border border-[#e2e8f0] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 shadow-sm">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-emerald-50 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
            <SlidersHorizontal size={18} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#0f172a] font-bold text-sm md:text-base">
              Custom Scenario Builder
            </h3>
            <p className="text-[#64748b] text-xs leading-relaxed mt-0.5 max-w-xl">
              Craft your own roleplay sandbox: specify AI persona, accents, situational tension, and vocabulary criteria.
            </p>
          </div>
        </div>

        {/* Dialect and Persona pills */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex-1 md:flex-initial py-2 px-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-[#64748b] text-xs font-medium flex items-center justify-center gap-2">
            <Users size={14} className="text-[#10b981]" />
            <span>32 Dialects</span>
          </div>
          <div className="flex-1 md:flex-initial py-2 px-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-[#64748b] text-xs font-medium flex items-center justify-center gap-2">
            <Palette size={14} className="text-amber-500" />
            <span>Custom Persona</span>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={onOpenStudio}
          className="w-full md:w-auto px-6 py-3 rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#e2e8f0] transition-all shadow-sm active:scale-98 whitespace-nowrap shrink-0"
        >
          <PlusCircle size={15} />
          <span>+ Create Custom Scenario</span>
        </button>
      </div>
    </div>
  );
}
