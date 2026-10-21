"use client";

import { clsx } from "clsx";

interface MicOrbProps {
  isListening: boolean;
  onClick: () => void;
}

export function MicOrb({ isListening, onClick }: MicOrbProps) {
  return (
    <div className="relative flex flex-col items-center gap-6">
      {/* Glow effect */}
      <div className={clsx(
        "absolute rounded-full transition-all duration-1000",
        isListening ? "bg-cyan-400/20 blur-[60px] w-48 h-48" : "bg-cyan-400/5 blur-[40px] w-32 h-32"
      )} />

      {/* Main Orb Button */}
      <button
        id="mic-orb-btn"
        onClick={onClick}
        className={clsx(
          "relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer z-10",
          "border border-white/10 group overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]",
          isListening 
            ? "bg-[#0b0f1a] scale-110 shadow-[0_0_40px_rgba(0,212,255,0.2)] border-cyan-400/50" 
            : "bg-[#111827] hover:border-cyan-400/40 hover:scale-105"
        )}
        aria-label={isListening ? "Stop listening" : "Start listening"}
      >
        {/* Animated background pulse */}
        {isListening && (
          <div className="absolute inset-0 bg-cyan-400/5 animate-pulse" />
        )}

        {isListening ? (
          <div className="flex gap-[3px] items-center h-8">
            {[1, 2, 3, 2, 1].map((h, i) => (
              <span
                key={i}
                className="block w-1.5 rounded-full bg-cyan-400 animate-wave"
                style={{ height: h * 10, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        ) : (
          <svg className="w-10 h-10 text-cyan-400 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C10.3431 2 9 3.34315 9 5V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V5C15 3.34315 13.6569 2 12 2Z" fill="currentColor" />
            <path d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <div className="flex items-center gap-3">
        <span className={clsx(
          "w-1.5 h-1.5 rounded-full transition-all duration-300",
          isListening ? "bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" : "bg-cyan-400"
        )} />
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {isListening ? "Nexora is listening" : "Tap to speak"}
        </p>
      </div>
    </div>
  );
}
