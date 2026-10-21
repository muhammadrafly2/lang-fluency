"use client";

import { CheckCircle2, Play, ChevronRight, Mic, BookOpen, Volume2 } from "lucide-react";
import { DailyTarget } from "@/types";

interface DailyTargetWidgetsProps {
  targets: DailyTarget[];
  onActionClick: (target: DailyTarget) => void;
}

export function DailyTargetWidgets({ targets, onActionClick }: DailyTargetWidgetsProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "target-speak":
        return <Mic size={16} className="text-cyan-400" />;
      case "target-idioms":
        return <BookOpen size={16} className="text-emerald-400" />;
      case "target-drills":
        return <Volume2 size={16} className="text-purple-400" />;
      default:
        return <Play size={16} className="text-cyan-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-space font-bold uppercase tracking-wider text-slate-300">
          Daily Target Milestones
        </h3>
        <span className="text-xs text-slate-500 font-mono">Resets in 6h 12m</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {targets.map((t) => {
          const isDone = t.percentage >= 100;
          return (
            <div
              key={t.id}
              className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between gap-3 group relative overflow-hidden"
            >
              {/* Progress Bar background tint */}
              <div
                className="absolute inset-y-0 left-0 bg-white/[0.02] pointer-events-none transition-all duration-700"
                style={{ width: `${t.percentage}%` }}
              />

              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(t.id)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {t.title}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      {t.progress} / {t.target} {t.unit}
                    </span>
                  </div>
                </div>

                {isDone ? (
                  <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={16} />
                  </span>
                ) : (
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {t.percentage}%
                  </span>
                )}
              </div>

              {/* Progress track */}
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden relative z-10">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    isDone
                      ? "bg-emerald-400 shadow-[0_0_8px_#10b981]"
                      : "bg-cyan-400 shadow-[0_0_8px_#00e5ff]"
                  }`}
                  style={{ width: `${Math.min(t.percentage, 100)}%` }}
                />
              </div>

              {/* Action Button */}
              <button
                onClick={() => onActionClick(t)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all relative z-10 ${
                  isDone
                    ? "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                    : "bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,229,255,0.15)]"
                }`}
              >
                <span>{t.actionLabel}</span>
                <ChevronRight size={13} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
