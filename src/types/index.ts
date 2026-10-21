// Shared types across Fluency AI

export type TabType = "today" | "talk" | "quests" | "mastery" | "scenarios" | "arena";

export type ScenarioDifficulty = "Easy" | "Medium" | "Hard" | "Master";

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  category: "Career & Tech" | "Daily Life" | "Travel" | "Debate & Pitch";
  difficulty: ScenarioDifficulty;
  xpReward: number;
  cefrLevel: "B1" | "B2" | "C1" | "C2";
  durationMinutes: number;
  imageUrl: string;
  isLocked?: boolean;
  minLevel?: number;
  description: string;
  keySkills: string[];
  starterPrompt: string;
  aiFirstMessage: string;
}

export interface ActivityRingData {
  speakingMinutes: number;
  speakingGoalMinutes: number;
  vocabAdded: number;
  vocabGoal: number;
  clarityPct: number;
  clarityGoalPct: number;
  overallCefrScore: number;
  cefrRating: string;
}

export interface DailyTarget {
  id: string;
  title: string;
  progress: number;
  target: number;
  unit: string;
  percentage: number;
  completed: boolean;
  actionLabel: string;
  actionScenarioId?: string;
}

export interface StreakVaultData {
  currentStreak: number;
  multiplier: number;
  chestUnlockHours: number;
  chestUnlockMinutes: number;
  chestClaimed: boolean;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  flag: string;
  tier: "Diamond" | "Obsidian" | "Platinum" | "Gold";
  xp: number;
  isCurrentUser?: boolean;
  trend: "up" | "down" | "same";
}

export interface QuestItem {
  id: string;
  title: string;
  category: "standup" | "vocab" | "shadowing";
  progress: number;
  max: number;
  rewardXp: number;
  completed: boolean;
  claimed: boolean;
}

export interface ConstellationNode {
  id: string;
  title: string;
  category: string;
  cefr: string;
  level: number;
  status: "completed" | "active" | "locked";
  x: number; // percentage in visualization
  y: number;
  description: string;
  scenarioId?: string;
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  topic: string;
  estimatedTime: string;
  japaneseText?: string;
  romaji?: string;
  englishMeaning: string;
  exampleSentence?: {
    japanese?: string;
    romaji?: string;
    english: string;
  };
  notes?: string;
}

export interface RoadmapSection {
  id: string;
  sectionNumber: number;
  title: string;
  titleJapanese?: string;
  levelBadge: string;
  goal: string;
  prerequisites: string[];
  learningSteps: RoadmapStep[];
  practiceActivities: {
    type: "speech" | "quiz" | "roleplay" | "dictation";
    title: string;
    description: string;
    scenarioId?: string;
  }[];
  totalEstimatedTime: string;
}

export interface CourseRoadmap {
  languageId: "english" | "japanese";
  languageName: string;
  flag: string;
  trackLabel: string;
  totalSections: number;
  totalEstimatedHours: string;
  sections: RoadmapSection[];
  constellationNodes: ConstellationNode[];
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  priceGems: number;
  owned: boolean;
  equipped?: boolean;
  category: "boost" | "cosmetic" | "dialect";
}

export interface InCallTelemetry {
  clarityPct: number;
  wpm: number;
  pacingStatus: "Optimal" | "Slightly Fast" | "Deliberate";
  fillersCount: number;
  flowMultiplier: number;
}

export interface PhoneticGuide {
  word: string;
  ipa: string;
}

export interface FeedbackItem {
  type: "error" | "warn" | "good";
  label: string;
  detail: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: Date;
  phonetics?: PhoneticGuide;
  executiveTip?: string;
  clarityScore?: number;
  fillersDetected?: string[];
  feedback?: FeedbackItem[];
}

export interface AppSettings {
  apiKey: string;
  targetLanguage: string;
  recognitionLang: string;
  level: string;
  autoplayTTS: boolean;
  phoneticHints: boolean;
  ttsVoiceURI: string;
  ttsSpeed: number;
  ttsPitch: number;
}

export const ENGLISH_LEVELS = [
  { id: "beginner", label: "Beginner (A1-A2)" },
  { id: "intermediate", label: "Intermediate (B1-B2)" },
  { id: "advanced", label: "Advanced (C1-C2)" },
];

export const TARGET_LANGUAGES = [
  { id: "english", label: "English", flag: "🇺🇸", speechLang: "en-US" },
  { id: "japanese", label: "Japanese", flag: "🇯🇵", speechLang: "ja-JP" },
  { id: "korean", label: "Korean", flag: "🇰🇷", speechLang: "ko-KR" },
  { id: "spanish", label: "Spanish", flag: "🇪🇸", speechLang: "es-ES" },
];

export type PracticeMode = "casual" | "roleplay" | "interview" | "debate";
export type TutorStyle = "supportive" | "direct" | "academic";

export interface PracticeModeOption {
  id: PracticeMode;
  label: string;
  icon: string;
}

export interface TutorStyleOption {
  id: TutorStyle;
  label: string;
}

export interface QuickPhraseOption {
  label: string;
  phrase: string;
}

export const PRACTICE_MODES: PracticeModeOption[] = [
  { id: "casual", label: "Casual Chat", icon: "💬" },
  { id: "roleplay", label: "Roleplay", icon: "🎭" },
  { id: "interview", label: "Job Interview", icon: "💼" },
  { id: "debate", label: "Debate", icon: "⚡" },
];

export const TUTOR_STYLES: TutorStyleOption[] = [
  { id: "supportive", label: "Supportive" },
  { id: "direct", label: "Direct" },
  { id: "academic", label: "Academic" },
];

export const QUICK_PHRASES: QuickPhraseOption[] = [
  { label: "Can you rephrase that?", phrase: "Could you please rephrase what you just said in simpler terms?" },
  { label: "How would a native say that?", phrase: "How would a native speaker say that?" },
  { label: "Give me an example", phrase: "Could you give me an example of how to use that in a sentence?" },
];


