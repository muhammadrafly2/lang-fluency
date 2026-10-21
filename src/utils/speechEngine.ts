// Speech Engine for Elena Vance (Oxford C2 Voice Coach)
// Engineered for natural, human-like cadence, Oxford accent prioritization, and phonetic smoothing.

export interface ElenaSpeechOptions {
  voiceURI?: string;
  rate?: number;
  pitch?: number;
  targetLanguage?: string;
  isLoudspeaker?: boolean;
  onStart?: () => void;
  onSentenceStart?: (sentence: string, index: number, total: number) => void;
  onEnd?: () => void;
  onError?: (err?: unknown) => void;
}

// Novelty and legacy robotic voices that should never be selected
const BLACKLISTED_VOICES = new Set([
  "fred", "albert", "bad news", "bahh", "bells", "boing", "bubbles",
  "cellos", "deranged", "good news", "hysterical", "pipe organ",
  "trinoids", "whisper", "zarvox", "ralph", "junior", "kathy",
  "organ", "jester", "superstar", "princess", "vicki"
]);

/**
 * Normalizes speech text so speech synthesis sounds human and natural,
 * avoiding robotic pronunciation of acronyms, symbols, and formatting.
 */
export function humanizeSpeechText(rawText: string, isJapanese: boolean = false): string {
  if (!rawText) return "";

  // 1. Strip markdown feedback blocks, metadata, and emojis
  let text = rawText
    .replace(/---[\s\S]*$/m, "") // strip feedback section
    .replace(/\[\s*tip:[\s\S]*?\]/gi, "")
    .replace(/[❌⚠️✅📝🎙️✨🚀☕💼⚡🎯💡🔤🔥💎]/g, "")
    .replace(/#{1,6}\s+/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`(.*?)`/g, "$1")
    .trim();

  if (isJapanese) {
    // For Japanese, clean conversational formatting and trailing ellipses
    text = text
      .replace(/[「」『』]/g, "")
      .replace(/……+/g, "…")
      .replace(/〜/g, "ー")
      .trim();
    return text;
  }

  // 2. English text smoothing: expand acronyms into phonetic spoken forms
  // Prevents speech engines from pronouncing "API" as "ap-eye" or "CAC" as "cack"
  const acronymReplacements: [RegExp, string][] = [
    [/\bAPI\b/g, "A-P-I"],
    [/\bAPIs\b/g, "A-P-Is"],
    [/\bPR\b/g, "pull request"],
    [/\bPRs\b/g, "pull requests"],
    [/\bCAC\b/g, "C-A-C"],
    [/\bARR\b/g, "A-R-R"],
    [/\bROI\b/g, "R-O-I"],
    [/\bLTV\b/g, "L-T-V"],
    [/\bLLM\b/g, "L-L-M"],
    [/\bLLMs\b/g, "L-L-Ms"],
    [/\bEFTPOS\b/g, "card payment"],
    [/\bCI\/CD\b/g, "C-I C-D"],
    [/\bPoC\b/g, "P-O-C"],
    [/\bSOC2\b/g, "S-O-C Two"],
    [/\bType II\b/g, "Type Two"],
    [/\bType 2\b/g, "Type Two"],
    [/\bWPM\b/g, "words per minute"],
    [/\bAI\b/g, "A-I"],
    [/\bCEO\b/g, "C-E-O"],
    [/\bCTO\b/g, "C-T-O"],
    [/\bVC\b/g, "V-C"],
    [/\bVCs\b/g, "V-Cs"],
    [/\bSaaS\b/g, "sass"],
    [/\bTAM\b/g, "tam"],
    [/\bSLA\b/g, "S-L-A"],
    [/\bMTTR\b/g, "M-T-T-R"],
    [/\bUI\b/g, "U-I"],
    [/\bUX\b/g, "U-X"],
  ];

  for (const [pattern, replacement] of acronymReplacements) {
    text = text.replace(pattern, replacement);
  }

  // 3. Numbers and percentages smoothing
  text = text
    .replace(/\b(\d+)\s*%/g, (_, num) => {
      const numberWords: Record<string, string> = {
        "5": "five percent",
        "10": "ten percent",
        "15": "fifteen percent",
        "20": "twenty percent",
        "25": "twenty-five percent",
        "30": "thirty percent",
        "40": "forty percent",
        "50": "fifty percent",
        "70": "seventy percent",
        "75": "seventy-five percent",
        "80": "eighty percent",
        "90": "ninety percent",
        "100": "one hundred percent",
      };
      return numberWords[num] || `${num} percent`;
    })
    .replace(/\$14B\b/g, "fourteen billion dollars")
    .replace(/\$14M\b/g, "fourteen million dollars")
    .replace(/\b120ms\b/g, "one hundred twenty milliseconds")
    .replace(/\b3\.5s\b/g, "three point five seconds");

  // 4. Conversational punctuation pauses
  // Replace em-dashes and long dashes with a comma so speech pauses naturally
  text = text
    .replace(/—|–|--/g, ", ")
    .replace(/\.{3,}/g, ", ")
    .replace(/\s+/g, " ")
    .trim();

  return text;
}

/**
 * Selects the highest quality, most natural human voice for Elena Vance.
 * Prioritizes Oxford/British female neural and enhanced voices.
 */
export function selectElenaVoice(
  voices: SpeechSynthesisVoice[],
  options: { isJapanese?: boolean; preferredURI?: string } = {}
): SpeechSynthesisVoice | null {
  if (!voices || voices.length === 0) return null;

  const { isJapanese = false, preferredURI } = options;

  // 1. If explicit user-selected voice URI provided and exists in available voices
  if (preferredURI) {
    const matched = voices.find((v) => v.voiceURI === preferredURI);
    if (matched) return matched;
  }

  // 2. Japanese Language Track
  if (isJapanese) {
    // Priority order for Japanese: Enhanced/Premium female voices
    const jaVoices = voices.filter(
      (v) => (v.lang.startsWith("ja") || v.lang.includes("JP")) && !isBlacklisted(v.name)
    );
    if (jaVoices.length > 0) {
      // Look for natural / enhanced voices like Kyoko or Nanami
      const bestJa = jaVoices.find(
        (v) =>
          v.name.includes("Kyoko") ||
          v.name.includes("Nanami") ||
          v.name.includes("Natural") ||
          v.name.includes("Enhanced") ||
          v.name.includes("Premium")
      );
      return bestJa || jaVoices[0];
    }
  }

  // 3. English Language Track (Elena Vance - Oxford C2 British Accent)
  const nonBlacklistedEnglish = voices.filter(
    (v) => v.lang.startsWith("en") && !isBlacklisted(v.name)
  );

  if (nonBlacklistedEnglish.length === 0) {
    return voices[0] || null;
  }

  // Priority Tier 1: British English Female Voices (Oxford Persona)
  const ukFemaleKeywords = ["Serena", "Stephanie", "Shelley", "Sandy", "Libby", "Sonia", "Maisie", "Google UK English Female"];
  for (const kw of ukFemaleKeywords) {
    const match = nonBlacklistedEnglish.find(
      (v) => (v.lang === "en-GB" || v.lang === "en_GB" || v.name.includes("UK")) && v.name.includes(kw)
    );
    if (match) return match;
  }

  // Priority Tier 2: Any British English Natural / Enhanced voice
  const ukNatural = nonBlacklistedEnglish.find(
    (v) =>
      (v.lang === "en-GB" || v.lang === "en_GB" || v.name.includes("UK")) &&
      (v.name.includes("Natural") || v.name.includes("Enhanced") || v.name.includes("Premium"))
  );
  if (ukNatural) return ukNatural;

  // Priority Tier 3: Any British English voice (e.g. Shelley, Sandy, Daniel, Kate, Martha)
  const anyUk = nonBlacklistedEnglish.find(
    (v) => v.lang === "en-GB" || v.lang === "en_GB" || v.name.includes("UK") || v.name.includes("British")
  );
  if (anyUk) return anyUk;

  // Priority Tier 4: High-Quality Natural / Enhanced English Female Voices (e.g. Ava, Jenny, Aria, Samantha Enhanced)
  const usNaturalFemale = nonBlacklistedEnglish.find(
    (v) =>
      (v.name.includes("Natural") || v.name.includes("Enhanced") || v.name.includes("Premium")) &&
      (v.name.includes("Female") || v.name.includes("Ava") || v.name.includes("Jenny") || v.name.includes("Aria") || v.name.includes("Samantha"))
  );
  if (usNaturalFemale) return usNaturalFemale;

  // Priority Tier 5: Natural Australian / Irish / Commonwealth female voices (Karen, Moira, Tessa)
  const commonwealthFemale = nonBlacklistedEnglish.find(
    (v) => v.name.includes("Karen") || v.name.includes("Moira") || v.name.includes("Tessa")
  );
  if (commonwealthFemale) return commonwealthFemale;

  // Priority Tier 6: Clean standard female English voice
  const standardFemale = nonBlacklistedEnglish.find(
    (v) => v.name.includes("Samantha") || v.name.includes("Female") || v.name.includes("Victoria")
  );
  if (standardFemale) return standardFemale;

  // Final fallback
  return nonBlacklistedEnglish[0];
}

function isBlacklisted(voiceName: string): boolean {
  const lower = voiceName.toLowerCase();
  for (const bad of BLACKLISTED_VOICES) {
    if (lower === bad || lower.startsWith(bad + " ") || lower.includes(`(${bad})`)) {
      return true;
    }
  }
  return false;
}

/**
 * Segments clean text into natural conversational sentence chunks
 * so the browser speech engine can take natural breath pauses and add
 * pitch inflections for questions.
 */
export function segmentSpeechClauses(text: string): { text: string; isQuestion: boolean }[] {
  if (!text) return [];

  // Match sentence terminators (. ! ?)
  const rawSegments = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const results: { text: string; isQuestion: boolean }[] = [];

  for (const raw of rawSegments) {
    const trimmed = raw.trim();
    if (!trimmed) continue;
    const isQuestion = trimmed.endsWith("?");
    results.push({ text: trimmed, isQuestion });
  }

  return results.length > 0 ? results : [{ text, isQuestion: text.includes("?") }];
}

// Keep active utterance references in window scope to prevent Chrome's garbage collector bug
const activeUtterancesSet = new Set<SpeechSynthesisUtterance>();

/**
 * High-Level Humanized Speech Synthesizer for Elena.
 * Plays text with natural cadence, sentence-level breathing pauses,
 * and pitch modulation for questions.
 * Returns a cancel function.
 */
export function speakElena(
  rawText: string,
  options: ElenaSpeechOptions = {}
): () => void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    options.onEnd?.();
    return () => {};
  }

  const {
    voiceURI,
    rate = 0.94, // Human conversational default (relaxed Oxford cadence)
    pitch = 1.02, // Warm, natural vocal presence
    targetLanguage = "english",
    isLoudspeaker = true,
    onStart,
    onSentenceStart,
    onEnd,
    onError,
  } = options;

  if (!isLoudspeaker) {
    onEnd?.();
    return () => {};
  }

  // Cancel any ongoing speech immediately
  window.speechSynthesis.cancel();
  activeUtterancesSet.clear();

  const isJapanese =
    targetLanguage === "japanese" ||
    /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(rawText);

  const cleanText = humanizeSpeechText(rawText, isJapanese);
  if (!cleanText) {
    onEnd?.();
    return () => {};
  }

  const voices = window.speechSynthesis.getVoices();
  const selectedVoice = selectElenaVoice(voices, { isJapanese, preferredURI: voiceURI });

  const clauses = segmentSpeechClauses(cleanText);
  let isCancelled = false;
  let currentIndex = 0;
  let pauseTimeoutId: ReturnType<typeof setTimeout> | null = null;

  const cancelSpeech = () => {
    isCancelled = true;
    if (pauseTimeoutId) clearTimeout(pauseTimeoutId);
    activeUtterancesSet.clear();
    window.speechSynthesis.cancel();
  };

  const playNextClause = () => {
    if (isCancelled || currentIndex >= clauses.length) {
      activeUtterancesSet.clear();
      onEnd?.();
      return;
    }

    const clause = clauses[currentIndex];
    const utterance = new SpeechSynthesisUtterance(clause.text);

    // Apply voice
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
    } else {
      utterance.lang = isJapanese ? "ja-JP" : "en-GB";
    }

    // Pacing & Pitch
    // For questions, slightly lift the pitch by +0.03 for natural human inquiry lilt
    utterance.rate = isJapanese ? Math.min(rate, 1.0) : rate;
    utterance.pitch = clause.isQuestion ? pitch + 0.04 : pitch;

    // Retain in memory set to prevent GC bug
    activeUtterancesSet.add(utterance);

    utterance.onstart = () => {
      if (currentIndex === 0) onStart?.();
      onSentenceStart?.(clause.text, currentIndex, clauses.length);
    };

    utterance.onend = () => {
      activeUtterancesSet.delete(utterance);
      if (isCancelled) return;

      currentIndex++;
      if (currentIndex < clauses.length) {
        // Natural human breath pause between sentences (180ms - 240ms)
        const breathPauseMs = clause.isQuestion ? 260 : 190;
        pauseTimeoutId = setTimeout(playNextClause, breathPauseMs);
      } else {
        onEnd?.();
      }
    };

    utterance.onerror = (e) => {
      activeUtterancesSet.delete(utterance);
      if (isCancelled) return;
      // If error is canceled, ignore
      if (e.error === "canceled" || e.error === "interrupted") return;
      currentIndex++;
      if (currentIndex < clauses.length) {
        pauseTimeoutId = setTimeout(playNextClause, 100);
      } else {
        onError?.(e);
        onEnd?.();
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  // If voices aren't loaded yet in browser, wait for voiceschanged
  if (voices.length === 0) {
    const handleVoices = () => {
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoices);
      if (!isCancelled) playNextClause();
    };
    window.speechSynthesis.addEventListener("voiceschanged", handleVoices);
    // Safety fallback if voiceschanged never fires
    setTimeout(() => {
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoices);
      if (!isCancelled && currentIndex === 0) playNextClause();
    }, 250);
  } else {
    playNextClause();
  }

  return cancelSpeech;
}
