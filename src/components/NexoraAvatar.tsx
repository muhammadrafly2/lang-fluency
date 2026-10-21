"use client";

import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

interface NexoraAvatarProps {
  isListening: boolean;
  isSpeaking: boolean;
}

export function NexoraAvatar({ isListening, isSpeaking }: NexoraAvatarProps) {
  const active = isListening || isSpeaking;

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8 select-none">
      {/* Dynamic Glow Rings */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1.1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl"
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.15, scale: 1.3 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 rounded-full bg-purple-500 blur-[80px]"
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Main Avatar Container */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: active ? [1, 1.02, 1] : 1,
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className={clsx(
          "relative w-full h-full rounded-full overflow-hidden border-2 transition-all duration-700 shadow-2xl",
          active ? "border-cyan-400/50 shadow-[0_0_50px_rgba(0,212,255,0.3)]" : "border-white/10 shadow-black/50"
        )}
      >
        {/* Avatar Image */}
        <img
          src="/nexora-avatar.png"
          alt="Nexora AI"
          className={clsx(
            "w-full h-full object-cover transition-all duration-700",
            active ? "scale-105 brightness-110" : "grayscale-[20%] brightness-90"
          )}
        />

        {/* Overlay Circuit Glow (Subtle) */}
        <AnimatePresence>
          {isSpeaking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-cyan-400/40 to-transparent pointer-events-none"
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Border Ring */}
      <div className={clsx(
        "absolute inset-[-4px] rounded-full border border-cyan-400/20 transition-all duration-700",
        active ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )} />
      
      {/* Voice Wave Overlay (Bottom) */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-16 pointer-events-none"
          >
            {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [h * 4, h * 12, h * 4] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                className="w-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
