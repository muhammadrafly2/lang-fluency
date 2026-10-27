"use client";

import { useState } from "react";
import { 
  Trophy, Clock, Mic, CheckCircle2, 
  AudioLines, GitBranch, 
  Store, Snowflake, Zap, Headphones, 
  MessageSquare, Lock
} from "lucide-react";

interface QuestsArenaViewProps {
  userXp: number;
  userGems: number;
  onUpdateGems: (newGems: number) => void;
  onClaimQuest: (questId: string, xpReward: number) => void;
  onResumeDrill?: () => void;
  onStartScenario?: (scenarioId: string) => void;
}

export function QuestsArenaView({
  userXp = 2190,
  userGems = 1420,
  onUpdateGems,
  onClaimQuest,
  onResumeDrill,
  onStartScenario,
}: QuestsArenaViewProps) {
  // Quest 2 claim state
  const [quest2Claimed, setQuest2Claimed] = useState(false);
  const [purchasedPerks, setPurchasedPerks] = useState<Record<string, boolean>>({});

  const handleClaimQuest2 = () => {
    if (quest2Claimed) return;
    setQuest2Claimed(true);
    onClaimQuest("phrasal-verbs", 50);
  };

  const handleBuyPerk = (id: string, cost: number) => {
    if (purchasedPerks[id]) return;
    if (userGems < cost) {
      alert("Insufficient gems! Complete spoken drills to earn more gems.");
      return;
    }
    onUpdateGems(userGems - cost);
    setPurchasedPerks((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-slide-up-fade">
      {/* ── Responsive Container ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        
        {/* ── 1. DIAMOND LEAGUE HERO CARD (Full Width on Desktop) ── */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-white border border-[#e2e8f0] p-5 sm:p-6 shadow-sm">
          {/* Subtle ambient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: League Badge & Time Left */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] shadow-sm">
              <Trophy size={13} className="text-[#0f4a3c]" />
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#0f172a]">
                DIAMOND LEAGUE
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-[#64748b]">
              <Clock size={13} className="text-[#64748b]" />
              <span>2d 14h left</span>
            </div>
          </div>

          {/* Middle Row: Standing and Promotion Zone Badge */}
          <div className="flex items-end justify-between mt-4 mb-5 relative z-10">
            <div className="flex flex-col">
              <span className="text-xs text-[#64748b] font-medium">Current Standing</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
                  #3
                </span>
                <span className="text-sm font-bold text-[#10b981]">
                  Top 5%
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span>Promotion Zone</span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#64748b] mt-1 font-medium text-right">
                Top 7 advance to Master
              </span>
            </div>
          </div>

          {/* Bottom Row: Cutoff Progress Bar & Labels */}
          <div className="relative z-10">
            <div className="relative w-full bg-[#e2e8f0] h-2.5 rounded-full overflow-hidden">
              {/* Active User Rank Progress */}
              <div
                className="h-full bg-gradient-to-r from-[#0f4a3c] via-[#10b981] to-emerald-400 rounded-full"
                style={{ width: "68%" }}
              />
              {/* Promotion Cutoff Indicator */}
              <div 
                className="absolute top-0 bottom-0 left-[75%] w-[3px] bg-amber-400"
                title="Promotion Cutoff (#7)"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs mt-2 font-medium">
              <span className="text-[#64748b]">Rank #1 (3, 120 XP)</span>
              <span className="text-amber-600 font-semibold">Promotion Cutoff: #7 (1,820 XP)</span>
            </div>
          </div>
        </div>

        {/* ── 2. DAILY QUESTS SECTION ── */}
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#10b981] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-[#0f172a] tracking-tight">
                Daily Quests
              </h2>
            </div>
            <span className="text-xs text-[#64748b] font-medium">Resets at midnight</span>
          </div>

          {/* Container Card */}
          <div className="rounded-3xl bg-white border border-[#e2e8f0] p-4 sm:p-5 flex flex-col gap-3 shadow-sm">
            
            {/* Top Ring Summary Block */}
            <div className="flex items-center gap-4 pb-2 border-b border-[#e2e8f0]">
              {/* Circular SVG Progress Ring */}
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  {/* Background Track Ring */}
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    className="stroke-[#e2e8f0] fill-none"
                    strokeWidth="4.5"
                  />
                  {/* Emerald Progress Arc */}
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    className="fill-none transition-all duration-700"
                    stroke="#10b981"
                    strokeWidth="4.5"
                    strokeDasharray="163.36"
                    strokeDashoffset={quest2Claimed ? "0" : "55.5"}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center Ring Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                  <span className="text-sm font-black text-[#0f172a]">
                    {quest2Claimed ? "3/3" : "2/3"}
                  </span>
                  <span className="text-[9px] text-[#64748b] font-medium mt-0.5">
                    Done
                  </span>
                </div>
              </div>

              {/* Ring Info & Legend */}
              <div className="flex flex-col justify-center">
                <h3 className="text-sm sm:text-base font-bold text-[#0f172a] leading-tight">
                  Daily Ring {quest2Claimed ? "100%" : "66%"}
                </h3>
                <p className="text-xs text-[#64748b] mt-0.5">
                  {quest2Claimed
                    ? "All daily quests completed! +100 bonus claimed"
                    : "1 quest ready to claim bonus XP!"}
                </p>

                {/* Legend Dots */}
                <div className="flex items-center gap-3 mt-2 text-[11px] font-medium">
                  <span className="flex items-center gap-1.5 text-[#64748b]">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    Standup
                  </span>
                  <span className="flex items-center gap-1.5 text-[#64748b]">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Vocab
                  </span>
                  <span className="flex items-center gap-1.5 text-[#64748b]">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Shadow
                  </span>
                </div>
              </div>
            </div>

            {/* Quest 1: AI Voice Standups */}
            <div 
              onClick={() => onStartScenario?.("tech-standup")}
              className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-3 sm:p-3.5 flex items-center justify-between gap-3 hover:border-[#10b981]/40 hover:bg-white transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10b981] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mic size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-[#0f172a] truncate">
                      AI Voice Standups
                    </span>
                    <span className="text-xs font-bold text-[#10b981] shrink-0">
                      +40 XP
                    </span>
                  </div>
                  <div className="w-full bg-[#e2e8f0] h-1.5 rounded-full overflow-hidden mt-1.5">
                    <div className="w-1/2 bg-[#10b981] h-full rounded-full" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#64748b] mt-1 block">
                    1/2 completed
                  </span>
                </div>
              </div>
            </div>

            {/* Quest 2: Master 5 Phrasal Verbs */}
            <div className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-3 sm:p-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-[#0f172a] truncate">
                      Master 5 Phrasal Ver...
                    </span>
                    <div className="text-[10px] font-mono font-bold text-amber-600 flex items-center leading-none pr-1">
                      <span>5</span>
                      <span className="text-amber-400 mx-0.5">/</span>
                      <span>5</span>
                    </div>
                  </div>
                  <div className="w-full bg-[#e2e8f0] h-1.5 rounded-full overflow-hidden mt-1.5">
                    <div className="w-full bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-amber-600 mt-1 block">
                    {quest2Claimed ? "Claimed (+50 XP)" : "Ready to claim!"}
                  </span>
                </div>
              </div>

              {/* Claim Button */}
              <button
                onClick={handleClaimQuest2}
                disabled={quest2Claimed}
                className={`px-4 py-2 rounded-full font-bold text-xs shrink-0 transition-all ${
                  quest2Claimed
                    ? "bg-[#f1f5f9] text-[#94a3b8] border border-[#e2e8f0] cursor-default"
                    : "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm hover:brightness-110 active:scale-95"
                }`}
              >
                {quest2Claimed ? "Claimed" : "+50 XP"}
              </button>
            </div>

            {/* Quest 3: Shadowing with Elena */}
            <div 
              onClick={() => onStartScenario?.("coffee-twist")}
              className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-3 sm:p-3.5 flex items-center justify-between gap-3 hover:border-[#e2e8f0] transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0] text-[#94a3b8] flex items-center justify-center shrink-0 group-hover:text-[#64748b] transition-colors">
                  <AudioLines size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-[#64748b] truncate">
                      Shadowing with Ele...
                    </span>
                    <div className="flex flex-col items-end leading-tight shrink-0 pr-1">
                      <span className="text-[11px] font-bold text-[#64748b]">+30</span>
                      <span className="text-[9px] font-semibold text-[#94a3b8]">XP</span>
                    </div>
                  </div>
                  <div className="w-full bg-[#e2e8f0] h-1.5 rounded-full overflow-hidden mt-1.5">
                    <div className="w-0 bg-[#e2e8f0] h-full rounded-full" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#94a3b8] mt-1 block">
                    0/1 session
                  </span>
                </div>
              </div>

              {/* Start Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onStartScenario?.("coffee-twist");
                }}
                className="px-4 py-1.5 rounded-full bg-white hover:bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] text-xs font-medium shrink-0 active:scale-95 transition-all shadow-sm"
              >
                Start
              </button>
            </div>
          </div>
        </div>

        {/* ── 3. WEEKLY STANDINGS SECTION ── */}
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              {/* Podium icon */}
              <div className="flex items-end gap-0.5 text-[#10b981] w-4 h-4">
                <span className="w-1 h-2 bg-[#10b981] rounded-xs" />
                <span className="w-1 h-3.5 bg-[#10b981] rounded-xs" />
                <span className="w-1 h-2.5 bg-[#10b981] rounded-xs" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-[#0f172a] tracking-tight">
                Weekly Standings
              </h2>
            </div>
            <span className="text-xs font-bold text-[#10b981]">Top 10 Safe</span>
          </div>

          {/* Leaderboard Card */}
          <div className="rounded-3xl bg-white border border-[#e2e8f0] p-3 sm:p-4 flex flex-col gap-1.5 shadow-sm">
            
            {/* Rank 1: Kenji S. */}
            <div className="p-2 sm:p-2.5 rounded-2xl flex items-center justify-between bg-[#f8fafc] border border-[#e2e8f0] hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-lg w-6 text-center select-none">🥇</span>
                <div className="relative w-9 h-9 rounded-full shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Kenji S."
                    className="w-full h-full rounded-full object-cover border border-[#e2e8f0]"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs leading-none">🇯🇵</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight">
                    Kenji S.
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#64748b]">
                    Lvl 24 • Fluent Path
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm sm:text-base font-bold text-amber-500">
                  2,840
                </span>
                <span className="text-[10px] text-[#94a3b8] leading-none">XP</span>
              </div>
            </div>

            {/* Rank 2: Sarah D. */}
            <div className="p-2 sm:p-2.5 rounded-2xl flex items-center justify-between bg-[#f8fafc] border border-[#e2e8f0] hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-lg w-6 text-center select-none">🥈</span>
                <div className="relative w-9 h-9 rounded-full shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                    alt="Sarah D."
                    className="w-full h-full rounded-full object-cover border border-[#e2e8f0]"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs leading-none">🇫🇷</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight">
                    Sarah D.
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#64748b]">
                    Lvl 21 • Polyglot
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm sm:text-base font-bold text-[#0f172a]">
                  2,410
                </span>
                <span className="text-[10px] text-[#94a3b8] leading-none">XP</span>
              </div>
            </div>

            {/* Rank 3: Rafly (YOU) - Active User Highlight Banner */}
            <div className="p-2.5 sm:p-3 rounded-2xl flex items-center justify-between bg-gradient-to-r from-emerald-50 via-emerald-50/80 to-white border border-[#10b981]/30 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-base font-black text-[#0f4a3c] w-6 text-center">
                  3
                </span>
                <div className="relative w-9 h-9 rounded-full shrink-0">
                  <img
                    src="/aura-avatar.png"
                    alt="Rafly"
                    className="w-full h-full rounded-full object-cover border-2 border-[#10b981] shadow-sm"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs leading-none">🇮🇩</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-[#0f4a3c] leading-tight">
                      Rafly
                    </span>
                    <span className="bg-[#0f4a3c] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      YOU
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-emerald-700">
                    Diamond Tier • 5d Streak
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm sm:text-base font-bold text-[#0f4a3c]">
                  {userXp.toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-600 leading-none">XP</span>
              </div>
            </div>

            {/* Rank 4: David M. */}
            <div className="p-2 sm:p-2.5 rounded-2xl flex items-center justify-between bg-[#f8fafc] border border-[#e2e8f0] hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#94a3b8] w-6 text-center">4</span>
                <div className="relative w-9 h-9 rounded-full shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                    alt="David M."
                    className="w-full h-full rounded-full object-cover border border-[#e2e8f0]"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs leading-none">🇩🇪</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight">
                    David M.
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#64748b]">
                    Lvl 19 • Tech Path
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm sm:text-base font-bold text-[#0f172a]">
                  1,950
                </span>
                <span className="text-[10px] text-[#94a3b8] leading-none">XP</span>
              </div>
            </div>

            {/* Rank 5: Mei-Ling K. */}
            <div className="p-2 sm:p-2.5 rounded-2xl flex items-center justify-between bg-[#f8fafc] border border-[#e2e8f0] hover:bg-white transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#94a3b8] w-6 text-center">5</span>
                <div className="relative w-9 h-9 rounded-full shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Mei-Ling K."
                    className="w-full h-full rounded-full object-cover border border-[#e2e8f0]"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs leading-none">🇮🇩</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight">
                    Mei-Ling K.
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#64748b]">
                    Lvl 18 • Business
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm sm:text-base font-bold text-[#0f172a]">
                  1,890
                </span>
                <span className="text-[10px] text-[#94a3b8] leading-none">XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. SKILL TREE & MASTERY SECTION ── */}
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <GitBranch size={18} className="text-[#10b981]" />
              <h2 className="text-base sm:text-lg font-bold text-[#0f172a] tracking-tight">
                Skill Tree &amp; Mastery
              </h2>
            </div>
            <span className="text-xs text-[#64748b] font-medium">CEFR C1 Route</span>
          </div>

          {/* Interactive Skill Tree Node Path */}
          <div className="rounded-3xl bg-white border border-[#e2e8f0] p-6 flex flex-col items-center shadow-sm">
            
            {/* Node 1: Casual Banter (Mastered) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 flex items-center justify-center text-white shadow-md transform hover:scale-105 transition-transform cursor-pointer">
                <MessageSquare size={26} className="text-white fill-white" />
              </div>
              
              {/* 3 Gold Stars */}
              <div className="flex items-center gap-1 mt-2 text-amber-400 text-xs">
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-[#0f172a] mt-1">
                Casual Banter
              </h4>
              <p className="text-xs text-[#64748b] mt-0.5">
                Mastered • Level 5 Complete
              </p>
            </div>

            {/* Connecting Line 1 */}
            <div className="w-[3px] h-9 bg-[#10b981] my-1 rounded-full" />

            {/* Node 2: Tech & Agile Standups (Active) */}
            <div className="w-full max-w-sm rounded-3xl p-5 bg-emerald-50 border border-[#10b981]/30 shadow-sm flex flex-col items-center text-center relative">
              {/* Active Node Icon with 85% Badge */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#10b981] flex items-center justify-center text-[#0f4a3c] shadow-sm">
                  <div className="font-mono font-bold text-base tracking-tighter">
                    &gt;_
                  </div>
                </div>
                {/* 85% Badge */}
                <span className="absolute -top-1.5 -right-1.5 bg-[#0f4a3c] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-md">
                  85%
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-[#0f4a3c] mt-3">
                Tech &amp; Agile Standups
              </h4>
              <p className="text-xs text-[#64748b] mt-0.5">
                3/4 Modules Mastered
              </p>

              {/* Progress Bar */}
              <div className="w-full max-w-[220px] bg-[#e2e8f0] h-2 rounded-full overflow-hidden mt-3">
                <div className="w-[85%] bg-gradient-to-r from-[#0f4a3c] to-[#10b981] h-full rounded-full" />
              </div>

              {/* Resume Drill Button */}
              <button
                onClick={onResumeDrill || (() => onStartScenario?.("tech-standup"))}
                className="mt-3.5 px-6 py-2 rounded-full bg-[#0f4a3c] hover:bg-[#0d3f33] text-white font-bold text-xs shadow-sm active:scale-95 transition-all"
              >
                Resume Drill
              </button>
            </div>

            {/* Connecting Muted Line 2 */}
            <div className="w-[2px] h-9 bg-[#e2e8f0] my-1 rounded-full" />

            {/* Node 3: Public Speaking & Debate (Locked) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-13 h-13 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center text-[#94a3b8] shadow-inner">
                <Lock size={18} />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#64748b] mt-2">
                Public Speaking &amp; Debate
              </h4>
              <div className="text-[11px] text-[#94a3b8] flex items-center justify-center gap-1.5 mt-0.5">
                <Trophy size={11} className="text-[#94a3b8]" />
                <span>Unlocks at Player Level 10</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. PERK & LOOT VAULT SECTION ── */}
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <Store size={18} className="text-amber-500" />
              <h2 className="text-base sm:text-lg font-bold text-[#0f172a] tracking-tight">
                Perk &amp; Loot Vault
              </h2>
            </div>
            <span className="text-xs font-bold text-[#10b981] flex items-center gap-1">
              <span>✨</span> {userGems.toLocaleString()} Gems
            </span>
          </div>

          {/* 3 Perk Cards */}
          <div className="flex flex-col gap-3">
            {/* Perk 1: Streak Freeze Shield */}
            <div className="rounded-2xl bg-white border border-[#e2e8f0] p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Snowflake size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0f172a] leading-tight truncate">
                    Streak Freeze Shield
                  </h4>
                  <p className="text-[11px] text-[#64748b] mt-0.5 truncate">
                    Protects streak if you miss a day
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleBuyPerk("shield", 200)}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                  purchasedPerks["shield"]
                    ? "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"
                    : "bg-white hover:bg-emerald-50 border-[#10b981]/40 text-[#0f4a3c] active:scale-95 shadow-sm"
                }`}
              >
                <span>💎</span>
                <span>{purchasedPerks["shield"] ? "Owned" : "200"}</span>
              </button>
            </div>

            {/* Perk 2: Double XP Potion (30m) */}
            <div className="rounded-2xl bg-white border border-[#e2e8f0] p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Zap size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0f172a] leading-tight truncate">
                    Double XP Potion (30m)
                  </h4>
                  <p className="text-[11px] text-[#64748b] mt-0.5 truncate">
                    2x multiplier on all drills
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleBuyPerk("potion", 150)}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                  purchasedPerks["potion"]
                    ? "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"
                    : "bg-white hover:bg-emerald-50 border-[#10b981]/40 text-[#0f4a3c] active:scale-95 shadow-sm"
                }`}
              >
                <span>💎</span>
                <span>{purchasedPerks["potion"] ? "Active" : "150"}</span>
              </button>
            </div>

            {/* Perk 3: Accent Mastery Pack */}
            <div className="rounded-2xl bg-white border border-[#e2e8f0] p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                  <Headphones size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0f172a] leading-tight truncate">
                    Accent Mastery Pack
                  </h4>
                  <p className="text-[11px] text-[#64748b] mt-0.5 truncate">
                    London &amp; SF native sound drills
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleBuyPerk("accent", 400)}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                  purchasedPerks["accent"]
                    ? "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"
                    : "bg-white hover:bg-emerald-50 border-[#10b981]/40 text-[#0f4a3c] active:scale-95 shadow-sm"
                }`}
              >
                <span>💎</span>
                <span>{purchasedPerks["accent"] ? "Owned" : "400"}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
