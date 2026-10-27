export interface PracticeQuestion {
  id: string;
  type: "translate" | "dialogue-response" | "fill-blank" | "listen-type";
  prompt: string; // Spoken/displayed prompt from the coach
  promptTranslation?: string; // Guidance translation
  coachName: string;
  coachAvatar: string;
  expectedAnswers: string[]; // Valid acceptable answers
  wordBank: string[]; // Token chips including distractors
  hint?: string;
  explanation?: string;
  xpReward: number;
}

export interface PracticeUnit {
  id: string;
  sectionNumber: number;
  unitNumber: number;
  topicAreaId: number;
  title: string;
  subtitle: string;
  icon: string;
  levelBadge: string;
  languageCode: string;
  questions: PracticeQuestion[];
}

export const INTERACTIVE_PRACTICE_UNITS: Record<string, PracticeUnit[]> = {
  // ── JAPANESE (日本語) ──
  japanese: [
    {
      id: "ja-unit-1",
      sectionNumber: 1,
      unitNumber: 1,
      topicAreaId: 1,
      title: "日常会話と挨拶 (Daily Greetings & Small Talk)",
      subtitle: "Basic greetings, weather observations, and weekend catch-up",
      icon: "☕",
      levelBadge: "JLPT N5 • A1",
      languageCode: "japanese",
      questions: [
        {
          id: "ja-u1-q1",
          type: "translate",
          prompt: "These are my white hats.",
          promptTranslation: "Type the translation in natural Japanese",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "これらはわたしのしろいぼうしです。",
            "これらは私の白い帽子です。",
            "これらは私の白い帽子です",
            "これらはわたしのしろいぼうしです",
            "これらはわたしの白い帽子です",
            "korera wa watashi no shiroi boushi desu"
          ],
          wordBank: ["これらは", "わたしの", "しろい", "ぼうしです", "くろい", "あれは", "ねこです", "ほん"],
          hint: "Remember: 'these' = これらは, 'white' = 白い (しろい), 'hat' = 帽子 (ぼうし).",
          explanation: "In Japanese, noun-modifying adjectives like 白い (shiroi) precede the noun 帽子 (boushi).",
          xpReward: 15
        },
        {
          id: "ja-u1-q2",
          type: "dialogue-response",
          prompt: "田中さん：ラフリーさん！奇遇ですね！週末はゆっくり休めましたか？",
          promptTranslation: "Respond that you chilled at home over the weekend",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "家でまったりしてました。",
            "家でまったりしてました",
            "いえでまったりしてました。",
            "いえでまったりしてました",
            "特に何もしないで、家でまったりしてました。",
            "特に何もしないで、家でまったりしてました",
            "まったりしてました",
            "ie de mattari shitemashita"
          ],
          wordBank: ["家で", "まったりしてました", "特に", "何もしないで", "忙しかったです", "学校へ", "行きました"],
          hint: "Use the natural colloquial phrase 'まったりしてました' (chilled out / relaxed).",
          explanation: "'まったりする' is the ultimate native casual expression for relaxing quietly at home with zero stress.",
          xpReward: 15
        },
        {
          id: "ja-u1-q3",
          type: "listen-type",
          prompt: "あ、田中さん！奇遇ですね！",
          promptTranslation: "Listen and type what you hear: 'What a coincidence!'",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "あ、田中さん！奇遇ですね！",
            "あ、田中さん奇遇ですね",
            "田中さん、奇遇ですね！",
            "きぐうですね",
            "奇遇ですね",
            "奇遇ですね！",
            "kiguu desu ne"
          ],
          wordBank: ["田中さん", "奇遇ですね", "あ、", "お疲れ様です", "こんにちは", "久しぶり"],
          hint: "'奇遇' (kiguu) means an unexpected coincidence or bumping into someone.",
          explanation: "Textbooks rarely teach '奇遇ですね！', but natives use it all the time when running into acquaintances.",
          xpReward: 15
        },
        {
          id: "ja-u1-q4",
          type: "fill-blank",
          prompt: "急に寒くなりました___。",
          promptTranslation: "Fill in the sentence-ending particle meaning '..., hasn't it?'",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: ["ね", "よね", "ne", "yo ne"],
          wordBank: ["ね", "よ", "か", "よね", "わ", "ぞ"],
          hint: "The particle 'ね' seeks agreement and builds conversational rapport.",
          explanation: "'ね' softens the statement and invites the listener to nod and agree ('寒くなりましたね').",
          xpReward: 15
        }
      ]
    },
    {
      id: "ja-unit-2",
      sectionNumber: 1,
      unitNumber: 2,
      topicAreaId: 2,
      title: "食事と飲食店 (Izakaya & Food Ordering)",
      subtitle: "Ordering drinks, checking dishes, and requesting separate bills",
      icon: "🍜",
      levelBadge: "JLPT N4 • A2",
      languageCode: "japanese",
      questions: [
        {
          id: "ja-u2-q1",
          type: "translate",
          prompt: "For now, two draft beers please!",
          promptTranslation: "Type the universal izakaya opener in Japanese",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "とりあえず生ビールふたつで！",
            "とりあえず生ビールふたつで",
            "とりあえず、生ビールふたつで！",
            "とりあえず、生ふたつで！",
            "とりあえず生ふたつで",
            "とりあえず生中ふたつで！",
            "toriaezu nama futatsu de"
          ],
          wordBank: ["とりあえず", "生ビール", "ふたつで", "ひとつで", "お会計", "お願いします", "みず"],
          hint: "Use 'とりあえず' (toriaezu = for now / to start) + 生ビール (draft beer) + ふたつ (two).",
          explanation: "'とりあえず生！' is iconic izakaya culture — ordering the first round of beer immediately upon sitting.",
          xpReward: 15
        },
        {
          id: "ja-u2-q2",
          type: "dialogue-response",
          prompt: "店員：お会計はご一緒でよろしいですか？",
          promptTranslation: "Ask to pay separately for each person",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "別々でお願いします。",
            "別々でお願いします",
            "べつべつでお願いします。",
            "べつべつでお願いします",
            "別々でお願いできますか？",
            "別々でお願いできますか",
            "betsu-betsu de onegai shimasu",
            "betsubetsu de onegai shimasu"
          ],
          wordBank: ["別々で", "お願いします", "一緒で", "カードで", "現金で", "レシート"],
          hint: "'別々' (betsu-betsu) means separately or individually.",
          explanation: "'別々でお願いします' is courteous and universally understood at restaurant registers.",
          xpReward: 15
        },
        {
          id: "ja-u2-q3",
          type: "fill-blank",
          prompt: "ネギ___でお願いできますか？ (Can I have it without green onions?)",
          promptTranslation: "Type the word meaning 'without / excluding'",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: ["抜き", "ぬき", "nuki", "抜きで"],
          wordBank: ["抜き", "入り", "マシ", "少なめ", "多め", "ぬき"],
          hint: "The suffix '〜抜き' (nuki) means without an ingredient (e.g. わさび抜き, ネギ抜き).",
          explanation: "Add '抜きで' to any ingredient you cannot eat or dislike.",
          xpReward: 15
        }
      ]
    },
    {
      id: "ja-unit-3",
      sectionNumber: 2,
      unitNumber: 3,
      topicAreaId: 3,
      title: "旅行と交通 (Shinkansen & Station Travel)",
      subtitle: "Booking seat reservations and clarifying ticket issues",
      icon: "🚅",
      levelBadge: "JLPT N4 • B1",
      languageCode: "japanese",
      questions: [
        {
          id: "ja-u3-q1",
          type: "translate",
          prompt: "Two reserved seats on the Mt. Fuji side, please.",
          promptTranslation: "Type the ticket request in polite Japanese",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "富士山側の指定席を2枚お願いします。",
            "富士山側の指定席を2枚お願いします",
            "富士山側で指定席を2枚お願いします。",
            "富士山側の指定席をふたまいお願いします",
            "Fujisan-gawa no shiteiseki o nimai onegai shimasu"
          ],
          wordBank: ["富士山側の", "指定席を", "2枚", "お願いします", "自由席", "窓口", "切符"],
          hint: "Mt. Fuji side = 富士山側 (Fujisan-gawa), Reserved seats = 指定席 (shiteiseki).",
          explanation: "On the Tokaido Shinkansen, E seats (Fuji side) offer the legendary view of Mt. Fuji.",
          xpReward: 15
        },
        {
          id: "ja-u3-q2",
          type: "dialogue-response",
          prompt: "駅員：乗り遅れた場合でも、当日の後続列車の自由席にご乗車いただけますよ。",
          promptTranslation: "Thank the station staff gratefully",
          coachName: "Coach Kyoka",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "助かりました、ありがとうございます！",
            "助かりました、ありがとうございます",
            "ありがとうございます、助かりました！",
            "安心しました、ありがとうございます！",
            "tasakarimashita arigatou gozaimasu"
          ],
          wordBank: ["助かりました", "ありがとうございます", "よかったです", "すみません", "困りました"],
          hint: "'助かりました' (tasakarimashita) means 'That really saved me / that's a huge relief'.",
          explanation: "Using '助かりました' shows warm, natural gratitude when someone resolves a problem for you.",
          xpReward: 15
        }
      ]
    }
  ],

  // ── ENGLISH (AMERICAN & BRITISH) ──
  english: [
    {
      id: "en-unit-1",
      sectionNumber: 1,
      unitNumber: 1,
      topicAreaId: 1,
      title: "Daily Small Talk & Spontaneous Banter",
      subtitle: "Natural conversational openers, weekend debriefs, and polite exits",
      icon: "☕",
      levelBadge: "B1 • Intermediate",
      languageCode: "english",
      questions: [
        {
          id: "en-u1-q1",
          type: "translate",
          prompt: "特に何もしないで、家でまったりしてました。",
          promptTranslation: "Translate into natural, idiomatic spoken English",
          coachName: "Coach Elena",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "Nothing much, just chilled at home.",
            "Nothing special, just chilled at home.",
            "Nothing much, just relaxed at home.",
            "Nothing much, just chilled out at home.",
            "Nothing special, just relaxed at home"
          ],
          wordBank: ["Nothing", "much,", "just", "chilled", "at", "home.", "special,", "worked", "hard", "busy"],
          hint: "Avoid textbook 'I did not do anything'. Use 'Nothing much, just chilled at home'.",
          explanation: "'Chilled at home' is the exact equivalent of native Japanese 'まったりしてました'.",
          xpReward: 15
        },
        {
          id: "en-u1-q2",
          type: "dialogue-response",
          prompt: "Elena: Hey Rafly! What a coincidence bumping into you here! How's your week starting off?",
          promptTranslation: "Reply warmly and ask how she is doing",
          coachName: "Coach Elena",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "Not too bad, how about yourself?",
            "Can't complain, how about you?",
            "Pretty good, how about yourself?",
            "Pretty good, how are you doing?",
            "Doing great, how about you?"
          ],
          wordBank: ["Not", "too", "bad,", "how", "about", "yourself?", "Can't", "complain,", "fine", "thank", "you"],
          hint: "Native speakers rarely say 'I am fine, thank you, and you?'. Try 'Not too bad, how about yourself?'.",
          explanation: "'Not too bad' or 'Can't complain' sounds far more natural in modern conversational small talk.",
          xpReward: 15
        },
        {
          id: "en-u1-q3",
          type: "fill-blank",
          prompt: "I'll let you go, but let's touch ___ next week over lunch!",
          promptTranslation: "Complete the business small talk idiom meaning 'connect / follow up'",
          coachName: "Coach Elena",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: ["base", "bases"],
          wordBank: ["base", "head", "talk", "hand", "touch", "call"],
          hint: "The idiom is 'touch base' (originated from baseball).",
          explanation: "'Touch base' means to briefly make contact or check in with someone.",
          xpReward: 15
        }
      ]
    },
    {
      id: "en-unit-2",
      sectionNumber: 1,
      unitNumber: 2,
      topicAreaId: 2,
      title: "Food & Dining Etiquette",
      subtitle: "Ordering, dietary exclusions, and settling the bill",
      icon: "🍽️",
      levelBadge: "B2 • Upper-Intermediate",
      languageCode: "english",
      questions: [
        {
          id: "en-u2-q1",
          type: "translate",
          prompt: "お会計を別々でお願いできますか？",
          promptTranslation: "Type the request for separate checks in natural English",
          coachName: "Coach Elena",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "Could we split the bill, please?",
            "Could we get separate checks, please?",
            "Can we split the check, please?",
            "Could we pay separately, please?",
            "Can we get separate bills, please?"
          ],
          wordBank: ["Could", "we", "split", "the", "bill,", "please?", "separate", "checks,", "pay", "together"],
          hint: "Use 'Could we split the bill?' (UK/AU) or 'Could we get separate checks?' (US).",
          explanation: "Soften requests in restaurants using modal verbs like 'Could we...' rather than direct imperatives.",
          xpReward: 15
        },
        {
          id: "en-u2-q2",
          type: "dialogue-response",
          prompt: "Server: We're unfortunately completely out of whole milk today. Would oat or almond milk work?",
          promptTranslation: "Politely accept oat milk with an extra espresso shot",
          coachName: "Coach Elena",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "Oat milk works great, thanks! Could I get an extra shot?",
            "Oat milk works, thanks! Extra shot please.",
            "Oat milk is fine, with an extra shot please.",
            "Oat milk works great, thank you!"
          ],
          wordBank: ["Oat", "milk", "works", "great,", "thanks!", "Could", "I", "get", "an", "extra", "shot?"],
          hint: "'Oat milk works great' is a polite, breezy affirmation in cafe culture.",
          explanation: "'X works great / works for me' signals agreeable flexibility without awkward hesitation.",
          xpReward: 15
        }
      ]
    }
  ],

  // ── SPANISH (ESPAÑOL) ──
  spanish: [
    {
      id: "es-unit-1",
      sectionNumber: 1,
      unitNumber: 1,
      topicAreaId: 1,
      title: "Vida Cotidiana & Saludos (Daily Life & Small Talk)",
      subtitle: "Spontaneous greetings, weekend plans, and casual street talk",
      icon: "☕",
      levelBadge: "A2 • Principiante",
      languageCode: "spanish",
      questions: [
        {
          id: "es-u1-q1",
          type: "translate",
          prompt: "Hey, what a nice surprise to see you here!",
          promptTranslation: "Type the natural Spanish greeting",
          coachName: "Coach Sofia",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "¡Hombre, qué sorpresa verte por aquí!",
            "Hombre, qué sorpresa verte por aquí!",
            "¡Qué sorpresa verte por aquí!",
            "Qué sorpresa verte por aquí",
            "Hombre que sorpresa verte por aqui"
          ],
          wordBank: ["¡Hombre,", "qué", "sorpresa", "verte", "por", "aquí!", "Hola,", "dónde", "estás", "bien"],
          hint: "'¡Hombre!' is universal colloquial Spanish expressing pleasant surprise.",
          explanation: "In Spain, '¡Hombre!' is used with both men and women as a friendly interjection.",
          xpReward: 15
        },
        {
          id: "es-u1-q2",
          type: "dialogue-response",
          prompt: "Sofia: ¿Qué tal has pasado el fin de semana? ¿Hiciste algo especial?",
          promptTranslation: "Say you just chilled at home quietly",
          coachName: "Coach Sofia",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "Nada especial, de tranquis en casa.",
            "Nada especial, de tranquis en casa",
            "Tranquilo en casa, sin hacer mucho.",
            "Nada del otro mundo, descansando en casa."
          ],
          wordBank: ["Nada", "especial,", "de", "tranquis", "en", "casa.", "muy", "ocupado", "trabajando"],
          hint: "'De tranquis' is authentic modern Spanish slang for taking it super easy.",
          explanation: "'De tranquis' conveys relaxed chilling without stress.",
          xpReward: 15
        }
      ]
    },
    {
      id: "es-unit-2",
      sectionNumber: 1,
      unitNumber: 2,
      topicAreaId: 2,
      title: "Comida & Tapas (Food & Dining)",
      subtitle: "Ordering tapas, asking for the bill, and dietary checks",
      icon: "🥘",
      levelBadge: "B1 • Intermedio",
      languageCode: "spanish",
      questions: [
        {
          id: "es-u2-q1",
          type: "translate",
          prompt: "Could you bring us the bill, please?",
          promptTranslation: "Type the courteous Spanish restaurant formula",
          coachName: "Coach Sofia",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "¿Nos traes la cuenta, por favor?",
            "La cuenta, por favor.",
            "¿Nos cobra, por favor?",
            "Nos traes la cuenta por favor",
            "La cuenta por favor"
          ],
          wordBank: ["¿Nos", "traes", "la", "cuenta,", "por", "favor?", "¿Cuánto", "cuesta", "pagar", "separado"],
          hint: "'¿Nos traes la cuenta, por favor?' is the most authentic polite way to ask a camarero.",
          explanation: "Using present indicative '¿Nos traes...?' sounds warm and respectful in Spanish tapas bars.",
          xpReward: 15
        }
      ]
    }
  ],

  // ── FRENCH (FRANÇAIS) ──
  french: [
    {
      id: "fr-unit-1",
      sectionNumber: 1,
      unitNumber: 1,
      topicAreaId: 1,
      title: "Vie Quotidienne & Café (Daily Life & Greetings)",
      subtitle: "Counter greetings, dropping 'ne', and Parisian fillers",
      icon: "☕",
      levelBadge: "A2 • Débutant",
      languageCode: "french",
      questions: [
        {
          id: "fr-u1-q1",
          type: "translate",
          prompt: "I don't know, nothing special.",
          promptTranslation: "Type with natural spoken French reduction (dropping 'ne')",
          coachName: "Coach Pierre",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "J'sais pas, rien de spécial.",
            "J'sais pas, rien de spécial",
            "Chais pas, rien de spécial.",
            "Je sais pas, rien de spécial.",
            "Je ne sais pas, rien de spécial."
          ],
          wordBank: ["J'sais", "pas,", "rien", "de", "spécial.", "Je", "ne", "sais", "très", "bien"],
          hint: "Spoken French drops 'ne' in negation: 'J'sais pas' instead of formal 'Je ne sais pas'.",
          explanation: "In modern spoken French, 'ne' is omitted over 95% of the time in casual conversation.",
          xpReward: 15
        },
        {
          id: "fr-u1-q2",
          type: "fill-blank",
          prompt: "Le métro était en panne, ___ coup je suis venu à pied.",
          promptTranslation: "Fill in the most common Parisian discourse filler meaning 'so / as a result'",
          coachName: "Coach Pierre",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: ["du", "Du"],
          wordBank: ["du", "de", "le", "au", "en", "par"],
          hint: "'Du coup' is the ubiquitous spoken connector used by French natives every day.",
          explanation: "'Du coup' functions as conversational glue meaning 'so / as a result / consequently'.",
          xpReward: 15
        }
      ]
    },
    {
      id: "fr-unit-2",
      sectionNumber: 1,
      unitNumber: 2,
      topicAreaId: 2,
      title: "Au Restaurant & Bistrot (Dining & Ordering)",
      subtitle: "Bistrot ordering etiquette, coffee at the comptoir, and paying",
      icon: "🥐",
      levelBadge: "B1 • Intermédiaire",
      languageCode: "french",
      questions: [
        {
          id: "fr-u2-q1",
          type: "translate",
          prompt: "The bill, please! (Can we split it?)",
          promptTranslation: "Type the French dining formula",
          coachName: "Coach Pierre",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "L'addition, s'il vous plaît !",
            "L'addition s'il vous plaît",
            "L'addition, s'il vous plaît. Est-ce qu'on peut payer séparément ?",
            "L'addition svp"
          ],
          wordBank: ["L'addition,", "s'il", "vous", "plaît !", "La", "note", "payer", "séparément", "carte"],
          hint: "In French restaurants, 'L'addition, s'il vous plaît' is the standard polite request.",
          explanation: "Remember the elision: 'L'addition' (not 'Le bill' or 'Le check').",
          xpReward: 15
        }
      ]
    }
  ],

  // ── KOREAN (한국어) ──
  korean: [
    {
      id: "ko-unit-1",
      sectionNumber: 1,
      unitNumber: 1,
      topicAreaId: 1,
      title: "일상 대화와 스몰토크 (Daily Life & Small Talk)",
      subtitle: "Haeyo-che polite level, weather, and weekend rest",
      icon: "☕",
      levelBadge: "TOPIK 1-2 • A2",
      languageCode: "korean",
      questions: [
        {
          id: "ko-u1-q1",
          type: "translate",
          prompt: "Nothing special, I just relaxed at home.",
          promptTranslation: "Translate into natural polite Korean (해요체)",
          coachName: "Coach Min-jun",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "특별한 건 없었고, 집에서 푹 쉬었어요.",
            "특별한 건 없었고 집에서 푹 쉬었어요",
            "별거 없었고, 집에서 쉬었어요.",
            "집에서 푹 쉬었어요.",
            "집에서 푹 쉬었어요"
          ],
          wordBank: ["특별한", "건", "없었고,", "집에서", "푹", "쉬었어요.", "회사에서", "일했어요", "바빴어요"],
          hint: "'푹 쉬었어요' (puk swieosseoyo) means rested deeply/comfortably.",
          explanation: "'푹 쉬다' (puk swida) is the natural Korean way to describe restful recharge.",
          xpReward: 15
        },
        {
          id: "ko-u1-q2",
          type: "fill-blank",
          prompt: "오늘 날씨가 갑자기 너무 ___졌네요! (It suddenly got so cold!)",
          promptTranslation: "Type the adjective stem for cold weather (춥- / 추워-)",
          coachName: "Coach Min-jun",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: ["추워", "추워졌네요", "chuwou"],
          wordBank: ["추워", "더워", "따뜻해", "시원해", "좋아"],
          hint: "From 춥다 (to be cold), irregular 'ㅂ' changes to '우' -> '추워지다'.",
          explanation: "'추워지다' (to become cold) + '네요' (exclamation of direct realization).",
          xpReward: 15
        }
      ]
    },
    {
      id: "ko-unit-2",
      sectionNumber: 1,
      unitNumber: 2,
      topicAreaId: 2,
      title: "식당 주문과 계산 (Food Ordering & Paying)",
      subtitle: "Calling servers, customizing spice levels, and splitting checks",
      icon: "🍲",
      levelBadge: "TOPIK 2 • B1",
      languageCode: "korean",
      questions: [
        {
          id: "ko-u2-q1",
          type: "translate",
          prompt: "Could you make it a little less spicy, please?",
          promptTranslation: "Type the polite Korean restaurant request",
          coachName: "Coach Min-jun",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "덜 맵게 해 주세요.",
            "덜 맵게 해 주세요",
            "덜 맵게 해 주실 수 있나요?",
            "조금 덜 맵게 해 주세요.",
            "deol maepge hae juseyo"
          ],
          wordBank: ["덜", "맵게", "해", "주세요.", "더", "아주", "달게", "짜게", "계산"],
          hint: "'덜' (deol) means less; '맵게' (maepge) is the adverb form of spicy.",
          explanation: "'덜 맵게 해 주세요' is the lifesaver phrase for dining in Korean restaurants.",
          xpReward: 15
        }
      ]
    }
  ],

  // ── GERMAN (DEUTSCH) ──
  german: [
    {
      id: "de-unit-1",
      sectionNumber: 1,
      unitNumber: 1,
      topicAreaId: 1,
      title: "Alltägliche Gespräche & Café (Daily Life & Small Talk)",
      subtitle: "Bäckerei ordering, Konjunktiv II, and modal particles",
      icon: "☕",
      levelBadge: "A2 • Anfänger",
      languageCode: "german",
      questions: [
        {
          id: "de-u1-q1",
          type: "translate",
          prompt: "I would like a cappuccino and a croissant, please.",
          promptTranslation: "Type using polite Konjunktiv II ('Ich hätte gerne...')",
          coachName: "Coach Lukas",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: [
            "Ich hätte gerne einen Cappuccino und ein Croissant, bitte.",
            "Ich hätte gerne einen Cappuccino und ein Croissant bitte",
            "Ich möchte einen Cappuccino und ein Croissant, bitte.",
            "Ich hätte gern einen Cappuccino und ein Croissant, bitte."
          ],
          wordBank: ["Ich", "hätte", "gerne", "einen", "Cappuccino", "und", "ein", "Croissant,", "bitte.", "will", "haben"],
          hint: "Natives say 'Ich hätte gerne...' (I would gladly have...) instead of blunt 'Ich will...'.",
          explanation: "Konjunktiv II ('hätte gerne') is the polite standard in German bakeries and cafés.",
          xpReward: 15
        },
        {
          id: "de-u1-q2",
          type: "fill-blank",
          prompt: "Können wir bitte getrennt ___? (Can we pay separately?)",
          promptTranslation: "Complete the verb meaning 'to pay' (zahlen)",
          coachName: "Coach Lukas",
          coachAvatar: "/aura-avatar.png",
          expectedAnswers: ["zahlen", "bezahlen"],
          wordBank: ["zahlen", "gehen", "trinken", "essen", "kaufen"],
          hint: "'Getrennt zahlen' is the universal German request for splitting the bill.",
          explanation: "In Germany, waitstaff regularly ask 'Zusammen oder getrennt?' (Together or separate?).",
          xpReward: 15
        }
      ]
    }
  ]
};

/**
 * Returns all practice units for the given language code,
 * with fallback to Japanese/English if a language is unspecified.
 */
export function getPracticeUnitsForLanguage(langCode: string): PracticeUnit[] {
  const normalized = langCode?.toLowerCase().trim();
  if (normalized === "ja" || normalized === "japanese") {
    return INTERACTIVE_PRACTICE_UNITS.japanese;
  }
  if (normalized === "es" || normalized === "spanish") {
    return INTERACTIVE_PRACTICE_UNITS.spanish;
  }
  if (normalized === "fr" || normalized === "french") {
    return INTERACTIVE_PRACTICE_UNITS.french;
  }
  if (normalized === "ko" || normalized === "korean") {
    return INTERACTIVE_PRACTICE_UNITS.korean;
  }
  if (normalized === "de" || normalized === "german") {
    return INTERACTIVE_PRACTICE_UNITS.german;
  }
  return INTERACTIVE_PRACTICE_UNITS.english;
}

/**
 * Finds a specific unit by ID across all languages.
 */
export function getPracticeUnitById(langCode: string, unitId: string): PracticeUnit | undefined {
  const units = getPracticeUnitsForLanguage(langCode);
  const found = units.find((u) => u.id === unitId);
  if (found) return found;

  // Fallback scan across all
  for (const list of Object.values(INTERACTIVE_PRACTICE_UNITS)) {
    const match = list.find((u) => u.id === unitId);
    if (match) return match;
  }
  return undefined;
}
