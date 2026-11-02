"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Sparkles, BookOpen, CheckCircle2, Award, Target,
  Volume2, Search, ArrowRight, Play, RotateCcw,
  Compass, ChevronDown, ChevronUp, Layers, Check,
  AlertCircle, Zap, HelpCircle, Trophy, Eye, EyeOff,
  GraduationCap, Clock, Languages, Lightbulb, MessageSquare,
  Bookmark, FileText, CheckCheck, Flame
} from "lucide-react";

import {
  JLPTLevel,
  JLPTLevelRoadmap,
  JLPTLearningUnit,
  JLPTExercise,
  KanjiEntry,
  KanaEntry,
  getRoadmapForLevel,
  getKanjiForLevel,
  getAllExercisesForLevel,
  KANA_REFERENCE,
  KANA_MASTERY_NOTES,
} from "@/data/jlpt";
import { speakElena } from "@/utils/speechEngine";

interface JLPTStudyRoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLevel?: JLPTLevel;
  ttsVoiceURI?: string;
  onStartScenarioCall?: (scenarioId?: string) => void;
}

const JLPT_LEVELS: { level: JLPTLevel; label: string; badge: string }[] = [
  { level: "N5", label: "N5 Beginner", badge: "Elementary" },
  { level: "N4", label: "N4 Bridge", badge: "Pre-Intermediate" },
  { level: "N3", label: "N3 Intermediate", badge: "Daily Life Fluency" },
  { level: "N2", label: "N2 Professional", badge: "Corporate Fluency" },
  { level: "N1", label: "N1 Master", badge: "Native Mastery" },
];

export function JLPTStudyRoadmapModal({
  isOpen,
  onClose,
  initialLevel = "N5",
  ttsVoiceURI,
  onStartScenarioCall,
}: JLPTStudyRoadmapModalProps) {
  const [activeLevel, setActiveLevel] = useState<JLPTLevel>(initialLevel);
  const [activeTab, setActiveTab] = useState<"roadmap" | "exercises" | "kanji">("roadmap");

  // Sync initial level when opening
  useEffect(() => {
    if (isOpen) {
      setActiveLevel(initialLevel);
    }
  }, [isOpen, initialLevel]);

  // Active roadmap & kanji data
  const roadmap: JLPTLevelRoadmap = useMemo(() => getRoadmapForLevel(activeLevel), [activeLevel]);
  const levelKanji: KanjiEntry[] = useMemo(() => getKanjiForLevel(activeLevel), [activeLevel]);
  const allExercises: JLPTExercise[] = useMemo(() => getAllExercisesForLevel(activeLevel), [activeLevel]);

  // Unit expansion state
  const [expandedUnitId, setExpandedUnitId] = useState<string | null>(null);

  // Set default expanded unit on roadmap load
  useEffect(() => {
    if (roadmap.sections.length > 0 && roadmap.sections[0].units.length > 0) {
      setExpandedUnitId(roadmap.sections[0].units[0].id);
    }
  }, [roadmap]);

  // Audio speech preview
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const playSpeech = (text: string) => {
    setPlayingWord(text);
    speakElena(text, {
      voiceURI: ttsVoiceURI,
      targetLanguage: "japanese",
      rate: 0.94,
      onEnd: () => setPlayingWord(null),
    });
  };

  // ── Exercise Quiz Engine State ──
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Reset quiz when level changes
  useEffect(() => {
    setCurrentExerciseIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsCorrect(false);
    setQuizScore(0);
    setQuizCompleted(false);
  }, [activeLevel]);

  const currentExercise = allExercises[currentExerciseIdx] || null;

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(opt);
  };

  const handleCheckAnswer = () => {
    if (!currentExercise || !selectedAnswer) return;
    const correct =
      selectedAnswer === currentExercise.expectedAnswer ||
      (currentExercise.acceptableAnswers && currentExercise.acceptableAnswers.includes(selectedAnswer));
    setIsCorrect(!!correct);
    setIsAnswerSubmitted(true);
    if (correct) {
      setQuizScore((prev) => prev + currentExercise.xpReward);
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIdx + 1 < allExercises.length) {
      setCurrentExerciseIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setIsCorrect(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentExerciseIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsCorrect(false);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  // ── Kana & Kanji Explorer State ──
  const [kanjiSubTab, setKanjiSubTab] = useState<"kanji" | "hiragana" | "katakana">("kanji");
  const [kanjiSearch, setKanjiSearch] = useState("");
  const [hideDetailsMode, setHideDetailsMode] = useState(false); // Flashcard memorization mode

  const filteredKanji = useMemo(() => {
    if (!kanjiSearch.trim()) return levelKanji;
    const q = kanjiSearch.trim().toLowerCase();
    return levelKanji.filter(
      (k) =>
        k.kanji.includes(q) ||
        k.meanings.some((m) => m.toLowerCase().includes(q)) ||
        k.onyomi.some((o) => o.toLowerCase().includes(q)) ||
        k.kunyomi.some((u) => u.toLowerCase().includes(q)) ||
        k.exampleWords.some((e) => e.word.includes(q) || e.meaning.toLowerCase().includes(q) || e.reading.includes(q))
    );
  }, [levelKanji, kanjiSearch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="w-full max-w-6xl max-h-[94vh] bg-[#f8fafc] border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800"
      >
        {/* ── Top Bar: Title & Level Switcher matching Home Screen style ── */}
        <div className="px-5 py-4 border-b border-slate-200 bg-white flex flex-col gap-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#0f4a3c] flex items-center justify-center shrink-0 shadow-xs">
                <GraduationCap size={22} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold font-space text-slate-900 tracking-tight">
                    JLPT Exam Passing Center
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                    N5 → N1
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Targeted learning units, interactive exam exercises, and kanji mastery vault
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Level Switcher Pills matching Home Screen button aesthetics */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
            {JLPT_LEVELS.map((lvl) => {
              const isActive = activeLevel === lvl.level;
              return (
                <button
                  key={lvl.level}
                  type="button"
                  onClick={() => {
                    setActiveLevel(lvl.level);
                    if (activeTab === "exercises") handleRestartQuiz();
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#0f4a3c] text-white shadow-sm font-bold scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span className="font-mono text-[13px]">{lvl.level}</span>
                  <span className="hidden sm:inline text-[11px] opacity-90 font-medium">
                    {lvl.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Sub-Header: Level Summary Metrics & Navigation Tabs ── */}
        <div className="px-5 py-3 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Level stats with Lucide/FA vector icons */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-emerald-700 shrink-0" />
              <span className="text-slate-500">Study Hours:</span>
              <span className="font-mono font-bold text-slate-900">~{roadmap.estimatedStudyHours}h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Languages size={14} className="text-teal-700 shrink-0" />
              <span className="text-slate-500">Target Kanji:</span>
              <span className="font-mono font-bold text-slate-900">~{roadmap.kanjiTarget}</span>
            </div>
            <div className="flex items-center gap-1.5 hidden sm:flex">
              <BookOpen size={14} className="text-indigo-700 shrink-0" />
              <span className="text-slate-500">Vocab:</span>
              <span className="font-mono font-bold text-slate-900">~{roadmap.vocabTarget}</span>
            </div>
            <div className="flex items-center gap-1.5 hidden md:flex">
              <Layers size={14} className="text-amber-700 shrink-0" />
              <span className="text-slate-500">Grammar:</span>
              <span className="font-mono font-bold text-slate-900">~{roadmap.grammarTarget} points</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("roadmap")}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === "roadmap"
                  ? "bg-white text-[#0f4a3c] shadow-xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <BookOpen size={14} />
              <span>Units & Roadmap</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("exercises")}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === "exercises"
                  ? "bg-white text-[#0f4a3c] shadow-xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Target size={14} />
              <span>Exam Exercises ({allExercises.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("kanji")}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === "kanji"
                  ? "bg-white text-[#0f4a3c] shadow-xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Languages size={14} />
              <span>Kana & Kanji Vault</span>
            </button>
          </div>
        </div>

        {/* ── Main Tab Content Area (Scrollable) ── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* ══════════════════════════════════════════════════════════════
              TAB 1: ROADMAP & LEARNING UNITS
             ══════════════════════════════════════════════════════════════ */}
          {activeTab === "roadmap" && (
            <div className="space-y-6">
              {/* Roadmap Overview Card matching Home Screen green banner */}
              <div className="bg-gradient-to-r from-[#0f4a3c] via-[#135d4b] to-emerald-800 rounded-3xl p-5 sm:p-6 text-white shadow-md shadow-emerald-950/15 flex flex-col gap-3 border border-emerald-700/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 font-mono">
                      {roadmap.titleJa}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                      {roadmap.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold font-mono self-start sm:self-auto">
                    Pass Target: 100+/180
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  {roadmap.description}
                </p>

                {/* Target Skills */}
                <div className="pt-2 border-t border-emerald-600/50">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200 block mb-2">
                    Skills Evaluated on {activeLevel}
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {roadmap.targetSkills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-black/15 border border-white/10 p-2.5 rounded-xl text-xs text-emerald-50"
                      >
                        <CheckCircle2 size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sections & Units */}
              <div className="space-y-4">
                {roadmap.sections.map((section) => (
                  <div
                    key={section.id}
                    className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs"
                  >
                    {/* Section Header */}
                    <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#0f4a3c] border border-emerald-200 text-xs font-mono font-bold flex items-center justify-center">
                          {section.sectionNumber}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            {section.title}
                          </h4>
                          <span className="text-[11px] text-slate-500 font-mono">
                            {section.titleJa}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">
                        {section.units.length} Learning Units
                      </span>
                    </div>

                    {/* Section Units Accordion */}
                    <div className="divide-y divide-slate-100">
                      {section.units.map((unit: JLPTLearningUnit) => {
                        const isExpanded = expandedUnitId === unit.id;
                        return (
                          <div key={unit.id} className="transition-colors">
                            <button
                              type="button"
                              onClick={() => setExpandedUnitId(isExpanded ? null : unit.id)}
                              className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold flex items-center justify-center shrink-0 border border-slate-200">
                                  {unit.unitNumber}
                                </span>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2">
                                    <h5 className="text-sm font-bold text-slate-900">
                                      {unit.title}
                                    </h5>
                                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-mono border border-emerald-200 uppercase font-semibold">
                                      {unit.category}
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-500 mt-0.5">
                                    {unit.titleJa} • {unit.description}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-3 shrink-0">
                                <span className="text-xs text-slate-500 font-mono hidden sm:flex items-center gap-1">
                                  <Clock size={12} />
                                  <span>{unit.estimatedMinutes}m</span>
                                </span>
                                {isExpanded ? (
                                  <ChevronUp size={16} className="text-slate-400" />
                                ) : (
                                  <ChevronDown size={16} className="text-slate-400" />
                                )}
                              </div>
                            </button>

                            {/* Expanded Unit Content */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.22 }}
                                  className="px-5 pb-5 pt-2 bg-slate-50/60 border-t border-slate-100 space-y-4"
                                >
                                  {/* Unit Objectives */}
                                  <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xs">
                                    <div className="flex items-center gap-1.5 mb-2">
                                      <Target size={14} className="text-emerald-700" />
                                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                                        Unit Learning Objectives
                                      </span>
                                    </div>
                                    <ul className="space-y-1.5 text-xs text-slate-700">
                                      {unit.objectives.map((obj, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                                          <span>{obj}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Key Vocabulary */}
                                  {unit.keyVocabulary && unit.keyVocabulary.length > 0 && (
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-1.5">
                                        <BookOpen size={14} className="text-[#0f4a3c]" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                          Key JLPT Vocabulary ({unit.keyVocabulary.length})
                                        </span>
                                      </div>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {unit.keyVocabulary.map((v, i) => (
                                          <div
                                            key={i}
                                            className="bg-white border border-slate-200 p-3.5 rounded-2xl flex items-start justify-between gap-3 hover:border-slate-300 transition-colors shadow-xs"
                                          >
                                            <div className="flex flex-col min-w-0">
                                              <div className="flex items-baseline gap-2">
                                                <span className="text-sm font-bold text-slate-900 tracking-wide">
                                                  {v.word}
                                                </span>
                                                <span className="text-xs font-mono text-emerald-800 font-semibold">
                                                  {v.reading}
                                                </span>
                                              </div>
                                              <span className="text-xs text-slate-600 mt-0.5">
                                                {v.meaning}
                                              </span>
                                              {v.exampleSentence && (
                                                <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                                                  <div className="text-slate-800 font-medium flex items-center gap-1">
                                                    <MessageSquare size={11} className="text-slate-400 shrink-0" />
                                                    <span>{v.exampleSentence}</span>
                                                  </div>
                                                  <span className="italic text-slate-500 pl-4 block mt-0.5">
                                                    &ldquo;{v.exampleMeaning}&rdquo;
                                                  </span>
                                                </div>
                                              )}
                                            </div>

                                            <button
                                              type="button"
                                              onClick={() => playSpeech(v.word)}
                                              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 flex items-center justify-center shrink-0 transition-colors cursor-pointer border border-slate-200"
                                              title="Listen to pronunciation"
                                            >
                                              <Volume2 size={13} />
                                            </button>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Grammar Points with Formation and JLPT Traps */}
                                  {unit.grammarPoints && unit.grammarPoints.length > 0 && (
                                    <div className="space-y-2.5">
                                      <div className="flex items-center gap-1.5">
                                        <Layers size={14} className="text-[#0f4a3c]" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                          Grammar Structures & Exam Rules
                                        </span>
                                      </div>
                                      <div className="space-y-3">
                                        {unit.grammarPoints.map((gp, i) => (
                                          <div
                                            key={i}
                                            className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col gap-2.5 shadow-xs"
                                          >
                                            <div className="flex items-center justify-between gap-2">
                                              <h6 className="text-sm font-bold text-[#0f4a3c] font-mono">
                                                {gp.pattern}
                                              </h6>
                                              <span className="text-xs text-slate-600 font-medium">
                                                Meaning: {gp.meaning}
                                              </span>
                                            </div>

                                            <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs font-mono text-slate-800">
                                              <span className="text-slate-500 font-sans">Formation: </span>
                                              {gp.formation}
                                            </div>

                                            <div className="bg-emerald-50/40 p-3 rounded-xl border border-emerald-100 space-y-1">
                                              <div className="text-xs text-slate-900 font-medium flex items-center justify-between">
                                                <div className="flex items-center gap-1.5">
                                                  <MessageSquare size={12} className="text-emerald-700 shrink-0" />
                                                  <span>{gp.exampleSentence}</span>
                                                </div>
                                                <button
                                                  type="button"
                                                  onClick={() => playSpeech(gp.exampleSentence)}
                                                  className="text-slate-500 hover:text-emerald-700 p-1 cursor-pointer"
                                                  title="Listen"
                                                >
                                                  <Volume2 size={13} />
                                                </button>
                                              </div>
                                              <div className="text-[11px] text-slate-500 font-mono pl-4">
                                                {gp.exampleReading}
                                              </div>
                                              <div className="text-[11px] text-slate-700 pl-4">
                                                &ldquo;{gp.exampleMeaning}&rdquo;
                                              </div>
                                            </div>

                                            {gp.notes && (
                                              <div className="text-[11px] text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-2.5 flex items-start gap-2">
                                                <AlertCircle size={14} className="text-amber-700 shrink-0 mt-0.5" />
                                                <span className="leading-relaxed">
                                                  <strong className="font-semibold text-amber-950">Exam Tip: </strong>
                                                  {gp.notes}
                                                </span>
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Launch Exercises Button */}
                                  <div className="pt-2 flex justify-end">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setActiveTab("exercises");
                                        handleRestartQuiz();
                                      }}
                                      className="px-4 py-2 rounded-2xl bg-[#0f4a3c] hover:bg-[#0a352a] text-white text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer transition-all"
                                    >
                                      <span>Practice {activeLevel} Exam Questions</span>
                                      <ArrowRight size={14} />
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              TAB 2: INTERACTIVE EXAM EXERCISES
             ══════════════════════════════════════════════════════════════ */}
          {activeTab === "exercises" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {!quizCompleted && currentExercise ? (
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
                  {/* Progress Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-xs font-bold">
                        Question {currentExerciseIdx + 1} of {allExercises.length}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] uppercase border border-slate-200">
                        {currentExercise.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      <Trophy size={13} className="text-amber-600" />
                      <span>+{currentExercise.xpReward} XP</span>
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Question Prompt
                    </span>
                    <p className="text-base sm:text-lg font-bold text-slate-900 whitespace-pre-line leading-relaxed">
                      {currentExercise.prompt}
                    </p>
                  </div>

                  {/* Multiple Choice Options */}
                  {currentExercise.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentExercise.options.map((opt) => {
                        const isSelected = selectedAnswer === opt;
                        let optionStyle =
                          "bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50";

                        if (isAnswerSubmitted) {
                          if (opt === currentExercise.expectedAnswer) {
                            optionStyle =
                              "bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/30";
                          } else if (isSelected && !isCorrect) {
                            optionStyle =
                              "bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-500/30";
                          } else {
                            optionStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                          }
                        } else if (isSelected) {
                          optionStyle =
                            "bg-emerald-50 border-[#0f4a3c] text-[#0f4a3c] ring-2 ring-emerald-600/30 font-bold";
                        }

                        return (
                          <button
                            key={opt}
                            type="button"
                            disabled={isAnswerSubmitted}
                            onClick={() => handleSelectOption(opt)}
                            className={`p-4 rounded-2xl border text-left font-medium text-sm transition-all flex items-center justify-between gap-3 cursor-pointer shadow-xs ${optionStyle}`}
                          >
                            <span className="tracking-wide">{opt}</span>
                            {isAnswerSubmitted && opt === currentExercise.expectedAnswer && (
                              <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Answer Explanation Box */}
                  <AnimatePresence>
                    {isAnswerSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className={`p-4 rounded-2xl border flex flex-col gap-1.5 ${
                          isCorrect
                            ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                            : "bg-rose-50 border-rose-300 text-rose-950"
                        }`}
                      >
                        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                          <span>{isCorrect ? "Correct!" : "Incorrect"}</span>
                          <span>•</span>
                          <span>Expected: {currentExercise.expectedAnswer}</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {currentExercise.explanation}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit / Next Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <span className="text-xs text-slate-500 font-mono">
                      Current Score: <strong className="text-slate-900 font-bold">{quizScore} XP</strong>
                    </span>

                    {!isAnswerSubmitted ? (
                      <button
                        type="button"
                        disabled={!selectedAnswer}
                        onClick={handleCheckAnswer}
                        className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                          selectedAnswer
                            ? "bg-[#0f4a3c] hover:bg-[#0a352a] text-white shadow-xs cursor-pointer"
                            : "bg-slate-200 text-slate-400 cursor-not-allowed"
                        }`}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleNextExercise}
                        className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                      >
                        <span>{currentExerciseIdx + 1 < allExercises.length ? "Next Question" : "See Results"}</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* Quiz Complete Card */
                <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center flex flex-col items-center gap-4 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                    <Trophy size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeLevel} Practice Drill Completed!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md">
                    You practiced {allExercises.length} targeted questions and earned{" "}
                    <strong className="text-emerald-700 font-mono font-bold">+{quizScore} XP</strong>.
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      type="button"
                      onClick={handleRestartQuiz}
                      className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-2 border border-slate-200 cursor-pointer"
                    >
                      <RotateCcw size={14} />
                      <span>Retake Exercises</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("kanji")}
                      className="px-5 py-2.5 rounded-full bg-[#0f4a3c] hover:bg-[#0a352a] text-white text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                    >
                      <Languages size={14} />
                      <span>Study {activeLevel} Kanji Vault</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              TAB 3: KANA & KANJI MASTERY VAULT
             ══════════════════════════════════════════════════════════════ */}
          {activeTab === "kanji" && (
            <div className="space-y-6">
              {/* Level Kana Requirement Note matching Home Screen cards */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    {activeLevel} Character & Script Requirement
                  </span>
                  <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                    {KANA_MASTERY_NOTES[activeLevel] || KANA_MASTERY_NOTES.N5}
                  </p>
                </div>
              </div>

              {/* Sub-Switch: Kanji vs Hiragana vs Katakana */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 self-start text-xs">
                  <button
                    type="button"
                    onClick={() => setKanjiSubTab("kanji")}
                    className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                      kanjiSubTab === "kanji"
                        ? "bg-white text-[#0f4a3c] shadow-xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {activeLevel} Kanji List ({levelKanji.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setKanjiSubTab("hiragana")}
                    className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                      kanjiSubTab === "hiragana"
                        ? "bg-white text-[#0f4a3c] shadow-xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Hiragana Chart (46+)
                  </button>
                  <button
                    type="button"
                    onClick={() => setKanjiSubTab("katakana")}
                    className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                      kanjiSubTab === "katakana"
                        ? "bg-white text-[#0f4a3c] shadow-xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Katakana Chart (46+)
                  </button>
                </div>

                {/* Search & Flashcard Toggle */}
                {kanjiSubTab === "kanji" && (
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        value={kanjiSearch}
                        onChange={(e) => setKanjiSearch(e.target.value)}
                        placeholder="Search kanji, reading, meaning..."
                        className="pl-9 pr-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 w-full sm:w-64 shadow-xs"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setHideDetailsMode(!hideDetailsMode)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-colors cursor-pointer shadow-xs ${
                        hideDetailsMode
                          ? "bg-amber-50 text-amber-800 border-amber-300"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                      title="Hide readings to test yourself like flashcards"
                    >
                      {hideDetailsMode ? <EyeOff size={14} /> : <Eye size={14} />}
                      <span className="hidden sm:inline">
                        {hideDetailsMode ? "Recall Mode (Hidden)" : "Study Mode"}
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {/* ── Sub-view 1: Kanji Grid (Clean white cards matching Home Screen) ── */}
              {kanjiSubTab === "kanji" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredKanji.map((item, idx) => (
                      <div
                        key={`${item.kanji}-${idx}`}
                        className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-emerald-400 transition-all shadow-xs"
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-3xl font-bold font-serif text-slate-900">
                            {item.kanji}
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-600 border border-slate-200">
                              {item.strokeCount}画
                            </span>
                            <button
                              type="button"
                              onClick={() => playSpeech(item.kanji)}
                              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                              title="Listen"
                            >
                              <Volume2 size={13} />
                            </button>
                          </div>
                        </div>

                        {/* Readings & Meanings (masked if in hideDetailsMode) */}
                        <div className="space-y-1.5">
                          {hideDetailsMode ? (
                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-amber-800 font-mono flex items-center justify-center gap-1.5">
                              <EyeOff size={13} />
                              <span>Readings hidden</span>
                            </div>
                          ) : (
                            <>
                              {item.onyomi.length > 0 && (
                                <div className="text-xs">
                                  <span className="text-slate-400 font-mono text-[10px] uppercase block">
                                    音 (On):
                                  </span>
                                  <span className="font-mono text-emerald-800 font-semibold">
                                    {item.onyomi.join("、")}
                                  </span>
                                </div>
                              )}
                              {item.kunyomi.length > 0 && (
                                <div className="text-xs">
                                  <span className="text-slate-400 font-mono text-[10px] uppercase block">
                                    訓 (Kun):
                                  </span>
                                  <span className="font-mono text-teal-800 font-semibold">
                                    {item.kunyomi.join("、")}
                                  </span>
                                </div>
                              )}
                              <div className="text-xs text-slate-800 font-semibold pt-1">
                                {item.meanings.join(", ")}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Compound Example Words */}
                        {!hideDetailsMode && item.exampleWords && item.exampleWords.length > 0 && (
                          <div className="pt-2 border-t border-slate-100 text-[11px] space-y-1 text-slate-600">
                            {item.exampleWords.slice(0, 2).map((w, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between gap-1 cursor-pointer hover:text-emerald-800"
                                onClick={() => playSpeech(w.word)}
                              >
                                <span className="font-semibold text-slate-900">
                                  {w.word} ({w.reading})
                                </span>
                                <span className="text-slate-500 truncate max-w-[100px]">
                                  {w.meaning}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {filteredKanji.length === 0 && (
                    <div className="p-8 text-center text-slate-500 text-xs">
                      No kanji matched your search query. Try another keyword.
                    </div>
                  )}
                </div>
              )}

              {/* ── Sub-view 2: Hiragana Chart ── */}
              {kanjiSubTab === "hiragana" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Complete Hiragana (46 Gojūon + Dakuten + Combos)
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Click any tile to hear native pronunciation
                    </span>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2">
                    {KANA_REFERENCE.hiragana.map((k: KanaEntry, i: number) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => playSpeech(k.kana)}
                        className="bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 p-2.5 rounded-2xl flex flex-col items-center justify-center gap-0.5 transition-all group cursor-pointer shadow-xs"
                      >
                        <span className="text-xl font-bold font-serif text-slate-900 group-hover:text-emerald-800">
                          {k.kana}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {k.romaji}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Sub-view 3: Katakana Chart ── */}
              {kanjiSubTab === "katakana" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Complete Katakana (46 Gojūon + Loanwords + Combos)
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Essential for foreign names, loanwords & test listening
                    </span>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2">
                    {KANA_REFERENCE.katakana.map((k: KanaEntry, i: number) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => playSpeech(k.kana)}
                        className="bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 p-2.5 rounded-2xl flex flex-col items-center justify-center gap-0.5 transition-all group cursor-pointer shadow-xs"
                      >
                        <span className="text-xl font-bold font-serif text-slate-900 group-hover:text-emerald-800">
                          {k.kana}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {k.romaji}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
