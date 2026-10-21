"use client";

import { motion } from "framer-motion";
import { Mic, Sparkles, PhoneCall, Volume2, ShieldCheck } from "lucide-react";

interface ElenaCoachHeaderProps {
  onStartFreeCall: () => void;
  onOpenWarmup: () => void;
}

export function ElenaCoachHeader({ onStartFreeCall, onOpenWarmup }: ElenaCoachHeaderProps) {
  return (
    <div className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Background radial glow */}
      <div className="absolute -left-10 top-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Left: Elena Avatar + Waveform + Presence */}
      <div className="flex items-center gap-5 relative z-10">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_25px_rgba(0,229,255,0.35)] relative">
            <img
              src="/elena-coach.jpg"
              alt="Elena AI Coach"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Active status pulse */}
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-space font-extrabold text-white">Elena AI Coach</h2>
            <span className="px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono font-bold flex items-center gap-1">
              <Sparkles size={10} /> Online
            </span>
          </div>

          <p className="text-xs text-slate-300">
            Executive generative voice AI • Instant phonetic analysis & live roleplay simulation
          </p>

          {/* Animated voice waveform representing Elena presence */}
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1 h-5 px-2 rounded-lg bg-white/5 border border-white/5">
              {[3, 6, 9, 14, 8, 12, 16, 11, 7, 4].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ height: [h * 0.4, h, h * 0.4] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                  className="w-1 bg-cyan-400 rounded-full"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <span className="text-[11px] font-mono text-cyan-400 font-semibold">
              Voice engine ready (142ms latency)
            </span>
          </div>
        </div>
      </div>

      {/* Right: Quick-Start Actions */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 relative z-10 w-full md:w-auto">
        <button
          onClick={onOpenWarmup}
          className="flex-1 md:flex-initial px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
        >
          <Volume2 size={15} className="text-purple-400" />
          <span>Vocal Warmup (30s)</span>
        </button>

        <button
          onClick={onStartFreeCall}
          className="flex-1 md:flex-initial px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 text-xs font-space font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]"
        >
          <PhoneCall size={15} className="fill-slate-950" />
          <span>Tap to Start Free Call</span>
        </button>
      </div>
    </div>
  );
}
