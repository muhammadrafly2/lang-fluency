# 🏗️ Nexora Architecture - Multi-Language System

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  Dashboard   │  │ Conversation │  │  Analytics   │         │
│  │     View     │  │     View     │  │     View     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐   │
│  │  Language Indicator: 🇺🇸 English | 🇯🇵 | 🇰🇷 | 🇪🇸    │   │
│  └────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SETTINGS MANAGEMENT                         │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  AppSettings {                                            │  │
│  │    targetLanguage: "english" | "japanese" | ...          │  │
│  │    recognitionLang: "en-US" | "ja-JP" | ...             │  │
│  │    level: "beginner" | "intermediate" | "advanced"       │  │
│  │    apiKey: string                                         │  │
│  │    ... voice settings ...                                 │  │
│  │  }                                                         │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                   │
│                              ▼                                   │
│                    localStorage (Browser)                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      INPUT PROCESSING                            │
│                                                                   │
│  ┌─────────────────┐              ┌─────────────────┐          │
│  │  Voice Input    │              │   Text Input    │          │
│  │  (Microphone)   │              │   (Keyboard)    │          │
│  └────────┬────────┘              └────────┬────────┘          │
│           │                                 │                    │
│           ▼                                 │                    │
│  ┌─────────────────────────────────────────┘                   │
│  │  Web Speech Recognition API                                  │
│  │  - Language: settings.recognitionLang                        │
│  │  - Continuous: true                                          │
│  │  - Interim Results: true                                     │
│  └────────┬─────────────────────────────────────────────────┘  │
│           │                                                      │
│           ▼                                                      │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  Transcript Processing                                    │  │
│  │  - Real-time display                                      │  │
│  │  - Final text extraction                                  │  │
│  └────────┬─────────────────────────────────────────────────┘  │
└───────────┼──────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API LAYER                                │
│                                                                   │
│  POST /api/chat                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Request Body: {                                          │  │
│  │    message: string                                        │  │
│  │    history: ChatMessage[]                                 │  │
│  │    apiKey: string                                         │  │
│  │    mode: PracticeMode                                     │  │
│  │    tutorStyle: TutorStyle                                 │  │
│  │    level: LanguageLevel                                   │  │
│  │    targetLanguage: TargetLanguage  ← NEW!                │  │
│  │  }                                                         │  │
│  └────────┬─────────────────────────────────────────────────┘  │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  buildSystemPrompt(mode, style, level, targetLanguage)   │  │
│  │                                                            │  │
│  │  Language Map:                                            │  │
│  │  ┌────────────────────────────────────────────────────┐  │  │
│  │  │ english: {                                          │  │  │
│  │  │   name: "English"                                   │  │  │
│  │  │   culturalContext: "Natural expressions..."         │  │  │
│  │  │ }                                                    │  │  │
│  │  │ japanese: {                                         │  │  │
│  │  │   name: "Japanese"                                  │  │  │
│  │  │   nativeName: "日本語"                              │  │  │
│  │  │   culturalContext: "Keigo system..."                │  │  │
│  │  │ }                                                    │  │  │
│  │  │ korean: {                                           │  │  │
│  │  │   name: "Korean"                                    │  │  │
│  │  │   nativeName: "한국어"                              │  │  │
│  │  │   culturalContext: "Honorifics..."                  │  │  │
│  │  │ }                                                    │  │  │
│  │  │ spanish: {                                          │  │  │
│  │  │   name: "Spanish"                                   │  │  │
│  │  │   nativeName: "Español"                             │  │  │
│  │  │   culturalContext: "Formal/informal..."             │  │  │
│  │  │ }                                                    │  │  │
│  │  └────────────────────────────────────────────────────┘  │  │
│  │                                                            │  │
│  │  Generates:                                                │  │
│  │  "You are Nexora, expert [Language] fluency coach..."     │  │
│  │  "Respond ONLY in [Language]..."                          │  │
│  │  "[Language-specific cultural guidance]..."               │  │
│  └────────┬─────────────────────────────────────────────────┘  │
└───────────┼──────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      OPENROUTER API                              │
│                                                                   │
│  POST https://openrouter.ai/api/v1/chat/completions             │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Headers:                                                 │  │
│  │    Authorization: Bearer [API_KEY]                        │  │
│  │    Content-Type: application/json                         │  │
│  │                                                            │  │
│  │  Body: {                                                  │  │
│  │    model: "nvidia/nemotron-3-nano-30b-a3b:free"          │  │
│  │    messages: [                                            │  │
│  │      { role: "system", content: [system prompt] }        │  │
│  │      { role: "user", content: [user message] }           │  │
│  │      { role: "assistant", content: [AI response] }       │  │
│  │      ...                                                  │  │
│  │    ]                                                      │  │
│  │  }                                                         │  │
│  └────────┬─────────────────────────────────────────────────┘  │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  AI Model Processing                                      │  │
│  │  - Understands target language                            │  │
│  │  - Generates response in target language                  │  │
│  │  - Provides grammar feedback                              │  │
│  │  - Cultural context awareness                             │  │
│  └────────┬─────────────────────────────────────────────────┘  │
└───────────┼──────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    RESPONSE PROCESSING                           │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  AI Response Format:                                      │  │
│  │                                                            │  │
│  │  [Conversational response in target language]             │  │
│  │                                                            │  │
│  │  ---                                                       │  │
│  │  📝 Feedback                                              │  │
│  │                                                            │  │
│  │  ✅ Great: [positive points]                             │  │
│  │  ⚠️ Suggestion: [improvements]                           │  │
│  │  ❌ Error: [corrections]                                 │  │
│  └────────┬─────────────────────────────────────────────────┘  │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  parseFeedback(responseText)                              │  │
│  │  - Extracts ✅ ⚠️ ❌ markers                             │  │
│  │  - Structures feedback items                              │  │
│  │  - Returns FeedbackItem[]                                 │  │
│  └────────┬─────────────────────────────────────────────────┘  │
└───────────┼──────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      OUTPUT RENDERING                            │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ChatMessage Display                                      │  │
│  │  - User message bubble                                    │  │
│  │  - AI response bubble (in target language)                │  │
│  │  - Feedback panel with color coding                       │  │
│  └────────┬─────────────────────────────────────────────────┘  │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Text-to-Speech (Optional)                                │  │
│  │                                                            │  │
│  │  if (settings.autoplayTTS && !muteTTS) {                 │  │
│  │    speak(response)                                        │  │
│  │  }                                                         │  │
│  │                                                            │  │
│  │  Web Speech Synthesis API:                                │  │
│  │  - Voice: settings.ttsVoiceURI                            │  │
│  │  - Rate: settings.ttsSpeed                                │  │
│  │  - Pitch: settings.ttsPitch                               │  │
│  └────────┬─────────────────────────────────────────────────┘  │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Statistics Update                                        │  │
│  │  - Increment message count                                │  │
│  │  - Update correction count                                │  │
│  │  - Calculate fluency score                                │  │
│  │  - Update streak                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
┌──────────┐
│   USER   │
└────┬─────┘
     │
     │ 1. Speaks/Types in target language
     ▼
┌─────────────────┐
│  Speech/Text    │
│     Input       │
└────┬────────────┘
     │
     │ 2. Transcript generated
     ▼
┌─────────────────┐
│   React State   │
│   (messages)    │
└────┬────────────┘
     │
     │ 3. API call with targetLanguage
     ▼
┌─────────────────┐
│   API Route     │
│  /api/chat      │
└────┬────────────┘
     │
     │ 4. Build language-specific prompt
     ▼
┌─────────────────┐
│   OpenRouter    │
│   (AI Model)    │
└────┬────────────┘
     │
     │ 5. Response in target language + feedback
     ▼
┌─────────────────┐
│  Parse & Store  │
│   (messages)    │
└────┬────────────┘
     │
     │ 6. Render & TTS
     ▼
┌─────────────────┐
│   UI Display    │
│   + Audio       │
└─────────────────┘
```

---

## Component Hierarchy

```
App (page.tsx)
│
├── Header
│   ├── Language Indicator (NEW!)
│   │   └── Globe Icon + Flag + Language Name
│   ├── Live Status Badge
│   ├── Notifications
│   └── Streak Counter
│
├── Sidebar (Desktop) / Bottom Nav (Mobile)
│   ├── Dashboard
│   ├── Conversation
│   ├── Analytics
│   ├── Learning Path
│   ├── Help
│   └── Settings
│
├── Main Content Area
│   │
│   ├── Dashboard View
│   │   ├── Fluency Gauge
│   │   ├── Daily Targets
│   │   └── Practice Cards
│   │
│   ├── Conversation View
│   │   ├── Avatar Column
│   │   │   ├── NexoraAvatar (animated)
│   │   │   └── MicOrb (voice input)
│   │   │
│   │   └── Transcript Column
│   │       ├── Message History
│   │       │   └── ChatMessageBubble (per message)
│   │       │       ├── Message Text
│   │       │       └── Feedback Panel
│   │       │           ├── ✅ Great items
│   │       │           ├── ⚠️ Suggestions
│   │       │           └── ❌ Errors
│   │       │
│   │       └── Text Input
│   │
│   └── Analytics View
│       ├── Fluency Trend Graph
│       └── Skill Diagnostics
│
└── SettingsModal
    ├── API Key Input
    ├── Target Language Selector (NEW!)
    │   └── Dropdown with flags
    ├── Proficiency Level
    ├── Voice Settings
    │   ├── Voice Selection
    │   ├── Speed Slider
    │   └── Pitch Slider
    └── Toggles
        ├── Auto-play TTS
        └── Phonetic Hints
```

---

## State Management

```typescript
// Main App State
const [settings, setSettings] = useState<AppSettings>({
  apiKey: string,
  targetLanguage: TargetLanguage,      // NEW!
  recognitionLang: string,              // Auto-updated
  level: LanguageLevel,
  autoplayTTS: boolean,
  phoneticHints: boolean,
  ttsVoiceURI: string,
  ttsSpeed: number,
  ttsPitch: number,
});

const [messages, setMessages] = useState<ChatMessage[]>([]);
const [mode, setMode] = useState<PracticeMode>("freeChat");
const [tutorStyle, setTutorStyle] = useState<TutorStyle>("friendly");
const [isListening, setIsListening] = useState(false);
const [isSpeaking, setIsSpeaking] = useState(false);
const [stats, setStats] = useState<SessionStats>({...});
```

---

## Language Configuration Flow

```
User selects language in Settings
         │
         ▼
┌────────────────────────────────────┐
│  onChange({ targetLanguage })      │
│  - Updates targetLanguage          │
│  - Auto-updates recognitionLang    │
└────────┬───────────────────────────┘
         │
         ▼
┌────────────────────────────────────┐
│  localStorage.setItem()            │
│  - Persists settings               │
└────────┬───────────────────────────┘
         │
         ▼
┌────────────────────────────────────┐
│  Speech Recognition Updates        │
│  - lang = settings.recognitionLang │
└────────┬───────────────────────────┘
         │
         ▼
┌────────────────────────────────────┐
│  API Calls Include targetLanguage  │
│  - Sent with every chat request    │
└────────┬───────────────────────────┘
         │
         ▼
┌────────────────────────────────────┐
│  AI Responds in Target Language    │
│  - Uses language-specific prompt   │
└────────────────────────────────────┘
```

---

## API Request/Response Cycle

```
┌─────────────────────────────────────────────────────────────┐
│                      REQUEST                                 │
├─────────────────────────────────────────────────────────────┤
│  POST /api/chat                                              │
│                                                               │
│  {                                                            │
│    "message": "こんにちは、元気ですか？",                    │
│    "history": [...previous messages...],                     │
│    "apiKey": "sk-or-v1-...",                                 │
│    "mode": "freeChat",                                       │
│    "tutorStyle": "friendly",                                 │
│    "level": "intermediate",                                  │
│    "targetLanguage": "japanese"  ← Language selection        │
│  }                                                            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   SYSTEM PROMPT                              │
├─────────────────────────────────────────────────────────────┤
│  You are Nexora, expert Japanese (日本語) fluency coach.    │
│  User's level: Intermediate (B1-B2)                          │
│  Target language: Japanese                                   │
│  Practice mode: Free conversation                            │
│  Tutor style: Friendly                                       │
│                                                               │
│  LANGUAGE-SPECIFIC GUIDANCE:                                 │
│  Focus on proper keigo (敬語) usage, natural Japanese       │
│  expressions, and cultural nuances. Help with kanji,         │
│  hiragana, and katakana when appropriate.                    │
│                                                               │
│  IMPORTANT RULES:                                            │
│  1. Respond ONLY in Japanese                                 │
│  2. Provide feedback section in English                      │
│  3. Note grammar errors, suggestions, and good usage         │
│  ...                                                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      RESPONSE                                │
├─────────────────────────────────────────────────────────────┤
│  {                                                            │
│    "response": "こんにちは！元気です、ありがとうございます。│
│                 あなたはどうですか？\n\n---\n\n              │
│                 📝 Feedback\n\n                              │
│                 ✅ Great: Perfect use of です/ます form!\n  │
│                 ✅ Great: Natural greeting structure",       │
│    "feedback": [                                             │
│      {                                                        │
│        "type": "good",                                       │
│        "label": "Well Done",                                 │
│        "detail": "Perfect use of です/ます form!"           │
│      },                                                       │
│      {                                                        │
│        "type": "good",                                       │
│        "label": "Well Done",                                 │
│        "detail": "Natural greeting structure"                │
│      }                                                        │
│    ]                                                          │
│  }                                                            │
└─────────────────────────────────────────────────────────────┘
```

---

## Type System Architecture

```typescript
// Core Language Types
type TargetLanguage = "english" | "japanese" | "korean" | "spanish";
type LanguageLevel = "beginner" | "intermediate" | "advanced";

// Language Configuration
interface LanguageConfig {
  id: TargetLanguage;
  label: string;           // "English", "Japanese", etc.
  flag: string;            // "🇺🇸", "🇯🇵", etc.
  speechLang: string;      // "en-US", "ja-JP", etc.
}

// Settings
interface AppSettings {
  apiKey: string;
  targetLanguage: TargetLanguage;    // Selected language
  recognitionLang: string;            // Auto-mapped from targetLanguage
  level: LanguageLevel;
  autoplayTTS: boolean;
  phoneticHints: boolean;
  ttsVoiceURI: string;
  ttsSpeed: number;
  ttsPitch: number;
}

// Messages
interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;                       // In target language
  timestamp: Date;
  feedback?: FeedbackItem[];
  correctedText?: string;
}

// Feedback
interface FeedbackItem {
  type: "error" | "warn" | "good";
  label: string;
  detail: string;
}
```

---

## Browser API Integration

```
┌─────────────────────────────────────────────────────────────┐
│              Web Speech Recognition API                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  const recognition = new SpeechRecognition();                │
│  recognition.lang = settings.recognitionLang;  ← Dynamic     │
│  recognition.continuous = true;                              │
│  recognition.interimResults = true;                          │
│                                                               │
│  recognition.onresult = (event) => {                         │
│    // Extract transcript                                     │
│    // Send to AI when final                                  │
│  };                                                           │
│                                                               │
│  Supported Languages:                                        │
│  - en-US (English)                                           │
│  - ja-JP (Japanese)                                          │
│  - ko-KR (Korean)                                            │
│  - es-ES (Spanish)                                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              Web Speech Synthesis API                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  const utterance = new SpeechSynthesisUtterance(text);       │
│  utterance.voice = selectedVoice;                            │
│  utterance.rate = settings.ttsSpeed;                         │
│  utterance.pitch = settings.ttsPitch;                        │
│                                                               │
│  speechSynthesis.speak(utterance);                           │
│                                                               │
│  Voice Selection:                                            │
│  - Filters available voices by language                      │
│  - User can select preferred voice                           │
│  - Fallback to default if not available                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Security & Privacy

```
┌─────────────────────────────────────────────────────────────┐
│                    DATA STORAGE                              │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  localStorage (Browser):                                     │
│  ├── nexora_settings (AppSettings)                           │
│  └── nexora_streak (number)                                  │
│                                                               │
│  NOT Stored:                                                 │
│  ├── Conversation history                                    │
│  ├── User messages                                           │
│  └── AI responses                                            │
│                                                               │
│  Transmitted to OpenRouter:                                  │
│  ├── Current message                                         │
│  ├── Conversation history (session only)                     │
│  └── API key (encrypted in transit)                          │
└─────────────────────────────────────────────────────────────┘
```

---

## Performance Optimization

```
┌─────────────────────────────────────────────────────────────┐
│                  OPTIMIZATION STRATEGIES                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  1. State Management                                         │
│     - Minimal re-renders                                     │
│     - useCallback for event handlers                         │
│     - useMemo for expensive computations                     │
│                                                               │
│  2. API Calls                                                │
│     - Single endpoint                                        │
│     - Efficient payload                                      │
│     - Error handling with retries                            │
│                                                               │
│  3. Speech Processing                                        │
│     - Interim results for UX                                 │
│     - Debounced final submission                             │
│     - Cleanup on unmount                                     │
│                                                               │
│  4. Build Optimization                                       │
│     - Next.js static generation                              │
│     - Turbopack for fast builds                              │
│     - Code splitting                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      VERCEL DEPLOYMENT                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Static Pages:                                               │
│  ├── / (Dashboard)                                           │
│  └── /_not-found                                             │
│                                                               │
│  Dynamic Routes:                                             │
│  └── /api/chat (Server-side)                                 │
│                                                               │
│  Environment Variables:                                      │
│  └── OPENROUTER_API_KEY (optional server-side key)          │
│                                                               │
│  Edge Functions:                                             │
│  └── API routes run on Vercel Edge Network                   │
│                                                               │
│  CDN:                                                        │
│  ├── Static assets                                           │
│  ├── Images                                                  │
│  └── Fonts                                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Error Handling Flow

```
User Input → Speech Recognition
                │
                ├─ Error: "not-allowed"
                │  └─ Show: "Microphone access denied"
                │
                ├─ Error: "network"
                │  └─ Show: "Network error"
                │
                └─ Success → API Call
                              │
                              ├─ Error: No API key
                              │  └─ Show: "Add API key in Settings"
                              │
                              ├─ Error: Invalid key
                              │  └─ Show: "Check your API key"
                              │
                              ├─ Error: Network
                              │  └─ Show: "Connection error"
                              │
                              └─ Success → Display Response
                                            │
                                            └─ TTS (if enabled)
                                                │
                                                ├─ Error: No voices
                                                │  └─ Silent fail
                                                │
                                                └─ Success → Audio plays
```

---

**This architecture supports seamless multi-language learning with robust error handling, optimal performance, and excellent user experience.** 🚀
