"use client";

import { motion } from "framer-motion";
import { Mic, Sparkles, Volume2, ShieldCheck, TrendingUp } from "lucide-react";
import { ActivityRingData } from "@/types";

interface FluencyCoreRingsProps {
  data: ActivityRingData;
  onOpenLiveSession?: () => void;
}

export function FluencyCoreRings({ data, onOpenLiveSession }: FluencyCoreRingsProps) {
  // SVG Ring calculations
  // Outer Ring: Speaking Time (radius 78)
  const rOuter = 78;
  const circOuter = 2 * Math.PI * rOuter;
  const outerPct = Math.min(data.speakingMinutes / data.speakingGoalMinutes, 1);
  const offsetOuter = circOuter - outerPct * circOuter;

  // Middle Ring: Vocabulary Assimilation (radius 62)
  const rMiddle = 62;
  const circMiddle = 2 * Math.PI * rMiddle;
  const middlePct = Math.min(data.vocabAdded / data.vocabGoal, 1);
  const offsetMiddle = circMiddle - middlePct * circMiddle;

  // Inner Ring: Phonetic Clarity (radius 46)
  const rInner = 46;
  const circInner = 2 * Math.PI * rInner;
  const innerPct = Math.min(data.clarityPct / data.clarityGoalPct, 1);
  const offsetInner = circInner - innerPct * circInner;

  return (
    <div className="w-full glass-panel rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Concentric Rings Visualizer */}
      <div className="relative w-56 h-56 flex-shrink-0 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 180 180">
          {/* Background Track Rings */}
          <circle
            cx="90"
            cy="90"
            r={rOuter}
            stroke="rgba(0, 229, 255, 0.12)"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            cx="90"
            cy="90"
            r={rMiddle}
            stroke="rgba(16, 185, 129, 0.12)"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            cx="90"
            cy="90"
            r={rInner}
            stroke="rgba(139, 92, 246, 0.12)"
            strokeWidth="10"
            fill="transparent"
          />

          {/* Animated Value Rings */}
          {/* Outer: Speaking Minutes (Neon Cyan) */}
          <motion.circle
            cx="90"
            cy="90"
            r={rOuter}
            stroke="#00e5ff"
            strokeWidth="10"
            strokeDasharray={circOuter}
            initial={{ strokeDashoffset: circOuter }}
            animate={{ strokeDashoffset: offsetOuter }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            strokeLinecap="round"
            fill="transparent"
            className="drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]"
          />

          {/* Middle: Vocabulary (Electric Emerald) */}
          <motion.circle
            cx="90"
            cy="90"
            r={rMiddle}
            stroke="#10b981"
            strokeWidth="10"
            strokeDasharray={circMiddle}
            initial={{ strokeDashoffset: circMiddle }}
            animate={{ strokeDashoffset: offsetMiddle }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            strokeLinecap="round"
            fill="transparent"
            className="drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]"
          />

          {/* Inner: Phonetics Clarity (Purple) */}
          <motion.circle
            cx="90"
            cy="90"
            r={rInner}
            stroke="#8b5cf6"
            strokeWidth="10"
            strokeDasharray={circInner}
            initial={{ strokeDashoffset: circInner }}
            animate={{ strokeDashoffset: offsetInner }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            strokeLinecap="round"
            fill="transparent"
            className="drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
          />
        </svg>

        {/* Center CEFR Rating Badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Fluency Core</span>
          <span className="text-3xl font-space font-extrabold text-white tracking-tight leading-none mt-0.5">
            {data.overallCefrScore}
          </span>
          <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">{data.cefrRating}</span>
          </div>
        </div>
      </div>

      {/* Telemetry Details & Legend */}
      <div className="flex-1 flex flex-col justify-center gap-5 w-full">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-cyan-300 border border-white/5">
                TODAY&apos;S PULSE
              </span>
              <span className="text-xs text-slate-400">Targeting CEFR B2 → C2</span>
            </div>
            {onOpenLiveSession && (
              <button
                onClick={onOpenLiveSession}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Live Call HUD</span>
                <span className="text-sm">→</span>
              </button>
            )}
          </div>
          <h2 className="text-xl font-space font-bold text-white mt-1">Concentric Activity Telemetry</h2>
        </div>

        {/* 3 Activity Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Speaking Ring */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-cyan-500/20 hover:border-cyan-500/40 transition-all flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-cyan-400 uppercase flex items-center gap-1.5">
                <Mic size={13} className="text-cyan-400" /> Speaking
              </span>
              <span className="text-xs font-mono font-semibold text-slate-300">
                {data.speakingMinutes} / {data.speakingGoalMinutes}m
              </span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-cyan-400 h-full rounded-full transition-all duration-700 shadow-[0_0_8px_#00e5ff]"
                style={{ width: `${Math.min((data.speakingMinutes / data.speakingGoalMinutes) * 100, 100)}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400">80% of daily 15m cadence</span>
          </div>

          {/* Vocabulary Assimilation */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase flex items-center gap-1.5">
                <Sparkles size={13} className="text-emerald-400" /> Vocab Assimilated
              </span>
              <span className="text-xs font-mono font-semibold text-slate-300">
                +{data.vocabAdded} Expanding
              </span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-400 h-full rounded-full transition-all duration-700 shadow-[0_0_8px_#10b981]"
                style={{ width: `${Math.min((data.vocabAdded / data.vocabGoal) * 100, 100)}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400">Net-new idioms & C1 lexemes</span>
          </div>

          {/* Phonetic Accuracy */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider text-purple-400 uppercase flex items-center gap-1.5">
                <Volume2 size={13} className="text-purple-400" /> Phonetic Clarity
              </span>
              <span className="text-xs font-mono font-semibold text-slate-300">
                {data.clarityPct}% Excellent
              </span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-purple-400 h-full rounded-full transition-all duration-700 shadow-[0_0_8px_#8b5cf6]"
                style={{ width: `${Math.min((data.clarityPct / data.clarityGoalPct) * 100, 100)}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400">Native cadence & pitch stability</span>
          </div>
        </div>

        {/* Secondary Real-Time Telemetry Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-medium">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>Pronunciation Accuracy: <strong className="text-white">92% Excellent</strong> (Native Cadence)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs font-medium">
            <TrendingUp size={14} className="text-emerald-400" />
            <span>Vocabulary Assimilation: <strong className="text-white">+34 Expanding</strong> (C1 Idioms)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
