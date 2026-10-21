"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Gift, Clock, Sparkles, Zap, Lock, Unlock, X } from "lucide-react";
import { StreakVaultData } from "@/types";

interface StreakVaultCardProps {
  data: StreakVaultData;
  onClaimReward?: () => void;
}

export function StreakVaultCard({ data, onClaimReward }: StreakVaultCardProps) {
  const [showChestModal, setShowChestModal] = useState(false);
  const [chestUnlocked, setChestUnlocked] = useState(data.chestClaimed);

  const days = [
    { day: "M", active: true },
    { day: "T", active: true },
    { day: "W", active: true },
    { day: "T", active: true },
    { day: "F", active: true, isChest: true },
    { day: "S", active: false },
    { day: "S", active: false },
  ];

  return (
    <>
      <div className="glass-panel p-5 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left: Streak Counter & Multiplier */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              <Flame size={28} className="text-white fill-white animate-pulse" />
            </div>
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-slate-900 border border-orange-400 text-[10px] font-mono font-bold text-orange-400">
              {data.multiplier}x
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-space font-bold text-white leading-tight">
                Streak Vault & Rewards
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-[10px] font-bold">
                1.5x XP Boost
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              5 consecutive days of verbal practice. 15m daily speaking maintained.
            </p>

            {/* Micro Days Tracker */}
            <div className="flex items-center gap-1.5 mt-2.5">
              {days.map((d, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                    d.active
                      ? d.isChest
                        ? "bg-amber-400 text-slate-950 shadow-[0_0_8px_#facc15]"
                        : "bg-orange-500/30 text-orange-300 border border-orange-500/40"
                      : "bg-white/5 text-slate-600 border border-white/5"
                  }`}
                >
                  {d.isChest ? "🎁" : d.day}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Time-Locked Reward Chest Widget */}
        <div 
          onClick={() => setShowChestModal(true)}
          className="cursor-pointer w-full md:w-auto p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-cyan-500/10 border border-amber-400/30 hover:border-amber-400/60 transition-all flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              <Gift size={20} className="text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-amber-200">Day 5 Mystery Chest</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mt-0.5">
                <Clock size={12} className="text-amber-400" />
                <span>
                  {data.chestUnlockHours}h {data.chestUnlockMinutes}m remaining
                </span>
              </div>
            </div>
          </div>

          <button className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow-[0_0_10px_rgba(251,191,36,0.4)]">
            Inspect
          </button>
        </div>
      </div>

      {/* Reward Chest Inspection Modal */}
      <AnimatePresence>
        {showChestModal && (
          <div
            onClick={() => setShowChestModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel w-full max-w-sm rounded-3xl p-6 border border-amber-400/40 shadow-2xl relative overflow-hidden"
            >
              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Gift size={20} className="text-amber-400" />
                  <h4 className="text-sm font-space font-bold text-white uppercase tracking-wider">
                    Streak Mystery Chest
                  </h4>
                </div>
                <button
                  onClick={() => setShowChestModal(false)}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="py-6 flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.5)]">
                    <Gift size={48} className="text-slate-950" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-slate-950 border border-amber-400 text-amber-400 shadow">
                    {chestUnlocked ? <Unlock size={14} /> : <Lock size={14} />}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-space font-bold text-white">Tier-3 Vault Loot</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-[240px]">
                    Unlocks automatically upon finishing Day 5 spoken sessions. Contains exclusive tokens:
                  </p>
                </div>

                <div className="w-full grid grid-cols-2 gap-2 text-left text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                    <Zap size={14} className="text-cyan-400" />
                    <div>
                      <div className="font-bold text-white">+250 Bonus XP</div>
                      <div className="text-[10px] text-slate-400">Leagues booster</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                    <Sparkles size={14} className="text-amber-400" />
                    <div>
                      <div className="font-bold text-white">50 Gems 💎</div>
                      <div className="text-[10px] text-slate-400">Vault currency</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                  <Clock size={14} />
                  <span>Unlocks in {data.chestUnlockHours}h {data.chestUnlockMinutes}m</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setChestUnlocked(true);
                  onClaimReward?.();
                  setShowChestModal(false);
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-space font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)]"
              >
                Instant Unlock Preview
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
