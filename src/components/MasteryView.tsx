"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, CheckCircle2, Lock, Play, X, BookOpen, Volume2, 
  Clock, Target, ListOrdered, CheckSquare, Dumbbell, Compass, 
  ChevronDown, ChevronUp, Languages, Keyboard
} from "lucide-react";
import { ConstellationNode, RoadmapSection } from "@/types";
import { getCourseRoadmap } from "@/data/learningRoadmaps";
import { JapaneseTopicModules } from "./JapaneseTopicModules";
import { LanguageEssentialsModules } from "./LanguageEssentialsModules";
import { WindingLearningPath } from "./WindingLearningPath";
import { getPracticeUnitsForLanguage, PracticeUnit } from "@/data/interactivePracticeData";

interface MasteryViewProps {
  onLaunchNodeScenario: (nodeTitle: string) => void;
  initialLanguage?: string;
  onLanguageChange?: (lang: string) => void;
  onOpenPracticeUnit?: (unit: PracticeUnit) => void;
}

const ALL_MASTERY_LANGUAGES = [
  { code: "english", flag: "🇺🇸", label: "English" },
  { code: "japanese", flag: "🇯🇵", label: "Japanese" },
  { code: "french", flag: "🇫🇷", label: "French" },
  { code: "korean", flag: "🇰🇷", label: "Korean" },
  { code: "german", flag: "🇩🇪", label: "German" },
  { code: "spanish", flag: "🇪🇸", label: "Spanish" },
];

export function MasteryView({ 
  onLaunchNodeScenario, 
  initialLanguage = "japanese",
  onLanguageChange,
  onOpenPracticeUnit,
}: MasteryViewProps) {
  const [activeLang, setActiveLang] = useState<string>(initialLanguage);
  const [selectedNode, setSelectedNode] = useState<ConstellationNode | null>(null);
  const [roadmapViewMode, setRoadmapViewMode] = useState<"path" | "constellation" | "syllabus">("path");
  const [expandedSectionId, setExpandedSectionId] = useState<string>(
    initialLanguage === "japanese" ? "jp-sec-1" : "en-sec-1"
  );

  useEffect(() => {
    if (initialLanguage) {
      setActiveLang(initialLanguage);
      setExpandedSectionId(initialLanguage === "japanese" ? "jp-sec-1" : "en-sec-1");
    }
  }, [initialLanguage]);

  const currentCourse = getCourseRoadmap(activeLang);
  const constellationNodes = currentCourse.constellationNodes;
  const practiceUnits = getPracticeUnitsForLanguage(activeLang);

  return (
    <div className="flex flex-col gap-6 w-full animate-slide-up-fade">
      {/* ── Language Switcher Banner & Header ── */}
      <div className="bg-white p-6 rounded-3xl border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-0 right-1/4 w-80 h-36 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200 flex items-center gap-1.5">
              <Compass size={11} />
              {currentCourse.trackLabel}
            </span>
            <span className="text-xs text-[#64748b]">Mastery Roadmap</span>
          </div>

          <h2 className="text-xl md:text-2xl font-space font-extrabold text-[#0f172a]">
            {activeLang === "japanese" ? "日本語 スキルツリーと学習ロードマップ" : "English Fluency Roadmap & Skill Tree"}
          </h2>
          <p className="text-xs text-[#64748b] mt-1 max-w-xl">
            {activeLang === "japanese"
              ? "基礎の日常会話からアジャイル開発、高難度の経営陣ピッチまで段階的に習得するステップ・バイ・ステップの学習パス。"
              : "Step-by-step spoken proficiency progression from spontaneous banter to executive C2 keynote rhetoric."}
          </p>
        </div>

        {/* Multi-Language Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full md:w-auto">
          <div className="p-1 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-wrap items-center gap-1 w-full sm:w-auto shadow-inner">
            {ALL_MASTERY_LANGUAGES.map((lang) => {
              const isActive = activeLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setActiveLang(lang.code);
                    setExpandedSectionId(`${lang.code.slice(0, 2)}-sec-1`);
                    onLanguageChange?.(lang.code);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isActive
                      ? "bg-[#0f4a3c] text-white shadow-sm"
                      : "text-[#64748b] hover:text-[#0f172a] hover:bg-white"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="hidden sm:inline">{lang.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] text-center">
              <span className="text-[9px] text-[#94a3b8] uppercase font-mono block">Estimated</span>
              <span className="text-xs font-space font-extrabold text-[#0f4a3c]">
                {currentCourse.totalEstimatedHours}
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] text-center">
              <span className="text-[9px] text-[#94a3b8] uppercase font-mono block">Sections</span>
              <span className="text-xs font-space font-extrabold text-[#10b981]">
                4 Levels
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── View Mode Switcher: Winding Path (Image 1) vs Constellation Map vs Syllabus ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-white border border-[#e2e8f0] rounded-2xl shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setRoadmapViewMode("path")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              roadmapViewMode === "path"
                ? "bg-[#58cc02] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Compass size={14} />
            <span>Learning Path (Type & Speak)</span>
          </button>

          <button
            type="button"
            onClick={() => setRoadmapViewMode("constellation")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              roadmapViewMode === "constellation"
                ? "bg-[#0f4a3c] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Sparkles size={14} />
            <span>Constellation Map</span>
          </button>

          <button
            type="button"
            onClick={() => setRoadmapViewMode("syllabus")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              roadmapViewMode === "syllabus"
                ? "bg-[#0f4a3c] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <BookOpen size={14} />
            <span>Detailed Syllabus</span>
          </button>
        </div>

        <span className="text-[11px] font-mono font-bold text-slate-400 px-2">
          {practiceUnits.length} Practice Units Ready
        </span>
      </div>

      {/* ── Mode 1: Duolingo-Style Winding Learning Path matching Image 1 ── */}
      {roadmapViewMode === "path" && (
        <div className="bg-white p-6 rounded-3xl border border-[#e2e8f0] shadow-sm flex flex-col items-center animate-slide-up-fade">
          <WindingLearningPath
            units={practiceUnits}
            onSelectUnit={(unit) => onOpenPracticeUnit?.(unit)}
            onClaimChest={() => alert("🎉 Bonus Chest Claimed! +50 XP and 20 Gems added to your vault.")}
          />
        </div>
      )}

      {/* ── Mode 2: Interactive Visual Constellation Map Canvas ── */}
      {roadmapViewMode === "constellation" && (
        <div className="bg-white p-6 rounded-3xl border border-[#e2e8f0] shadow-sm relative overflow-hidden min-h-[360px] flex items-center justify-center animate-slide-up-fade">
          {/* Subtle background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white to-white pointer-events-none" />

        {/* Constellation Connecting SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="18%"
            y1="65%"
            x2="48%"
            y2="40%"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70 animate-pulse"
          />
          <line
            x1="48%"
            y1="40%"
            x2="68%"
            y2="55%"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          <line
            x1="68%"
            y1="55%"
            x2="85%"
            y2="25%"
            stroke="#e2e8f0"
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
                {/* Node Orb */}
                <div
                  className={`w-14 h-14 rounded-3xl flex items-center justify-center transition-all duration-300 relative ${
                    isCompleted
                      ? "bg-emerald-50 border-2 border-[#10b981] text-[#0f4a3c] shadow-sm"
                      : isActive
                      ? "bg-[#0f4a3c] border-2 border-[#0f4a3c] text-white shadow-md scale-110"
                      : "bg-[#f8fafc] border border-[#e2e8f0] text-[#94a3b8]"
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
                  <span className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-white border border-[#e2e8f0] text-[9px] font-mono font-bold text-[#64748b] shadow-sm">
                    Lvl {node.level}
                  </span>
                </div>

                {/* Node Label Tooltip */}
                <div className="mt-3 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-[#e2e8f0] text-center whitespace-nowrap group-hover:scale-105 transition-transform shadow-sm">
                  <span className="text-[11px] font-space font-bold text-[#0f172a] block">
                    {node.title}
                  </span>
                  <span className="text-[9px] font-mono text-[#10b981]">
                    {node.cefr} • {node.status.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}

      {/* ── Language Core Learning Modules & Topics ── */}
      {activeLang === "japanese" ? (
        <JapaneseTopicModules
          onStartScenarioCall={(scenarioId) => onLaunchNodeScenario(scenarioId || "Daily Banter")}
        />
      ) : (
        <LanguageEssentialsModules
          languageCode={activeLang}
          languageName={currentCourse.languageName}
          onStartScenarioCall={(scenarioId) => onLaunchNodeScenario(scenarioId || "Daily Banter")}
        />
      )}

      {/* ── SECTION-BY-SECTION LEARNING ROADMAPS ── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <ListOrdered size={20} className="text-[#10b981]" />
            <h3 className="text-lg font-space font-extrabold text-[#0f172a]">
              {activeLang === "japanese" ? "セクション別 詳細学習ロードマップ" : "Section-by-Section Learning Roadmaps"}
            </h3>
          </div>
          <span className="text-xs text-[#64748b]">
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
                  ? "bg-white border-[#10b981]/30 shadow-md"
                  : "bg-white border-[#e2e8f0] hover:border-[#10b981]/20 shadow-sm"
              }`}
            >
              {/* Section Header Accordion Toggle */}
              <div
                onClick={() => setExpandedSectionId(isExpanded ? "" : section.id)}
                className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#0f4a3c] flex items-center justify-center font-space font-extrabold text-base shrink-0">
                    {section.sectionNumber}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold">
                        {section.levelBadge}
                      </span>
                      <span className="text-xs text-[#64748b] font-mono flex items-center gap-1">
                        <Clock size={11} />
                        {section.totalEstimatedTime}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0f172a] mt-1 truncate">
                      {section.title} {section.titleJapanese ? `(${section.titleJapanese})` : ""}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-semibold text-[#64748b]">
                    {isExpanded ? "Collapse" : "View Roadmap"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:text-[#0f172a]">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </div>

              {/* Collapsible Detailed Content */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 flex flex-col gap-6 border-t border-[#e2e8f0] pt-5 animate-slide-up-fade">
                  
                  {/* 1. Section Goal */}
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-[#0f4a3c]">
                      <Target size={16} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        1. Section Goal
                      </span>
                    </div>
                    <p className="text-sm text-[#0f172a] leading-relaxed pl-6">
                      {section.goal}
                    </p>
                  </div>

                  {/* 2. Prerequisites */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[#0f172a]">
                      <CheckSquare size={16} className="text-[#10b981]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        2. Prerequisites
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 pl-6">
                      {section.prerequisites.map((req, i) => (
                        <li key={i} className="text-xs text-[#0f172a] flex items-start gap-2 bg-[#f8fafc] p-2.5 rounded-xl border border-[#e2e8f0]">
                          <span className="text-[#10b981] mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Learning Steps */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#0f172a]">
                        <ListOrdered size={16} className="text-[#10b981]" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider">
                          3. Learning Steps (Ordered Sequence: Beginner → Advanced)
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#10b981]">
                        {section.learningSteps.length} Sequential Steps
                      </span>
                    </div>

                    <div className="flex flex-col gap-3.5">
                      {section.learningSteps.map((step) => (
                        <div
                          key={step.stepNumber}
                          className="p-4 rounded-2xl bg-white border border-[#e2e8f0] flex flex-col gap-3 hover:border-[#10b981]/30 transition-colors shadow-sm"
                        >
                          {/* Step Header */}
                          <div className="flex items-center justify-between pb-2 border-b border-[#e2e8f0]">
                            <div className="flex items-center gap-2.5">
                              <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#0f4a3c] font-space font-bold text-xs flex items-center justify-center border border-emerald-100">
                                {step.stepNumber}
                              </span>
                              <span className="text-sm font-bold text-[#0f172a]">
                                {step.title}
                              </span>
                              <span className="text-xs text-[#64748b] font-medium">
                                • {step.topic}
                              </span>
                            </div>

                            <span className="text-xs font-mono font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100 flex items-center gap-1">
                              <Clock size={11} />
                              {step.estimatedTime}
                            </span>
                          </div>

                          {/* Target Expression & Vocabulary */}
                          {(step.targetText || step.japaneseText) && (
                            <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col gap-1.5">
                              <div className="text-[10px] font-mono font-bold uppercase text-[#94a3b8] tracking-wider">
                                {currentCourse.languageName} Expression & Vocabulary
                              </div>
                              <div className="text-base sm:text-lg font-bold text-[#0f172a] tracking-wide">
                                {step.targetText || step.japaneseText}
                              </div>
                              {(step.phoneticScript || step.romaji) && (
                                <div className="text-xs font-mono text-[#10b981]">
                                  {step.phoneticScript || step.romaji}
                                </div>
                              )}
                              <div className="text-xs text-[#64748b] mt-0.5">
                                <strong className="text-[#94a3b8]">Meaning:</strong> {step.englishMeaning}
                              </div>
                            </div>
                          )}

                          {/* Example Sentences with Translations */}
                          {step.exampleSentence && (
                            <div className="p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col gap-1 text-xs">
                              <span className="text-[10px] font-mono font-bold uppercase text-[#94a3b8]">
                                Example Dialogue & Context
                              </span>
                              {(step.exampleSentence.target || step.exampleSentence.japanese) && (
                                <div className="text-[#0f172a] font-medium">
                                  {step.exampleSentence.target || step.exampleSentence.japanese}
                                </div>
                              )}
                              {(step.exampleSentence.phonetic || step.exampleSentence.romaji) && (
                                <div className="text-[11px] font-mono text-[#10b981]/80">
                                  {step.exampleSentence.phonetic || step.exampleSentence.romaji}
                                </div>
                              )}
                              <div className="text-[#64748b]">
                                ↳ {step.exampleSentence.english}
                              </div>
                            </div>
                          )}

                          {/* Pronunciation & Grammar Notes */}
                          {step.notes && (
                            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-[#0f4a3c] leading-relaxed">
                              <strong className="text-[#0f4a3c] font-mono text-[11px] block mb-0.5 uppercase">
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
                    <div className="flex items-center gap-2 text-[#0f172a]">
                      <Dumbbell size={16} className="text-purple-500" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        4. Practice Activities (Exercises, Quizzes & Speaking Drills)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {section.practiceActivities.map((act, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] flex flex-col justify-between gap-3 hover:border-purple-200 transition-colors shadow-sm"
                        >
                          <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-mono uppercase font-bold text-purple-500 tracking-wider">
                              [{act.type.toUpperCase()}]
                            </span>
                            <h5 className="text-xs font-bold text-[#0f172a]">
                              {act.title}
                            </h5>
                            <p className="text-[11px] text-[#64748b] leading-normal mt-0.5">
                              {act.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => {
                                if (practiceUnits.length > 0) {
                                  onOpenPracticeUnit?.(practiceUnits[0]);
                                } else {
                                  onLaunchNodeScenario(act.scenarioId || act.title);
                                }
                              }}
                              className="flex-1 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-[#0f4a3c] text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs cursor-pointer"
                            >
                              <Keyboard size={12} />
                              <span>Type & Speak</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => onLaunchNodeScenario(act.scenarioId || act.title)}
                              className="px-3 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-all shadow-xs cursor-pointer"
                              title="Live AI Voice Call Drill"
                            >
                              <Play size={11} className="fill-purple-500" />
                              <span className="hidden sm:inline">Call</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5. Estimated Time Summary */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-xs text-[#64748b]">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-amber-500" />
                      Total Section Commitment: <strong className="text-[#0f172a]">{section.totalEstimatedTime}</strong>
                    </span>
                    <span className="font-mono text-[11px] text-[#10b981]">
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
        <div className="bg-white p-5 rounded-3xl border border-[#e2e8f0] shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 size={16} className="text-[#10b981]" />
              <h3 className="text-xs font-space font-bold uppercase tracking-wider text-[#0f172a]">
                {activeLang === "japanese" ? "音調・モーラ発音レーダー (Phonetic Breakdown)" : "Phonetic Radar Breakdown"}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#10b981] font-bold">
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
                  <span className="text-[#64748b]">{item.label}</span>
                  <span className="font-mono text-[#10b981] font-semibold">{item.score}%</span>
                </div>
                <div className="w-full bg-[#e2e8f0] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#10b981] h-full rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lexical Telemetry Matrix */}
        <div className="bg-white p-5 rounded-3xl border border-[#e2e8f0] shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-[#0f4a3c]" />
              <h3 className="text-xs font-space font-bold uppercase tracking-wider text-[#0f172a]">
                {activeLang === "japanese" ? "語彙・敬語同化マトリクス (Lexical Mastery)" : "Vocabulary Assimilation Matrix"}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#0f4a3c] font-bold">
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
                  <span className="text-[#64748b]">{item.label}</span>
                  <span className="font-mono text-[#0f4a3c] font-semibold">{item.score}%</span>
                </div>
                <div className="w-full bg-[#e2e8f0] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#0f4a3c] h-full rounded-full"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-3xl p-6 border border-[#e2e8f0] shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-100">
                    {selectedNode.cefr}
                  </span>
                  <h3 className="text-sm font-space font-bold text-[#0f172a]">
                    {selectedNode.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="w-7 h-7 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:text-[#0f172a]"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="py-4 flex flex-col gap-3">
                <span className="text-[11px] font-mono uppercase text-[#94a3b8]">
                  Category: {selectedNode.category} • Level {selectedNode.level}
                </span>

                <p className="text-xs text-[#64748b] leading-relaxed">
                  {selectedNode.description}
                </p>

                <div className="p-3 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase text-[#10b981] font-bold">
                    Targeted Fluency Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Rapid Articulation
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-100">
                      Zero Hesitation
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-[#f0fdf4] text-[#0f4a3c] border border-[#10b981]/20">
                      Assertive Pitch
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#e2e8f0] flex items-center gap-2">
                <button
                  onClick={() => {
                    onLaunchNodeScenario(selectedNode.scenarioId || selectedNode.title);
                    setSelectedNode(null);
                  }}
                  className="w-full py-3 rounded-2xl bg-[#0f4a3c] hover:bg-[#0d3f33] text-white font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Play size={14} className="fill-white" />
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
