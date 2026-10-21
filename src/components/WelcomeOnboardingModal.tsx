"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Globe, Volume2, Shield } from "lucide-react";

interface WelcomeOnboardingModalProps {
  isOpen: boolean;
  onGetStarted: () => void;
  onContinue: () => void;
}

export function WelcomeOnboardingModal({
  isOpen,
  onGetStarted,
  onContinue,
}: WelcomeOnboardingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in">
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        className="w-full max-w-sm sm:max-w-md bg-[#0a111e] text-white rounded-[36px] overflow-hidden shadow-2xl border border-white/10 relative flex flex-col justify-between"
        style={{ minHeight: "620px" }}
      >
        {/* Top Hero Image Area with Floating Speech Bubbles */}
        <div className="relative w-full h-80 overflow-hidden bg-gradient-to-b from-slate-800 to-[#0a111e]">
          <img
            src="/elena-coach.jpg"
            alt="Language Learning Coach"
            className="w-full h-full object-cover object-top opacity-85"
          />

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a111e] via-transparent to-black/30 pointer-events-none" />

          {/* Brand Logo & Name */}
          <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 font-bold shadow-md">
              <span className="text-base">M</span>
            </div>
            <span className="text-lg font-space font-extrabold text-white tracking-tight drop-shadow-md">
              Mingle Fluency
            </span>
          </div>

          {/* Floating Speech Bubble 1 (French) */}
          <motion.div
            initial={{ scale: 0.8, y: 10 }}
            animate={{ scale: 1, y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-28 right-6 bg-[#0f3d32] border border-emerald-400/30 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xl backdrop-blur-md"
          >
            <span className="text-sm">🇫🇷</span>
            <span>Bonjour</span>
          </motion.div>

          {/* Floating Speech Bubble 2 (English) */}
          <motion.div
            initial={{ scale: 0.8, y: 10 }}
            animate={{ scale: 1, y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 left-10 bg-[#0e3a47] border border-cyan-400/30 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl backdrop-blur-md"
          >
            <span className="text-base">🇺🇸</span>
            <span>Hello</span>
          </motion.div>

          {/* Floating Speech Bubble 3 (Japanese) */}
          <motion.div
            initial={{ scale: 0.8, y: 10 }}
            animate={{ scale: 1, y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            className="absolute top-36 left-4 bg-[#3d1424] border border-rose-400/30 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xl backdrop-blur-md"
          >
            <span className="text-sm">🇯🇵</span>
            <span>こんにちは</span>
          </motion.div>
        </div>

        {/* Content & Action Area */}
        <div className="p-6 sm:p-7 flex flex-col gap-4 text-center">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl sm:text-3xl font-space font-extrabold text-white leading-tight">
              Master a new language in just minutes a day
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Interactive voice conversations, live feedback, and curated cultural roadmaps.
            </p>
          </div>

          {/* Buttons matching image */}
          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={onGetStarted}
              className="w-full py-3.5 px-6 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 active:scale-[0.99] transition-all shadow-xl shadow-black/30 flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onContinue}
              className="w-full py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors"
            >
              I already have an account
            </button>
          </div>

          {/* Footer note */}
          <p className="text-[10px] text-slate-400 mt-1">
            By continuing, you agree to our{" "}
            <span className="underline hover:text-white cursor-pointer">Terms & Conditions</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
