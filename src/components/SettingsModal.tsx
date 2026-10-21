"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { AppSettings, ENGLISH_LEVELS, TARGET_LANGUAGES } from "@/types";
import { speakElena } from "@/utils/speechEngine";

interface SettingsModalProps {
  open: boolean;
  settings: AppSettings;
  voices: SpeechSynthesisVoice[];
  userName?: string;
  userAvatar?: string;
  userXp?: number;
  userGems?: number;
  streakDays?: number;
  userTier?: string;
  onChange: (partial: Partial<AppSettings>) => void;
  onClose: () => void;
  onSave: () => void;
}

export function SettingsModal({ 
  open, 
  settings, 
  voices, 
  userName = "Rafly",
  userAvatar = "/aura-avatar.png",
  userXp = 2190,
  userGems = 1420,
  streakDays = 5,
  userTier = "Diamond League • Top 5%",
  onChange, 
  onClose, 
  onSave 
}: SettingsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const previewCancelRef = useRef<(() => void) | null>(null);

  // Close on Escape & cleanup voice preview
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      if (previewCancelRef.current) previewCancelRef.current();
    };
  }, [onClose]);

  const handlePreviewVoice = () => {
    if (previewCancelRef.current) {
      previewCancelRef.current();
      previewCancelRef.current = null;
      setIsPlayingPreview(false);
      return;
    }
    const isJa = settings.targetLanguage === "japanese";
    const sample = isJa
      ? "こんにちは！エレナです。自然な発音と会話力で、一緒に練習しましょう。"
      : "Hello! I'm Elena, your Oxford executive voice coach. Let's practice with natural clarity, poise, and confidence.";

    setIsPlayingPreview(true);
    const cancel = speakElena(sample, {
      voiceURI: settings.ttsVoiceURI,
      rate: settings.ttsSpeed,
      pitch: settings.ttsPitch,
      targetLanguage: settings.targetLanguage,
      onEnd: () => setIsPlayingPreview(false),
      onError: () => setIsPlayingPreview(false),
    });
    previewCancelRef.current = cancel;
  };

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!open) return null;

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-250 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="bg-[#0b0f1a] w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden border border-white/10 animate-slide-up"
      >
        {/* Header */}
        <div className="px-7 pt-7 pb-3 flex items-center justify-between border-b border-white/5">
          <div>
            <h2 className="text-lg font-space font-extrabold text-white uppercase tracking-wider">Settings</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Learner Profile & AI Preferences</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-7 py-4 flex flex-col gap-5 max-h-[65vh] overflow-y-auto">
          {/* Related Profile Info Card (Replaces API key input) */}
          <div className="bg-gradient-to-br from-[#0c182a] via-[#0f1d30] to-[#111929] border border-cyan-500/25 rounded-2xl p-4 shadow-lg flex flex-col gap-3">
            <div className="flex items-center gap-3.5">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                  <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                </div>
                <span className="absolute -bottom-1 -right-1 text-xs leading-none">🇮🇩</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-space font-bold text-white truncate">{userName}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[9px] font-black text-[#00e5ff]">
                    YOU
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#00e5ff] truncate mt-0.5">
                  {userTier}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  Fluent Path • CEFR C1 Advanced
                </span>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
              <div className="bg-white/[0.03] rounded-xl py-1.5 px-2 flex flex-col items-center">
                <span className="text-xs">🔥</span>
                <span className="text-xs font-bold text-white mt-0.5">{streakDays}d Streak</span>
              </div>
              <div className="bg-white/[0.03] rounded-xl py-1.5 px-2 flex flex-col items-center">
                <span className="text-xs text-amber-400">✨</span>
                <span className="text-xs font-bold text-[#00e5ff] mt-0.5">{userXp.toLocaleString()} XP</span>
              </div>
              <div className="bg-white/[0.03] rounded-xl py-1.5 px-2 flex flex-col items-center">
                <span className="text-xs">💎</span>
                <span className="text-xs font-bold text-amber-400 mt-0.5">{userGems.toLocaleString()} Gems</span>
              </div>
            </div>

            {/* Server-Side AI Engine Connection (from .env) */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
              <span className="text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                OpenRouter AI Engine
              </span>
              <span className="text-emerald-400 font-mono text-[10px] font-bold bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                Active (.env)
              </span>
            </div>
          </div>

          {/* Study Language Info & Proficiency Level */}
          <div className="flex flex-col gap-3">
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Active Study Language
                </span>
                <span className="text-xs font-bold text-white mt-0.5 flex items-center gap-1.5">
                  <span>{settings.targetLanguage === "japanese" ? "🇯🇵 Japanese (日本語)" : "🇺🇸 English Fluency"}</span>
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full font-mono">
                Controlled on Home Screen
              </span>
            </div>

            {/* Level */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Proficiency Level</label>
              <select
                value={settings.level}
                onChange={(e) => onChange({ level: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white focus:border-cyan-400/50 outline-none appearance-none w-full"
              >
                {ENGLISH_LEVELS.map((l) => (
                  <option key={l.id} value={l.id} className="bg-[#0b0f1a]">
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* AI Voice & Persona Card (Full width) */}
          <div className="bg-white/[0.02] border border-slate-800/80 rounded-2xl p-3.5 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                AI Voice Persona
              </label>
              <span className="text-[10px] text-cyan-400 font-mono font-bold bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                {settings.targetLanguage === "japanese" ? "Tokyo Keigo Cadence" : "Oxford C2 Cadence"}
              </span>
            </div>

            <select
              value={settings.ttsVoiceURI}
              onChange={(e) => onChange({ ttsVoiceURI: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-cyan-400/50 outline-none appearance-none w-full"
            >
              <option value="" className="bg-[#0b0f1a]">
                {settings.targetLanguage === "japanese"
                  ? "⭐ Elena Vance (Tokyo Natural — 日本語 Auto)"
                  : "⭐ Elena Vance (Oxford Natural — Auto)"}
              </option>
              {voices
                .filter((v) => {
                  const lower = v.name.toLowerCase();
                  const bad = ["fred", "albert", "bad news", "bahh", "bells", "boing", "bubbles", "cellos", "deranged", "good news", "hysterical", "pipe organ", "trinoids", "whisper", "zarvox", "ralph", "junior", "kathy", "organ", "jester", "superstar"];
                  return !bad.some((b) => lower.includes(b));
                })
                .sort((a, b) => {
                  const isJa = settings.targetLanguage === "japanese";
                  if (isJa) {
                    const isJaA = a.lang.startsWith("ja") || a.name.includes("Japan");
                    const isJaB = b.lang.startsWith("ja") || b.name.includes("Japan");
                    if (isJaA && !isJaB) return -1;
                    if (!isJaA && isJaB) return 1;
                  } else {
                    const isUkA = a.lang === "en-GB" || a.lang === "en_GB" || a.name.includes("UK") || a.name.includes("Serena") || a.name.includes("Shelley") || a.name.includes("Sandy");
                    const isUkB = b.lang === "en-GB" || b.lang === "en_GB" || b.name.includes("UK") || b.name.includes("Serena") || b.name.includes("Shelley") || b.name.includes("Sandy");
                    if (isUkA && !isUkB) return -1;
                    if (!isUkA && isUkB) return 1;
                  }
                  return a.name.localeCompare(b.name);
                })
                .map((v) => {
                  const isJaVoice = v.lang.startsWith("ja") || v.name.includes("Japan");
                  const isUk = v.lang === "en-GB" || v.lang === "en_GB" || v.name.includes("UK");
                  const isNatural = v.name.includes("Natural") || v.name.includes("Enhanced") || v.name.includes("Premium");
                  const tag = isJaVoice ? "🇯🇵 Tokyo" : isUk ? "🇬🇧 Oxford" : isNatural ? "✨ Natural" : v.lang;
                  return (
                    <option key={v.voiceURI} value={v.voiceURI} className="bg-[#0b0f1a]">
                      {v.name} ({tag})
                    </option>
                  );
                })}
            </select>

            {/* Test Voice Button */}
            <div className="flex items-center justify-between pt-0.5">
              <button
                type="button"
                onClick={handlePreviewVoice}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isPlayingPreview
                    ? "bg-[#00e5ff] text-slate-950 font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] animate-pulse"
                    : "bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300"
                }`}
              >
                <span>{isPlayingPreview ? "⏹️ Stop Sample" : "🔊 Test Elena's Voice"}</span>
              </button>
              <span className="text-[10px] text-slate-400 font-medium">
                Human-like pause & prosody
              </span>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4 pt-1">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Speech Rate</label>
                <span className="text-xs font-bold text-cyan-400">{settings.ttsSpeed}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={settings.ttsSpeed}
                onChange={(e) => onChange({ ttsSpeed: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Voice Pitch</label>
                <span className="text-xs font-bold text-cyan-400">{settings.ttsPitch}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={settings.ttsPitch}
                onChange={(e) => onChange({ ttsPitch: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>

          {/* Toggles */}
          <div className="pt-3 border-t border-white/5 space-y-1">
            {[
              { key: "autoplayTTS",   label: "Auto-play AI voice" },
              { key: "phoneticHints", label: "Show phonetic hints" },
            ].map(({ key, label }) => (
              <div key={key} className="flex justify-between items-center p-2 hover:bg-white/[0.02] rounded-xl transition-colors">
                <span className="text-sm font-medium text-slate-300">{label}</span>
                <button
                  role="switch"
                  aria-checked={settings[key as keyof AppSettings] as boolean}
                  onClick={() => onChange({ [key]: !settings[key as keyof AppSettings] })}
                  className={clsx(
                    "relative w-11 h-6 rounded-full transition-all duration-300",
                    settings[key as keyof AppSettings]
                      ? "bg-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.4)]"
                      : "bg-white/10"
                  )}
                >
                  <span
                    className={clsx(
                      "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 shadow-sm",
                      settings[key as keyof AppSettings] ? "translate-x-5" : "translate-x-0"
                    )}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-white/[0.02] border-t border-white/5 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-2xl border border-white/10 text-sm font-bold text-slate-400 hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-400/20"
          >
            Apply Settings
          </button>
        </div>
      </div>
    </div>
  );
}
