// ── JLPT Roadmap Types ──
// Covers N5 → N1 with learning units, exercises, and kana/kanji reference

export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export interface KanaEntry {
  kana: string;
  romaji: string;
  type: "gojuuon" | "dakuten" | "handakuten" | "combo" | "special";
  row?: string; // e.g. "a-row", "ka-row"
}

export interface KanjiEntry {
  kanji: string;
  onyomi: string[];   // Sino-Japanese reading(s)
  kunyomi: string[];  // Native Japanese reading(s)
  meanings: string[];
  strokeCount: number;
  jlptLevel: JLPTLevel;
  grade?: number;     // Jouyou grade (1-6 for elementary, 7+ for secondary)
  exampleWords: KanjiExampleWord[];
}

export interface KanjiExampleWord {
  word: string;
  reading: string;
  meaning: string;
}

export interface JLPTExercise {
  id: string;
  type: "vocab-match" | "kanji-reading" | "grammar-fill" | "listening-comprehension" | "reading-comprehension" | "translate" | "particle-fill" | "conjugation" | "keigo-transform";
  prompt: string;
  promptAudio?: string;
  options?: string[];       // For multiple choice
  expectedAnswer: string;
  acceptableAnswers?: string[];
  explanation: string;
  xpReward: number;
}

export interface JLPTLearningUnit {
  id: string;
  unitNumber: number;
  title: string;
  titleJa: string;
  category: "vocabulary" | "grammar" | "kanji" | "reading" | "listening" | "mixed-review";
  description: string;
  objectives: string[];
  estimatedMinutes: number;
  keyVocabulary: VocabItem[];
  grammarPoints: GrammarPoint[];
  exercises: JLPTExercise[];
}

export interface VocabItem {
  word: string;
  reading: string;
  meaning: string;
  partOfSpeech: string;
  exampleSentence?: string;
  exampleReading?: string;
  exampleMeaning?: string;
}

export interface GrammarPoint {
  pattern: string;
  meaning: string;
  formation: string;
  exampleSentence: string;
  exampleReading: string;
  exampleMeaning: string;
  notes?: string;
}

export interface JLPTSection {
  id: string;
  sectionNumber: number;
  title: string;
  titleJa: string;
  description: string;
  units: JLPTLearningUnit[];
}

export interface JLPTLevelRoadmap {
  level: JLPTLevel;
  title: string;
  titleJa: string;
  subtitle: string;
  description: string;
  targetSkills: string[];
  estimatedStudyHours: number;
  vocabTarget: number;     // Approx number of vocabulary words
  kanjiTarget: number;     // Approx number of kanji
  grammarTarget: number;   // Approx number of grammar points
  sections: JLPTSection[];
}

export interface JLPTKanaReference {
  hiragana: KanaEntry[];
  katakana: KanaEntry[];
}

export interface JLPTKanjiReference {
  level: JLPTLevel;
  kanjiList: KanjiEntry[];
}
