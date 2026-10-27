// Interactive Topic Modules for French, Korean, German, Spanish, and English
// Comprehensively covers all linguistic nuances, spoken contractions, speech levels,
// regional dialects, fillers, softeners, etiquette, and false-formal flags.

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

// ══════════════════════════════════════════════════════════════════════════════
// ── FRENCH MODULES (Français) ──
// ══════════════════════════════════════════════════════════════════════════════
export const FRENCH_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "fr-tu-vs-vous",
    badge: "🤝",
    title: "Tu vs. Vous & Spoken Negation",
    description: "Navigate social distance in French dialogues and master the spoken drop of 'ne'.",
    category: "Social Nuance & Grammar",
    tabs: [
      {
        id: "tu-vous-dialogues",
        label: "Tu vs. Vous in Context",
        icon: "👥",
        content: {
          summary: "French strictly balances respect (Vous) and closeness (Tu). Using 'tu' too early can sound disrespectful; using 'vous' too long can feel cold and distant.",
          subsections: [
            {
              title: "Social Situations & Dialogue Contrasts",
              description: "The exact same question adapted for social distance vs. intimate friendship.",
              items: [
                {
                  targetText: "Café / Boutique: Comment allez-vous ? vs Ami: Comment tu vas ?",
                  phonetic: "[kɔ.mɑ̃ ta.le vu] vs [kɔ.mɑ̃ ty va]",
                  english: "How are you? (Formal/Commercial vs. Peer/Friend)",
                  detail: "Always use 'Vous' with service personnel, doctors, elders, and colleagues until invited to tutoyer.",
                  tag: "Greeting",
                },
                {
                  targetText: "Passage au tutoiement: On peut se tutoyer ?",
                  phonetic: "[ɔ̃ pø sə ty.twa.je]",
                  english: "Can we use 'tu' with each other?",
                  detail: "The golden formula! Wait for the senior person or host to propose this transition.",
                  tag: "Transition",
                },
                {
                  targetText: "Collègue: Tu as fini le rapport ? vs Client: Avez-vous pu consulter le rapport ?",
                  phonetic: "[ty a fi.ni...] vs [a.ve vu py kɔ̃.syl.te...]",
                  english: "Did you finish the report? vs Have you had a chance to review the report?",
                  detail: "Notice how formal 'vous' also commands richer vocabulary (consulter vs finir).",
                  tag: "Workplace",
                },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Practice offering the transition to informal 'tu' at a casual Paris lunch:",
            phraseTarget: "On travaille ensemble depuis un moment, si tu veux on peut se tutoyer !",
            phraseEnglish: "We've been working together for a while, if you like we can use 'tu'!",
            scenarioId: "cafe-paris",
          },
        },
      },
      {
        id: "dropping-ne",
        label: "Spoken Negation (Dropping 'Ne')",
        icon: "✂️",
        content: {
          summary: "In authentic spoken French, the negative particle 'ne' is almost universally dropped. Only 'pas', 'plus', or 'jamais' remains.",
          subsections: [
            {
              title: "Written French vs. Everyday Spoken French",
              description: "Dropping 'ne' makes you sound instantly fluent and relaxed rather than like a textbook.",
              items: [
                {
                  targetText: "Écrit: Je ne sais pas → Parlé: J'sais pas / Chais pas",
                  phonetic: "[ʃe.pa]",
                  english: "I don't know (Written vs. Spoken street speed)",
                  detail: "One of the most frequent phonetic compressions in the entire French language.",
                  tag: "Top Compression",
                },
                {
                  targetText: "Écrit: Ce n'est pas grave → Parlé: C'est pas grave",
                  phonetic: "[se pa grav]",
                  english: "No worries / It's not serious",
                  detail: "Used multiple times an hour to smooth minor awkward moments.",
                  tag: "De-escalation",
                },
                {
                  targetText: "Écrit: Il n'y a pas de problème → Parlé: Y'a pas de souci",
                  phonetic: "[ja pa d'su.si]",
                  english: "No problem at all",
                  detail: "'Il y a' compresses to 'Y'a' and drops 'ne' completely.",
                  tag: "Daily Classic",
                },
                {
                  targetText: "Écrit: On ne va pas y aller → Parlé: On va pas y aller",
                  phonetic: "[ɔ̃ va pa i a.le]",
                  english: "We are not going to go there",
                  detail: "Clear rhythm shift emphasizing the verb and 'pas'.",
                  tag: "Future Negation",
                },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Pronounce this relaxed spoken refusal without 'ne':",
            phraseTarget: "T'inquiète pas, c'est pas grave du tout, y'a aucun souci !",
            phraseEnglish: "Don't worry, it's not a big deal at all, there's zero problem!",
            scenarioId: "cafe-paris",
          },
        },
      },
    ],
  },
  {
    id: "fr-pronunciation",
    badge: "Ç",
    title: "Phonetics, Liaisons & Elisions",
    description: "Master French nasal vowels, smooth liaisons, acoustic elisions, and sound glides.",
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
        id: "liaisons-elisions",
        label: "Liaisons & Elision Flow",
        icon: "🔗",
        content: {
          summary: "Liaison bridges silent final consonants to following vowel sounds; Elision contracts vowels before initials ('j'ai', 'c'est', 'l'ami').",
          subsections: [
            {
              title: "Obligatory Liaisons (Invariable)",
              description: "Failing to make these sounds unnatural and disjointed to Francophones.",
              items: [
                { targetText: "les amis", phonetic: "lez-ami [le.za.mi]", english: "the friends", detail: "'s' sounds as [z] bridging into 'amis'." },
                { targetText: "un grand homme", phonetic: "un gran-t-homme [œ̃ ɡʁɑ̃.t‿ɔm]", english: "a great man", detail: "'d' softens to [t] before vowels." },
                { targetText: "vous avez", phonetic: "vou-z-avez [vu.za.ve]", english: "you have", detail: "Seamless phonetic glide." },
              ],
            },
            {
              title: "Forbidden Liaisons (Interdites)",
              description: "Never link after 'et' (and) or between a singular noun and adjective.",
              items: [
                { targetText: "un et un (Jamais: un-t-et-un)", phonetic: "[œ̃ e œ̃]", english: "one and one", detail: "'Et' NEVER makes a liaison with the following word." },
                { targetText: "un soldat anglais", phonetic: "[œ̃ sɔl.da ɑ̃.ɡlɛ]", english: "an English soldier", detail: "Silent 't' remains completely silent." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "fr-spoken-flow",
    badge: "🥖",
    title: "Fillers, Reductions & Québécois",
    description: "Use native fillers (euh, ben, du coup, genre), reductions, and explore Québécois variants.",
    category: "Conversational Flow",
    tabs: [
      {
        id: "spoken-reductions",
        label: "Spoken Reductions (j'sais pas, y'a)",
        icon: "⚡",
        content: {
          summary: "Native speakers constantly truncate unstressed syllables for rapid acoustic momentum.",
          subsections: [
            {
              title: "High-Speed Spoken French Contractions",
              description: "Essential reductions you will hear constantly on the Paris métro and streets.",
              items: [
                { targetText: "T'as l'heure ? (Tu as)", phonetic: "[ta lœʁ]", english: "Do you have the time?", detail: "'Tu' contracts to 'T'' before vowels in spoken speech." },
                { targetText: "Y'a du monde aujourd'hui ! (Il y a)", phonetic: "[ja dy mɔ̃d...]", english: "There are so many people today!", detail: "Contracts 3 syllables into one punchy sound." },
                { targetText: "J'suis fatigué / Chuis fatigué", phonetic: "[ʃɥi fa.ti.ɡe]", english: "I am tired", detail: "'Je suis' blurs into 'Chuis'." },
              ],
            },
          ],
        },
      },
      {
        id: "fillers",
        label: "Fillers (euh, ben, bah, du coup, genre)",
        icon: "💬",
        content: {
          summary: "Conversational lubricant words that buy thinking time and signal warmth.",
          subsections: [
            {
              title: "The Top French Fillers & Nuances",
              items: [
                { targetText: "Du coup, qu'est-ce qu'on fait ?", phonetic: "[dy ku...]", english: "So then / As a result, what are we doing?", detail: "Used dozens of times daily by locals to transition thoughts." },
                { targetText: "Genre, il est venu sans prévenir !", phonetic: "[ʒɑ̃ʁ...]", english: "Like, he showed up with zero warning!", detail: "'Genre' functions exactly like English 'like' among youth." },
                { targetText: "Bah oui / Ben non, évidemment !", phonetic: "[ba wi / bɛ̃ nɔ̃]", english: "Well yes / Well no, obviously!", detail: "'Bah' and 'ben' express obviousness, hesitation, or casual agreement." },
                { targetText: "Euh, en fait, je suis pas sûr...", phonetic: "[ø... ɑ̃ fɛt...]", english: "Um, actually, I'm not sure...", detail: "'Euh' is the classic French pause vocalization (deep rounded tone)." },
                { targetText: "Bref, on se voit demain !", phonetic: "[bʁɛf...]", english: "Anyway, see you tomorrow!", detail: "Wraps up a rambling conversation cleanly." },
              ],
            },
          ],
        },
      },
      {
        id: "quebecois",
        label: "Québécois vs. France Variants",
        icon: "🍁",
        content: {
          summary: "Canadian French (Québec) retains historic expressions and Anglicisms with completely distinct vocabulary.",
          subsections: [
            {
              title: "Vocabulary Contrast: Hexagon (France) vs. Québec",
              description: "Knowing these prevents awkward confusion when traveling across the Atlantic.",
              items: [
                { targetText: "France: une voiture vs Québec: un char", phonetic: "car / automobile", english: "Car", detail: "In Québec, 'char' (chariot) is the everyday word for car." },
                { targetText: "France: ma copine vs Québec: ma blonde", phonetic: "girlfriend / partner", english: "Girlfriend", detail: "A boy/man's partner is 'sa blonde' regardless of hair color!" },
                { targetText: "France: le dîner (evening) vs Québec: le souper", phonetic: "evening dinner", english: "Dinner", detail: "Québec shifts meals: Déjeuner (breakfast), Dîner (lunch), Souper (dinner)." },
                { targetText: "Québec: Pas pantoute ! vs France: Pas du tout !", phonetic: "[pa pɑ̃.tut]", english: "Not at all!", detail: "Classic French-Canadian emphatic negation." },
                { targetText: "Québec: C'est tiguidou ! vs France: C'est nickel / parfait !", phonetic: "[ti.ɡi.du]", english: "It's all good / Perfect!", detail: "Beloved Québec colloquial cheer." },
                { targetText: "Québec: Magasiner vs France: Faire les magasins / shopping", phonetic: "[ma.ɡa.zi.ne]", english: "To go shopping", detail: "Québec creates pure French verbs from nouns." },
              ],
            },
          ],
        },
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// ── KOREAN MODULES (한국어) ──
// ══════════════════════════════════════════════════════════════════════════════
export const KOREAN_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "ko-speech-levels",
    badge: "階",
    title: "The 3 Speech Levels & Switching",
    description: "Master 해요체 (Haeyo), 합쇼체 (Hapsyo), and 반말 (Banmal) with exact situational rules.",
    category: "Speech Hierarchy & Grammar",
    tabs: [
      {
        id: "speech-levels-comparison",
        label: "3 Levels: Same Situation",
        icon: "📊",
        content: {
          summary: "Korean politeness is determined by age, hierarchy, and relationship intimacy. Master the 3 core levels on the exact same sentences.",
          subsections: [
            {
              title: "Side-by-Side: 반말 vs. 해요체 vs. 합쇼체",
              description: "Informal intimate (반말) → Friendly polite (해요체) → Formal business (합쇼체/하십시오체).",
              items: [
                {
                  targetText: "1. 어디 가? (반말) → 2. 어디 가요? (해요체) → 3. 어디 가십니까? (합쇼체)",
                  phonetic: "Eodi ga? → Eodi gayo? → Eodi gasimnikka?",
                  english: "Where are you going?",
                  detail: "Situation: Asking destination. 합쇼체 adds honorific -시- when addressing superiors.",
                  tag: "Destination",
                },
                {
                  targetText: "1. 밥 먹었어? (반말) → 2. 밥 먹었어요? (해요체) → 3. 식사하셨습니까? (합쇼체)",
                  phonetic: "Bap meogeosseo? → Bap meogeosseoyo? → Siksahasyeotseumnikka?",
                  english: "Have you eaten?",
                  detail: "Vocabulary shifts: '밥 먹다' becomes honorific '식사하시다' in formal speech.",
                  tag: "Meals",
                },
                {
                  targetText: "1. 고마워! (반말) → 2. 고마워요 (해요체) → 3. 감사합니다 / 고맙습니다 (합쇼체)",
                  phonetic: "Gomawo! → Gomawoyo → Gamsahamnida",
                  english: "Thank you!",
                  detail: "Use '감사합니다' with strangers, elders, taxi drivers, and store staff.",
                  tag: "Gratitude",
                },
                {
                  targetText: "1. 잘 가! (반말) → 2. 안녕히 가세요 (해요체) → 3. 안녕히 가십시오 (합쇼체)",
                  phonetic: "Jal ga! → Annyeonghi gaseyo → Annyeonghi gasipsio",
                  english: "Goodbye / Go safely",
                  detail: "합쇼체 is standard in corporate presentations, announcements, and military.",
                  tag: "Farewell",
                },
              ],
            },
            {
              title: "When to Switch & The 'Banmal' Boundary",
              description: "Never use 반말 first with older people or strangers. Look for this transition phrase.",
              items: [
                {
                  targetText: "말 놓으셔도 돼요 (Mal noeusyeodo dwaeyo)",
                  phonetic: "You may drop honorifics / speak comfortably",
                  english: "You can speak casually (반말) to me",
                  detail: "The golden green light: granted by an older person or superior to lower social tension.",
                  tag: "Green Light",
                },
                {
                  targetText: "우리 말 놓을까요? (Uri mal noeulkkayo?)",
                  phonetic: "Shall we drop honorifics?",
                  english: "Shall we switch to casual speech?",
                  detail: "Used between peers of the exact same birth year after becoming close.",
                  tag: "Peer Sync",
                },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Deliver a formal status report in 합쇼체 to a corporate team lead:",
            phraseTarget: "오늘 회의 준비는 모두 완료되었습니다. 검토 부탁드립니다.",
            phrasePhonetic: "Oneul hoe-ui junbi-neun modu wanryo-doe-eotseumnida. Geomto butakdeurimnida.",
            phraseEnglish: "Today's meeting preparations are fully completed. We request your review.",
            scenarioId: "pangyo-tech-standup",
          },
        },
      },
    ],
  },
  {
    id: "ko-honorifics-address",
    badge: "🤝",
    title: "Honorific Verbs, Address & Particles",
    description: "Honorific verb pairs, kinship address (형, 누나, 오빠), and avoiding '당신'.",
    category: "Politeness & Grammar",
    tabs: [
      {
        id: "honorific-verbs",
        label: "Honorific Verb Shifts",
        icon: "👑",
        content: {
          summary: "In Korean, you elevate the actions of parents, teachers, and superiors using special honorific verbs.",
          subsections: [
            {
              title: "Special Honorific Verb Pairs",
              description: "Replace standard base verbs when the subject is someone of higher social standing.",
              items: [
                { targetText: "먹다 (To eat) → 드시다 / 잡수시다", phonetic: "meokda → deusida", english: "To eat / consume", detail: "Example: 부모님께서 식사를 드세요 (Parents are eating)." },
                { targetText: "자다 (To sleep) → 주무시다", phonetic: "jada → jumusida", english: "To sleep", detail: "Example: 안녕히 주무세요 (Good night - lit: sleep peacefully)." },
                { targetText: "말하다 (To say) → 말씀하시다", phonetic: "malhada → malsseumhasida", english: "To speak / words", detail: "Elevates counterpart's speech; humble form for self is '말씀드리다'." },
                { targetText: "있다 (To exist) → 계시다", phonetic: "itda → gyesida", english: "To be present / exist", detail: "Used for people: 사장님 계세요 (Is the CEO in?)." },
                { targetText: "아프다 (To be sick) → 편찮으시다", phonetic: "apeuda → pyeonchaneusida", english: "To be unwell", detail: "Used with grandparents or elders." },
              ],
            },
          ],
        },
      },
      {
        id: "titles-address",
        label: "Age Titles & Avoiding '당신'",
        icon: "🏷️",
        content: {
          summary: "Korean rarely uses 'You'. Address people by role, status, or kinship terms. '당신' (Dangsin) is dangerous!",
          subsections: [
            {
              title: "Kinship & Workplace Address",
              items: [
                { targetText: "형 (Hyung) / 누나 (Noona)", phonetic: "Older brother / Older sister", english: "Used by males toward older male/female peers", detail: "Builds instant warm camaraderie." },
                { targetText: "오빠 (Oppa) / 언니 (Unnie)", phonetic: "Older brother / Older sister", english: "Used by females toward older male/female peers", detail: "Universal in Korean social dynamics." },
                { targetText: "선배 (Sunbae) / 후배 (Hubae)", phonetic: "Senior / Junior", english: "School or company seniority", detail: "Address seniors as '선배님' (Sunbae-nim)." },
                { targetText: "직급 + 님 (과장님, 팀장님, 부장님)", phonetic: "Title + Nim", english: "Manager, Team Lead, Department Head", detail: "The standard workplace honorific formula." },
              ],
            },
            {
              title: "Why You Must NOT Use '당신' (Dangsin)",
              description: "Foreigners often look up 'You' in a dictionary and say '당신'. This is a major cultural trap!",
              items: [
                { targetText: "Trap: 당신이 뭔데 그래요? (Dangsin-i mwonde geuraeyo?)", phonetic: "Who do you think you are?", english: "Used in street arguments & shouting matches!", detail: "Calling a stranger '당신' sounds confrontational and aggressive." },
                { targetText: "Correct: Omit 'You' or use Name + 씨 / 직급 + 님", phonetic: "Ji-hoon-ssi / Timjang-nim", english: "Ji-hoon-ssi / Team Leader-nim", detail: "95% of Korean speech eliminates the pronoun 'You' completely." },
              ],
            },
          ],
        },
      },
      {
        id: "korean-particles",
        label: "Essential Spoken Particles",
        icon: "🧩",
        content: {
          summary: "Korean particles glue sentences together. In fast spoken conversation, object particles (을/를) are often dropped.",
          subsections: [
            {
              title: "The Core Spoken Particles",
              items: [
                { targetText: "은 / 는 (Topic marker)", phonetic: "[eun / neun]", english: "As for... (Topic / Contrast)", detail: "Example: 저는 엔지니어예요 (As for me, I'm an engineer)." },
                { targetText: "이 / 가 (Subject identifier)", phonetic: "[i / ga]", english: "Specific actor / New subject", detail: "Example: 커피가 맛있어요 (The coffee is specifically delicious)." },
                { targetText: "을 / 를 (Object marker)", phonetic: "[eul / reul]", english: "Direct object", detail: "In fast speech: '커피 마실래?' (Drops 를 naturally)." },
                { targetText: "에 / 에서 (Time / Location)", phonetic: "[e / e-seo]", english: "At, to / Dynamic action at location", detail: "카페에 가요 (Going to café) vs 카페에서 공부해요 (Studying at café)." },
                { targetText: "도 (Also / Too)", phonetic: "[do]", english: "Also, too, even", detail: "저도 갈게요 (I will go too)." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "ko-social-etiquette",
    badge: "🍶",
    title: "Fillers, Indirect Requests & Etiquette",
    description: "Reactions (대박, 헐, 진짜), indirect polite requests, and drinking/dining culture.",
    category: "Culture & Etiquette",
    tabs: [
      {
        id: "reactions-fillers",
        label: "Fillers & Reactions (아, 진짜?, 대박)",
        icon: "✨",
        content: {
          summary: "Vocalized emotional reactions are central to natural Korean rhythm and bonding.",
          subsections: [
            {
              title: "Top Korean Conversational Reactions",
              items: [
                { targetText: "진짜요? / 정말요?", phonetic: "Jinjja-yo? / Jeongmal-yo?", english: "Really? / For real?", detail: "Universal enthusiastic backchannel in conversation." },
                { targetText: "대박! (Daebak!)", phonetic: "Dae-bak!", english: "Awesome! / Unbelievable! / Jackpot!", detail: "Expresses amazement at good or astonishing news." },
                { targetText: "헐... (Heol...)", phonetic: "Heol...", english: "OMG / No way / Speechless", detail: "Expresses disbelief or slight shock." },
                { targetText: "아, 맞아요! (A, maj-a-yo!)", phonetic: "Ah, exactly right!", english: "Ah, that's so true!", detail: "Strong validation of counterpart's statement." },
                { targetText: "글쎄요... (Geulsseyo...)", phonetic: "Well... let me think...", english: "Well / I am not quite sure", detail: "Soft diplomatic hesitation." },
              ],
            },
          ],
        },
      },
      {
        id: "indirect-requests",
        label: "Indirect Requests (Cushioning)",
        icon: "🛡️",
        content: {
          summary: "Direct commands sound abrasive in Korean. Always cushion requests with conditional or tentative verb endings.",
          subsections: [
            {
              title: "Polite Spoken Request Formulas",
              items: [
                { targetText: "혹시... 이것 좀 도와주실 수 있으세요?", phonetic: "Hoksi... igeot jom dowajusil su isseuseyo?", english: "By any chance... could you possibly help me with this?", detail: "Using '혹시' (by chance) and '좀' (a little) softens requests exponentially." },
                { targetText: "오늘 중으로 확인해 주시면 좋겠는데요...", phonetic: "Oneul jung-euro hwaginhae jusimyeon joketneundeyo...", english: "If you could review it sometime today, that would be wonderful...", detail: "Ending in '-는데요' leaves the conclusion open and respectful." },
              ],
            },
          ],
        },
      },
      {
        id: "drinking-dining-etiquette",
        label: "Drinking & Dining Etiquette",
        icon: "🍻",
        content: {
          summary: "Korean meals and 회식 (company dinners) involve deep respect rituals for seniors and colleagues.",
          subsections: [
            {
              title: "Core Dining & Drinking Rules",
              items: [
                { targetText: "술 마실 때 고개 돌리기", phonetic: "Turning head when drinking", english: "Turn head 45° away when drinking with elders", detail: "Never drink face-to-face in front of senior bosses or grandparents." },
                { targetText: "두 손으로 따르고 받기", phonetic: "Two hands pour and receive", english: "Hold bottle/glass with both hands", detail: "Right hand holds, left hand supports wrist or elbow as sign of respect." },
                { targetText: "식사 전후 인사: 잘 먹겠습니다 / 잘 먹었습니다", phonetic: "Jal meokgesseumnida / Jal meogeotseumnida", english: "I will eat well / I have eaten well", detail: "Mandatory verbal gratitude to host and cook before and after every meal." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "ko-hangul",
    badge: "한",
    title: "Hangul & Batchim Sound Shifts",
    description: "Master final consonant shifts, pure vowels, and natural Korean pitch flow.",
    category: "Alphabet & Phonetics",
    tabs: [
      {
        id: "batchim",
        label: "Batchim (받침) Sound Shifts",
        icon: "🔤",
        content: {
          summary: "When a syllable ends in a consonant (Batchim) and the next begins with 'ㅇ', the consonant carries over to create smooth liaison.",
          subsections: [
            {
              title: "Liaison & Carryover (연음 법칙)",
              items: [
                { targetText: "한국어 [한구거]", phonetic: "Han-gu-geo", english: "Korean language", detail: "The 'ㄱ' slides into '어' seamlessly." },
                { targetText: "음악 [으막]", phonetic: "Eu-mak", english: "Music", detail: "The 'ㅁ' connects into '악'." },
                { targetText: "맛있어요 [마시써요]", phonetic: "Ma-si-sseo-yo", english: "It is delicious", detail: "'ㅅ' carries over with tense sound." },
              ],
            },
          ],
        },
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// ── GERMAN MODULES (Deutsch) ──
// ══════════════════════════════════════════════════════════════════════════════
export const GERMAN_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "de-social-politeness",
    badge: "👔",
    title: "Du vs. Sie & Konjunktiv II Requests",
    description: "Navigate German formal distance, offering the 'Du', and polite requests with Konjunktiv II.",
    category: "Social Etiquette & Grammar",
    tabs: [
      {
        id: "du-vs-sie",
        label: "Du vs. Sie in Everyday Dialogues",
        icon: "🤝",
        content: {
          summary: "German maintains a strict boundary between public respect (Sie) and private familiarity (Du). Tech startups and IKEA use 'Du', but official life uses 'Sie'.",
          subsections: [
            {
              title: "Social Situations & Dialogue Contrasts",
              items: [
                {
                  targetText: "Bäcker / Amt: Wie geht es Ihnen? vs Freund: Wie geht's dir?",
                  phonetic: "[viː ɡeːt ɛs ˈiːnən] vs [viː ɡeːts diːɐ̯]",
                  english: "How are you? (Formal 'Sie' vs. Casual 'Du')",
                  detail: "Always address shopkeepers, doctors, police, and older neighbors with 'Sie'.",
                  tag: "Social Norm",
                },
                {
                  targetText: "Das 'Du' anbieten: Wir können uns gerne duzen!",
                  phonetic: "[viːɐ̯ ˈkœnən ʊns ˈɡɛʁnə ˈduːtsn̩]",
                  english: "We can gladly use 'du' with each other!",
                  detail: "The traditional ritual: only the older person, senior colleague, or host may offer this transition.",
                  tag: "Transition",
                },
                {
                  targetText: "Arbeit: Könnten Sie mir die Daten schicken? vs Kollege: Schickst du mir das kurz?",
                  phonetic: "Formal client email vs. Slack ping to peer",
                  english: "Could you send me the data? vs Can you send me that real quick?",
                  detail: "In German corporate life, mixing 'Herr Müller' with 'du' is never done.",
                  tag: "Workplace",
                },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Offer informal 'du' warmly after a successful sprint kickoff:",
            phraseTarget: "Wir arbeiten jetzt so eng zusammen, wollen wir uns nicht duzen? Ich bin Rafly!",
            phraseEnglish: "We're working so closely together now, shall we use 'du'? I'm Rafly!",
            scenarioId: "german-tech-sync",
          },
        },
      },
      {
        id: "konjunktiv-requests",
        label: "Konjunktiv II for Polite Requests",
        icon: "🙏",
        content: {
          summary: "Direct imperatives ('Geben Sie mir...') sound bossy in German. Use Konjunktiv II ('Könnten Sie...', 'Ich hätte gerne...') to sound cultured and polite.",
          subsections: [
            {
              title: "The Golden Konjunktiv II Formulas",
              items: [
                { targetText: "Ich hätte gerne einen Kaffee, bitte.", phonetic: "[ɪç ˈhɛtə ˈɡɛʁnə...]", english: "I would like a coffee, please.", detail: "Standard courteous order formula everywhere in Germany, Austria, and Switzerland." },
                { targetText: "Könnten Sie mir kurz helfen?", phonetic: "[ˈkœntn̩ ziː miːɐ̯ kʊʁts ˈhɛlfn̩]", english: "Could you perhaps help me for a moment?", detail: "Much more courteous than 'Können Sie...'." },
                { targetText: "Würden Sie das bitte wiederholen?", phonetic: "[ˈvʏʁdn̩ ziː das...]", english: "Would you please repeat that?", detail: "Polite rescue phrase when someone speaks too quickly." },
                { targetText: "Dürfte ich kurz vorbei?", phonetic: "[ˈdʏʁftə ɪç...]", english: "May I slip past for a second?", detail: "Polite phrase when maneuvering through crowded trains or buses." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "de-modal-particles",
    badge: "🥨",
    title: "Modal Particles, Contractions & Verbs",
    description: "The 5 modal particles (doch, mal, eben, halt, ja), spoken contractions, and separable verbs.",
    category: "Conversational Flow",
    tabs: [
      {
        id: "modal-particles",
        label: "Modal Particles (doch, mal, eben, halt, ja)",
        icon: "✨",
        content: {
          summary: "Modal particles are untranslatable emotion words that reveal attitude and intent. Native speakers use them in virtually every spoken sentence.",
          subsections: [
            {
              title: "The 5 Essential German Modal Particles",
              items: [
                { targetText: "Komm doch mal vorbei! (doch + mal)", phonetic: "Come on by sometime!", english: "Encouraging invitation", detail: "'doch' urges friendly action; 'mal' softens the command." },
                { targetText: "Schau mal hier! (mal)", phonetic: "Just look here!", english: "Softens instructions", detail: "'mal' removes harshness from any imperative." },
                { targetText: "Das ist halt so / Das ist eben so (halt / eben)", phonetic: "That's just the way it is", english: "Resigned acceptance of reality", detail: "Accepts facts that cannot be changed without stress." },
                { targetText: "Das weißt du ja schon! (ja)", phonetic: "As you already know!", english: "Shared common knowledge", detail: "Signals that both speaker and listener are in agreement." },
                { targetText: "Was machst du denn hier? (denn)", phonetic: "What on earth are you doing here?", english: "Curious conversational interest", detail: "Softens questions and shows authentic personal curiosity." },
              ],
            },
          ],
        },
      },
      {
        id: "contractions",
        label: "Spoken Contractions (hab's, gibt's)",
        icon: "⚡",
        content: {
          summary: "Spoken German compresses articles and pronouns relentlessly for acoustic efficiency.",
          subsections: [
            {
              title: "High-Frequency Spoken Contractions",
              items: [
                { targetText: "Gibt's hier WLAN? (Gibt es)", phonetic: "[ɡɪpts hiːɐ̯ veː-lan]", english: "Is there Wi-Fi here?", detail: "Merges 'Gibt es' into a single punchy syllable." },
                { targetText: "Ich hab's geschafft! (habe es)", phonetic: "[ɪç haps ɡəˈʃaft]", english: "I did it! / I made it!", detail: "Standard reduction across all German dialects." },
                { targetText: "Wie geht's dir? (geht es)", phonetic: "[viː ɡeːts diːɐ̯]", english: "How's it going with you?", detail: "Universal casual greeting." },
                { targetText: "Hast du 'nen Moment? ('nen = einen)", phonetic: "[hast du nən moˈmɛnt]", english: "Got a second?", detail: "'Einen' is reduced to ''nen' and 'eine' to ''ne' in casual speech." },
              ],
            },
          ],
        },
      },
      {
        id: "separable-verbs",
        label: "Separable Verbs in Spoken Flow",
        icon: "✂️",
        content: {
          summary: "In main clauses, the prefix detaches from separable verbs and jumps to the very end of the sentence.",
          subsections: [
            {
              title: "Prefix-at-the-End Mechanics in Real Speech",
              items: [
                { targetText: "anrufen → Ich rufe dich heute Abend an.", phonetic: "I will call you tonight.", english: "To call on the phone", detail: "The prefix 'an' lands at the sentence terminus." },
                { targetText: "mitkommen → Kommst du heute Abend mit?", phonetic: "Are you coming along tonight?", english: "To come along", detail: "'mit' finishes the question." },
                { targetText: "aufhören → Hör bitte damit auf!", phonetic: "Please stop that!", english: "To stop / cease", detail: "'auf' completes the imperative." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "de-grammar-regional",
    badge: "🗺️",
    title: "Word Order Pitfalls & Regional Dialects",
    description: "Verb position rules (V2 & kicker clauses) and regional differences (DE, AT, CH).",
    category: "Grammar & Regional Notes",
    tabs: [
      {
        id: "word-order",
        label: "Word-Order Pitfalls (V2 & Subordinates)",
        icon: "📐",
        content: {
          summary: "German grammar affects speaking through two rules: Verb in position 2 in statements, and verb kicked to the very end in subordinate clauses.",
          subsections: [
            {
              title: "The 2 Spoken Word-Order Pitfalls",
              items: [
                { targetText: "V2 Regel: Morgen fahre ich nach Berlin (NICHT: Morgen ich fahre)", phonetic: "Tomorrow I drive to Berlin", english: "Verb is ALWAYS position 2!", detail: "If you start with time or location, subject and verb invert." },
                { targetText: "Weil-Kicker: ...weil ich heute keine Zeit habe.", phonetic: "...because I have no time today.", english: "Subordinate clause verb kicker", detail: "'Weil', 'dass', and 'obwohl' kick conjugated verbs to the end." },
                { targetText: "Umgangssprache Shortcut: ...weil, ich habe keine Zeit.", phonetic: "Spoken colloquial shortcut", english: "Informal 'weil' with main clause order", detail: "Very common in fast everyday German speech, though flagged in writing." },
              ],
            },
          ],
        },
      },
      {
        id: "regional-de-at-ch",
        label: "Regional Notes: DE vs. AT vs. CH",
        icon: "🏔️",
        content: {
          summary: "German vocabulary shifts dramatically across Germany (DE), Austria (AT), and Switzerland (CH).",
          subsections: [
            {
              title: "Regional Greeting & Vocabulary Contrasts",
              description: "Sounding natural depends heavily on where you land in the DACH region.",
              items: [
                { targetText: "Begrüßung: Moin (Norddeutschland) vs Servus / Grüß Gott (Süd/AT) vs Grüezi (CH)", phonetic: "Greetings across regions", english: "Hello / Good day", detail: "'Moin' works 24/7 in Hamburg; 'Grüezi' is essential in Zürich." },
                { targetText: "Brötchen (DE) vs Semmel (Bayern/AT) vs Weggli (CH)", phonetic: "Bread roll", english: "Bread roll / bun", detail: "Asking for a 'Brötchen' in Vienna will instantly mark you as an outsider." },
                { targetText: "Fahrrad (DE) vs Radl (Bayern/AT) vs Velo (CH)", phonetic: "Bicycle", english: "Bicycle", detail: "Switzerland adopts French 'Velo' into everyday German speech." },
                { targetText: "Parken (DE/AT) vs Parkieren (CH)", phonetic: "To park", english: "To park a car", detail: "Swiss German frequently uses '-ieren' verb endings." },
              ],
            },
          ],
        },
      },
    ],
  },
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
        },
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// ── SPANISH MODULES (Español) ──
// ══════════════════════════════════════════════════════════════════════════════
export const SPANISH_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "es-pronouns-regional",
    badge: "🗣️",
    title: "Tú, Usted, Vos & Vosotros Split",
    description: "Master pronoun forms, Argentine Voseo, and the Spain vs. Latin America vosotros split.",
    category: "Pronouns & Regional Grammar",
    tabs: [
      {
        id: "tu-usted-vos",
        label: "Tú vs. Usted vs. Vos (Voseo)",
        icon: "👥",
        content: {
          summary: "Spanish offers three singular second-person pronouns: Tú (familiar), Usted (formal), and Vos (used across Argentina, Uruguay, and parts of Central America).",
          subsections: [
            {
              title: "Tú vs. Vos vs. Usted Conjugation Differences",
              description: "Notice the stress and verb changes in the Argentine/Rioplatense Voseo.",
              items: [
                {
                  targetText: "Tú tienes vs Vos tenés vs Usted tiene",
                  phonetic: "[tu ˈtje.nes] vs [bos teˈnes] vs [usˈteð ˈtje.ne]",
                  english: "You have (Standard Informal vs. Argentine Vos vs. Formal)",
                  detail: "Voseo shifts stress to the final syllable: tenés, podés, sabés, querés.",
                  tag: "Present Tense",
                },
                {
                  targetText: "Imperativo: ¡Mira! (Tú) vs ¡Mirá! (Vos) vs ¡Mire! (Usted)",
                  phonetic: "[ˈmi.ɾa] vs [miˈɾa] vs [ˈmi.ɾe]",
                  english: "Look! (Command)",
                  detail: "Argentines say: '¡Che, mirá esto!' with final syllable stress.",
                  tag: "Commands",
                },
                {
                  targetText: "Usted: ¿De dónde es usted, señor?",
                  phonetic: "[de ˈðon.de es usˈteð...]",
                  english: "Where are you from, sir?",
                  detail: "Always use Usted with elders, formal business clients, and authority figures.",
                  tag: "Respect",
                },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Deliver a warm Buenos Aires coffee invitation using natural Voseo:",
            phraseTarget: "Che, ¿vos tenés un ratito para tomar un café y charlar del proyecto?",
            phraseEnglish: "Hey, do you have a little bit of time to grab a coffee and chat about the project?",
            scenarioId: "tapas-madrid",
          },
        },
      },
      {
        id: "vosotros-vs-ustedes",
        label: "Vosotros vs. Ustedes Split",
        icon: "🌍",
        content: {
          summary: "In Spain, 'vosotros/vosotras' is used for informal plural 'you'. In Latin America, 'ustedes' is exclusively used for ALL plural situations.",
          subsections: [
            {
              title: "Spain (Penínsular) vs. Latin America (Hispanoamérica)",
              items: [
                {
                  targetText: "España: ¿Vosotros vais a la fiesta? vs LatAm: ¿Ustedes van a la fiesta?",
                  phonetic: "[boˈso.tɾos βajs...] vs [usˈte.ðes βan...]",
                  english: "Are you guys going to the party?",
                  detail: "In Spain, 'ustedes' is reserved strictly for high formal dignity.",
                  tag: "Plural You",
                },
                {
                  targetText: "España: ¿Qué queréis cenar? vs LatAm: ¿Qué quieren cenar?",
                  phonetic: "Vosotros (-éis) vs. Ustedes (-en)",
                  english: "What do you all want to eat for dinner?",
                  detail: "Notice the -éis verb ending in Spain vs -en in Latin America.",
                  tag: "Verb Conjugation",
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "es-regional-vocab",
    badge: "🌮",
    title: "Regional Vocabulary & Slang Notes",
    description: "Vocabulary across Mexico, Spain, Argentina & Colombia, with slang appropriateness guides.",
    category: "Vocabulary & Slang",
    tabs: [
      {
        id: "vocab-differences",
        label: "Vocab: ES vs. MX vs. AR vs. CO",
        icon: "🗺️",
        content: {
          summary: "Every Spanish-speaking country has distinct everyday words for transportation, food, and tech.",
          subsections: [
            {
              title: "Cross-Border Everyday Vocabulary Matrix",
              description: "Knowing these prevents funny or awkward misunderstandings across borders.",
              items: [
                { targetText: "Auto: Coche (España) vs Carro (México/Colombia) vs Auto (Argentina)", phonetic: "Car / Vehicle", english: "Car", detail: "In Spain 'coche' is standard; 'carro' sounds like a cart." },
                { targetText: "Papa: Patata (España) vs Papa (México, Argentina, Colombia)", phonetic: "Potato", english: "Potato", detail: "Tortilla de patatas in Madrid vs puré de papas in Bogotá." },
                { targetText: "Zumo: Zumo (España) vs Jugo (Latinoamérica)", phonetic: "Juice", english: "Fruit juice", detail: "Asking for 'zumo de naranja' in Mexico will draw curious looks." },
                { targetText: "Computadora: Ordenador (España) vs Computadora (Latinoamérica)", phonetic: "Computer", english: "Computer / Laptop", detail: "Spain adopted French 'ordinateur', while Latin America adopted English 'computer'." },
                { targetText: "Dinero: Pasta (España) vs Lana (México) vs Plata (Argentina/Colombia)", phonetic: "Money / Cash", english: "Money / Slang cash", detail: "'¿Tienes plata / lana / pasta?' = Do you have cash?" },
              ],
            },
          ],
        },
      },
      {
        id: "slang-appropriateness",
        label: "Slang & Appropriateness Notes",
        icon: "⚠️",
        content: {
          summary: "Slang builds instant rapport with peers, but using certain words in the wrong country or with elders is a major faux pas.",
          subsections: [
            {
              title: "Country Slang with Appropriateness Warnings",
              items: [
                { targetText: "España: ¡Qué guay! / Mola un montón", phonetic: "Cool / Awesome", english: "That's so cool!", detail: "Safe among all youth and friendly colleagues in Spain." },
                { targetText: "México: ¡Está chido! / ¿Qué onda, güey?", phonetic: "Cool / What's up, dude?", english: "Cool! / What's up, bro?", detail: "CAUTION: 'Güey' is strictly for close friends. Never say it to your boss, elders, or police." },
                { targetText: "Argentina: ¡Che, qué copado! / Boludo (CUIDADO)", phonetic: "Hey, that's awesome! / Dude or Idiot", english: "Hey, cool! / Pal (or Insult)", detail: "WARNING: 'Boludo' is affectionately used between close mates, but is a severe insult to strangers." },
                { targetText: "Colombia: ¡Qué chimba! / Bacano / Parce", phonetic: "Awesome / Great / Mate", english: "Super cool! / Great / Bro", detail: "NOTE: 'Parce' (friend) and 'bacano' are very warm; 'chimba' is popular informal youth slang." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "es-spoken-flow",
    badge: "🍷",
    title: "Subjunctive, Fillers & Diminutives",
    description: "Everyday subjunctive formulas ('Que te vaya bien'), fillers (pues, o sea), and soft diminutives.",
    category: "Conversational Flow",
    tabs: [
      {
        id: "subjunctive-everyday",
        label: "Subjunctive in Daily Phrases",
        icon: "✨",
        content: {
          summary: "The subjunctive mood isn't just advanced grammar; native speakers use it dozens of times a day in short fixed well-wishes and polite requests.",
          subsections: [
            {
              title: "High-Frequency Daily Subjunctive Formulas",
              items: [
                { targetText: "¡Que te vaya bien! (Ir → Vaya)", phonetic: "[ke te ˈβa.ʝa βjen]", english: "Hope all goes well for you! / Have a good one!", detail: "The universal parting phrase across all Spanish-speaking countries." },
                { targetText: "¡Ojalá tengamos buen tiempo!", phonetic: "[o.xaˈla teŋˈɡa.mos...]", english: "Hopefully / God willing we have good weather!", detail: "'Ojalá' (derived from Arabic 'Inshallah') always triggers subjunctive." },
                { targetText: "Cuando tengas tiempo, avísame. (Tener → Tengas)", phonetic: "[ˈkwan.do ˈteŋ.ɡas...]", english: "Whenever you have time, let me know.", detail: "Future time clauses with 'cuando' always require subjunctive." },
                { targetText: "Espero que estés bien. (Estar → Estés)", phonetic: "[esˈpe.ɾo ke esˈtes...]", english: "I hope you are doing well.", detail: "Standard opening line for emails and polite texts." },
              ],
            },
          ],
        },
      },
      {
        id: "fillers-diminutives",
        label: "Fillers (pues, o sea) & Diminutives",
        icon: "💬",
        content: {
          summary: "Native connectors (muletillas) buy thinking time, while diminutives (-ito, -ico) soften requests with warmth.",
          subsections: [
            {
              title: "Conversational Fillers (Muletillas)",
              items: [
                { targetText: "Pues, la verdad es que...", phonetic: "Well, the truth is that...", english: "Well / So then", detail: "Universal pause filler to formulate your thoughts." },
                { targetText: "O sea, no es tan fácil como parece.", phonetic: "I mean / That is to say...", english: "I mean / In other words", detail: "Used constantly to clarify or rephrase." },
                { targetText: "Bueno, a ver qué pasa.", phonetic: "Well, let's see what happens.", english: "Well / Let's see", detail: "'A ver' (let's see) signals curiosity or anticipation." },
                { targetText: "Este... ¿dónde estábamos?", phonetic: "Um... where were we?", english: "Um / Er (Latin America filler)", detail: "Ubiquitous thinking sound across Mexico and Colombia." },
              ],
            },
            {
              title: "Diminutives for Warmth (-ito, -ita, -ico)",
              description: "Attaching '-ito' softens the blow of time, costs, or requests, making speech warm and approachable.",
              items: [
                { targetText: "Dame un ratito / Espera un momentito", phonetic: "Give me a tiny moment", english: "Give me just a quick moment", detail: "Sounds much friendlier than 'Espera un momento'." },
                { targetText: "Ahorita vengo (México & LatAm)", phonetic: "Right now / in a bit", english: "I'll be right there (or in a while!)", detail: "Culturally famous: 'ahorita' can mean in 2 seconds or 2 hours." },
                { targetText: "Colombia / Costa Rica: un ratico / un momentico", phonetic: "-ico suffix", english: "A tiny moment", detail: "Regional variant in Colombia and the Caribbean ('los ticos')." },
              ],
            },
          ],
        },
      },
    ],
  },
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
        },
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// ── ENGLISH MODULES (English) ──
// ══════════════════════════════════════════════════════════════════════════════
export const ENGLISH_TOPIC_MODULES: LanguageTopicModule[] = [
  {
    id: "en-reductions-contractions",
    badge: "🗣️",
    title: "Spoken Contractions, Reductions & Phrasal Verbs",
    description: "Master natural reductions (gonna, wanna, gotta), double contractions, and essential phrasal verbs.",
    category: "Spoken Flow & Mechanics",
    tabs: [
      {
        id: "spoken-reductions",
        label: "Spoken Reductions (gonna, wanna, gotta)",
        icon: "⚡",
        content: {
          summary: "Native English speakers rarely pronounce individual words distinctly; they connect vowel-consonant clusters and compress unstressed auxiliaries.",
          subsections: [
            {
              title: "Core Spoken Reductions in Casual Speech",
              description: "Notice how modal verbs fuse seamlessly with their prepositions.",
              items: [
                { targetText: "going to → gonna", phonetic: "[ˈɡʌn.ə]", english: "I'm gonna head out now.", detail: "Universal in American, British, and Australian spoken English." },
                { targetText: "want to → wanna", phonetic: "[ˈwɑːn.ə]", english: "Do you wanna grab coffee?", detail: "Note: 'wanna' only works when 'want' is followed by a verb, not a noun." },
                { targetText: "got to → gotta", phonetic: "[ˈɡɑːt.ə]", english: "I've gotta finish this sprint task.", detail: "Expresses immediate casual necessity." },
                { targetText: "kind of / sort of → kinda / sorta", phonetic: "[ˈkaɪn.də / ˈsɔːr.tə]", english: "It's kinda tricky / sorta complicated.", detail: "Crucial conversational softener reducing direct bluntness." },
                { targetText: "let me / don't know → lemme / dunno", phonetic: "[ˈlɛm.miː / dəˈnoʊ]", english: "Lemme see... I dunno.", detail: "Everyday conversational thinking phrases." },
                { targetText: "Double contractions: I'd've / should've", phonetic: "[ˈaɪdəv / ˈʃʊdəv]", english: "I'd've come if I should've known.", detail: "Spoken fusion of 'I would have' and 'should have' (often heard as 'shoulda')." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Pronounce this relaxed tech standup update with natural reductions:",
            phraseTarget: "I'm gonna wrap up the PR today, but I kinda gotta sync with Liam first.",
            phraseEnglish: "I'm going to wrap up the pull request today, but I kind of have to sync with Liam first.",
            scenarioId: "tech-standup",
          },
        },
      },
      {
        id: "phrasal-verbs",
        label: "High-Frequency Phrasal Verbs & Idioms",
        icon: "🧩",
        content: {
          summary: "English relies heavily on phrasal verbs (verb + particle) rather than Latinate single-word verbs for spontaneous daily conversation.",
          subsections: [
            {
              title: "Essential Everyday Phrasal Verbs",
              items: [
                { targetText: "run into (someone)", phonetic: "to bump into / meet unexpectedly", english: "I ran into Sarah at the cafeteria.", detail: "Much more natural than 'I encountered Sarah unexpectedly'." },
                { targetText: "bring up (a topic)", phonetic: "to mention / raise a point", english: "Don't bring up the budget during the call.", detail: "Used in meetings to introduce discussion items." },
                { targetText: "call off (an event)", phonetic: "to cancel", english: "They had to call off the release due to bugs.", detail: "Standard colloquial term for cancel." },
                { targetText: "figure out (a problem)", phonetic: "to solve / comprehend", english: "We finally figured out the database latency.", detail: "Everyday synonym for resolve or diagnose." },
                { targetText: "look forward to (+ noun/ing)", phonetic: "to anticipate with pleasure", english: "Looking forward to catching up soon!", detail: "Remember: always followed by gerund (-ing) or noun." },
              ],
            },
            {
              title: "Everyday Idioms in Real Dialogue",
              items: [
                { targetText: "bite the bullet", phonetic: "face inevitable hardship bravely", english: "Let's bite the bullet and do the refactor.", detail: "Deciding to get a tough, unavoidable task over with." },
                { targetText: "hit the nail on the head", phonetic: "describe exactly accurately", english: "Your analysis hit the nail on the head.", detail: "Strong validation in meetings and debates." },
                { targetText: "cut corners", phonetic: "take shortcuts at quality expense", english: "We can't cut corners on security.", detail: "Essential for engineering trade-off debates." },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "en-social-nuance",
    badge: "🌐",
    title: "Small Talk, Softeners & Regional Dialects",
    description: "Small-talk norms ('How are you?'), diplomatic softeners, US/UK/AU usage, and false-formal traps.",
    category: "Social Nuance & Pragmatics",
    tabs: [
      {
        id: "small-talk-softeners",
        label: "Small-Talk Norms & Softeners",
        icon: "☕",
        content: {
          summary: "In English-speaking culture, small talk establishes social safety. 'How are you?' is a greeting formula, not an invitation for medical history!",
          subsections: [
            {
              title: "'How are you?' Greeting Norms",
              items: [
                {
                  targetText: "Greeting: 'How are you?' / 'How's it going?' → Response: 'Good, yourself?'",
                  phonetic: "[ɡʊd, jɔːrˈsɛlf]",
                  english: "Standard reciprocal acknowledgment",
                  detail: "Rule: Keep it brief and positive. Never launch into personal complaints unless talking to an intimate friend.",
                  tag: "Social Norm",
                },
                {
                  targetText: "Greeting: 'What's up?' → Response: 'Not much, you?'",
                  phonetic: "[nɑːt mʌtʃ, juː]",
                  english: "Casual peer greeting",
                  detail: "A rhetorical greeting requiring zero factual reporting.",
                  tag: "Peer Greeting",
                },
              ],
            },
            {
              title: "Conversational Softeners (Diplomatic Phrasing)",
              description: "Direct imperatives sound rude or demanding in English workplaces. Use these softeners.",
              items: [
                { targetText: "I was wondering if you could take a look at this?", phonetic: "Past continuous softener", english: "Could you review this?", detail: "Using 'was wondering' distances the request, making it polite and non-coercive." },
                { targetText: "Could you perhaps give us a quick hand with this?", phonetic: "Modal + 'perhaps'", english: "Can you help?", detail: "'Perhaps' and 'quick' minimize the perceived burden on the other person." },
                { targetText: "Would you mind if I hopped off a few minutes early?", phonetic: "Conditional permission", english: "Can I leave early?", detail: "Notice: 'Would you mind if I...' followed by past tense." },
                { targetText: "Just wanted to check in on the status.", phonetic: "Minimizer 'just'", english: "Status inquiry", detail: "'Just' removes aggressive pressure from follow-up messages." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Deliver a diplomatic request softening the blow to a busy colleague:",
            phraseTarget: "I was wondering if you might have five minutes today to run through the deployment checklist?",
            phraseEnglish: "I was wondering if you might have five minutes today to run through the deployment checklist?",
            scenarioId: "tech-standup",
          },
        },
      },
      {
        id: "us-uk-au-differences",
        label: "US vs. UK vs. AU Regional Differences",
        icon: "🗺️",
        content: {
          summary: "Vocabulary, spelling, and colloquial norms differ noticeably across the United States, United Kingdom, and Australia.",
          subsections: [
            {
              title: "Vocabulary Contrasts: US vs. UK vs. AU",
              items: [
                { targetText: "Elevator (US) vs Lift (UK / AU)", phonetic: "Vertical transit", english: "Elevator / Lift", detail: "'Take the lift to the 4th floor' in London/Sydney." },
                { targetText: "Chips (US) vs Crisps (UK) vs Chips (AU)", phonetic: "Snack potato", english: "Potato chips", detail: "In the UK, 'chips' are hot fries, while bagged chips are 'crisps'!" },
                { targetText: "Takeout (US) vs Takeaway (UK / AU)", phonetic: "Prepared food to go", english: "Food to go", detail: "'Let's get a takeaway tonight' in the UK and Australia." },
                { targetText: "Apartment (US / AU) vs Flat (UK)", phonetic: "Residential unit", english: "Living apartment", detail: "'Looking for a flat in Shoreditch'." },
                { targetText: "Pants (US / AU) vs Trousers (UK)", phonetic: "Clothing warning", english: "Pants / Trousers", detail: "WARNING: In the UK, 'pants' refers strictly to underwear!" },
                { targetText: "Buddy / Pal (US) vs Mate (UK / AU)", phonetic: "Friend designation", english: "Friend / Mate", detail: "'Cheers, mate!' is the universal greeting/thanks in the UK and Australia." },
                { targetText: "I reckon (UK / AU) vs I think / I figure (US)", phonetic: "[aɪ ˈrɛk.ən]", english: "I think / In my opinion", detail: "Extremely common in British and Australian everyday speech." },
                { targetText: "No worries (AU / UK / US)", phonetic: "[noʊ ˈwɜːr.iz]", english: "You're welcome / No problem", detail: "Originated in Australia, now universal across modern English." },
              ],
            },
          ],
        },
      },
      {
        id: "false-formal-flags",
        label: "False-Formal Flags Learners Overuse",
        icon: "🚨",
        content: {
          summary: "Many non-native English speakers overuse archaic, overly stiff, or bureaucratic phrasing that sounds unnatural or alienating to native speakers.",
          subsections: [
            {
              title: "Stiff Phrases to Avoid & Natural Alternatives",
              items: [
                {
                  targetText: "Flagged: 'Kindly revert back' → Natural: 'Please get back to me' or 'Let me know'",
                  phonetic: "[pliːz ɡɛt bæk tuː miː]",
                  english: "Learner trap: 'Revert back' is redundant and excessively archaic.",
                  detail: "Native speakers never say 'revert back' in modern communication.",
                  tag: "High Alert",
                },
                {
                  targetText: "Flagged: 'Myself [Name]' → Natural: 'I'm [Name]' or 'My name is [Name]'",
                  phonetic: "[aɪm ˈræf.li]",
                  english: "Learner trap: Using reflexive pronoun 'myself' for introduction.",
                  detail: "Incorrect grammar commonly heard in South Asian and international business English.",
                  tag: "Grammar Trap",
                },
                {
                  targetText: "Flagged: 'Please do the needful' → Natural: 'Could you please take care of this?'",
                  phonetic: "[kʊd juː teɪk keər əv ðɪs]",
                  english: "Learner trap: 'Do the needful' sounds bureaucratic and impersonal.",
                  detail: "Specify the exact action needed instead of using this 19th-century colonial idiom.",
                  tag: "Cliché",
                },
                {
                  targetText: "Flagged: 'I am wanting to inform you' → Natural: 'I just wanted to let you know'",
                  phonetic: "[aɪ dʒʌst ˈwɑːn.tɪd tuː lɛt juː noʊ]",
                  english: "Learner trap: Stative verb 'want' shouldn't use continuous tense.",
                  detail: "'I just wanted to let you know' sounds courteous, natural, and effortless.",
                  tag: "Stative Verb",
                },
                {
                  targetText: "Flagged: 'Respected Sir / Respected Madam' → Natural: 'Hi [First Name]' or 'Dear Mr./Ms. [Last Name]'",
                  phonetic: "[haɪ ˈeɪ.lə.nə]",
                  english: "Learner trap: Overly deferential salutations sound archaic in modern tech/business.",
                  detail: "Modern global business culture operates on first-name egalitarian respect.",
                  tag: "Salutations",
                },
              ],
            },
          ],
        },
      },
    ],
  },
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
