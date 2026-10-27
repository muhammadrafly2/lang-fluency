import { CurriculumArea } from "./types";

export const KOREAN_CURRICULUM_AREAS: CurriculumArea[] = [
  // ── AREA 1: Daily life & small talk ──
  {
    id: 1,
    title: "일상 대화와 스몰토크 (Daily Life & Small Talk)",
    subtitle: "Greetings, weather, weekend plans, hobbies",
    icon: "☕",
    topics: [
      {
        id: "ko-t1-cafe-greeting",
        areaId: 1,
        areaTitle: "일상 대화와 스몰토크",
        title: "홍대 카페에서의 우연한 만남 (Hongdae Café Catch-Up)",
        situation: "홍대 앞 카페에서 회사 동료를 우연히 마주쳐 반갑게 인사하고 주말 계획을 나눈다.",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "5-6 mins",
        scenarioId: "hongdae-cafe",
        keyPhrases: [
          { phrase: "어? 라플리 씨! 여기서 다 보네요!", phonetic: "Eo? Rafly-ssi! Yeogiseo da boneyo!", english: "Oh? Rafly-ssi! What a surprise to see you here!", register: "casual" },
          { phrase: "주말 잘 보내셨어요?", phonetic: "Jumal jal bonaesyeosseoyo?", english: "Did you have a good weekend?", register: "neutral" },
          { phrase: "그냥 집에서 푹 쉬었어요.", phonetic: "Geunyang jib-eseo puk swieosseoyo.", english: "Just took a deep rest at home.", register: "neutral" },
          { phrase: "날씨가 갑자기 쌀쌀해졌죠?", phonetic: "Nalssi-ga gapjagi ssalssalhaejyeotjyo?", english: "The weather got chilly all of a sudden, right?", register: "neutral" },
          { phrase: "맞아요, 감기 조심해야겠어요.", phonetic: "Maj-a-yo, gamgi josimhaeyagess-eoyo.", english: "Exactly, we should be careful not to catch a cold.", register: "neutral" },
          { phrase: "아이스 아메리카노 테이크아웃 하려고요.", phonetic: "A-iseu amerikano teikeu-aut haryeogoyo.", english: "I'm going to take out an iced Americano.", register: "casual" },
          { phrase: "얼죽아(얼어 죽어도 아이스)네요!", phonetic: "Eol-juk-a neyo!", english: "You're a true iced Americano die-hard!", register: "casual" },
          { phrase: "회사 가서 같이 마셔요.", phonetic: "Hoesa gaseo gachi masyeoyo.", english: "Let's drink together when we get to the office.", register: "casual" },
          { phrase: "먼저 들어가 볼게요!", phonetic: "Meonjeo deureoga bolgeyo!", english: "I'll head in first!", register: "neutral" },
          { phrase: "오늘 하루도 힘내세요!", phonetic: "Oneul harudo himnaeseyo!", english: "Have strength and cheer up today too!", register: "neutral" }
        ],
        dialogue: [
          { speaker: "지훈", line: "어? 라플리 씨! 출근길에 여기서 다 보네요!", phonetic: "Eo? Rafly-ssi! Chulgeun-gire yeogiseo da boneyo!", english: "Oh? Rafly-ssi! What a surprise to run into you on the commute!" },
          { speaker: "라플리", line: "지훈 씨! 안녕하세요. 진짜 신기하네요. 커피 사러 오셨어요?", phonetic: "Jihoon-ssi! Annyeonghaseyo. Jinjja sin-gihaneyo. Keopi sareo osyeosseoyo?", english: "Jihoon-ssi! Hello. Truly amazing. Did you come to buy coffee?" },
          { speaker: "지훈", line: "네, 아침에 카페인 충전 안 하면 도저히 버틸 수가 없어서요 (웃음).", phonetic: "Ne, achime kape-in chungjeon an hamyeon dojeohi beotil suga eopseoseoyo (useum).", english: "Yeah, if I don't recharge caffeine in the morning I can't survive (laughs)." },
          { speaker: "라플리", line: "완전 공감해요! 주말에는 푹 쉬셨어요?", phonetic: "Wanjeon gong-gamhaeyo! Jumal-eneun puk swisyeosseoyo?", english: "Totally relate! Did you get good rest over the weekend?" },
          { speaker: "지훈", line: "네, 토요일에 한강 가서 자전거 좀 타고 일요일엔 집콕했어요.", phonetic: "Ne, toyo-ire Hangang gaseo jajeon-geo jom tago iryo-iren jip-kok-haesseoyo.", english: "Yeah, rode a bike by the Han River Saturday, and stayed home Sunday." },
          { speaker: "라플리", line: "날씨가 좋아서 한강 나들이하기 딱 좋았겠네요.", phonetic: "Nalssi-ga joaseo Hangang nadeuri-hagi ttak joatgetneyo.", english: "The weather was great so it must have been perfect for the Han River." },
          { speaker: "지훈", line: "맞아요. 아, 라플리 씨 커피 나왔네요. 얼죽아 파시군요!", phonetic: "Maj-a-yo. A, Rafly-ssi keopi nawatneyo. Eol-juk-a pasigunyo!", english: "Right. Ah, your coffee came out. You're an iced-Americano die-hard!" },
          { speaker: "라플리", line: "겨울에도 아아는 포기 못 하죠 (웃음). 지훈 씨, 사무실에서 봬요!", phonetic: "Gyeoul-edo Ah-Ah-neun pogi mot hajyo (useum). Jihoon-ssi, samusil-eseo bwaeyo!", english: "Can't give up iced Americano even in winter (laughs). See you at the office!" },
          { speaker: "지훈", line: "네, 조심히 올라오세요!", phonetic: "Ne, josimhi ollaoseyo!", english: "Yes, come up safely!" }
        ],
        fluencyBoosters: [
          { booster: "얼죽아 (Eol-juk-a)", phonetic: "[ʌɭ.dʑuɡ.a]", category: "casual", usage: "Acronym for 'even if I freeze to death, iced Americano'. A core Korean cultural meme.", example: "영하 10도에도 얼죽아를 고집해요." },
          { booster: "집콕 (Jip-kok)", phonetic: "[tɕip̚.kʰok̚]", category: "casual", usage: "Slang for staying cooped up happily at home all weekend.", example: "이번 주말은 집콕하면서 영화 봤어요." },
          { booster: "완전 공감해요 (Wanjeon gong-gamhaeyo)", phonetic: "[wan.dʑʌn goŋ.gam.hɛ.jo]", category: "discourse marker", usage: "High-empathy conversational phrase meaning 'I 100% relate to that'.", example: "피곤하죠? — 완전 공감해요!" },
          { booster: "푹 쉬다 (Puk swida)", phonetic: "[pʰuk̚ ɕʰwi.da]", category: "neutral", usage: "To get deep, sound, restorative rest.", example: "주말 동안 푹 쉬세요." },
          { booster: "카페인 충전 (Caffeine chung-jeon)", phonetic: "[kʰa.pʰe.in tɕʰuŋ.dʑʌn]", category: "casual", usage: "Humorous modern expression for recharging oneself with morning coffee.", example: "출근길에 카페인 충전 필수예요." }
        ],
        commonMistakes: [
          { mistake: "Learner calls an office coworker '당신' (Dangsin).", correction: "Say: '지훈 씨' (Name + Ssi) or '팀장님' (Title + Nim).", explanation: "'Dangsin' is confrontational and rude in workplace conversation. Use Name + 씨." },
          { mistake: "Learner uses 반말 (informal intimate) on first meeting.", correction: "Stick to 해요체 (-요) until invited with '말 놓으셔도 돼요'.", explanation: "Korean age hierarchy requires polite endings (-요 / -습니다) by default." },
          { mistake: "Learner translates literally: 'How are you?' as '당신은 어떠합니까?'.", correction: "Say: '주말 잘 보내셨어요?' or '밥 먹었어요?'", explanation: "Koreans ask about meals or weekend rest rather than literal abstract condition." }
        ],
        culturalPragmaticNote: {
          title: "The Soul of 'Ah-Ah' (아이스 아메리카노)",
          textbookVsReality: "Textbooks show formal tea ceremonies."
        },
        rolePlayPrompts: {
          guided: "Order an iced Americano at a Seoul café, take it to go, and ask the barista for a receipt.",
          semiOpen: "Meet a coworker at the Han River park on a Saturday afternoon. Chat about bicycling and your favorite picnic spots.",
          fullyOpen: "Your Korean team leader offers to buy morning coffee for the whole team. Order politely and express collective gratitude."
        },
        followUpQuestions: [
          "겨울에도 차가운 음료를 마시는 편인가요, 아니면 따뜻한 차를 선호하시나요?",
          "한국의 한강 공원에서 피크닉이나 치맥을 즐겨보신 적이 있나요?",
          "한국 직장에서 호칭(님, 씨, 직급)을 사용할 때 어렵거나 헷갈렸던 적이 있나요?",
          "휴일에 집에서 쉴 때 주로 어떤 방법으로 에너지를 재충전하시나요?",
          "서울에서 가장 좋아하는 카페 거리(성수동, 연남동, 익선동 등)는 어디인가요?"
        ],
        canDoStatements: [
          "I can greet a coworker warmly using Name + 씨 without using 'dangsin'.",
          "I can understand and use Korean cultural slang like '얼죽아' and '집콕'.",
          "I can ask about weekend rest using polite Haeyo-che endings naturally."
        ]
      }
    ]
  }
];

export const KOREAN_FULL_CURRICULUM = KOREAN_CURRICULUM_AREAS;
