"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Volume2, PhoneCall, Sparkles, BookOpen, Check, 
  ChevronRight, ArrowRight, Play, ExternalLink, Lightbulb
} from "lucide-react";
import { 
  LanguageTopicModule, 
  getLanguageTopicModules 
} from "@/data/multiLanguageTopicsData";
import { speakElena } from "@/utils/speechEngine";

interface LanguageEssentialsModulesProps {
  languageCode: string;
  languageName: string;
  onStartScenarioCall?: (scenarioId?: string) => void;
  ttsVoiceURI?: string;
}

export function LanguageEssentialsModules({
  languageCode,
  languageName,
  onStartScenarioCall,
  ttsVoiceURI,
}: LanguageEssentialsModulesProps) {
  const modules = getLanguageTopicModules(languageCode);
  const [selectedModule, setSelectedModule] = useState<LanguageTopicModule | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>("");
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);
  const cancelAudioRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (selectedModule && selectedModule.tabs.length > 0) {
      setActiveTabId(selectedModule.tabs[0].id);
    }
  }, [selectedModule]);

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
      targetLanguage: languageCode,
      rate: 0.95,
      pitch: 1.02,
      onEnd: () => setIsPlayingAudio(null),
      onError: () => setIsPlayingAudio(null),
    });
    cancelAudioRef.current = cancel;
  };

  if (!modules || modules.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs">
            ✨
          </div>
          <h3 className="text-sm font-space font-extrabold uppercase tracking-wider text-slate-800">
            {languageName} Essentials & Phonetics
          </h3>
        </div>
        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Interactive Audio Drills
        </span>
      </div>

      {/* Grid of Topic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {modules.map((mod) => (
          <button
            key={mod.id}
            type="button"
            onClick={() => setSelectedModule(mod)}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all text-left flex items-start justify-between gap-3 group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-800 group-hover:text-emerald-700 flex items-center justify-center text-lg font-bold shrink-0 transition-colors shadow-xs">
                {mod.badge}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                  {mod.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-950 transition-colors mt-0.5">
                  {mod.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {mod.description}
                </p>
              </div>
            </div>

            <ChevronRight
              size={18}
              className="text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all shrink-0 mt-2"
            />
          </button>
        ))}
      </div>

      {/* Modal Viewer for Selected Topic */}
      <AnimatePresence>
        {selectedModule && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedModule(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-slate-900"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0f4a3c] text-white flex items-center justify-center text-lg font-bold shadow-sm">
                    {selectedModule.badge}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-space">
                      {selectedModule.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {selectedModule.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedModule(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Tabs Bar */}
              <div className="flex items-center gap-2 px-5 pt-3 pb-1 border-b border-slate-100 overflow-x-auto no-scrollbar bg-slate-50/30">
                {selectedModule.tabs.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? "bg-[#0f4a3c] text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {tab.icon && <span>{tab.icon}</span>}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Body */}
              <div className="p-5 overflow-y-auto flex-1 flex flex-col gap-5">
                {(() => {
                  const currentTab =
                    selectedModule.tabs.find((t) => t.id === activeTabId) ||
                    selectedModule.tabs[0];
                  if (!currentTab) return null;

                  return (
                    <div className="flex flex-col gap-5">
                      {/* Summary Banner */}
                      <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-950 font-medium leading-relaxed">
                        {currentTab.content.summary}
                      </div>

                      {/* Subsections */}
                      {currentTab.content.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="flex flex-col gap-2.5">
                          <h4 className="text-xs font-bold uppercase tracking-wide text-slate-700">
                            {sub.title}
                          </h4>
                          {sub.description && (
                            <p className="text-xs text-slate-500">
                              {sub.description}
                            </p>
                          )}

                          <div className="grid grid-cols-1 gap-2 pt-1">
                            {sub.items.map((item, iIdx) => {
                              const itemId = `${currentTab.id}-${sIdx}-${iIdx}`;
                              const isPlaying = isPlayingAudio === itemId;

                              return (
                                <div
                                  key={iIdx}
                                  className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex items-start justify-between gap-3 shadow-xs"
                                >
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-bold text-slate-900">
                                        {item.targetText}
                                      </span>
                                      {item.tag && (
                                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                                          {item.tag}
                                        </span>
                                      )}
                                    </div>
                                    {item.phonetic && (
                                      <span className="text-xs text-emerald-700 font-mono font-medium">
                                        {item.phonetic}
                                      </span>
                                    )}
                                    <span className="text-xs text-slate-600">
                                      {item.english}
                                    </span>
                                    {item.detail && (
                                      <span className="text-[11px] text-slate-400 mt-0.5">
                                        💡 {item.detail}
                                      </span>
                                    )}
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => handlePlayAudio(item.targetText, itemId)}
                                    className={`p-2 rounded-xl border transition-all shrink-0 cursor-pointer ${
                                      isPlaying
                                        ? "bg-emerald-600 border-emerald-600 text-white animate-pulse"
                                        : "bg-slate-50 border-slate-200 text-slate-600 hover:text-emerald-800 hover:bg-slate-100"
                                    }`}
                                    title="Listen with native TTS"
                                  >
                                    <Volume2 size={16} />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}

                      {/* Drill Prompt Trigger */}
                      {currentTab.content.drillPrompt && (
                        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-2">
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                              Interactive Verbal Drill
                            </span>
                            <span className="text-xs font-semibold text-slate-900 mt-0.5">
                              {currentTab.content.drillPrompt.instruction}
                            </span>
                            <span className="text-sm font-bold text-emerald-950 mt-1">
                              &ldquo;{currentTab.content.drillPrompt.phraseTarget}&rdquo;
                            </span>
                            {currentTab.content.drillPrompt.phrasePhonetic && (
                              <span className="text-xs font-mono text-emerald-700">
                                {currentTab.content.drillPrompt.phrasePhonetic}
                              </span>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setSelectedModule(null);
                              onStartScenarioCall?.(currentTab.content.drillPrompt?.scenarioId);
                            }}
                            className="px-4 py-2 rounded-xl bg-[#0f4a3c] hover:bg-[#0a352a] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all shrink-0 cursor-pointer"
                          >
                            <PhoneCall size={13} />
                            <span>Practice in Live Call</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedModule(null)}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
