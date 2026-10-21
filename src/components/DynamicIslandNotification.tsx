"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Sparkles, X, ChevronRight, Mic } from "lucide-react";

interface DynamicIslandNotificationProps {
  streak: number;
  xpBoost: number;
  isCalling?: boolean;
  onOpenCall?: () => void;
}

export function DynamicIslandNotification({
  streak = 5,
  xpBoost = 100,
  isCalling = false,
  onOpenCall,
}: DynamicIslandNotificationProps) {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !isCalling) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md pointer-events-none flex justify-center">
      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        className="pointer-events-auto cursor-pointer bg-black/90 text-white rounded-full border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.8)] backdrop-blur-2xl px-4 py-2 flex items-center justify-between gap-3 overflow-hidden select-none"
        animate={{
          width: expanded ? "100%" : "auto",
          borderRadius: expanded ? "24px" : "9999px",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
      >
        {/* Left icon / audio wave */}
        <div className="flex items-center gap-2">
          {isCalling ? (
            <div className="flex items-center gap-0.5 h-4 px-1">
              {[1, 2, 3, 2, 1].map((h, i) => (
                <span
                  key={i}
                  className="w-1 bg-cyan-400 rounded-full animate-wave-bar"
                  style={{ height: `${h * 4}px`, animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-xs shadow-[0_0_10px_#f97316]">
              <Flame size={13} className="text-white fill-white" />
            </div>
          )}

          {!expanded && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-200">
                {isCalling ? "Live Voice Session Active" : "Flawless Pronunciation"}
              </span>
              <span className="text-[11px] font-mono text-cyan-400 font-bold">
                {streak}-Day Streak +{xpBoost} XP
              </span>
            </div>
          )}
        </div>

        {/* Right side status / XP multiplier pill */}
        {!expanded && (
          <div className="flex items-center gap-1.5 pl-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 font-bold border border-cyan-400/30">
              1.5x
            </span>
          </div>
        )}

        {/* Expanded View */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full flex flex-col gap-3 py-2"
            >
              <div className="flex items-center justify-between w-full border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                    <Flame size={15} className="text-orange-400 fill-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Dynamic Island Telemetry</h4>
                    <p className="text-[10px] text-slate-400">Apple Fitness-grade cadence engine</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDismissed(true);
                  }}
                  className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white"
                >
                  <X size={12} />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                You&apos;ve maintained native prosody in <strong>5 consecutive sessions</strong>. Your streak multiplier is active at <strong>1.5x XP Boost</strong>.
              </p>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                  <Sparkles size={12} /> Next Vault Unlock: 2h 14m
                </span>
                {onOpenCall && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCall();
                    }}
                    className="px-3 py-1 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-[0_0_12px_#00e5ff]"
                  >
                    <span>Practice Now</span>
                    <ChevronRight size={13} />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
