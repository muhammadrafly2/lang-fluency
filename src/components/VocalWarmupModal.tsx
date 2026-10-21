"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Mic, Volume2, CheckCircle2, RotateCcw, X, Zap } from "lucide-react";

interface VocalWarmupModalProps {
  open: boolean;
  onClose: () => void;
  onCompleteWarmup: (xp: number) => void;
}

export function VocalWarmupModal({ open, onClose, onCompleteWarmup }: VocalWarmupModalProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [scoreResult, setScoreResult] = useState<{
    cadenceScore: number;
    pitchStability: string;
    articulationIndex: number;
    wpm: number;
  } | null>(null);

  const tongueTwister = "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?";

  const finishDrill = useCallback(() => {
    setIsRecording(false);
    const score = {
      cadenceScore: 96,
      pitchStability: "98% (Native Contour)",
      articulationIndex: 94,
      wpm: 142,
    };
    setScoreResult(score);
    onCompleteWarmup(40);
  }, [onCompleteWarmup]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            clearInterval(interval);
            finishDrill();
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, finishDrill]);

  const startDrill = () => {
    setIsRecording(true);
    setScoreResult(null);
    setSecondsLeft(30);
  };

  if (!open) return null;

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
        className="glass-panel w-full max-w-lg rounded-3xl p-6 border border-purple-500/30 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Volume2 size={16} />
            </div>
            <div>
              <h3 className="text-sm font-space font-bold text-white uppercase tracking-wider">
                Daily Vocal Calibration Warmup
              </h3>
              <p className="text-[10px] text-slate-400">30-second rapid-fire articulation drill</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>

        {/* Drill Content */}
        <div className="py-6 flex flex-col gap-5">
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 relative">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              Drill Prompt • Plosive & Cadence Articulation
            </span>
            <p className="text-base text-slate-100 font-serif leading-relaxed tracking-wide">
              &ldquo;{tongueTwister}&rdquo;
            </p>
          </div>

          {/* Telemetry Display or Live Waveform */}
          {isRecording ? (
            <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/30">
              <div className="flex items-center gap-1.5 h-8">
                {[1, 3, 5, 2, 6, 8, 4, 7, 3, 6, 2, 4].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: [h * 3, h * 6, h * 3] }}
                    transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.05 }}
                    className="w-1.5 bg-cyan-400 rounded-full"
                    style={{ height: `${h * 3}px` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-rose-400 flex items-center gap-1 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Calibrating Audio: {secondsLeft}s left
                </span>
              </div>
            </div>
          ) : scoreResult ? (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col gap-3 animate-slide-up-fade">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-space font-bold text-sm">
                  <CheckCircle2 size={18} />
                  <span>Calibration Complete (+40 XP)</span>
                </div>
                <span className="text-xl font-space font-extrabold text-emerald-300">
                  {scoreResult.cadenceScore}% Native
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Cadence Score</div>
                  <div className="font-bold text-white mt-0.5">96%</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Pitch Stability</div>
                  <div className="font-bold text-cyan-300 mt-0.5">98%</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Speaking Tempo</div>
                  <div className="font-bold text-white mt-0.5">142 WPM</div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {!isRecording && !scoreResult && (
              <button
                onClick={startDrill}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-white font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              >
                <Mic size={16} />
                <span>Start 30s Vocal Drill</span>
              </button>
            )}

            {isRecording && (
              <button
                onClick={finishDrill}
                className="w-full py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_#00e5ff]"
              >
                <CheckCircle2 size={16} />
                <span>Complete & Score Drill</span>
              </button>
            )}

            {scoreResult && (
              <div className="w-full flex items-center gap-2">
                <button
                  onClick={startDrill}
                  className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw size={14} />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-space font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_#00e5ff]"
                >
                  <Zap size={14} />
                  <span>Done (+40 XP)</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
