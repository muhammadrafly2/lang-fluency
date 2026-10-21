"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { speakElena } from "@/utils/speechEngine";

interface UseTTSOptions {
  voiceURI?: string;
  rate?: number;
  pitch?: number;
  targetLanguage?: string;
}

export function useTTS({
  voiceURI,
  rate = 0.94,
  pitch = 1.02,
  targetLanguage = "english",
}: UseTTSOptions = {}) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const cancelRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };
    loadVoices();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
      if (cancelRef.current) cancelRef.current();
    };
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (!text) return;
      if (cancelRef.current) cancelRef.current();

      const cancel = speakElena(text, {
        voiceURI,
        rate,
        pitch,
        targetLanguage,
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });

      cancelRef.current = cancel;
    },
    [voiceURI, rate, pitch, targetLanguage]
  );

  const stop = useCallback(() => {
    if (cancelRef.current) cancelRef.current();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  return { speak, stop, isSpeaking, voices };
}
