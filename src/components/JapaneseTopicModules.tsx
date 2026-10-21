"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Volume2, PhoneCall, Sparkles, BookOpen, Check, 
  ChevronRight, ArrowRight, Play, ExternalLink, Lightbulb
} from "lucide-react";
import { JAPANESE_TOPIC_MODULES, JapaneseTopic, JapaneseTopicTab } from "@/data/japaneseTopicsData";
import { speakElena } from "@/utils/speechEngine";

interface JapaneseTopicModulesProps {
  onStartScenarioCall?: (scenarioId?: string) => void;
  ttsVoiceURI?: string;
}

export function JapaneseTopicModules({
  onStartScenarioCall,
  ttsVoiceURI,
}: JapaneseTopicModulesProps) {
  const [selectedTopic, setSelectedTopic] = useState<JapaneseTopic | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>("");
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);
  const cancelAudioRef = useRef<(() => void) | null>(null);

  // When a topic is selected, default to first tab
  useEffect(() => {
    if (selectedTopic && selectedTopic.tabs.length > 0) {
      setActiveTabId(selectedTopic.tabs[0].id);
    }
  }, [selectedTopic]);

  // Cleanup audio preview on unmount
  useEffect(() => {
    return () => {
      if (cancelAudioRef.current) cancelAudioRef.current();
    };
  }, []);

  const handlePlayAudio = (phrase: string, itemId: string) => {
    if (cancelAudioRef.current) {
      cancelAudioRef.current();
      cancelAudioRef.current = null;
      if (isPlayingAudio === itemId) {
        setIsPlayingAudio(null);
        return;
      }
    }

    setIsPlayingAudio(itemId);
    const cancel = speakElena(phrase, {
      voiceURI: ttsVoiceURI,
      targetLanguage: "japanese",
      rate: 0.96,
      pitch: 1.02,
      onEnd: () => setIsPlayingAudio(null),
      onError: () => setIsPlayingAudio(null),
    });
    cancelAudioRef.current = cancel;
  };

  const activeTab: JapaneseTopicTab | undefined = selectedTopic?.tabs.find(
    (t) => t.id === activeTabId
  ) || selectedTopic?.tabs[0];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <span>あ</span>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-space font-extrabold text-white">
              Japanese Learning Modules & Topics
            </h3>
            <p className="text-xs text-slate-400">
              Foundational characters, grammar, JLPT practice, culture & study techniques
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
          6 Core Modules
        </span>
      </div>

      {/* ── The 6 Topic Cards (Exact 2-column layout matching design) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {JAPANESE_TOPIC_MODULES.map((topic) => {
          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all duration-200 text-left flex items-start gap-4 group relative overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
            >
              {/* Subtle hover sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Circular Badge with Light Mint Tint matching screenshot */}
              <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center justify-center font-bold text-base shrink-0 shadow-sm group-hover:scale-105 group-hover:border-emerald-400 transition-all">
                <span>{topic.badge}</span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {topic.title}
                  </h4>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                  {topic.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Interactive Topic Content Modal ── */}
      <AnimatePresence>
        {selectedTopic && activeTab && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedTopic(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-900"
            >
              {/* Modal Top Header */}
              <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center justify-center font-bold text-base shrink-0 shadow-sm">
                    <span>{selectedTopic.badge}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold">
                        {selectedTopic.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-space font-extrabold text-slate-900">
                      {selectedTopic.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTopic(null)}
                  className="w-9 h-9 rounded-full bg-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Tab Navigation Pill Bar */}
              <div className="px-5 pt-3 border-b border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar bg-slate-50/50">
                {selectedTopic.tabs.map((tab) => {
                  const isActive = tab.id === activeTab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {tab.icon && <span>{tab.icon}</span>}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Modal Body Content (Scrollable) */}
              <div className="p-5 sm:p-6 overflow-y-auto flex flex-col gap-6 flex-1 bg-white">
                {/* Summary Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeTab.content.summary}
                  </p>
                </div>

                {/* Subsections Content */}
                <div className="flex flex-col gap-5">
                  {activeTab.content.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-2.5">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                          {sub.title}
                        </h4>
                        {sub.description && (
                          <p className="text-xs text-slate-500 mt-0.5">
                            {sub.description}
                          </p>
                        )}
                      </div>

                      {/* Items Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sub.items.map((item, iIdx) => {
                          const itemKey = `${sIdx}-${iIdx}`;
                          const isPlayingThis = isPlayingAudio === itemKey;

                          return (
                            <div
                              key={iIdx}
                              className="bg-slate-50/60 border border-slate-200 rounded-xl p-3 flex flex-col justify-between gap-2 hover:border-emerald-300 hover:bg-emerald-50/20 transition-colors shadow-sm"
                            >
                              <div className="flex flex-col gap-1">
                                <div className="flex items-start justify-between gap-2">
                                  {item.japanese && (
                                    <span className="text-sm font-bold text-emerald-800">
                                      {item.japanese}
                                    </span>
                                  )}
                                  {item.tag && (
                                    <span className="px-2 py-0.5 rounded-md bg-slate-200/80 text-[10px] font-mono text-slate-600 border border-slate-200 shrink-0 font-semibold">
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                                {item.romaji && (
                                  <span className="text-xs font-mono text-slate-500 italic">
                                    {item.romaji}
                                  </span>
                                )}
                                <span className="text-xs font-medium text-slate-800">
                                  {item.english}
                                </span>
                                {item.detail && (
                                  <span className="text-[11px] text-slate-500 mt-1 leading-snug">
                                    {item.detail}
                                  </span>
                                )}
                              </div>

                              {/* Audio preview button if Japanese phrase available */}
                              {item.japanese && (
                                <button
                                  type="button"
                                  onClick={() => handlePlayAudio(item.japanese!, itemKey)}
                                  className={`self-start mt-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
                                    isPlayingThis
                                      ? "bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30 animate-pulse"
                                      : "bg-white hover:bg-slate-100 text-emerald-700 border border-slate-200"
                                  }`}
                                >
                                  <Volume2 size={12} />
                                  <span>{isPlayingThis ? "Playing..." : "Listen"}</span>
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Drill Prompt & Elena Call Launcher */}
                {activeTab.content.drillPrompt && (
                  <div className="mt-2 bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <Sparkles size={14} className="text-emerald-700" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                          Live Pronunciation Drill
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">
                        {activeTab.content.drillPrompt.instruction}
                      </p>
                      <div className="bg-white rounded-xl p-3 border border-emerald-100 mt-1 flex flex-col gap-0.5 shadow-sm">
                        <span className="text-sm font-bold text-slate-900">
                          💬 {activeTab.content.drillPrompt.phraseJapanese}
                        </span>
                        <span className="text-xs font-mono text-emerald-700 italic">
                          {activeTab.content.drillPrompt.phraseRomaji}
                        </span>
                        <span className="text-xs text-slate-600">
                          &ldquo;{activeTab.content.drillPrompt.phraseEnglish}&rdquo;
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-col gap-2 shrink-0 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() =>
                          handlePlayAudio(
                            activeTab.content.drillPrompt!.phraseJapanese,
                            "drill-prompt"
                          )
                        }
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Volume2 size={14} />
                        <span>Listen to Native Audio</span>
                      </button>

                      {onStartScenarioCall && (
                        <button
                          type="button"
                          onClick={() => {
                            const scId = activeTab.content.drillPrompt?.scenarioId;
                            setSelectedTopic(null);
                            onStartScenarioCall(scId);
                          }}
                          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0f4a3c] hover:bg-[#0a352a] text-white flex items-center justify-center gap-2 shadow-md shadow-[#0f4a3c]/20 hover:brightness-105 active:scale-95 transition-all"
                        >
                          <PhoneCall size={14} />
                          <span>Practice with Elena</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

