"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, Globe, ShieldAlert, X, Play } from "lucide-react";
import { Scenario } from "@/types";

interface CustomScenarioStudioModalProps {
  open: boolean;
  onClose: () => void;
  onLaunchCustomScenario: (customScenario: Scenario) => void;
}

const REGIONAL_DIALECTS = [
  "US — General American (West Coast)",
  "US — New York Executive Fast-Paced",
  "UK — Received Pronunciation (BBC Standard)",
  "UK — London Tech & City Colloquial",
  "Australia — Melbourne Casual Melodic",
  "Canada — Toronto Standard Professional",
  "Singapore — Contemporary Professional English",
  "Ireland — Dublin Articulate Cadence",
  "Scotland — Edinburgh Formal",
  "New Zealand — Auckland Modern",
  "South Africa — Cape Town Cosmopolitan",
  "Global — International Corporate Neutral",
];

let customScenarioCounter = 100;

export function CustomScenarioStudioModal({
  open,
  onClose,
  onLaunchCustomScenario,
}: CustomScenarioStudioModalProps) {
  const [personaName, setPersonaName] = useState("Marcus Vance");
  const [personaRole, setPersonaRole] = useState("Chief Product Officer");
  const [topic, setTopic] = useState("Debating AI Model Safety vs Speed to Market");
  const [dialect, setDialect] = useState(REGIONAL_DIALECTS[0]);
  const [conflictLevel, setConflictLevel] = useState<"Supportive" | "Challenging" | "Confrontational">("Challenging");
  const [cefr, setCefr] = useState<"B2" | "C1" | "C2">("C1");

  if (!open) return null;

  const handleLaunch = () => {
    customScenarioCounter += 1;
    const customScenario: Scenario = {
      id: `custom-${customScenarioCounter}`,
      title: `${personaRole}: ${topic.slice(0, 32)}...`,
      subtitle: `Custom Sandbox with ${personaName}`,
      category: "Debate & Pitch",
      difficulty: conflictLevel === "Confrontational" ? "Master" : conflictLevel === "Challenging" ? "Hard" : "Medium",
      xpReward: conflictLevel === "Confrontational" ? 220 : 140,
      cefrLevel: cefr,
      durationMinutes: 10,
      imageUrl: "/startup-pitch.jpg",
      description: `Custom scenario calibrated with ${personaName} (${personaRole}), speaking with ${dialect}. Conflict intensity set to ${conflictLevel}.`,
      keySkills: ["Custom Conflict", dialect.split("—")[0].trim(), cefr],
      starterPrompt: `I'm ready to discuss ${topic}. Let's get straight into it.`,
      aiFirstMessage: `Good to meet you. I've reviewed your brief on ${topic}, and while the vision is ambitious, I have critical reservations regarding risk. What is your strongest counter-argument?`,
    };

    onLaunchCustomScenario(customScenario);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-fade-in"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-panel w-full max-w-lg rounded-3xl p-6 border border-cyan-400/30 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-32 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Sliders size={16} />
            </div>
            <div>
              <h3 className="text-sm font-space font-bold text-white uppercase tracking-wider">
                Custom Scenario Studio
              </h3>
              <p className="text-[10px] text-slate-400">Calibrate AI persona, dialect, and conflict tension</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>

        {/* Form Body */}
        <div className="py-4 flex flex-col gap-4 max-h-[65vh] overflow-y-auto pr-1">
          {/* Persona Name & Role */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                AI Persona Name
              </label>
              <input
                type="text"
                value={personaName}
                onChange={(e) => setPersonaName(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                Role / Title
              </label>
              <input
                type="text"
                value={personaRole}
                onChange={(e) => setPersonaRole(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Topic & Premise */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">
              Topic & High-Stakes Objective
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Asking for Equity Stake in Seed-Stage Startup"
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
            />
          </div>

          {/* Regional Dialects (32 available options selector) */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1">
                <Globe size={12} className="text-cyan-400" /> Regional Dialect & Accent Profile
              </label>
              <span className="text-[10px] text-cyan-400">32 Dialects Calibrated</span>
            </div>
            <select
              value={dialect}
              onChange={(e) => setDialect(e.target.value)}
              className="bg-[#0b1120] border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
            >
              {REGIONAL_DIALECTS.map((d, i) => (
                <option key={i} value={d} className="bg-slate-900 text-white">
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Conversational Conflict Calibration Slider */}
          <div className="flex flex-col gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono uppercase text-slate-300 font-bold flex items-center gap-1.5">
                <ShieldAlert size={13} className="text-amber-400" /> Conversational Conflict Tension
              </label>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                conflictLevel === "Confrontational"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                  : conflictLevel === "Challenging"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
              }`}>
                {conflictLevel}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-1">
              {(["Supportive", "Challenging", "Confrontational"] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setConflictLevel(level)}
                  className={`py-2 px-1 text-center rounded-xl text-[11px] font-semibold transition-all border ${
                    conflictLevel === level
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(0,229,255,0.2)]"
                      : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              {conflictLevel === "Confrontational" && "Elena/Partner will interrupt politely, demand data proofs, and push C2 assertiveness."}
              {conflictLevel === "Challenging" && "Executive realism with counter-offers, trade-offs, and vocabulary scrutiny."}
              {conflictLevel === "Supportive" && "Guiding conversational partner focused on organic confidence and flow."}
            </p>
          </div>

          {/* CEFR Level Selection */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/5">
            <span className="text-[10px] font-mono uppercase text-slate-300 font-bold">
              Target CEFR Evaluation Benchmark
            </span>
            <div className="flex gap-1.5">
              {(["B2", "C1", "C2"] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setCefr(lvl)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all border ${
                    cefr === lvl
                      ? "bg-cyan-400 text-slate-950 border-cyan-400 shadow-[0_0_8px_#00e5ff]"
                      : "bg-white/5 text-slate-400 border-white/5 hover:text-white"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-semibold text-slate-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleLaunch}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_#00e5ff]"
          >
            <Play size={14} className="fill-slate-950" />
            <span>Launch Sandbox Call</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
