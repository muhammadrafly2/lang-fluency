import { CurriculumArea } from "./types";

export const SPANISH_CURRICULUM_AREAS: CurriculumArea[] = [
  // ── AREA 1: Daily life & small talk ──
  {
    id: 1,
    title: "Vida Cotidiana y Charla Informal",
    subtitle: "Greetings, weather, weekend plans, hobbies",
    icon: "☕",
    topics: [
      {
        id: "es-t1-tapas-greeting",
        areaId: 1,
        areaTitle: "Vida Cotidiana y Charla",
        title: "Encuentro Espontáneo en el Café (Café Greeting)",
        situation: "Encontrarse con un compañero en la cola de una cafetería en Madrid y charlar sobre el fin de semana.",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "5-6 mins",
        scenarioId: "tapas-madrid",
        keyPhrases: [
          { phrase: "¡Hombre, qué sorpresa verte por aquí!", phonetic: "[ˈom.bɾe ke soɾˈpɾe.sa...]", english: "Man, what a surprise to see you here!", register: "casual" },
          { phrase: "¿Cómo va la semana?", phonetic: "[ˈko.mo βa la seˈma.na]", english: "How's the week going?", register: "neutral" },
          { phrase: "Tirando, que no es poco.", phonetic: "[tiˈɾan.do ke no es ˈpo.ko]", english: "Getting by, which is something.", register: "casual" },
          { phrase: "¿Qué tal el finde? ¿Hiciste algo especial?", phonetic: "[ke tal el ˈfin.de...]", english: "How was the weekend? Anything special?", register: "casual" },
          { phrase: "Bastante tranquilo, la verdad.", phonetic: "[basˈtan.te tɾaŋˈki.lo la βeɾˈðað]", english: "Pretty quiet, honestly.", register: "neutral" },
          { phrase: "Nos fuimos de ruta por la sierra.", phonetic: "[nos ˈfwi.mos de ˈru.ta...]", english: "We went hiking in the mountains.", register: "casual" },
          { phrase: "¡Qué envidia me das!", phonetic: "[ke emˈbi.ðja me ðas]", english: "I'm so jealous!", register: "casual" },
          { phrase: "Bueno, te dejo que tengo reunión.", phonetic: "[ˈbwe.no te ˈðe.xo ke ˈteŋ.ɡo...]", english: "Well, I'll let you go, have a meeting.", register: "casual" },
          { phrase: "A ver si nos vemos pronto.", phonetic: "[a βeɾ si nos ˈbe.mos ˈpɾon.to]", english: "Let's catch up soon.", register: "neutral" },
          { phrase: "¡Venga, que tengas buen día!", phonetic: "[ˈbeŋ.ɡa ke ˈteŋ.ɡas βwen ˈdi.a]", english: "Alright, have a great day!", register: "casual" }
        ],
        dialogue: [
          { speaker: "Marcos", line: "¡Hombre, Rafly! ¡Qué casualidad encontrarte aquí un lunes por la mañana!", english: "Man, Rafly! What a coincidence to run into you on a Monday morning!" },
          { speaker: "Rafly", line: "¡Hola Marcos! Ya ves, necesitaba cafeína urgente para arrancar el día.", english: "Hey Marcos! As you can see, urgently needed caffeine to kick off the day.", fillers: ["Ya ves"] },
          { speaker: "Marcos", line: "Te entiendo perfectamente. ¿Qué tal el finde? ¿Descansaste?", english: "I completely understand. How was the weekend? Rest up?" },
          { speaker: "Rafly", line: "La verdad es que bastante bien. Me fui de senderismo por Navacerrada con unos amigos.", english: "Truth is, pretty well. Went hiking around Navacerrada with friends.", fillers: ["La verdad es que"] },
          { speaker: "Marcos", line: "¡Qué guay! Hacía un tiempo espectacular además.", english: "How cool! The weather was spectacular too." },
          { speaker: "Rafly", line: "¿Y tú qué hiciste? ¿Pudiste desconectar del trabajo?", english: "And what did you do? Could you disconnect from work?" },
          { speaker: "Marcos", line: "Bueno, ya sabes, maratón de series y comida con la familia. Muy de tranquis.", english: "Well, you know, series binge and family meal. Very relaxed.", fillers: ["ya sabes"] },
          { speaker: "Rafly", line: "Planazo también. Oye, te dejo que ya me toca pedir y tengo standup a las diez.", english: "Great plan too. Hey, I'll let you go, my turn to order and standup at ten." },
          { speaker: "Marcos", line: "¡Venga, dale caña! Nos vemos luego en la oficina.", english: "Alright, crush it! See you later at the office." }
        ],
        fluencyBoosters: [
          { booster: "Hombre!", category: "filler", usage: "Universal affectionate interjection used in Spain to express warmth or surprise.", example: "¡Hombre, cuánto tiempo sin verte!" },
          { booster: "Tirando", category: "idiom", usage: "Modest, relatable answer to 'How are you?' meaning 'surviving / getting by'.", example: "¿Qué tal todo? — Tirando, la verdad." },
          { booster: "de tranquis", category: "casual", usage: "Madrid youth slang meaning very quiet, chill, and peaceful.", example: "Este fin de semana nos quedamos en casa de tranquis." },
          { booster: "¡Qué guay!", category: "casual", usage: "Universal Spanish expression for 'how cool / awesome'.", example: "Fuimos a ver el concierto. — ¡Qué guay!" },
          { booster: "dale caña", category: "idiom", usage: "Energetic encouragement meaning 'give it your all / go for it'.", example: "Tienes el examen hoy, ¿no? ¡Dale caña!" }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'Yo estoy bien, gracias, ¿y tú?' in casual street conversation.", correction: "Say: '¡Todo bien! ¿Y tú qué tal?' or 'Tirando, ¿y tú?'", explanation: "Textbook phrase sounds like a robotic classroom drill." },
          { mistake: "Learner says: 'El fin de semana fue muy divertido para mí.'", correction: "Say: 'Lo pasé genial el finde.'", explanation: "Use the reflexive verbal idiom 'pasarlo genial / pasarlo bien'." },
          { mistake: "Learner says: 'Yo salgo ahora.' to leave a conversation.", correction: "Say: 'Bueno, te dejo que tengo prisa.'", explanation: "Frame departures around freeing the other person courteously." }
        ],
        culturalPragmaticNote: {
          title: "The Warmth of Madrid Small Talk",
          textbookVsReality: "Textbooks show formal distance with 'Usted' for everyone."
        },
        rolePlayPrompts: {
          guided: "Meet a colleague at a Madrid café, comment on the sunny weather, and ask about their weekend.",
          semiOpen: "Your Spanish friend asks what you like doing outside work. Describe your favorite outdoor hobby.",
          fullyOpen: "You bump into your company's Spanish CEO at an espresso bar. Balance respect with conversational warmth."
        },
        followUpQuestions: [
          "¿Prefieres los fines de semana activos en la naturaleza o de relax total en casa?",
          "¿Qué tipo de café sueles pedir cuando vas a un bar en España?",
          "¿Cuál ha sido la excursión o ruta más bonita que has hecho recientemente?",
          "¿Te resulta fácil iniciar una conversación con desconocidos en un bar o cafetería?",
          "¿Qué planes tienes para el próximo puente o día festivo?"
        ],
        canDoStatements: [
          "I can greet an acquaintance warmly using colloquial openers like '¡Hombre!'.",
          "I can describe a relaxed weekend using native expressions like 'de tranquis'.",
          "I can conclude a brief café catch-up politely with 'te dejo que tengo reunión'."
        ]
      }
    ]
  }
];

export const SPANISH_FULL_CURRICULUM = SPANISH_CURRICULUM_AREAS;
