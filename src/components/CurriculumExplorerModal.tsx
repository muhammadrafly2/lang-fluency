"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Volume2, PhoneCall, Sparkles, BookOpen, Check, 
  ChevronRight, ArrowRight, Play, ExternalLink, Lightbulb,
  MessageSquare, AlertCircle, Award, Compass, Layers, CheckCircle2,
  Clock, Tag, HelpCircle
} from "lucide-react";
import { 
  CurriculumArea, 
  CurriculumTopic, 
  getCurriculumAreas 
} from "@/data/curriculum";
import { speakElena } from "@/utils/speechEngine";

interface CurriculumExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLanguageCode?: string;
  onStartScenarioCall?: (scenarioId?: string) => void;
  ttsVoiceURI?: string;
}

const SUPPORTED_LANGUAGES = [
  { code: "english", name: "English", flag: "🇺🇸" },
  { code: "japanese", name: "日本語", flag: "🇯🇵" },
  { code: "spanish", name: "Español", flag: "🇪🇸" },
  { code: "french", name: "Français", flag: "🇫🇷" },
  { code: "korean", name: "한국어", flag: "🇰🇷" },
  { code: "german", name: "Deutsch", flag: "🇩🇪" },
];

export function CurriculumExplorerModal({
  isOpen,
  onClose,
  initialLanguageCode = "english",
  onStartScenarioCall,
  ttsVoiceURI,
}: CurriculumExplorerModalProps) {
  const [selectedLang, setSelectedLang] = useState<string>(initialLanguageCode);
  const [activeAreaId, setActiveAreaId] = useState<number>(1);
  const [selectedTopic, setSelectedTopic] = useState<CurriculumTopic | null>(null);
  const [activeTab, setActiveTab] = useState<"phrases" | "dialogue" | "boosters" | "practice">("phrases");
  const [checkedCanDos, setCheckedCanDos] = useState<Record<string, boolean>>({});
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);
  const cancelAudioRef = useRef<(() => void) | null>(null);

  // Sync with initial language if opened with a specific one
  useEffect(() => {
    if (initialLanguageCode) {
      setSelectedLang(initialLanguageCode);
    }
  }, [initialLanguageCode]);

  const areas: CurriculumArea[] = getCurriculumAreas(selectedLang);
  const currentArea = areas.find((a) => a.id === activeAreaId) || areas[0];

  useEffect(() => {
    return () => {
      if (cancelAudioRef.current) cancelAudioRef.current();
    };
  }, []);

  const handlePlayAudio = (text: string, id: string) => {
    if (cancelAudioRef.current) {
      cancelAudioRef.current();
      cancelAudioRef.current = null;
      if (isPlayingAudio === id) {
        setIsPlayingAudio(null);
        return;
      }
    }

    setIsPlayingAudio(id);
    const cancel = speakElena(text, {
      voiceURI: ttsVoiceURI,
      targetLanguage: selectedLang,
      rate: selectedLang === "japanese" || selectedLang === "korean" ? 0.95 : 1.0,
      pitch: 1.02,
      onEnd: () => setIsPlayingAudio(null),
      onError: () => setIsPlayingAudio(null),
    });
    cancelAudioRef.current = cancel;
  };

  const toggleCanDo = (key: string) => {
    setCheckedCanDos((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-md p-3 sm:p-6 animate-fade-in text-slate-900">
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 15 }}
        className="w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
      >
        {/* ── Modal Header & Language Selector ── */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col gap-3 bg-slate-50/70">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0f4a3c] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                📚
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-space font-extrabold text-slate-900">
                    11-Area Conversational Curriculum
                  </h2>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    22 Deep Topics
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Comprehensive dialogues, fluency boosters, cultural pragmatics & role-play challenges
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Language Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = selectedLang.toLowerCase() === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setSelectedLang(lang.code);
                    setSelectedTopic(null);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-[#0f4a3c] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-500 hover:bg-slate-100"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main Body: Areas Carousel + Topics Grid OR Topic Detail View ── */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          <AnimatePresence mode="wait">
            {!selectedTopic ? (
              // ── AREA SELECTION & 2-TOPIC CARDS ──
              <motion.div
                key="area-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-5 flex flex-col gap-6"
              >
                {/* Area Tabs Horizontal Selector */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                    Select Topic Area (11 Areas)
                  </span>
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                    {areas.map((area) => {
                      const isActive = activeAreaId === area.id;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => setActiveAreaId(area.id)}
                          className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                            isActive
                              ? "bg-emerald-50 text-emerald-900 border border-emerald-300 shadow-xs"
                              : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <span className="text-sm">{area.icon}</span>
                          <span>{area.id}. {area.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Area Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/70 to-teal-50/40 border border-emerald-200 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-200 flex items-center justify-center text-2xl shadow-xs">
                      {currentArea.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Area {currentArea.id}: {currentArea.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {currentArea.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-200 shrink-0">
                    {currentArea.topics.length} Scenarios Available
                  </span>
                </div>

                {/* 2 Topics Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentArea.topics.map((topic, idx) => (
                    <div
                      key={topic.id}
                      className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-emerald-600 hover:shadow-lg transition-all flex flex-col justify-between gap-4 group text-left relative overflow-hidden"
                    >
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            Topic {idx + 1} • {topic.cefrLevel}
                          </span>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Clock size={13} />
                            <span>{topic.estimatedSpeakingTime}</span>
                          </div>
                        </div>

                        <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                          {topic.title}
                        </h4>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {topic.situation}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            {topic.keyPhrases.length} Chunks
                          </span>
                          <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            {topic.dialogue.length} Line Dialogue
                          </span>
                          <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            5 Boosters
                          </span>
                          <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            3 Role-plays
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedTopic(topic);
                            setActiveTab("phrases");
                          }}
                          className="px-4 py-2 rounded-xl bg-[#0f4a3c] hover:bg-[#0a352a] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                        >
                          <span>Explore Deep Curriculum</span>
                          <ArrowRight size={14} />
                        </button>

                        {onStartScenarioCall && (
                          <button
                            type="button"
                            onClick={() => {
                              onClose();
                              onStartScenarioCall(topic.scenarioId || topic.title);
                            }}
                            className="p-2 rounded-xl text-emerald-800 hover:bg-emerald-50 transition-colors cursor-pointer"
                            title="Start voice call with Elena"
                          >
                            <PhoneCall size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // ── IN-DEPTH TOPIC DETAIL VIEW ──
              <motion.div
                key="topic-detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                {/* Topic Subheader */}
                <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedTopic(null)}
                      className="px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronRight size={15} className="rotate-180" />
                      <span>Back to Topics</span>
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {selectedTopic.cefrLevel} • {selectedTopic.difficulty}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {selectedTopic.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {selectedTopic.situation}
                      </p>
                    </div>
                  </div>

                  {onStartScenarioCall && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onStartScenarioCall(selectedTopic.scenarioId || selectedTopic.title);
                      }}
                      className="px-4 py-2 rounded-2xl bg-[#0f4a3c] hover:bg-[#0a352a] text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-[#0f4a3c]/20 transition-all shrink-0 cursor-pointer"
                    >
                      <PhoneCall size={14} />
                      <span>Practice Role-Play</span>
                    </button>
                  )}
                </div>

                {/* 4 Topic Detail Tabs Bar */}
                <div className="px-5 pt-3 pb-2 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50 overflow-x-auto no-scrollbar">
                  {[
                    { id: "phrases", label: "Key Phrases & Chunks", icon: BookOpen, count: selectedTopic.keyPhrases.length },
                    { id: "dialogue", label: "Full Dialogue", icon: MessageSquare, count: selectedTopic.dialogue.length },
                    { id: "boosters", label: "Boosters & Mistakes", icon: Sparkles, count: selectedTopic.fluencyBoosters.length },
                    { id: "practice", label: "Culture & Role-Play", icon: Award, count: 3 },
                  ].map((tabItem) => {
                    const isActive = activeTab === tabItem.id;
                    const Icon = tabItem.icon;
                    return (
                      <button
                        key={tabItem.id}
                        type="button"
                        onClick={() => setActiveTab(tabItem.id as any)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                          isActive
                            ? "bg-[#0f4a3c] text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                        }`}
                      >
                        <Icon size={14} />
                        <span>{tabItem.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"}`}>
                          {tabItem.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content Body */}
                <div className="p-5 overflow-y-auto flex-1 flex flex-col gap-6">
                  {/* ── TAB 1: KEY PHRASES & CHUNKS ── */}
                  {activeTab === "phrases" && (
                    <div className="flex flex-col gap-3">
                      <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-950 font-medium">
                        💡 Native phrase chunks for spontaneous speech. Tap any phrase to hear pronunciation via native TTS.
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        {selectedTopic.keyPhrases.map((phraseItem, idx) => {
                          const isPlaying = isPlayingAudio === `phrase-${idx}`;
                          return (
                            <div
                              key={idx}
                              className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-500 transition-all flex items-start justify-between gap-3 shadow-xs"
                            >
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-slate-900">
                                    {phraseItem.phrase}
                                  </span>
                                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                                    phraseItem.register === "formal"
                                      ? "bg-purple-100 text-purple-800"
                                      : phraseItem.register === "casual"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-slate-100 text-slate-700"
                                  }`}>
                                    {phraseItem.register}
                                  </span>
                                </div>
                                {phraseItem.phonetic && (
                                  <span className="text-xs text-emerald-700 font-mono">
                                    {phraseItem.phonetic}
                                  </span>
                                )}
                                <span className="text-xs text-slate-600">
                                  {phraseItem.english}
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => handlePlayAudio(phraseItem.phrase, `phrase-${idx}`)}
                                className={`p-2 rounded-xl border transition-all shrink-0 cursor-pointer ${
                                  isPlaying
                                    ? "bg-emerald-600 border-emerald-600 text-white animate-pulse"
                                    : "bg-slate-50 border-slate-200 text-slate-600 hover:text-emerald-800 hover:bg-slate-100"
                                }`}
                                title="Listen to pronunciation"
                              >
                                <Volume2 size={16} />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── TAB 2: FULL REALISTIC DIALOGUE ── */}
                  {activeTab === "dialogue" && (
                    <div className="flex flex-col gap-3">
                      <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-950 font-medium">
                        🗣️ Natural 2-speaker exchange featuring spoken contractions, fillers, and realistic hesitations.
                      </div>

                      <div className="flex flex-col gap-3 pt-2">
                        {selectedTopic.dialogue.map((lineItem, idx) => {
                          const isEven = idx % 2 === 0;
                          const lineText = lineItem.line || lineItem.text || "";
                          const isPlaying = isPlayingAudio === `dialogue-${idx}`;

                          return (
                            <div
                              key={idx}
                              className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                                isEven
                                  ? "bg-white border-slate-200"
                                  : "bg-slate-50 border-slate-200/90"
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                                isEven ? "bg-emerald-100 text-emerald-900" : "bg-teal-100 text-teal-900"
                              }`}>
                                {lineItem.speaker.slice(0, 2).toUpperCase()}
                              </div>

                              <div className="flex-1 flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-slate-800">
                                    {lineItem.speaker}
                                  </span>
                                  {lineItem.fillers && lineItem.fillers.length > 0 && (
                                    <div className="flex items-center gap-1">
                                      {lineItem.fillers.map((f, fIdx) => (
                                        <span key={fIdx} className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200">
                                          filler: {f}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                                  {lineText}
                                </p>
                                {lineItem.phonetic && (
                                  <p className="text-xs font-mono text-emerald-700">
                                    {lineItem.phonetic}
                                  </p>
                                )}
                                <p className="text-xs text-slate-500">
                                  {lineItem.english}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => handlePlayAudio(lineText, `dialogue-${idx}`)}
                                className={`p-2 rounded-xl border transition-all shrink-0 cursor-pointer ${
                                  isPlaying
                                    ? "bg-emerald-600 border-emerald-600 text-white animate-pulse"
                                    : "bg-slate-50 border-slate-200 text-slate-500 hover:text-emerald-800 hover:bg-slate-100"
                                }`}
                              >
                                <Volume2 size={16} />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── TAB 3: FLUENCY BOOSTERS & COMMON MISTAKES ── */}
                  {activeTab === "boosters" && (
                    <div className="flex flex-col gap-6">
                      {/* Fluency Boosters */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <Sparkles size={16} className="text-emerald-700" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                            5 Useful Fluency Boosters
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedTopic.fluencyBoosters.map((booster, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-2xl bg-white border border-slate-200 flex flex-col gap-1.5 shadow-xs"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-emerald-950">
                                  {booster.booster}
                                </span>
                                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                                  {booster.category}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600">
                                {booster.usage}
                              </p>
                              <div className="p-2 rounded-xl bg-slate-50 text-xs text-slate-700 font-medium">
                                Example: &ldquo;{booster.example}&rdquo;
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Common Mistakes & Corrections */}
                      <div className="flex flex-col gap-3 pt-2">
                        <div className="flex items-center gap-2">
                          <AlertCircle size={16} className="text-amber-600" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                            3 Common Mistakes Learners Make & Why
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {selectedTopic.commonMistakes.map((mistakeItem, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col gap-2 shadow-xs"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="text-xs text-red-700 font-semibold bg-red-50 px-2.5 py-1 rounded-xl border border-red-200">
                                  {mistakeItem.mistake}
                                </div>
                                <div className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200">
                                  {mistakeItem.correction}
                                </div>
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                                💡 <span className="font-semibold text-slate-700">Why:</span> {mistakeItem.explanation}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── TAB 4: CULTURE, ROLE-PLAY & CAN-DO ── */}
                  {activeTab === "practice" && (
                    <div className="flex flex-col gap-6">
                      {/* Cultural/Pragmatic Note */}
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Lightbulb size={16} className="text-amber-800" />
                          <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                            {selectedTopic.culturalPragmaticNote.title}
                          </h4>
                        </div>
                        <p className="text-xs text-amber-900 leading-relaxed">
                          <span className="font-bold">Textbook vs Reality:</span> {selectedTopic.culturalPragmaticNote.textbookVsReality}
                        </p>
                        {selectedTopic.culturalPragmaticNote.nativeRule && (
                          <p className="text-xs text-amber-950 font-semibold">
                            Native Rule: {selectedTopic.culturalPragmaticNote.nativeRule}
                          </p>
                        )}
                      </div>

                      {/* 3 Tier Role-Play Prompts */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                            3 Role-Play Prompts of Increasing Difficulty
                          </h4>
                          {onStartScenarioCall && (
                            <button
                              type="button"
                              onClick={() => {
                                onClose();
                                onStartScenarioCall(selectedTopic.scenarioId || selectedTopic.title);
                              }}
                              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                            >
                              <span>Start Voice Role-Play</span>
                              <ArrowRight size={13} />
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 gap-2.5">
                          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                            <span className="px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-900 text-[10px] font-extrabold uppercase shrink-0">
                              Level 1: Guided
                            </span>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              {selectedTopic.rolePlayPrompts.guided}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                            <span className="px-2 py-0.5 rounded-lg bg-teal-100 text-teal-900 text-[10px] font-extrabold uppercase shrink-0">
                              Level 2: Semi-Open
                            </span>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              {selectedTopic.rolePlayPrompts.semiOpen}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                            <span className="px-2 py-0.5 rounded-lg bg-purple-100 text-purple-900 text-[10px] font-extrabold uppercase shrink-0">
                              Level 3: Fully Open
                            </span>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              {selectedTopic.rolePlayPrompts.fullyOpen}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 5 Follow-up AI Questions */}
                      <div className="flex flex-col gap-2.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          5 Follow-Up Questions the AI Partner Can Ask
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedTopic.followUpQuestions.map((q, qIdx) => (
                            <div
                              key={qIdx}
                              className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-center gap-2.5"
                            >
                              <span className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 shrink-0">
                                {qIdx + 1}
                              </span>
                              <span>{q}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Self-Check: 3 Can-Do Statements */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-700" />
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                            Self-Check: 3 &ldquo;Can-Do&rdquo; Statements
                          </h4>
                        </div>
                        <div className="flex flex-col gap-2">
                          {selectedTopic.canDoStatements.map((statement, cIdx) => {
                            const key = `${selectedTopic.id}-cando-${cIdx}`;
                            const isChecked = !!checkedCanDos[key];
                            return (
                              <button
                                key={cIdx}
                                type="button"
                                onClick={() => toggleCanDo(key)}
                                className="flex items-center gap-2.5 text-left p-2 rounded-xl hover:bg-white transition-colors cursor-pointer"
                              >
                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                                  isChecked
                                    ? "bg-emerald-600 border-emerald-600 text-white"
                                    : "border-slate-300 bg-white"
                                }`}>
                                  {isChecked && <Check size={13} />}
                                </div>
                                <span className={`text-xs ${isChecked ? "line-through text-slate-400" : "text-slate-800"}`}>
                                  {statement}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
