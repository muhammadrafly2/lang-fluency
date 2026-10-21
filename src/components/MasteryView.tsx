"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, CheckCircle2, Lock, Play, X, BookOpen, Volume2, 
  Clock, Target, ListOrdered, CheckSquare, Dumbbell, Compass, 
  ChevronDown, ChevronUp, Languages
} from "lucide-react";
import { ConstellationNode, RoadmapSection } from "@/types";
import { JAPANESE_COURSE_ROADMAP, ENGLISH_COURSE_ROADMAP } from "@/data/learningRoadmaps";
import { JapaneseTopicModules } from "./JapaneseTopicModules";

interface MasteryViewProps {
  onLaunchNodeScenario: (nodeTitle: string) => void;
  initialLanguage?: "english" | "japanese";
  onLanguageChange?: (lang: "english" | "japanese") => void;
}

export function MasteryView({ 
  onLaunchNodeScenario, 
  initialLanguage = "japanese",
  onLanguageChange 
}: MasteryViewProps) {
  const [activeLang, setActiveLang] = useState<"english" | "japanese">(initialLanguage);
  const [selectedNode, setSelectedNode] = useState<ConstellationNode | null>(null);
  const [expandedSectionId, setExpandedSectionId] = useState<string>(
    initialLanguage === "japanese" ? "jp-sec-1" : "en-sec-1"
  );

  useEffect(() => {
    if (initialLanguage) {
      setActiveLang(initialLanguage);
      setExpandedSectionId(initialLanguage === "japanese" ? "jp-sec-1" : "en-sec-1");
    }
  }, [initialLanguage]);

  const currentCourse = activeLang === "japanese" ? JAPANESE_COURSE_ROADMAP : ENGLISH_COURSE_ROADMAP;
  const constellationNodes = currentCourse.constellationNodes;

  return (
    <div className="flex flex-col gap-6 w-full animate-slide-up-fade">
      {/* ── Language Switcher Banner & Header ── */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        {/* Radial ambient glow */}
        <div className="absolute top-0 right-1/4 w-80 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 font-mono text-[10px] font-bold border border-cyan-400/30 flex items-center gap-1.5">
              <Compass size={11} />
              {currentCourse.trackLabel}
            </span>
            <span className="text-xs text-slate-400">Mastery Roadmap</span>
          </div>

          <h2 className="text-xl md:text-2xl font-space font-extrabold text-white">
            {activeLang === "japanese" ? "日本語 スキルツリーと学習ロードマップ" : "English Fluency Roadmap & Skill Tree"}
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            {activeLang === "japanese"
              ? "基礎の日常会話からアジャイル開発、高難度の経営陣ピッチまで段階的に習得するステップ・バイ・ステップの学習パス。"
              : "Step-by-step spoken proficiency progression from spontaneous banter to executive C2 keynote rhetoric."}
          </p>
        </div>

        {/* Dual Language Switcher Toggle */}
        <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full md:w-auto">
          <div className="p-1 rounded-2xl bg-[#09111e] border border-slate-800 flex items-center gap-1 w-full sm:w-auto shadow-inner">
            <button
              onClick={() => {
                setActiveLang("english");
                setExpandedSectionId("en-sec-1");
                onLanguageChange?.("english");
              }}
              className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeLang === "english"
                  ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🇺🇸</span>
              <span>English (CEFR)</span>
            </button>
            <button
              onClick={() => {
                setActiveLang("japanese");
                setExpandedSectionId("jp-sec-1");
                onLanguageChange?.("japanese");
              }}
              className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeLang === "japanese"
                  ? "bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🇯🇵</span>
              <span>Japanese (日本語)</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="text-[9px] text-slate-400 uppercase font-mono block">Estimated</span>
              <span className="text-xs font-space font-extrabold text-cyan-300">
                {currentCourse.totalEstimatedHours}
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="text-[9px] text-slate-400 uppercase font-mono block">Sections</span>
              <span className="text-xs font-space font-extrabold text-emerald-300">
                4 Levels
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Interactive Visual Constellation Map Canvas ── */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden min-h-[360px] flex items-center justify-center">
        {/* Holographic deep starfield background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#070b14] to-[#070b14] pointer-events-none" />

        {/* Constellation Connecting SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="18%"
            y1="65%"
            x2="48%"
            y2="40%"
            stroke="#00e5ff"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70 animate-pulse"
          />
          <line
            x1="48%"
            y1="40%"
            x2="68%"
            y2="55%"
            stroke="#00e5ff"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-50"
          />
          <line
            x1="68%"
            y1="55%"
            x2="85%"
            y2="25%"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Nodes placed dynamically across the constellation */}
        <div className="absolute inset-0 p-8">
          {constellationNodes.map((node) => {
            const isCompleted = node.status === "completed";
            const isActive = node.status === "active";

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group flex flex-col items-center"
              >
                {/* Node Orb with Pulsing Glow */}
                <div
                  className={`w-14 h-14 rounded-3xl flex items-center justify-center transition-all duration-300 relative ${
                    isCompleted
                      ? "bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 shadow-[0_0_20px_#10b981]"
                      : isActive
                      ? "bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 shadow-[0_0_25px_#00e5ff] scale-110"
                      : "bg-white/5 border border-white/10 text-slate-500"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 size={24} />
                  ) : isActive ? (
                    <Sparkles size={24} className="animate-spin" />
                  ) : (
                    <Lock size={20} />
                  )}

                  {/* Level Pill */}
                  <span className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-slate-950 border border-white/20 text-[9px] font-mono font-bold text-slate-200">
                    Lvl {node.level}
                  </span>
                </div>

                {/* Node Label Tooltip */}
                <div className="mt-3 px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-center whitespace-nowrap group-hover:scale-105 transition-transform shadow-xl">
                  <span className="text-[11px] font-space font-bold text-white block">
                    {node.title}
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400">
                    {node.cefr} • {node.status.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Japanese Core Learning Modules & Topics (when Japanese is active) ── */}
      {activeLang === "japanese" && (
        <JapaneseTopicModules
          onStartScenarioCall={(scenarioId) => onLaunchNodeScenario(scenarioId || "Daily Banter")}
        />
      )}

      {/* ── SECTION-BY-SECTION LEARNING ROADMAPS ── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <ListOrdered size={20} className="text-[#00e5ff]" />
            <h3 className="text-lg font-space font-extrabold text-white">
              {activeLang === "japanese" ? "セクション別 詳細学習ロードマップ" : "Section-by-Section Learning Roadmaps"}
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            {currentCourse.sections.length} Comprehensive Milestones
          </span>
        </div>

        {/* Roadmap Sections Cards */}
        {currentCourse.sections.map((section: RoadmapSection) => {
          const isExpanded = expandedSectionId === section.id;

          return (
            <div
              key={section.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "bg-[#0c1527]/95 border-cyan-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                  : "bg-[#0b1120]/80 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {/* Section Header Accordion Toggle */}
              <div
                onClick={() => setExpandedSectionId(isExpanded ? "" : section.id)}
                className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-[#00e5ff] flex items-center justify-center font-space font-extrabold text-base shrink-0">
                    {section.sectionNumber}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono font-bold">
                        {section.levelBadge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Clock size={11} />
                        {section.totalEstimatedTime}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mt-1 truncate">
                      {section.title} {section.titleJapanese ? `(${section.titleJapanese})` : ""}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">
                    {isExpanded ? "Collapse" : "View Roadmap"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </div>

              {/* Collapsible Detailed Content */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 flex flex-col gap-6 border-t border-white/5 pt-5 animate-slide-up-fade">
                  
                  {/* 1. Section Goal */}
                  <div className="p-4 rounded-2xl bg-[#0f1d33] border border-cyan-500/20 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-[#00e5ff]">
                      <Target size={16} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        1. Section Goal
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed pl-6">
                      {section.goal}
                    </p>
                  </div>

                  {/* 2. Prerequisites */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckSquare size={16} className="text-emerald-400" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        2. Prerequisites
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 pl-6">
                      {section.prerequisites.map((req, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Learning Steps (Ordered Sequence: Beginner → Advanced) */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-300">
                        <ListOrdered size={16} className="text-cyan-400" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider">
                          3. Learning Steps (Ordered Sequence: Beginner → Advanced)
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400">
                        {section.learningSteps.length} Sequential Steps
                      </span>
                    </div>

                    <div className="flex flex-col gap-3.5">
                      {section.learningSteps.map((step) => (
                        <div
                          key={step.stepNumber}
                          className="p-4 rounded-2xl bg-[#111c30] border border-slate-800/90 flex flex-col gap-3 hover:border-cyan-500/30 transition-colors"
                        >
                          {/* Step Header */}
                          <div className="flex items-center justify-between pb-2 border-b border-white/5">
                            <div className="flex items-center gap-2.5">
                              <span className="w-6 h-6 rounded-lg bg-cyan-400/20 text-[#00e5ff] font-space font-bold text-xs flex items-center justify-center">
                                {step.stepNumber}
                              </span>
                              <span className="text-sm font-bold text-white">
                                {step.title}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">
                                • {step.topic}
                              </span>
                            </div>

                            <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 flex items-center gap-1">
                              <Clock size={11} />
                              {step.estimatedTime}
                            </span>
                          </div>

                          {/* Japanese Text (Kanji/Kana), Romaji, and English Meaning */}
                          {step.japaneseText && (
                            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1.5">
                              <div className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                                Japanese Expression & Vocabulary
                              </div>
                              <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                                {step.japaneseText}
                              </div>
                              <div className="text-xs font-mono text-[#00e5ff]">
                                {step.romaji}
                              </div>
                              <div className="text-xs text-slate-300 mt-0.5">
                                <strong className="text-slate-400">Meaning:</strong> {step.englishMeaning}
                              </div>
                            </div>
                          )}

                          {/* Example Sentences with Translations */}
                          {step.exampleSentence && (
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1 text-xs">
                              <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                                Example Dialogue & Context
                              </span>
                              {step.exampleSentence.japanese && (
                                <div className="text-slate-200 font-medium">
                                  {step.exampleSentence.japanese}
                                </div>
                              )}
                              {step.exampleSentence.romaji && (
                                <div className="text-[11px] font-mono text-cyan-300/80">
                                  {step.exampleSentence.romaji}
                                </div>
                              )}
                              <div className="text-slate-400">
                                ↳ {step.exampleSentence.english}
                              </div>
                            </div>
                          )}

                          {/* Pronunciation & Grammar Notes */}
                          {step.notes && (
                            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200/90 leading-relaxed">
                              <strong className="text-[#00e5ff] font-mono text-[11px] block mb-0.5 uppercase">
                                💡 Pronunciation & Grammar Notes
                              </strong>
                              {step.notes}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. Practice Activities */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Dumbbell size={16} className="text-purple-400" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        4. Practice Activities (Exercises, Quizzes & Speaking Drills)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {section.practiceActivities.map((act, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between gap-3 hover:border-purple-400/30 transition-colors"
                        >
                          <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-mono uppercase font-bold text-purple-400 tracking-wider">
                              [{act.type.toUpperCase()}]
                            </span>
                            <h5 className="text-xs font-bold text-white">
                              {act.title}
                            </h5>
                            <p className="text-[11px] text-slate-300 leading-normal mt-0.5">
                              {act.description}
                            </p>
                          </div>

                          <button
                            onClick={() => onLaunchNodeScenario(act.scenarioId || act.title)}
                            className="w-full py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-200 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                          >
                            <Play size={11} className="fill-purple-300" />
                            <span>Launch Drill</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5. Estimated Time Summary */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-amber-400" />
                      Total Section Commitment: <strong className="text-white">{section.totalEstimatedTime}</strong>
                    </span>
                    <span className="font-mono text-[11px] text-cyan-400">
                      CEFR / JLPT Verified
                    </span>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Telemetry Matrix: Phonetic & Lexical Radar Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phonetic Telemetry Matrix */}
        <div className="glass-panel p-5 rounded-3xl border border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 size={16} className="text-cyan-400" />
              <h3 className="text-xs font-space font-bold uppercase tracking-wider text-white">
                {activeLang === "japanese" ? "音調・モーラ発音レーダー (Phonetic Breakdown)" : "Phonetic Radar Breakdown"}
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              {activeLang === "japanese" ? "91% Pitch Accuracy" : "92% Native Cadence"}
            </span>
          </div>

          <div className="space-y-3">
            {(activeLang === "japanese"
              ? [
                  { label: "高低アクセント (Heiban vs Atamadaka Pitch Accent)", score: 94 },
                  { label: "促音・長音モーラ拍 (Mora Timing & Chōon /sokuon/)", score: 89 },
                  { label: "語尾の丁寧な下降調 (Sentence Cadence & Desu/Masu Drop)", score: 92 },
                ]
              : [
                  { label: "Consonant Cluster Precision (/str/, /θ/, /ð/)", score: 95 },
                  { label: "Vowel Elongation & Diphthong Glides", score: 88 },
                  { label: "Sentence Pitch Stress & Downward Closing", score: 94 },
                ]
            ).map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="font-mono text-cyan-300 font-semibold">{item.score}%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-400 h-full rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lexical Telemetry Matrix */}
        <div className="glass-panel p-5 rounded-3xl border border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-emerald-400" />
              <h3 className="text-xs font-space font-bold uppercase tracking-wider text-white">
                {activeLang === "japanese" ? "語彙・敬語同化マトリクス (Lexical Mastery)" : "Vocabulary Assimilation Matrix"}
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-400 font-bold">
              {activeLang === "japanese" ? "+48 語彙習得" : "+34 Lexemes"}
            </span>
          </div>

          <div className="space-y-3">
            {(activeLang === "japanese"
              ? [
                  { label: "ビジネス敬語 (Sonkeigo & Kenjōgo Register)", score: 88 },
                  { label: "アジャイル開発用語 (Agile & Tech Terms)", score: 93 },
                  { label: "相槌・クッション言葉 (Aizuchi & Softeners)", score: 90 },
                ]
              : [
                  { label: "C1 Corporate Idiomatic Phrasing", score: 86 },
                  { label: "Executive Counter-Offer Collocations", score: 92 },
                  { label: "Spontaneous Transitional Connectors", score: 90 },
                ]
            ).map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="font-mono text-emerald-300 font-semibold">{item.score}%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-400 h-full rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Node Inspector Modal ── */}
      <AnimatePresence>
        {selectedNode && (
          <div
            onClick={() => setSelectedNode(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-fade-in"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel w-full max-w-md rounded-3xl p-6 border border-cyan-400/40 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-400/20 text-cyan-300 text-[10px] font-mono font-bold">
                    {selectedNode.cefr}
                  </span>
                  <h3 className="text-sm font-space font-bold text-white">
                    {selectedNode.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="py-4 flex flex-col gap-3">
                <span className="text-[11px] font-mono uppercase text-slate-400">
                  Category: {selectedNode.category} • Level {selectedNode.level}
                </span>

                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedNode.description}
                </p>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                    Targeted Fluency Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    <span className="px-2 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Rapid Articulation
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      Zero Hesitation
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Assertive Pitch
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={() => {
                    onLaunchNodeScenario(selectedNode.scenarioId || selectedNode.title);
                    setSelectedNode(null);
                  }}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_#00e5ff]"
                >
                  <Play size={14} className="fill-slate-950" />
                  <span>Launch Practice Node</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
