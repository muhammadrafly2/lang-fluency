"use client";

import { motion } from "framer-motion";
import { User, MessageSquare } from "lucide-react";

interface StatsGaugeProps {
  score: number;
  level: string;
}

export function StatsGauge({ score, level }: StatsGaugeProps) {
  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
      {/* Gauge */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Glow behind the ring */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[30px]" />
        
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="70"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="12"
            fill="transparent"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="70"
            stroke="#00F2FF"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-space font-bold text-white tracking-tighter">{score}</span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{level}</span>
        </div>
      </div>

      {/* Stats List */}
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="mt-1 text-cyan-400">
            <User size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pronunciation</span>
            <span className="text-sm font-bold text-slate-200">Excellent</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 text-cyan-400">
            <MessageSquare size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Vocabulary</span>
            <span className="text-sm font-bold text-slate-200">Expanding</span>
          </div>
        </div>
      </div>
    </div>
  );
}
