"use client";

import { Clock, Zap, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import { Scenario } from "@/types";

interface NextUpRecommendationsProps {
  scenarios: Scenario[];
  onSelectScenario: (scenario: Scenario) => void;
}

export function NextUpRecommendations({ scenarios, onSelectScenario }: NextUpRecommendationsProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-space font-bold uppercase tracking-wider text-slate-300">
            Curated Next-Up Recommendations
          </h3>
          <p className="text-xs text-slate-400">Contextual roleplays matched to your B2-C2 mastery path</p>
        </div>
        <span className="text-xs font-semibold text-cyan-400">Hand-Picked for Rafly</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scenarios.map((s) => (
          <div
            key={s.id}
            onClick={() => onSelectScenario(s)}
            className="group cursor-pointer glass-panel rounded-3xl border border-white/5 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,229,255,0.12)]"
          >
            {/* Image Header with XP & CEFR badge */}
            <div className="relative h-40 w-full overflow-hidden bg-slate-900">
              <img
                src={s.imageUrl}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-black/40" />

              {/* CEFR Level Pill */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md text-[11px] font-mono font-bold text-cyan-300 border border-white/10">
                  {s.cefrLevel}
                </span>
                <span className={`px-2 py-0.5 rounded-xl text-[10px] font-bold uppercase tracking-wider ${
                  s.difficulty === "Hard"
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                    : s.difficulty === "Master"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                }`}>
                  {s.difficulty}
                </span>
              </div>

              {/* XP Badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-amber-400/30 flex items-center gap-1 text-[11px] font-mono font-bold text-amber-300">
                <Zap size={12} className="text-amber-400" />
                <span>+{s.xpReward} XP</span>
              </div>

              {/* Time Commitment */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <Clock size={13} className="text-cyan-400" />
                <span>{s.durationMinutes} mins practice</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 flex flex-col justify-between flex-1 gap-3">
              <div>
                <h4 className="text-sm font-space font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5">
                {s.keySkills.slice(0, 2).map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-lg bg-white/5 text-[10px] text-slate-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>Start Practice Call</span>
                <div className="w-6 h-6 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
