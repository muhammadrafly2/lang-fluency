import { CurriculumArea } from "./types";

export const GERMAN_CURRICULUM_AREAS: CurriculumArea[] = [
  // ── AREA 1: Daily life & small talk ──
  {
    id: 1,
    title: "Alltag & Smalltalk (Daily Life & Small Talk)",
    subtitle: "Greetings, weather, weekend plans, hobbies",
    icon: "☕",
    topics: [
      {
        id: "de-t1-baeckerei-greeting",
        areaId: 1,
        areaTitle: "Alltag & Smalltalk",
        title: "Bäckerei-Begegnung am Montagmorgen (Bakery Catch-Up)",
        situation: "Zufälliges Treffen mit einem Kollegen in der Bäckerei-Schlange in Berlin und kurzer Austausch über das Wochenende.",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "5-6 mins",
        scenarioId: "berlin-cafe",
        keyPhrases: [
          { phrase: "Morgen! Na, auch auf Kaffee-Jagd?", phonetic: "[ˈmɔʁɡn̩ naː aʊx aʊf ˈkafeː jaːkt]", english: "Morning! You also hunting for coffee?", register: "casual" },
          { phrase: "Wie war dein Wochenende? Alles gut?", phonetic: "[viː vaːɐ̯ daɪn ˈvɔxn̩ˌʔɛndə...]", english: "How was your weekend? Everything good?", register: "casual" },
          { phrase: "Ganz entspannt, ich hab viel geschlafen.", phonetic: "[ɡants ɛntˈʃpant ɪç hap fiːl...]", english: "Very relaxed, I slept a lot.", register: "neutral" },
          { phrase: "Das Wetter war ja echt traumhaft am Samstag!", phonetic: "[das ˈvɛtɐ vaːɐ̯ jaː ɛçt ˈtʁaʊmhaft...]", english: "The weather was really dreamy on Saturday!", register: "casual" },
          { phrase: "Ich war im Mauerpark unterwegs.", phonetic: "[ɪç vaːɐ̯ ɪm ˈmaʊɐpaʁk...]", english: "I was out and about in Mauerpark.", register: "casual" },
          { phrase: "Ich hätte gerne zwei Dinkelbrötchen, bitte.", phonetic: "[ɪç ˈhɛtə ˈɡɛʁnə tsvaɪ...]", english: "I would like two spelt bread rolls, please.", register: "formal" },
          { phrase: "Zum Hieressen oder zum Mitnehmen?", phonetic: "[tsʊm ˈhiːɐ̯ʔɛsn̩ ˈoːdɐ tsʊm mɪtˈneːmən]", english: "For here or to go?", register: "neutral" },
          { phrase: "Genau, machen wir so!", phonetic: "[ɡəˈnaʊ ˈmaxn̩ viːɐ̯ zoː]", english: "Exactly, let's do it like that!", register: "casual" },
          { phrase: "Alles klar, bis gleich im Büro!", phonetic: "[ˈaləs klaːɐ̯ bɪs ɡlaɪç ɪm byˈʁoː]", english: "All clear, see you shortly in the office!", register: "casual" },
          { phrase: "Schönen Start in die Woche!", phonetic: "[ˈʃøːnən ʃtaʁt ɪn diː ˈvɔxə]", english: "Have a great start to the week!", register: "neutral" }
        ],
        dialogue: [
          { speaker: "Felix", line: "Morgen, Rafly! Na, brauchst du auch erst mal Koffein zum Überleben?", english: "Morning, Rafly! Need some caffeine to survive too?" },
          { speaker: "Rafly", line: "Hallo Felix! Ja, total. Ohne Kaffee geht am Montagmorgen gar nichts.", english: "Hello Felix! Yeah, totally. Nothing works Monday morning without coffee.", fillers: ["Ja, total"] },
          { speaker: "Felix", line: "Glaub ich dir sofort! Hattest du ein schönes Wochenende?", english: "Believe you immediately! Did you have a nice weekend?" },
          { speaker: "Rafly", line: "Ja, war echt super entspannt. Wir waren am Samstag am Wannsee spazieren, das Wetter war ja herrlich.", english: "Yeah, really relaxed. We walked at Wannsee Saturday, weather was lovely.", fillers: ["ja"] },
          { speaker: "Felix", line: "Stimmt, die Sonne hat richtig gutgetan. Ich war ehrlich gesagt den ganzen Sonntag auf der Couch.", english: "True, sunshine felt good. Honestly spent all Sunday on the couch.", fillers: ["ehrlich gesagt"] },
          { speaker: "Rafly", line: "Muss auch mal sein! Man braucht ja auch mal Pause vom Bildschirm.", english: "Must be done! One needs a break from the screen.", fillers: ["ja"] },
          { speaker: "Bäckerin", line: "Der Nächste bitte! Was darf's denn sein?", english: "Next please! What can I get for you?" },
          { speaker: "Felix", line: "Geh du ruhig vor, Rafly! Ich überlege noch zwischen Franzbrötchen und Croissant.", english: "Go ahead Rafly! Still deciding between Franzbrötchen and croissant." },
          { speaker: "Rafly", line: "Danke dir! Ich hätte gerne einen Cappuccino mit Hafermilch zum Mitnehmen, bitte.", english: "Thanks! I'd like an oat cappuccino to go, please." },
          { speaker: "Felix", line: "Alles klar, Rafly, bis gleich im Daily Standup!", english: "All clear, Rafly, see you in daily standup!" },
          { speaker: "Rafly", line: "Bis gleich, Felix!", english: "See you shortly, Felix!" }
        ],
        fluencyBoosters: [
          { booster: "Na, ...", category: "filler", usage: "Universal German conversational starter checking in warmly on someone.", example: "Na, wie geht's dir heute?" },
          { booster: "Muss auch mal sein!", category: "idiom", usage: "Reassuring idiom justifying rest, indulgence, or taking it easy.", example: "Sonntags ausschlafen muss auch mal sein!" },
          { booster: "Was darf's denn sein?", category: "formal", usage: "Traditional friendly German customer service formula at bakeries and counters.", example: "Guten Morgen, was darf's denn sein?" },
          { booster: "Alles klar!", category: "discourse marker", usage: "Universal German agreement meaning 'all set / understood / got it'.", example: "Treffen wir uns um zehn? — Alles klar!" },
          { booster: "gar nichts", category: "casual", usage: "Emphatic spoken negation meaning 'absolutely nothing at all'.", example: "Ohne Brille sehe ich gar nichts." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'Ich will einen Kaffee' at the bakery.", correction: "Say: 'Ich hätte gerne einen Cappuccino, bitte.'", explanation: "'Ich will' sounds demanding and aggressive in Germany. Use Konjunktiv II 'Ich hätte gerne'." },
          { mistake: "Learner addresses a young peer colleague as 'Sie'.", correction: "Say: 'Felix, wie war dein Wochenende?' (Du-Form).", explanation: "Young tech and office coworkers always use 'du' with each other." },
          { mistake: "Learner forgets to position the separable prefix at the sentence end.", correction: "Say: 'Ich rufe dich morgen an.' (NOT: 'Ich anrufe dich morgen').", explanation: "In German main clauses, separable prefixes must detach to the absolute end." }
        ],
        culturalPragmaticNote: {
          title: "The Sacred German Bäckerei Protocol",
          textbookVsReality: "Textbooks show sit-down cafés."
        },
        rolePlayPrompts: {
          guided: "Order two bread rolls and an espresso at a Berlin bakery using polite Konjunktiv II.",
          semiOpen: "Meet a colleague in the office kitchen on Monday. Discuss weekend weather and ask if they watched the football match.",
          fullyOpen: "Your manager asks you how you spent your weekend. Share an outdoor trip while keeping professional boundaries."
        },
        followUpQuestions: [
          "Bist du morgens eher der Bäckerei-Typ oder frühstückst du lieber in Ruhe zu Hause?",
          "Was ist dein deutsches Lieblingsgebäck (z. B. Franzbrötchen, Brezel oder Apfelstrudel)?",
          "Findest du es schwierig, im Deutschen zwischen 'Du' und 'Sie' zu unterscheiden?",
          "Was machst du in Berlin oder deiner Stadt am liebsten an einem sonnigen Frühlingswochenende?",
          "Trinkst du deinen Kaffee mit normaler Milch oder bevorzugst du Hafermilch?"
        ],
        canDoStatements: [
          "I can order at a German bakery politely using 'Ich hätte gerne...'.",
          "I can use modal particles like 'ja' and 'denn' to sound natural in spoken exchanges.",
          "I can chat about weekend weather and relaxation using idioms like 'Muss auch mal sein'."
        ]
      }
    ]
  }
];

export const GERMAN_FULL_CURRICULUM = GERMAN_CURRICULUM_AREAS;
