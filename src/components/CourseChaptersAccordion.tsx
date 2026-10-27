"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, ChevronDown, ChevronUp, CheckCircle2, 
  Volume2, PhoneCall, Keyboard 
} from "lucide-react";
import { RoadmapSection } from "@/types";
import { speakElena } from "@/utils/speechEngine";
import { getPracticeUnitsForLanguage, PracticeUnit } from "@/data/interactivePracticeData";

interface CourseChaptersAccordionProps {
  sections: RoadmapSection[];
  languageCode: string;
  onStartCall: (scenarioId?: string) => void;
  onOpenPracticeUnit?: (unit: PracticeUnit) => void;
  ttsVoiceURI?: string;
}

export function CourseChaptersAccordion({
  sections,
  languageCode,
  onStartCall,
  onOpenPracticeUnit,
  ttsVoiceURI,
}: CourseChaptersAccordionProps) {
  const practiceUnits = getPracticeUnitsForLanguage(languageCode);
  const [expandedChapterId, setExpandedChapterId] = useState<string>(
    sections.length > 0 ? sections[0].id : ""
  );

  return (
    <div className="flex flex-col gap-3 pt-2">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-sm font-space font-bold uppercase tracking-wider text-slate-800">
          Course Chapters & Lessons
        </h3>
        <span className="text-xs text-slate-400 font-medium">
          {sections.length} Chapters Available
        </span>
      </div>

      {sections.map((sec, idx) => {
        const isExpanded =
          expandedChapterId === sec.id ||
          (expandedChapterId === "ch-1" && idx === 0);
        const isCompleted = idx === 0;

        return (
          <div
            key={sec.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <button
              type="button"
              onClick={() =>
                setExpandedChapterId(isExpanded ? "" : sec.id)
              }
              className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold ${
                    isCompleted
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <BookOpen size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">
                      Chapter {sec.sectionNumber}: {sec.title}
                    </h4>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {sec.levelBadge.split("•")[0].trim()}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                    {sec.goal}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-bold text-slate-500 font-mono">
                  {sec.learningSteps.length} Steps
                </span>
                {isExpanded ? (
                  <ChevronUp size={18} className="text-slate-400" />
                ) : (
                  <ChevronDown size={18} className="text-slate-400" />
                )}
              </div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-slate-100 p-3 bg-slate-50/50 flex flex-col gap-2.5"
                >
                  {/* Learning Steps */}
                  {sec.learningSteps.map((step, sIdx) => {
                    const stepText =
                      step.targetText ||
                      step.japaneseText ||
                      step.exampleSentence?.target ||
                      step.exampleSentence?.japanese ||
                      step.exampleSentence?.english ||
                      "";
                    const stepPhonetic =
                      step.phoneticScript ||
                      step.romaji ||
                      step.exampleSentence?.phonetic ||
                      step.exampleSentence?.romaji ||
                      "";

                    return (
                      <div
                        key={sIdx}
                        className="p-3.5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={16} />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-900">
                                Lesson {step.stepNumber}: {step.title}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                ⏱️ {step.estimatedTime}
                              </span>
                            </div>

                            {stepText && (
                              <span className="text-xs font-semibold text-emerald-950 mt-1">
                                &ldquo;{stepText}&rdquo;
                              </span>
                            )}

                            {stepPhonetic && (
                              <span className="text-[11px] font-mono text-emerald-700">
                                {stepPhonetic}
                              </span>
                            )}

                            <span className="text-[11px] text-slate-500">
                              {step.englishMeaning}
                            </span>

                            {step.notes && (
                              <span className="text-[10px] text-slate-400 mt-0.5">
                                💡 {step.notes}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          {/* Audio Speak Button */}
                          {stepText && (
                            <button
                              type="button"
                              onClick={() => {
                                speakElena(stepText, {
                                  voiceURI: ttsVoiceURI,
                                  targetLanguage: languageCode,
                                  rate: 0.95,
                                  pitch: 1.02,
                                });
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-emerald-800 text-xs font-medium flex items-center gap-1 transition-all cursor-pointer"
                              title="Listen with native pronunciation"
                            >
                              <Volume2 size={13} />
                              <span className="hidden sm:inline">Listen</span>
                            </button>
                          )}

                          {/* Interactive Typing & Speaking Practice Button */}
                          <button
                            type="button"
                            onClick={() => {
                              const matchingUnit = practiceUnits[sIdx % practiceUnits.length] || practiceUnits[0];
                              onOpenPracticeUnit?.(matchingUnit);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-[#0f4a3c] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                            title="Interactive Typing & Speaking Practice"
                          >
                            <Keyboard size={13} />
                            <span>Practice</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {/* Practice Activities for this section */}
                  {sec.practiceActivities &&
                    sec.practiceActivities.length > 0 && (
                      <div className="pt-1 flex flex-col gap-1.5">
                        {sec.practiceActivities.map((act, aIdx) => (
                          <div
                            key={aIdx}
                            className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 flex items-center justify-between gap-3"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-6 h-6 rounded-lg bg-emerald-200 text-emerald-900 flex items-center justify-center font-bold text-xs shrink-0">
                                🎙️
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-900">
                                  {act.title}
                                </span>
                                <span className="text-[11px] text-slate-500 line-clamp-1">
                                  {act.description}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  const matchingUnit = practiceUnits[aIdx % practiceUnits.length] || practiceUnits[0];
                                  onOpenPracticeUnit?.(matchingUnit);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-white hover:bg-emerald-50 border border-emerald-300 text-[#0f4a3c] text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
                              >
                                <Keyboard size={12} />
                                <span className="hidden sm:inline">Type & Speak</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => onStartCall(act.scenarioId)}
                                className="px-3.5 py-1.5 rounded-lg bg-[#0f4a3c] hover:bg-[#0a352a] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                              >
                                Call
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
