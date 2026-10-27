// Core types for the 11-Area Comprehensive Language Curriculum (22 Topics per Language)

export type RegisterType = "casual" | "neutral" | "formal" | "idiom";

export interface CurriculumKeyPhrase {
  phrase: string;
  phonetic?: string;
  english: string;
  register: RegisterType;
  context?: string;
}

export interface CurriculumDialogueLine {
  speaker: string;
  speakerRole?: string;
  line?: string;
  text?: string;
  phonetic?: string;
  english: string;
  fillers?: string[];
}

export interface CurriculumFluencyBooster {
  booster: string;
  phonetic?: string;
  category: "filler" | "connector" | "discourse marker" | "idiom" | "formal" | "casual" | "neutral";
  usage: string;
  example: string;
}

export interface CurriculumLearnerMistake {
  mistake: string;
  correction: string;
  explanation: string;
}

export interface CurriculumRolePlayPrompts {
  guided: string;
  semiOpen: string;
  fullyOpen: string;
}

export interface CurriculumTopic {
  id: string;
  areaId: number;
  areaTitle: string;
  title: string;
  situation: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Master";
  cefrLevel: "A2" | "B1" | "B2" | "C1" | "C2";
  estimatedSpeakingTime: string;
  scenarioId?: string;
  keyPhrases: CurriculumKeyPhrase[];
  dialogue: CurriculumDialogueLine[];
  fluencyBoosters: CurriculumFluencyBooster[];
  commonMistakes: CurriculumLearnerMistake[];
  culturalPragmaticNote: {
    title: string;
    textbookVsReality: string;
    nativeRule?: string;
  };
  rolePlayPrompts: CurriculumRolePlayPrompts;
  followUpQuestions: string[];
  canDoStatements: string[];
}

export interface CurriculumArea {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  topics: CurriculumTopic[];
}
