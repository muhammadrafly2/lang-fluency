// Interactive Topic Modules for French, Korean, German, Spanish, and English

export interface TopicItem {
  targetText: string;
  phonetic?: string;
  english: string;
  detail?: string;
  tag?: string;
}

export interface TopicSubsection {
  title: string;
  description?: string;
  items: TopicItem[];
}

export interface TopicTab {
  id: string;
  label: string;
  icon?: string;
  content: {
    summary: string;
    subsections: TopicSubsection[];
    drillPrompt?: {
      instruction: string;
      phraseTarget: string;
      phrasePhonetic?: string;
      phraseEnglish: string;
      scenarioId?: string;
    };
  };
}

export interface LanguageTopicModule {
  id: string;
  badge: string;
  title: string;
  description: string;
  category: string;
  tabs: TopicTab[];
}

// ── FRENCH MODULES (Français) ──
export const FRENCH_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "fr-pronunciation",
    badge: "Ç",
    title: "Phonetics & Liaisons",
    description: "Master French nasal vowels, liaisons across words, and silent final consonants.",
    category: "Phonetics & Accent",
    tabs: [
      {
        id: "nasals",
        label: "Nasal Vowels (an, in, on, un)",
        icon: "🗣️",
        content: {
          summary: "French nasal vowels are articulated by releasing air through both the nose and mouth without closing the throat.",
          subsections: [
            {
              title: "Core Nasal Vowel Contrasts",
              description: "Four distinct vowel tones that define French acoustic beauty.",
              items: [
                { targetText: "croissant / maman", phonetic: "[ɑ̃] - open nasal", english: "croissant / mom", detail: "Jaw dropped slightly, lips relaxed." },
                { targetText: "vin / matin / pain", phonetic: "[ɛ̃] - spread nasal", english: "wine / morning / bread", detail: "Corners of mouth pulled wide like a smile." },
                { targetText: "bon / maison / rond", phonetic: "[ɔ̃] - rounded nasal", english: "good / house / round", detail: "Lips tightly rounded into an 'O' shape." },
                { targetText: "un / parfum", phonetic: "[œ̃] - front rounded", english: "one / perfume", detail: "Soft forward resonance." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Pronounce this classic Parisian bakery phrase with smooth nasals:",
            phraseTarget: "Un bon vin et un croissant au matin, s'il vous plaît.",
            phraseEnglish: "A good wine and a morning croissant, please.",
            scenarioId: "cafe-paris",
          },
        },
      },
      {
        id: "liaisons",
        label: "Liaisons & Flow",
        icon: "🔗",
        content: {
          summary: "Liaisons link the usually silent final consonant of a word to the initial vowel of the following word.",
          subsections: [
            {
              title: "Obligatory Liaisons (Invariable)",
              description: "Failing to make these sounds jarring to native Francophones.",
              items: [
                { targetText: "les amis", phonetic: "lez-ami", english: "the friends", detail: "'s' sounds as [z] bridging into 'amis'." },
                { targetText: "un grand homme", phonetic: "un gran-t-homme", english: "a great man", detail: "'d' softens to [t] before vowels." },
                { targetText: "vous avez", phonetic: "vou-z-avez", english: "you have", detail: "Seamless phonetic slide." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "fr-expressions",
    badge: "🥖",
    title: "Everyday Slang & Flow",
    description: "Use 'Du coup', 'Bref', and 'C'est parti' to talk like an authentic Parisian.",
    category: "Conversational Flow",
    tabs: [
      {
        id: "fillers",
        label: "Native Connectors (Du coup / Bref)",
        icon: "💬",
        content: {
          summary: "Connective words that glue everyday conversations together.",
          subsections: [
            {
              title: "Top 4 Parisian Fillers",
              items: [
                { targetText: "Du coup, qu'est-ce qu'on fait ?", phonetic: "So, what are we doing?", english: "So then / As a result", detail: "Used dozens of times daily by locals." },
                { targetText: "Bref, on a réussi le projet.", phonetic: "Anyway, we succeeded.", english: "In short / Anyway", detail: "Concludes rambling thoughts concisely." },
                { targetText: "C'est parti, on y va !", phonetic: "Let's go, off we go!", english: "Here we go / Let's roll", detail: "Energetic launch phrase." },
                { targetText: "Laisse tomber, c'est pas grave.", phonetic: "Never mind, no big deal.", english: "Drop it / Never mind", detail: "Smooth social de-escalation." },
              ],
            },
          ],
        },
      },
    ],
  },
];

// ── KOREAN MODULES (한국어) ──
export const KOREAN_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "ko-hangul",
    badge: "한",
    title: "Hangul & Batchim Rules",
    description: "Master final consonant sound shifts, pure vowels, and natural Korean pitch flow.",
    category: "Alphabet & Phonetics",
    tabs: [
      {
        id: "batchim",
        label: "Batchim (받침) Sound Shifts",
        icon: "🔤",
        content: {
          summary: "When a syllable ends in a consonant (Batchim) and the next syllable begins with 'ㅇ', the consonant carries over to the next sound.",
          subsections: [
            {
              title: "Liaison & Carryover (연음 법칙)",
              description: "The secret to smooth, natural Korean speech cadence.",
              items: [
                { targetText: "한국어 [한구거]", phonetic: "Han-gu-geo", english: "Korean language", detail: "The 'ㄱ' slides into '어' seamlessly." },
                { targetText: "음악 [으막]", phonetic: "Eu-mak", english: "Music", detail: "The 'ㅁ' connects into '악'." },
                { targetText: "맛있어요 [마시써요]", phonetic: "Ma-si-sseo-yo", english: "It is delicious", detail: "'ㅅ' carries over with double tense sound." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Pronounce with smooth Korean liaison:",
            phraseTarget: "한국어 공부가 정말 재미있어요!",
            phrasePhonetic: "Han-gu-geo gong-bu-ga jeong-mal jae-mi-i-sseo-yo!",
            phraseEnglish: "Studying Korean is truly fun!",
            scenarioId: "hongdae-cafe",
          },
        },
      },
      {
        id: "honorifics",
        label: "Honorifics (존댓말 vs 반말)",
        icon: "🤝",
        content: {
          summary: "Korean politeness levels reflect social relationships, hierarchy, and conversational intimacy.",
          subsections: [
            {
              title: "Polite Ending: -아/어요 (Haeyo-che)",
              description: "The standard friendly-polite style used in cafés, daily chats, and new acquaintances.",
              items: [
                { targetText: "감사합니다 / 고마워요", phonetic: "Gam-sa-ham-ni-da / Go-ma-wo-yo", english: "Thank you (Formal / Polite)", detail: "Used everywhere with staff and elders." },
                { targetText: "처음 뵙겠습니다", phonetic: "Cheo-eum boep-get-seum-ni-da", english: "Pleased to meet you (Formal)", detail: "High-respect introduction phrase." },
                { targetText: "괜찮아요", phonetic: "Gwaen-chan-a-yo", english: "It's okay / No problem", detail: "Comfortable universal reassurance." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "ko-slang",
    badge: "☕",
    title: "Seoul Café & Slang",
    description: "Order 'Ah-Ah' (Iced Americano), use 'Daebak', and sound like a trendy Hongdae local.",
    category: "Culture & Slang",
    tabs: [
      {
        id: "seoul-culture",
        label: "Trendy Slang & Phrases",
        icon: "✨",
        content: {
          summary: "Phrases you hear constantly in Seoul youth culture and K-Dramas.",
          subsections: [
            {
              title: "Essential Seoul Expressions",
              items: [
                { targetText: "아아 (아이스 아메리카노)", phonetic: "Ah-Ah", english: "Iced Americano", detail: "Seoul's national drink year-round." },
                { targetText: "대박!", phonetic: "Dae-bak!", english: "Awesome! / Unbelievable!", detail: "Expresses amazement or excitement." },
                { targetText: "화이팅 / 파이팅!", phonetic: "Hwaiting / Fighting!", english: "Cheer up! / Do your best!", detail: "Universal encouragement." },
                { targetText: "치맥 (치킨 + 맥주)", phonetic: "Chi-maek", english: "Chicken and Beer", detail: "Iconic evening social ritual." },
              ],
            },
          ],
        },
      },
    ],
  },
];

// ── GERMAN MODULES (Deutsch) ──
export const GERMAN_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "de-phonetics",
    badge: "Ä",
    title: "Umlauts & Sound Rules",
    description: "Master ä, ö, ü, the 'ch' sounds (ich-Laut vs ach-Laut), and crisp consonant precision.",
    category: "Phonetics & Accent",
    tabs: [
      {
        id: "umlauts",
        label: "The 3 Umlauts (ä, ö, ü)",
        icon: "🗣️",
        content: {
          summary: "Umlauts shift vowel position forward in the mouth, changing words from singular to plural or completely altering meaning.",
          subsections: [
            {
              title: "Mouth Shapes & Contrasts",
              items: [
                { targetText: "schon vs schön", phonetic: "[o] vs [ø]", english: "already vs beautiful", detail: "'ö' is pronounced like 'ay' with lips rounded into 'O'." },
                { targetText: "Mutter vs Mütter", phonetic: "[u] vs [y]", english: "mother vs mothers", detail: "'ü' is pronounced like 'ee' with lips pursed for whistling." },
                { targetText: "Apfel vs Äpfel", phonetic: "[a] vs [ɛ]", english: "apple vs apples", detail: "'ä' sounds like 'eh' in 'bed'." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Pronounce this classic German bakery order with clear umlauts:",
            phraseTarget: "Ich hätte gerne zwei Brötchen und einen süßen Kaffee.",
            phraseEnglish: "I would like two bread rolls and a sweet coffee.",
            scenarioId: "berlin-cafe",
          },
        },
      },
      {
        id: "derdiedas",
        label: "Der, Die, Das Simplified",
        icon: "📦",
        content: {
          summary: "Gender rules made easy with predictable word endings.",
          subsections: [
            {
              title: "Reliable Gender Endings",
              items: [
                { targetText: "-ung, -heit, -keit → Die (Feminine)", phonetic: "die Hoffnung, die Freiheit", english: "Always feminine", detail: "99% consistency rule." },
                { targetText: "-chen, -lein → Das (Neuter)", phonetic: "das Mädchen, das Brötchen", english: "Always neuter", detail: "Diminutive suffixes." },
                { targetText: "-or, -ist, -ling → Der (Masculine)", phonetic: "der Motor, der Optimist", english: "Always masculine", detail: "Agent & concept nouns." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "de-daily",
    badge: "🥨",
    title: "Everyday Slang & Flow",
    description: "Use 'Alles klar', 'Genau', and 'Feierabend' for natural conversations in Germany.",
    category: "Conversational Flow",
    tabs: [
      {
        id: "german-fillers",
        label: "Conversational Glue",
        icon: "💬",
        content: {
          summary: "The essential words German speakers use every single day.",
          subsections: [
            {
              title: "Top 4 Daily German Expressions",
              items: [
                { targetText: "Alles klar!", phonetic: "All right / Got it!", english: "Affirmation & Greeting", detail: "Can be a question ('Alles klar?') or answer." },
                { targetText: "Genau, so machen wir das.", phonetic: "Exactly, that's how we do it.", english: "Exactly / Right", detail: "The ultimate conversational nod." },
                { targetText: "Schönen Feierabend!", phonetic: "Have a nice end-of-work!", english: "End of workday cheer", detail: "Sacred cultural transition from work to life." },
                { targetText: "Na ja, mal schauen.", phonetic: "Well, let's see.", english: "Well / We will see", detail: "Relaxed German skepticism." },
              ],
            },
          ],
        },
      },
    ],
  },
];

// ── SPANISH MODULES (Español) ──
export const SPANISH_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "es-phonetics",
    badge: "Ñ",
    title: "Phonetics & Rolled 'R'",
    description: "Master pure vowels, single 'r' vs trilled 'rr', and Spanish acoustic rhythm.",
    category: "Phonetics & Accent",
    tabs: [
      {
        id: "trills",
        label: "The Rolled 'R' (La 'R' Vibrante)",
        icon: "👅",
        content: {
          summary: "The Spanish trilled 'rr' is produced by relaxing the tongue tip against the alveolar ridge behind upper front teeth while releasing air.",
          subsections: [
            {
              title: "Crucial Word Distinctions",
              items: [
                { targetText: "pero vs perro", phonetic: "[ɾ] tap vs [r] trill", english: "but vs dog", detail: "A single tap vs multiple vibration cycles." },
                { targetText: "caro vs carro", phonetic: "expensive vs car", english: "expensive vs car", detail: "Changes meaning completely." },
                { targetText: "rápido / río", phonetic: "[r] initial trill", english: "fast / river", detail: "An 'r' at the start of a word is always trilled." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Pronounce this Madrid tapas phrase with crisp Spanish vowels:",
            phraseTarget: "¡Buenas! Una ración de tortilla de patatas y dos cañas, por favor.",
            phraseEnglish: "Hi! A portion of Spanish omelette and two beers, please.",
            scenarioId: "tapas-madrid",
          },
        },
      },
      {
        id: "ser-estar",
        label: "Ser vs Estar Hacks",
        icon: "⚖️",
        content: {
          summary: "Understanding the difference between inherent identity (Ser) and transient condition/location (Estar).",
          subsections: [
            {
              title: "Core Memory Anchor",
              items: [
                { targetText: "Ser: Soy de Madrid, soy ingeniero", phonetic: "Essence & Origin", english: "Identity, profession, nationality", detail: "Permanent characteristics." },
                { targetText: "Estar: Estoy cansado, estoy aquí", phonetic: "State & Location", english: "Mood, condition, geographical spot", detail: "Temporary states." },
                { targetText: "Estar listo vs Ser listo", phonetic: "Ready vs Smart", english: "Ready vs Intelligent", detail: "Notice how the verb changes the meaning." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "es-street",
    badge: "🇪🇸",
    title: "Everyday Street Spanish",
    description: "Master '¡Vale!', 'Oye', and warm social etiquette at tapas bars.",
    category: "Conversational Flow",
    tabs: [
      {
        id: "madrid-slang",
        label: "Authentic Conversational Phrases",
        icon: "🍷",
        content: {
          summary: "Phrases that will make native speakers smile and treat you like a local.",
          subsections: [
            {
              title: "Top Everyday Spanish Expressions",
              items: [
                { targetText: "¡Vale, perfecto!", phonetic: "Alright, perfect!", english: "Okay / Agreed", detail: "Used constantly throughout Spain." },
                { targetText: "Oye, ¿qué tal todo?", phonetic: "Hey, how's everything?", english: "Hey, how's it going?", detail: "Warm conversational opening." },
                { targetText: "¡Qué guay!", phonetic: "How cool!", english: "That's cool / awesome", detail: "Very popular among Spanish youth." },
                { targetText: "¡Madre mía!", phonetic: "My goodness!", english: "Oh my goodness! / Wow!", detail: "Expresses surprise or wonder." },
              ],
            },
          ],
        },
      },
    ],
  },
];

// ── ENGLISH MODULES (English) ──
export const ENGLISH_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "en-accent",
    badge: "🇬🇧",
    title: "Oxford C2 Accent & Intonation",
    description: "Master British RP intonation contours, pitch glide, and pauses at clause boundaries.",
    category: "Phonetics & Executive Poise",
    tabs: [
      {
        id: "intonation",
        label: "Executive Pitch Glides",
        icon: "🎙️",
        content: {
          summary: "Oxford English commands authority through downward pitch completion at statement conclusions and gentle upward lilt on diplomatic queries.",
          subsections: [
            {
              title: "Clause Boundary Breathing",
              items: [
                { targetText: "Frankly speaking, the metrics speak for themselves.", phonetic: "Downward pitch inflection", english: "Firm authority statement", detail: "Drop pitch by a minor third on 'themselves'." },
                { targetText: "Would you care to elaborate on that particular concern?", phonetic: "Diplomatic upward glide", english: "Polite inquiry", detail: "Invites collaboration without defensiveness." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Deliver this executive standup update with measured Oxford cadence:",
            phraseTarget: "Yesterday we completed the token streaming refactor. Today I am blocked on auth latency.",
            phraseEnglish: "Yesterday we completed the token streaming refactor. Today I am blocked on auth latency.",
            scenarioId: "tech-standup",
          },
        },
      },
    ],
  },
  {
    id: "en-tech",
    badge: "💼",
    title: "Corporate Banter & Tech Jargon",
    description: "Use Silicon Valley terminology and executive brevity like 'Flywheel', 'Moat', and 'Pivot'.",
    category: "Executive Business",
    tabs: [
      {
        id: "jargon",
        label: "Silicon Valley Lexicon",
        icon: "⚡",
        content: {
          summary: "High-density technical terminology used in Y-Combinator boardrooms and tech standups.",
          subsections: [
            {
              title: "Strategic Buzzwords with Substance",
              items: [
                { targetText: "Multimodal retention flywheel", phonetic: "Growth loop driver", english: "Self-reinforcing product engine", detail: "Explain with hard CAC/LTV numbers." },
                { targetText: "Distribution moat", phonetic: "Competitive barrier", english: "Defensibility against rivals", detail: "Essential for VC pitch rounds." },
                { targetText: "Hard blocker vs soft dependency", phonetic: "Delivery risk sync", english: "Blocker articulation", detail: "Crucial for daily standups." },
              ],
            },
          ],
        },
      },
    ],
  },
];

/**
 * Returns the relevant interactive topic modules for the given language code.
 */
export function getLanguageTopicModules(langCode: string): LanguageTopicModule[] {
  switch (langCode) {
    case "french":
      return FRENCH_TOPIC_MODULES;
    case "korean":
      return KOREAN_TOPIC_MODULES;
    case "german":
      return GERMAN_TOPIC_MODULES;
    case "spanish":
      return SPANISH_TOPIC_MODULES;
    case "english":
      return ENGLISH_TOPIC_MODULES;
    default:
      return [];
  }
}
