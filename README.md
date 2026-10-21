# Fluency AI — Spontaneous Spoken Fluency & AI Voice Coach

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Fluency AI** is an AI-powered conversational voice coach designed to build real-time spontaneous verbal fluency in **English** and **Japanese**. Featuring human-like prosody, live interactive voice calls with **Coach Elena Vance**, Apple Fitness-grade concentric telemetry rings, and adaptive multi-stage learning roadmaps.

[Live Demo](http://localhost:3000) • [Getting Started](#-getting-started) • [Features](#-key-features) • [Roadmaps](#-curriculum--learning-roadmaps) • [Architecture](#-tech-stack)

</div>

---

## 🌟 Key Features

### 1. 🏠 Home Screen Study Hub & 1-Click Language Switcher
- **Zero-Friction Switching**: Switch your active target language directly on the Home dashboard or top header (`[🇺🇸 EN | 🇯🇵 JA]`).
- **Dynamic AI Coach Voice Display**:
  - Automatically updates Elena Vance's profile and voice persona.
  - **`🔊 Listen to Voice`**: Real-time voice preview demonstrating natural cadence and accent.
  - **`📞 Start Practice Call`**: 1-click launch into spontaneous spoken dialogue.
- **Adaptive Study Plan**:
  - Instantly reconfigures the 4-section curriculum for the selected language.
  - Instructions and goals remain in clear English, while learning matter (Kanji, Kana, Romaji, expressions) adjusts to the target language.

---

### 2. 🎙️ Human-Like AI Voice Engine (Coach Elena Vance)
- **Natural Cadence & Prosody**:
  - **English**: Oxford C2 Executive Voice Coach (calibrated 0.94x speech rate, natural breathing pauses, British RP/Oxford accent selection).
  - **Japanese**: Tokyo Executive & Business Keigo Coach (0.96x mora-timed cadence, pitch accent tuning, natural polite inflection).
- **Intelligent Script Detection**: Analyzes text to avoid robotic synthetic voice artifacts across mixed English/Japanese characters.
- **Voice Fallback Pipeline**: Intelligently selects high-fidelity natural/enhanced voices (`Serena`, `Shelley`, `Kyoko`, `Otoya`, `Natural`) from the user's browser Web Speech engine.

---

### 3. 📞 Interactive Live Call Modal & Scenarios
- **Full-Duplex Verbal Dialogue**: Simulated cellular call interface with ringtones, real-time audio waveform visualizers, mute, speaker, and live speech recognition.
- **Speech-to-Text Engine**: High-accuracy Web Speech recognition auto-switching between `en-US` and `ja-JP`.
- **Pre-Built High-Stakes Scenarios**:
  - 🇺🇸 **Silicon Valley VC Pitch** (Defend product moat and address churn metrics).
  - 🇺🇸 **Tech Lead Agile Standup** (Explain API latency blockers and negotiate sprint scope).
  - 🇺🇸 **Salary & Equity Negotiation** (Anchor counter-offer and negotiate RSUs).
  - 🇯🇵 **Tokyo Izakaya Order & Small Talk** (Casual counter banter, daily food vocabulary).
  - 🇯🇵 **Missed Shinkansen Rebooking** (Midori no Madoguchi seat rescheduling).
  - 🇯🇵 **Tokyo Tech Agile Standup** (API refactoring and release timeline maedaoshi).
  - 🇯🇵 **Executive Pitch & Keigo Negotiation** (Formal Sonkeigo/Kenjougo business pitch).
- **Custom Scenario Studio**: Create and practice personalized roleplay scenarios on demand.

---

### 4. ⭕ Apple Fitness-Grade Concentric Activity Rings
- **Speaking Time Ring (Cyan)**: Tracks active verbal speaking minutes against your 15-minute daily target.
- **Vocabulary Assimilation Ring (Emerald)**: Monitors idioms, high-impact verbs, and keigo structures absorbed during calls.
- **Phonetic Clarity Ring (Purple)**: Live acoustic clarity percentage with CEFR C1/C2 rating telemetry.

---

### 5. 🗺️ 2D Constellation Map & Structured Roadmaps
- **4 Ordered Curriculum Sections**:
  - **Section 1**: Foundation, Phonetics & Spontaneous Daily Banter (JLPT N5-N4 / CEFR B2).
  - **Section 2**: Culinary, Travel & Social Life (JLPT N4-N3 / CEFR B2+).
  - **Section 3**: Tech Workplace, Cross-Functional Standups & Feedback (JLPT N2 / CEFR C1).
  - **Section 4**: Executive Negotiation, High-Stakes Pitches & Rhetoric (JLPT N1 / CEFR C2).
- **Detailed Step Breakdown**:
  - Numbered sequential topics with estimated study times.
  - Kanji/Kana, Romaji, and English meanings.
  - Realistic example sentences with phonetic transliterations.
  - Nuanced pronunciation and grammar tips (pitch accents, mora timing, honorific levels).
  - One-click **"Start Scenario Drill"** buttons linking directly into Elena voice calls.

---

### 6. 🏆 Gamification & Habit Loop
- **5-Day Streak Vault**: Track consecutive practice days with a 1.5x XP boost multiplier.
- **Dynamic Island Notification**: Real-time Apple-style status pill displaying active call telemetry and streak achievements.
- **Diamond League Leaderboard**: Compete against top learners, earning XP and Gems for speaking time and vocabulary milestones.
- **Vocal Warmup Drills**: Tongue-twisters, pitch-glides, and resonance drills before entering live calls.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server Actions) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Speech Recognition** | Browser Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`) |
| **Speech Synthesis** | Web Speech API (`speechSynthesis`) with Custom Prosody Engine |
| **LLM Engine** | [OpenRouter API](https://openrouter.ai/) (Configurable in `.env.local`) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.18 or higher (Node 20+ recommended)
- **Google Chrome** or **Microsoft Edge** (recommended for full Web Speech API recognition & natural TTS voices)
- An **OpenRouter API Key** ([Get key here](https://openrouter.ai/keys))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammadrafly2/lang-fluency.git
   cd lang-fluency
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the project root:
   ```bash
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```

5. **Open Application:**
   Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
fluent-ai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/route.ts          # Server-side OpenRouter LLM stream endpoint
│   │   ├── globals.css                # Custom neon glow, glassmorphism & typography
│   │   ├── layout.tsx                 # Root layout with Poppins & Space Grotesk fonts
│   │   └── page.tsx                   # Main app state hub (Home, Talk, Quests, Roadmap)
│   ├── components/
│   │   ├── HomeLanguageStudyHub.tsx   # 3-step Home hub (Select Language -> Voice -> Roadmap)
│   │   ├── LiveCallModal.tsx          # Full-duplex interactive voice call interface
│   │   ├── FluencyCoreRings.tsx       # Apple Fitness-style concentric telemetry rings
│   │   ├── MasteryView.tsx            # 2D Constellation skill tree & curriculum view
│   │   ├── ScenarioHubView.tsx        # High-stakes roleplay scenario catalog
│   │   ├── QuestsArenaView.tsx        # Gamified quests, challenges & league standings
│   │   ├── SettingsModal.tsx          # Profile & voice cadence preference controls
│   │   ├── DynamicIslandNotification.tsx # Ambient achievement & live call pill
│   │   ├── StreakVaultCard.tsx        # Daily streak tracker & reward chest
│   │   ├── VocalWarmupModal.tsx       # Articulation & vocal resonance drills
│   │   └── CustomScenarioStudioModal.tsx # User-created roleplay builder
│   ├── data/
│   │   └── learningRoadmaps.ts        # Comprehensive English & Japanese curriculum data
│   ├── hooks/
│   │   ├── useSpeechRecognition.ts    # Cross-browser microphone STT hook
│   │   └── useTTS.ts                  # Speech synthesis hook with voice auto-detection
│   ├── types/
│   │   └── index.ts                   # Complete TypeScript interfaces & data models
│   └── utils/
│       └── speechEngine.ts            # Elena Vance prosody, rate, and pitch engine
├── public/                            # High-res roleplay scenario avatars & assets
├── package.json
└── README.md
```

---

## 🌐 Curriculum & Learning Roadmaps

### 🇺🇸 English Fluency Track (CEFR B2 – C2)
1. **Section 1: Daily Banter & Casual Chats** — Idioms, small talk, coffee runs, colloquial transitions.
2. **Section 2: Professional Collaboration & Cross-Functional Syncs** — Standups, sprint retrospectives, disagreement etiquette.
3. **Section 3: Executive Presentations & Data Storytelling** — Metric framing, narrative arcs, handling tough Q&A.
4. **Section 4: High-Stakes Negotiations & Persuasion** — VC pitch defense, salary package anchoring, closing compromises.

### 🇯🇵 Japanese Spoken Track (JLPT N5 – N1)
1. **Section 1: 基礎日常会話 (Foundation & Daily Banter)** — Aizuchi (相槌), casual order forms, daily conversational cadence.
2. **Section 2: 飲食・移動・トラブル対応 (Culinary, Travel & Troubles)** — Izakaya orders, train rebooking, polite requests (`〜ていただく`).
3. **Section 3: ビジネスIT・開発現場の対話 (Agile Tech Workplace)** — Daily standups, blocker escalations, release timeline advancement (前倒し).
4. **Section 4: 経営陣ピッチ・高度価格交渉 (Executive Pitch & Keigo)** — Formal Keigo (Sonkeigo/Kenjougo), value proposition defense, concession bargaining.

---

## 🔒 Privacy & Security

- **Server-Side API Handling**: Your `OPENROUTER_API_KEY` stays on the Next.js server (`/api/chat`) and is never exposed to client bundles.
- **Audio Privacy**: Audio transcription and speech synthesis run locally in your browser via the standard Web Speech API. Only transcribed text is processed for AI roleplay replies.
- **Local Persistence**: User preferences and streak progress are stored safely in browser `localStorage`.

---

## 🤝 Contributing

Contributions, feedback, and pull requests are warmly welcomed!
Feel free to open an issue or submit a PR on [GitHub](https://github.com/muhammadrafly2/lang-fluency).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
