import { CurriculumArea } from "./types";

export const FRENCH_CURRICULUM_AREAS: CurriculumArea[] = [
  // ── AREA 1: Daily life & small talk ──
  {
    id: 1,
    title: "Vie Quotidienne & Petites Conversations",
    subtitle: "Greetings, weather, weekend plans, hobbies",
    icon: "☕",
    topics: [
      {
        id: "fr-t1-bistro-greeting",
        areaId: 1,
        areaTitle: "Vie Quotidienne",
        title: "Rencontre Inattendue au Café (Café Greeting)",
        situation: "Croiser un collègue au comptoir d'un bistrot parisien un lundi matin et échanger des nouvelles du week-end.",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "5-6 mins",
        scenarioId: "cafe-paris",
        keyPhrases: [
          { phrase: "Tiens, salut ! Quelle bonne surprise !", phonetic: "[tjɛ̃ sa.ly kɛl bɔn syʁ.pʁiz]", english: "Hey, what a nice surprise!", register: "casual" },
          { phrase: "Comment tu vas depuis vendredi ?", phonetic: "[kɔ.mɑ̃ ty va də.pɥi vɑ̃.dʁə.di]", english: "How are you doing since Friday?", register: "casual" },
          { phrase: "Ça va super, et toi ?", phonetic: "[sa va sy.pɛʁ e twa]", english: "Doing great, and you?", register: "casual" },
          { phrase: "T'as passé un bon week-end ?", phonetic: "[ta pa.se œ̃ bɔ̃ wi.kɛnd]", english: "Did you have a good weekend?", register: "casual" },
          { phrase: "Rien de spécial, tranquille à la maison.", phonetic: "[ʁjɛ̃ də spe.sjal tʁɑ̃.kil...]", english: "Nothing special, relaxed at home.", register: "neutral" },
          { phrase: "Il a fait un temps magnifique samedi !", phonetic: "[il a fɛ œ̃ tɑ̃ ma.ɲi.fik...]", english: "The weather was gorgeous on Saturday!", register: "neutral" },
          { phrase: "J'en ai profité pour me balader.", phonetic: "[ʒɑ̃n e pʁɔ.fi.te puʁ mə ba.la.de]", english: "I took advantage of it to go for a stroll.", register: "neutral" },
          { phrase: "Allez, je te laisse, j'ai une réu.", phonetic: "[a.le ʒə tə lɛs ʒe yn ʁe.y]", english: "Alright, I'll let you go, have a meeting.", register: "casual" },
          { phrase: "On se capte plus tard pour déjeuner !", phonetic: "[ɔ̃ sə kapt ply taʁ puʁ de.ʒœ.ne]", english: "Let's connect later for lunch!", register: "casual" },
          { phrase: "Bonne journée et bon courage !", phonetic: "[bɔn ʒuʁ.ne e bɔ̃ ku.ʁaʒ]", english: "Have a great day and good luck!", register: "neutral" }
        ],
        dialogue: [
          { speaker: "Julien", line: "Tiens, Rafly ! Quelle surprise de te voir ici si tôt !", english: "Hey, Rafly! What a surprise to see you here so early!" },
          { speaker: "Rafly", line: "Salut Julien ! Et oui, indispensable pour attaquer la semaine du bon pied.", english: "Hey Julien! Yeah, essential to start the week on the right foot.", fillers: ["Et oui"] },
          { speaker: "Julien", line: "Grave ! T'as passé un bon week-end ? T'as fait des trucs sympas ?", english: "Totally! Good weekend? Did you do fun stuff?" },
          { speaker: "Rafly", line: "Franchement, hyper tranquille. On s'est fait une petite balade au parc Montsouris samedi avec le soleil.", english: "Frankly, super chill. Took a stroll in Parc Montsouris with the sunshine.", fillers: ["Franchement"] },
          { speaker: "Julien", line: "Ah le top ! Ça fait tellement du bien de voir un rayon de soleil.", english: "Ah, the best! Feels so good to get some sunshine." },
          { speaker: "Rafly", line: "Et toi, t'as réussi à te reposer un peu ?", english: "And you, managed to get some rest?" },
          { speaker: "Julien", line: "Bof, pas vraiment. Dîner de famille chez les beaux-parents, du coup pas beaucoup dormi !", english: "Meh, not really. Family dinner at in-laws, so didn't sleep much!", fillers: ["Bof", "du coup"] },
          { speaker: "Rafly", line: "Ah mince ! Bon, je te laisse, mon allongé est prêt et le standup démarre.", english: "Ah bummer! Well, I'll let you go, my coffee is ready and standup starts.", fillers: ["Bon"] },
          { speaker: "Julien", line: "Ça marche ! On se capte vers midi pour la pause déj' ?", english: "Works! Catch up around noon for lunch break?" },
          { speaker: "Rafly", line: "Carrément ! Allez, bon courage !", english: "Totally! Have a good morning!" }
        ],
        fluencyBoosters: [
          { booster: "Grave !", category: "casual", usage: "High-frequency French youth confirmation meaning 'totally / 100% true'.", example: "Il fait froid aujourd'hui. — Grave !" },
          { booster: "Carrément !", category: "casual", usage: "Emphatic affirmative agreement meaning 'absolutely / for sure'.", example: "Tu viens avec nous ? — Carrément !" },
          { booster: "du coup", category: "filler", usage: "The ultimate Parisian conversational glue meaning 'so / as a result'.", example: "Le métro était bloqué, du coup je suis venu à pied." },
          { booster: "Bof", category: "discourse marker", usage: "Expresses lukewarm indifference or slight disappointment.", example: "Tu as aimé le film ? — Bof, sans plus." },
          { booster: "On se capte", category: "idiom", usage: "Colloquial idiom meaning 'let's touch base / catch up soon'.", example: "On se capte ce soir par message." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'Je suis bien, merci.'", correction: "Say: 'Ça va super, et toi ?' or 'Tout va bien !'", explanation: "'Je suis bien' means 'I am comfortable' physically, not 'I am doing well'." },
          { mistake: "Learner uses textbook negation 'Je ne sais pas' in casual speech.", correction: "Say: 'J'sais pas' or 'Chais pas'.", explanation: "Dropping 'ne' is natural and universal in spoken French." },
          { mistake: "Learner says: 'Au revoir, monsieur' to a peer colleague.", correction: "Say: 'Allez, bonne journée !' or 'À plus !'", explanation: "Save 'monsieur' for elderly strangers and formal retail staff." }
        ],
        culturalPragmaticNote: {
          title: "The Art of the Parisian Comptoir",
          textbookVsReality: "Textbooks show sit-down dining only."
        },
        rolePlayPrompts: {
          guided: "Order an espresso at the zinc counter, chat about the morning rain, and ask the barista for a croissant.",
          semiOpen: "Meet a French colleague on the office terrace. Ask about their weekend and complain humorously about métro line 13.",
          fullyOpen: "Politely negotiate with your manager to tutoyer each other after three months of working together."
        },
        followUpQuestions: [
          "Tu es plutôt café au comptoir en 2 minutes ou posé en terrasse avec un bouquin ?",
          "Quel est ton coin préféré à Paris pour te balader le dimanche quand il fait beau ?",
          "Est-ce que tu trouves facile de tutoyer rapidement tes collègues ou tu préfères le vouvoiement ?",
          "Comment tu gères le manque de sommeil après un week-end trop chargé ?",
          "C'est quoi ton adresse de boulangerie préférée pour les viennoiseries le matin ?"
        ],
        canDoStatements: [
          "I can greet a colleague casually using natural openers like 'Tiens, salut !'.",
          "I can drop the negative particle 'ne' naturally in spoken French.",
          "I can use popular fillers like 'du coup', 'grave', and 'carrément' appropriately."
        ]
      }
    ]
  }
];

export const FRENCH_FULL_CURRICULUM = FRENCH_CURRICULUM_AREAS;
