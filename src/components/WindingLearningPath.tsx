"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, Star, Dumbbell, Trophy, Package, Sparkles,
  CheckCircle2, Lock, Play, Compass
} from "lucide-react";
import { PracticeUnit } from "@/data/interactivePracticeData";

interface WindingLearningPathProps {
  units: PracticeUnit[];
  activeUnitId?: string;
  onSelectUnit: (unit: PracticeUnit) => void;
  onClaimChest?: () => void;
}

export function WindingLearningPath({
  units,
  activeUnitId,
  onSelectUnit,
  onClaimChest,
}: WindingLearningPathProps) {
  const [chestOpened, setChestOpened] = useState(false);
  const activeUnit = units.find((u) => u.id === activeUnitId) || units[0];

  // S-curve lateral offsets: alternating left, center, right, center, left
  const getOffsetClass = (index: number) => {
    const cycle = index % 4;
    if (cycle === 0) return "translate-x-0"; // center
    if (cycle === 1) return "translate-x-8 sm:translate-x-12"; // right
    if (cycle === 2) return "translate-x-0"; // center
    return "-translate-x-8 sm:-translate-x-12"; // left
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 py-2 select-none">
      {/* ── Section & Unit Green Header matching Image 1 ── */}
      {activeUnit && (
        <div className="w-full max-w-md bg-[#58cc02] text-white p-4 sm:p-5 rounded-3xl shadow-md flex items-center justify-between border-b-4 border-[#46a302]">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-100">
              SECTION {activeUnit.sectionNumber}, UNIT {activeUnit.unitNumber}
            </span>
            <h3 className="text-base sm:text-lg font-space font-extrabold text-white leading-tight">
              {activeUnit.title}
            </h3>
            <span className="text-xs text-emerald-100/80 mt-0.5 line-clamp-1">
              {activeUnit.subtitle}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onSelectUnit(activeUnit)}
            className="w-10 h-10 rounded-2xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white border border-white/30 transition-all cursor-pointer shrink-0"
            title="Open Unit Syllabus"
          >
            <BookOpen size={20} />
          </button>
        </div>
      )}

      {/* ── Winding Path with Character & Alternating Circular Nodes ── */}
      <div className="relative w-full max-w-sm flex flex-col items-center py-4">
        
        {/* Floating Mascot Character matching Image 1 left side */}
        <div className="absolute left-0 top-32 -translate-x-6 sm:-translate-x-10 flex flex-col items-center pointer-events-none z-10">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-amber-50 border-2 border-emerald-400 p-1 shadow-lg flex items-center justify-center"
          >
            <img
              src="/aura-avatar.png"
              alt="Coach mascot"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
          <div className="flex items-center gap-0.5 mt-1.5 text-amber-400">
            <Star size={12} className="fill-amber-400" />
            <Star size={12} className="fill-amber-400" />
            <Star size={12} className="fill-amber-400" />
          </div>
        </div>

        {/* Trail Nodes */}
        <div className="flex flex-col items-center gap-7 w-full relative z-0">
          {units.map((unit, index) => {
            const isCompleted = index === 0;
            const isCurrent = index === 0; // or matching active
            const offsetClass = getOffsetClass(index);

            return (
              <div key={unit.id} className={`flex flex-col items-center ${offsetClass} relative`}>
                
                {/* Floating "START" Tooltip Bubble on Current Active Node (Image 1) */}
                {isCurrent && (
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 px-3.5 py-1 rounded-xl bg-white border-2 border-slate-200 text-[#58cc02] font-space font-extrabold text-[11px] uppercase tracking-wider shadow-md pointer-events-none z-20 flex flex-col items-center"
                  >
                    <span>START</span>
                    <span className="w-2 h-2 bg-white border-r-2 border-b-2 border-slate-200 rotate-45 -mb-2 mt-0.5" />
                  </motion.div>
                )}

                {/* Circular Path Button */}
                <button
                  type="button"
                  onClick={() => onSelectUnit(unit)}
                  className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg active:translate-y-1 ${
                    isCurrent
                      ? "bg-[#58cc02] hover:bg-[#46a302] text-white border-b-4 border-[#3e8f02] shadow-[#58cc02]/30 scale-105"
                      : isCompleted
                      ? "bg-amber-400 hover:bg-amber-500 text-slate-900 border-b-4 border-amber-600 shadow-amber-400/30"
                      : "bg-slate-200 hover:bg-slate-300 text-slate-400 border-b-4 border-slate-300"
                  }`}
                  title={`${unit.title} - Click to practice typing & speaking`}
                >
                  {isCurrent ? (
                    <BookOpen size={26} className="text-white drop-shadow-sm" />
                  ) : isCompleted ? (
                    <Star size={26} className="fill-amber-100 text-amber-700" />
                  ) : (
                    <Lock size={20} className="text-slate-400" />
                  )}
                </button>

                {/* Node Label */}
                <span className="text-[11px] font-bold text-slate-700 mt-2 text-center max-w-[120px] line-clamp-1">
                  Unit {unit.unitNumber}: {unit.title.split("(")[0].trim()}
                </span>
              </div>
            );
          })}

          {/* Dumbbell Workout Review Node (Matching Image 1) */}
          <div className="flex flex-col items-center translate-x-6 relative">
            <button
              type="button"
              onClick={() => onSelectUnit(units[0])}
              className="w-14 h-14 rounded-full bg-slate-200 hover:bg-emerald-100 text-slate-500 hover:text-emerald-800 border-b-4 border-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-sm active:translate-y-1"
              title="Practice workout drill"
            >
              <Dumbbell size={20} />
            </button>
            <span className="text-[10px] font-bold text-slate-400 mt-1">Review</span>
          </div>

          {/* Treasure Chest Bonus Node (Matching Image 1) */}
          <div className="flex flex-col items-center -translate-x-6 relative">
            <button
              type="button"
              onClick={() => {
                setChestOpened(true);
                onClaimChest?.();
              }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all cursor-pointer border-b-4 shadow-sm active:translate-y-1 ${
                chestOpened
                  ? "bg-amber-100 text-amber-700 border-amber-300"
                  : "bg-slate-200 hover:bg-amber-200 text-slate-500 hover:text-amber-800 border-slate-300"
              }`}
              title="Claim treasure chest reward"
            >
              <Package size={22} className={chestOpened ? "text-amber-600" : ""} />
            </button>
            <span className="text-[10px] font-bold text-slate-400 mt-1">
              {chestOpened ? "Claimed!" : "Chest"}
            </span>
          </div>

          {/* Final Trophy Node (Matching Image 1 bottom) */}
          <div className="flex flex-col items-center translate-x-0 relative">
            <div className="w-14 h-14 rounded-full bg-slate-200 text-slate-400 border-b-4 border-slate-300 flex items-center justify-center shadow-xs">
              <Trophy size={20} />
            </div>
            <span className="text-[10px] font-bold text-slate-400 mt-1">Section Exam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
