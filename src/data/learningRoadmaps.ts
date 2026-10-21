import { CourseRoadmap } from "@/types";

export const JAPANESE_COURSE_ROADMAP: CourseRoadmap = {
  languageId: "japanese",
  languageName: "Japanese (日本語)",
  flag: "🇯🇵",
  trackLabel: "JLPT N5 → N1 Spoken Mastery Track",
  totalSections: 4,
  totalEstimatedHours: "18.5 Hours",
  constellationNodes: [
    {
      id: "jp-node-1",
      title: "日常会話・基礎 (Daily Social & Café)",
      category: "Social Spontaneity",
      cefr: "JLPT N5-N4",
      level: 3,
      status: "completed",
      x: 18,
      y: 65,
      description: "Master everyday self-introductions, polite greetings, ordering drinks at Tokyo cafés, and asking directions with natural pitch accent.",
      scenarioId: "izakaya-order",
    },
    {
      id: "jp-node-2",
      title: "旅行・トラブル対応 (Travel & Friction)",
      category: "Situational Improvisation",
      cefr: "JLPT N3",
      level: 6,
      status: "active",
      x: 48,
      y: 40,
      description: "In Progress: Managing missed Shinkansen train departures, handling food allergy inquiries, and hotel reservation adjustments using te-form.",
      scenarioId: "shinkansen-trouble",
    },
    {
      id: "jp-node-3",
      title: "IT開発・朝会 (Tech & Agile Standup)",
      category: "Corporate Engineering",
      cefr: "JLPT N2",
      level: 8,
      status: "active",
      x: 68,
      y: 55,
      description: "In Progress: Articulating software blockers, latency bottlenecks, API schema syncs, and pull request reviews in fluent Japanese business context.",
      scenarioId: "tokyo-tech-standup",
    },
    {
      id: "jp-node-4",
      title: "経営ピッチ・商談 (Executive Pitch & Keigo)",
      category: "Executive Business",
      cefr: "JLPT N1",
      level: 10,
      status: "locked",
      x: 85,
      y: 25,
      description: "Locked: Defending startup valuation, multi-round enterprise contract negotiations, and assertive Keigo counter-offers without hesitation.",
      scenarioId: "tokyo-pitch-negotiation",
    },
  ],
  sections: [
    {
      id: "jp-sec-1",
      sectionNumber: 1,
      title: "Foundations & Daily Social Interaction",
      titleJapanese: "基礎と日常会話 (JLPT N5-N4)",
      levelBadge: "JLPT N5-N4 • Beginner",
      goal: "Hold everyday spoken interactions with native speakers: deliver natural self-introductions, order food and beverages at cafés or izakayas, and ask for street directions using polite Desu/Masu forms.",
      prerequisites: [
        "Familiarity with Hiragana and Katakana phonetic syllabaries (or Romaji guide)",
        "Basic awareness of Japanese subject-object-verb (SOV) sentence order",
        "Understanding of the basic polite copula 'です' (desu)",
      ],
      totalEstimatedTime: "3.5 Hours",
      learningSteps: [
        {
          stepNumber: 1,
          title: "Greetings & Self-Introduction",
          topic: "挨拶と自己紹介 (Aisatsu to Jikoshōkai)",
          estimatedTime: "45 mins",
          japaneseText: "はじめまして。ラフリーと申します。エンジニアをしております。どうぞよろしくお願いします。",
          romaji: "Hajimemashite. Rafurī to mōshimasu. Enjinia o shite orimasu. Dōzo yoroshiku onegai shimasu.",
          englishMeaning: "Nice to meet you. My name is Rafly. I work as an engineer. Pleased to make your acquaintance.",
          exampleSentence: {
            japanese: "本日は貴重なお時間をいただき、ありがとうございます。",
            romaji: "Honjitsu wa kichōna ojikan o itadaki, arigatō gozaimasu.",
            english: "Thank you very much for your valuable time today.",
          },
          notes: "Pronunciation: 'Hajimemashite' features a slight pitch drop after the first syllable. 'To mōshimasu' is the humble form (kenjōgo) of 'to iimasu', creating an instant impression of polite polish.",
        },
        {
          stepNumber: 2,
          title: "Café & Restaurant Ordering",
          topic: "カフェ・飲食店での注文 (Kafe・Inshokuten de no Chūmon)",
          estimatedTime: "60 mins",
          japaneseText: "すみません、ホットコーヒーを一つと、この抹茶ケーキをお願いします。店内利用で。",
          romaji: "Sumimasen, hotto kōhī o hitotsu to, kono matcha kēki o onegai shimasu. Tennai riyō de.",
          englishMeaning: "Excuse me, one hot coffee and this matcha cake, please. For dine-in.",
          exampleSentence: {
            japanese: "お会計は別々でお願いできますか？",
            romaji: "Okaikei wa betsubetsu de onegai dekimasu ka?",
            english: "Could we please split the bill?",
          },
          notes: "Grammar: Particle 'を' (o) marks the direct object. Native Japanese counters are used for general orders: 一つ (hitotsu = 1), 二つ (futatsu = 2), 三つ (mittsu = 3). '〜で' indicates dine-in (店内利用で) or takeout (お持ち帰りで).",
        },
        {
          stepNumber: 3,
          title: "Street Directions & Navigation",
          topic: "道案内と位置の尋ね方 (Michi-annai to Ichi no Tazunekata)",
          estimatedTime: "75 mins",
          japaneseText: "恐れ入ります、渋谷駅のハチ公改札口へは、どちらの通路を進めばよろしいでしょうか？",
          romaji: "Osoreirimasu, Shibuya-eki no Hachikō kaisatsuguchi e wa, dochira no tsūro o susumeba yoroshii deshō ka?",
          englishMeaning: "Pardon me, which corridor should I take to reach the Hachiko ticket gates at Shibuya Station?",
          exampleSentence: {
            japanese: "この道をまっすぐ行って、二つ目の交差点を右に曲がってください。",
            romaji: "Kono michi o massugu itte, futatsume no kōsaten o migi ni magatte kudasai.",
            english: "Please go straight along this road and turn right at the second intersection.",
          },
          notes: "Pronunciation: 'Osoreirimasu' is a refined social lubricant that softens the interruption before asking a stranger for help. The conditional '~eba yoroshii deshō ka' sounds far more natural than basic '~eba ii desu ka'.",
        },
      ],
      practiceActivities: [
        {
          type: "roleplay",
          title: "Tokyo Café Improv Drill",
          description: "Order coffee and ask for oat milk substitution with Elena/Kenji AI.",
          scenarioId: "izakaya-order",
        },
        {
          type: "quiz",
          title: "Particle Rapid-Fire Drill",
          description: "Fill in blanks with appropriate particles (は, が, を, に, で) in 10 everyday sentences.",
        },
        {
          type: "speech",
          title: "60-Second Self-Introduction Audio Test",
          description: "Record your complete self-introduction and receive immediate phonetic pitch assessment.",
        },
      ],
    },
    {
      id: "jp-sec-2",
      sectionNumber: 2,
      title: "Travel Improvisation & Situational Friction",
      titleJapanese: "旅行とトラブル対応 (JLPT N3)",
      levelBadge: "JLPT N3 • Intermediate",
      goal: "Navigate real-world travel disruptions in Japan: resolve missed Shinkansen train reservations, communicate dietary restrictions or allergies, and arrange hotel amenities and luggage holding.",
      prerequisites: [
        "Mastery of basic Verb groups (Godan, Ichidan, Irregular)",
        "Solid grasp of Verb Te-form conjugation (〜て、〜てから)",
        "Understanding of potential forms (話せる, 行ける, 変更できる)",
      ],
      totalEstimatedTime: "4.0 Hours",
      learningSteps: [
        {
          stepNumber: 1,
          title: "Missed Train & Seat Rebooking",
          topic: "新幹線の乗り遅れと座席変更 (Shinkansen no Noriokure to Zaseki Henkō)",
          estimatedTime: "75 mins",
          japaneseText: "大変申し訳ございません。指定席の列車に乗り遅れてしまったのですが、次の列車の自由席に変更していただけますでしょうか？",
          romaji: "Taihen mōshiwake gozaimasen. Shiteiseki no ressha ni noriokurete shimatta no desu ga, tsugi no ressha no jiyūseki ni henkō shite itadakemasu deshō ka?",
          englishMeaning: "I am terribly sorry. I missed my reserved seat train. Would you be able to transfer me to the non-reserved section of the next train?",
          exampleSentence: {
            japanese: "特急券の払い戻し手数料はおいくらになりますか？",
            romaji: "Tokkyūken no haraimodoshi tesūryō wa oikura ni narimasu ka?",
            english: "How much is the refund handling fee for the limited express ticket?",
          },
          notes: "Grammar: '~te shimatta' expresses an inadvertent error or regret. The softener '~no desu ga' invites the counter staff to suggest a resolution without putting them on the spot.",
        },
        {
          stepNumber: 2,
          title: "Dietary Restrictions & Allergens",
          topic: "アレルギーと食事制限の伝達 (Arerugī to Shokuji Seigen no Dentatsu)",
          estimatedTime: "60 mins",
          japaneseText: "実は甲殻類アレルギーがありまして、出汁やお醤油にエビ・カニのエキスは含まれておりますか？",
          romaji: "Jitsu wa kōkakurui arerugī ga arimashite, dashi ya oshōyu ni ebi・kani no ekisu wa fukumarete orimasu ka?",
          englishMeaning: "Actually, I have a shellfish allergy. Does the broth or soy sauce contain any shrimp or crab extracts?",
          exampleSentence: {
            japanese: "肉類を一切使わないベジタリアン対応のメニューはございますか？",
            romaji: "Niku-rui o issai tsukawanai bejitarian taiō no menyū wa gozaimasu ka?",
            english: "Do you have a vegetarian menu that does not use any meat products at all?",
          },
          notes: "Culture & Language: In Japan, 'Dashi' (fish or kelp broth) is pervasive. Using 'Jitsu wa' (as a matter of fact) prepares the listener for an exceptional dietary request.",
        },
        {
          stepNumber: 3,
          title: "Hotel Check-In & Baggage Concierge",
          topic: "ホテルの荷物預かりとアーリーチェックイン (Hoteru no Nimotsu-azukari to Ārī Chekku-in)",
          estimatedTime: "60 mins",
          japaneseText: "チェックインの15時前で恐縮ですが、キャリーケースをフロントで預かっていただくことは可能でしょうか？",
          romaji: "Chekku-in no jūgo-ji mae de kyōshuku desu ga, kyarīkēsu o furonto de azukatte itadaku koto wa kanō deshō ka?",
          englishMeaning: "I apologize since it is before the 3:00 PM check-in, but would it be possible to leave my suitcase at the front desk?",
          exampleSentence: {
            japanese: "部屋に加湿空気清浄機をお借りすることはできますか？",
            romaji: "Heya ni kashitsu kūkiseijōki o okari suru koto wa dekimasu ka?",
            english: "Is it possible to borrow a humidifying air purifier for my room?",
          },
          notes: "Grammar: 'Kyōshuku desu ga' (I feel humbled/hesitant to ask, but...) softens the pre-check-in baggage storage inquiry. '~o okari suru' uses respectful humble verb construction.",
        },
      ],
      practiceActivities: [
        {
          type: "roleplay",
          title: "Shinkansen Mid-Transit Re-routing",
          description: "Resolve an urgent ticket re-issue dialog after missing the Nozomi bullet train.",
          scenarioId: "shinkansen-trouble",
        },
        {
          type: "dictation",
          title: "Station PA Announcement Audio Comprehension",
          description: "Listen to 3 rapid Japanese railway platform announcements and identify track changes.",
        },
        {
          type: "speech",
          title: "Dietary Boundary Roleplay",
          description: "Explain 3 specific food restrictions to a traditional Ryokan host.",
        },
      ],
    },
    {
      id: "jp-sec-3",
      sectionNumber: 3,
      title: "Professional Tech & Corporate Workplace",
      titleJapanese: "ビジネス日本語とアジャイル開発 (JLPT N2)",
      levelBadge: "JLPT N2 • Upper-Intermediate",
      goal: "Work comfortably inside a modern Japanese engineering organization: deliver concise morning agile standups, articulate asynchronous latency blockers, debate pull request architecture, and coordinate cross-functional sprints.",
      prerequisites: [
        "Working proficiency in intermediate Japanese (JLPT N3 or equivalent)",
        "Familiarity with standard software development workflow terms (PR, CI/CD, Schema, Deploy)",
        "Understanding of honorifics vs humble speech (Sonkeigo vs Kenjōgo)",
      ],
      totalEstimatedTime: "5.0 Hours",
      learningSteps: [
        {
          stepNumber: 1,
          title: "Daily Agile Standup Updates",
          topic: "朝会・デイリースクラムの進捗報告 (Asakai・Deirī Sukuramu no Shinchoku Hōkoku)",
          estimatedTime: "90 mins",
          japaneseText: "昨日は認証基盤のAPIリファクタリングを完了しました。本日は決済連携のエンドポイント実装に着手しますが、ステージング環境のレイテンシがボトルネックになっております。",
          romaji: "Kinō wa ninshō kiban no API rifakutaringu o kanryō shimashita. Honjitsu wa kessai renkei no endopointo jissō ni chakushu shimasu ga, sutējingu kankyō no reitenshi ga botorunekku ni natte orimasu.",
          englishMeaning: "Yesterday I completed the authentication infrastructure API refactor. Today I am commencing payment endpoint implementation, but staging environment latency is currently a bottleneck.",
          exampleSentence: {
            japanese: "午後からのスプリントレビューまでに、QAチームに検証環境をお渡しできる見込みです。",
            romaji: "Gogo kara no supurinto rebyū made ni, QA chīmu ni kenshō kankyō o owatashi dekiru mikomi desu.",
            english: "We anticipate handing over the validation environment to the QA team before this afternoon's sprint review.",
          },
          notes: "Vocabulary & Register: In Japanese business, use 'Honjitsu' instead of 'Kyō', and 'Chakushu suru' (to embark upon) rather than basic 'Hajimeru'. '~ni natte orimasu' maintains modest professionalism.",
        },
        {
          stepNumber: 2,
          title: "Blocker Escalation & Dependency Negotiation",
          topic: "ブロッカーの共有と開発スケジュールの前倒し (Burokkā no Kyōyū to Maedaoshi)",
          estimatedTime: "100 mins",
          japaneseText: "フロントエンド側のリリースを予定通り進めるために、APIスキーマの合意を今週中に前倒ししていただけないでしょうか？",
          romaji: "Furontoendo-gawa no rirīsu o yotei-dōri susumeru tame ni, API sukīma no gōi o konshū-chū ni maedaoshi shite itadakenai deshō ka?",
          englishMeaning: "In order to proceed with the frontend release on schedule, could we possibly move the API schema finalization forward to within this week?",
          exampleSentence: {
            japanese: "この依存関係を解消しない限り、本番デプロイが遅延するリスクがございます。",
            romaji: "Kono izon kankei o kaishō shinai kagiri, honban depuroi ga chien suru risuku ga gozaimasu.",
            english: "Unless this dependency is resolved, there is a risk that the production deployment will be delayed.",
          },
          notes: "Business Terminology: '前倒し' (Maedaoshi = moving a timeline forward) is a core Japanese project management term (opposite: 先送り / Sakidokuri = postponement). Negative potential '~itadakenai deshō ka' politely conveys high priority without sounding demanding.",
        },
        {
          stepNumber: 3,
          title: "Code Review & Architecture Consensus",
          topic: "コードレビューの指摘とアーキテクチャ合意 (Kōdo Rebyū to Sekkei Gōi)",
          estimatedTime: "110 mins",
          japaneseText: "現状の実装でも要件は満たせますが、今後のトラフィック増を考慮すると、非同期ワーカーへのオフロードを検討すべきかと思います。",
          romaji: "Genjō no jissō de mo yōken wa mitasemasu ga, kongo no toraffikku-zō o kōryo suru to, hidōki wākā e no ofurōdo o kentō subeki ka to omoimasu.",
          englishMeaning: "While the current implementation satisfies requirements, considering future traffic growth, I believe we should consider offloading this task to an asynchronous worker.",
          exampleSentence: {
            japanese: "この関数は再帰呼び出しが深くなる懸念があるため、イテレータ形式に書き換える案はいかがでしょうか？",
            romaji: "Kono kansū wa saiki-yobidashi ga fukaku naru kenen ga aru tame, iterēta keishiki ni kakikaeru an wa ikaga deshō ka?",
            english: "Because this function risks deep recursive calls, how about refactoring it into an iterative pattern?",
          },
          notes: "Harmonious Communication: In Japanese engineering culture, suggestions are posed as exploratory reflections ('〜検討すべきかと思います' / '〜はいかがでしょうか') to promote team consensus (合意形成 / Gōi keisei).",
        },
      ],
      practiceActivities: [
        {
          type: "roleplay",
          title: "Tokyo Tech Standup Live Call",
          description: "Deliver a 2-minute live sprint update to Elena AI acting as an Engineering Lead in Shibuya.",
          scenarioId: "tokyo-tech-standup",
        },
        {
          type: "quiz",
          title: "Keigo Business Email & Slack Register Quiz",
          description: "Transform 8 casual developer chat messages into appropriate Japanese business communication.",
        },
        {
          type: "speech",
          title: "Technical Trade-Off Defense Drill",
          description: "Argue for microservices vs monolith trade-offs in Japanese under 3 minutes.",
        },
      ],
    },
    {
      id: "jp-sec-4",
      sectionNumber: 4,
      title: "Executive Pitching & High-Stakes Business Negotiation",
      titleJapanese: "経営陣へのピッチ・価格交渉 (JLPT N1)",
      levelBadge: "JLPT N1 • Advanced Mastery",
      goal: "Deliver persuasive executive startup pitches, articulate defensibility moats against platform giants, defend unit economics (CAC, LTV, ARR), and negotiate contract pricing concessions using high-register formal Japanese (Keigo).",
      prerequisites: [
        "Advanced fluency in Japanese (JLPT N2/N1 level)",
        "Mastery of Sonkeigo (respectful) and Kenjōgo (humble) verb paradigms",
        "Understanding of venture capital, valuation, and enterprise commercial contracts",
      ],
      totalEstimatedTime: "6.0 Hours",
      learningSteps: [
        {
          stepNumber: 1,
          title: "Startup Pitch & Growth Traction",
          topic: "スタートアップの資金調達ピッチ (Sutātoappu no Shikin-chōtatsu Pitchi)",
          estimatedTime: "120 mins",
          japaneseText: "弊社のマルチモーダルAIプラットフォームは、導入企業の顧客オンボーディング期間を70%短縮し、月次解約率0.8%という業界屈指の実績を達成しております。",
          romaji: "Heisha no maruchimōdaru AI purattofōmu wa, dōnyū kigyō no kokyaku onbōdingu kikan o nanajū-pāsento tanshuku shi, getsuji kaiyaku-ritsu ranten-hachi-pāsento to iu gyōkai kusshi no jisseki o tassei shite orimasu.",
          englishMeaning: "Our multimodal AI platform reduces enterprise onboarding time by 70%, achieving an industry-leading monthly churn rate of 0.8%.",
          exampleSentence: {
            japanese: "今四半期のARRは前年同期比で180%成長しており、ネットレテンション率は135%を維持しております。",
            romaji: "Kon-shihanki no ARR wa zennen-dōki-hi de hyakuhachijū-pāsento seichō shite ori, netto retenshon-ritsu wa hyakusanjūgo-pāsento o iji shite orimasu.",
            english: "Our ARR this quarter grew 180% year-over-year, and we maintain a net revenue retention rate of 135%.",
          },
          notes: "Vocabulary & Register: '弊社' (Heisha) is the humble term for 'our company'. '〜ております' serves as humble progressive aspect. '業界屈指' (Gyōkai kusshi) conveys elite stature concisely.",
        },
        {
          stepNumber: 2,
          title: "Defensibility Moats & Objection Handling",
          topic: "参入障壁と競合優位性の防衛 (Sannyū Shōheki to Kyōgō Yūisei no Bōei)",
          estimatedTime: "120 mins",
          japaneseText: "大手プラットフォーマーの参入は想定内であり、独自の低遅延音声処理モデルと特許取得済みの発音解析エンジンが強固な参入障壁となります。",
          romaji: "Ōte purattofōmā no sannyū wa sōteinai de ari, dokuji no tei-chien onsei shori moderu to tokkyo shutoku-zumi no hatsuon kaiseki enjin ga kyōkona sannyū shōheki to narimasu.",
          englishMeaning: "Entry by major platform providers is within our anticipated scenarios; our proprietary low-latency speech processing model and patented phonetic analysis engine constitute a formidable barrier to entry.",
          exampleSentence: {
            japanese: "コモディティ化する基盤モデルに対し、垂直統合されたドメイン特化データが我々の持続可能な堀でございます。",
            romaji: "Komoditi-ka suru kiban moderu ni taishi, suichoku tōgō sareta domein tokka dēta ga wareware no jizokukanōna hori de gozaimasu.",
            english: "Against commoditizing foundation models, vertically integrated domain-specific data serves as our sustainable moat.",
          },
          notes: "Rhetoric: Written-spoken conjunction '〜であり' (de ari) elevates rhetorical authority in boardrooms. '参入障壁' (Sannyū shōheki = barrier to entry) and '堀' (Hori = economic moat) are essential strategy terms.",
        },
        {
          stepNumber: 3,
          title: "Executive Contract Negotiation & Concessions",
          topic: "条件交渉と相互妥協のクロージング (Jōken Kōshō to Sōgo Dakyō no Kurōjingu)",
          estimatedTime: "120 mins",
          japaneseText: "ご提示いただきました価格条件は重々承知しておりますが、初期費用の5%値引きに応じる代わり、3年間の長期契約条項を盛り込んでいただくことは叶いませんでしょうか？",
          romaji: "Goteiji itadakimashita kakaku jōken wa jūjū shōchi shite orimasu ga, shoki hiyō no go-pāsento nebiki ni ōjiru kawari, sannen-kan no chōki keiyaku jōkō o morikonde itadaku koto wa kanaimasen deshō ka?",
          englishMeaning: "We fully acknowledge your proposed pricing conditions; however, in exchange for conceding a 5% discount on initial fees, would it be feasible to incorporate a 3-year term commitment?",
          exampleSentence: {
            japanese: "双方が納得できる着地点を見出すべく、再度の修正案をご検討願えれば幸甚に存じます。",
            romaji: "Sōhō ga nattoku dekiru chakuchiten o miidasu beku, saido no shūsei-an o gokentō negaereba kōjin ni zonjimasu.",
            english: "In order to discover a mutually agreeable compromise, we would be deeply honored if you would consider our revised proposal.",
          },
          notes: "Executive Keigo: 'Kōjin ni zonjimasu' (I would consider it the pinnacle of good fortune) is a premier executive closing phrasing. '着地点' (Chakuchiten = landing ground / landing zone) denotes mutually agreeable compromise.",
        },
      ],
      practiceActivities: [
        {
          type: "roleplay",
          title: "Venture Capital Partner Term Sheet Defense",
          description: "Undergo a 10-minute rigorous simulated VC interrogation on CAC/LTV defensibility.",
          scenarioId: "tokyo-pitch-negotiation",
        },
        {
          type: "speech",
          title: "Executive Objection Reversal Drill",
          description: "Respond to a client demanding a 30% discount using the 3-step concession trade-off formula.",
        },
        {
          type: "quiz",
          title: "High-Register Keigo & Commercial Contract Quiz",
          description: "Identify and correct subtle disrespectful or overly humble errors in 10 contractual clauses.",
        },
      ],
    },
  ],
};

export const ENGLISH_COURSE_ROADMAP: CourseRoadmap = {
  languageId: "english",
  languageName: "English (英語)",
  flag: "🇺🇸",
  trackLabel: "CEFR B2 → C2 Executive Fluency Track",
  totalSections: 4,
  totalEstimatedHours: "19.0 Hours",
  constellationNodes: [
    {
      id: "en-node-1",
      title: "Casual Banter & Small Talk",
      category: "Social Spontaneity",
      cefr: "CEFR B2",
      level: 5,
      status: "completed",
      x: 18,
      y: 65,
      description: "Mastered natural conversational pivots, unexpected weather quips, and café banter with zero awkward pauses.",
      scenarioId: "coffee-twist",
    },
    {
      id: "en-node-2",
      title: "Tech & Agile Standups",
      category: "Engineering Leadership",
      cefr: "CEFR C1",
      level: 7,
      status: "active",
      x: 48,
      y: 40,
      description: "In Progress: Articulating complex technical trade-offs, describing async blocking issues, and sprint delivery coordination.",
      scenarioId: "tech-standup",
    },
    {
      id: "en-node-3",
      title: "Executive Salary Negotiation",
      category: "High-Stakes Corporate",
      cefr: "CEFR C1",
      level: 8,
      status: "active",
      x: 68,
      y: 55,
      description: "In Progress: Assertive compensation countering, equity cliff defenses, and executive framing without defensive cadence.",
      scenarioId: "salary-negotiation",
    },
    {
      id: "en-node-4",
      title: "Public Speaking & Keynote Debate",
      category: "C2 Rhetorical Mastery",
      cefr: "CEFR C2",
      level: 10,
      status: "locked",
      x: 85,
      y: 25,
      description: "Locked: Multi-round philosophical and strategic keynote debates, impromptu Q&A handling under hostile audience conditions.",
      scenarioId: "startup-pitch",
    },
  ],
  sections: [
    {
      id: "en-sec-1",
      sectionNumber: 1,
      title: "Social Fluency & Spontaneous Banter",
      levelBadge: "CEFR B2 • Conversational",
      goal: "Engage in effortless casual small talk, pivot through awkward social moments, order with modifications in busy international cafés, and eliminate hesitation sounds (um, uh).",
      prerequisites: [
        "Intermediate English grammar (past/present/future tenses, modals)",
        "Vocabulary base of approximately 2,500 common words",
        "Ability to speak in multi-sentence paragraphs without stopping",
      ],
      totalEstimatedTime: "3.5 Hours",
      learningSteps: [
        {
          stepNumber: 1,
          title: "Spontaneous Icebreakers & Small Talk",
          topic: "Conversational Starters & Weather Pivots",
          estimatedTime: "60 mins",
          englishMeaning: "Initiating spontaneous conversations without scripted greetings.",
          exampleSentence: {
            english: "Crazy weather we're having today, isn't it? Caught me completely off guard without an umbrella.",
          },
          notes: "Focus on upward inflection on tag questions ('isn't it?') to invite conversational handoffs.",
        },
        {
          stepNumber: 2,
          title: "Café Ordering with Sudden Friction",
          topic: "Polite Friction & Ingredient Adjustments",
          estimatedTime: "75 mins",
          englishMeaning: "Handling unexpected retail situations politely and assertively.",
          exampleSentence: {
            english: "Could I actually get an oat flat white with an extra shot to go, please? And if you're out of oat, almond works fine.",
          },
          notes: "Use conditional phrasing ('Could I actually get...') to sound courteous rather than demanding.",
        },
        {
          stepNumber: 3,
          title: "Graceful Conversational Exits",
          topic: "Time Boundaries & Professional Wraparounds",
          estimatedTime: "75 mins",
          englishMeaning: "Wrapping up conversations politely without creating social awkwardness.",
          exampleSentence: {
            english: "I'd love to chat more, but I've got a hard stop for a sync in two minutes. Let's definitely catch up over lunch soon!",
          },
          notes: "'Hard stop' and 'sync' are corporate colloquial standards that communicate clear boundaries effortlessly.",
        },
      ],
      practiceActivities: [
        {
          type: "roleplay",
          title: "Coffee Order Sudden Twist",
          description: "Barista is out of dairy milk and the card machine failed. Improvise a seamless resolution.",
          scenarioId: "coffee-twist",
        },
        {
          type: "speech",
          title: "Zero-Filler Speech Drill",
          description: "Speak continuously for 90 seconds about your weekend without uttering 'um', 'like', or 'uh'.",
        },
      ],
    },
    {
      id: "en-sec-2",
      sectionNumber: 2,
      title: "Agile Engineering & Cross-Functional Standups",
      levelBadge: "CEFR C1 • Professional Advanced",
      goal: "Deliver concise 90-second technical sprint updates, articulate asynchronous blockers, negotiate schema migrations, and conduct constructive code reviews in international tech environments.",
      prerequisites: [
        "CEFR B2 fluency level",
        "Understanding of agile scrum ceremonies (standups, retros, sprint planning)",
        "Familiarity with technical terminology (APIs, tokens, latency, schema)",
      ],
      totalEstimatedTime: "4.5 Hours",
      learningSteps: [
        {
          stepNumber: 1,
          title: "The 3-Part Agile Standup Format",
          topic: "Yesterday, Today, Blockers Synthesis",
          estimatedTime: "80 mins",
          englishMeaning: "Structuring high-signal, zero-fluff daily status reports.",
          exampleSentence: {
            english: "Yesterday I completed the token streaming refactor. Today I'm blocked on the auth service endpoint latency, so I'll pair with Liam after standup.",
          },
          notes: "Maintain brisk vocal pacing (140-160 WPM) with clear downward inflection at each period.",
        },
        {
          stepNumber: 2,
          title: "Articulating Technical Blockers",
          topic: "Escalating Async Dependencies & Deadlines",
          estimatedTime: "90 mins",
          englishMeaning: "Framing technical bottlenecks clearly without sounding accusatory toward other teams.",
          exampleSentence: {
            english: "To avoid bottlenecking tomorrow's release candidate, we need the schema contract locked in by 2 PM today.",
          },
          notes: "Frame problems around the project timeline ('To avoid bottlenecking...') rather than individuals.",
        },
        {
          stepNumber: 3,
          title: "Constructive Code Review Defense",
          topic: "Architectural Trade-Off Discussions",
          estimatedTime: "100 mins",
          englishMeaning: "Debating architectural trade-offs with empathy and analytical clarity.",
          exampleSentence: {
            english: "I understand the desire for modularity here, but the additional abstraction layer introduces unnecessary overhead for this hot path.",
          },
          notes: "Use 'Yes, and...' framing ('I understand the desire... but...') to build consensus.",
        },
      ],
      practiceActivities: [
        {
          type: "roleplay",
          title: "Live Tech Standup Simulation",
          description: "Deliver your sprint update and defend your architectural choices against Coach Elena.",
          scenarioId: "tech-standup",
        },
        {
          type: "quiz",
          title: "Agile Collocations & Idioms Quiz",
          description: "Master 20 essential software engineering idioms (run with it, hot path, hard fork, spin up).",
        },
      ],
    },
    {
      id: "en-sec-3",
      sectionNumber: 3,
      title: "Executive Salary Negotiation & Compensation Defense",
      levelBadge: "CEFR C1+ • High Stakes Corporate",
      goal: "Confidently negotiate high-stakes compensation packages, defend market benchmarks, pivot against lowball offers, and negotiate equity cliffs and sign-on bonuses without sounding confrontational.",
      prerequisites: [
        "Solid command of C1 vocabulary and conditional phrasing",
        "Familiarity with executive compensation terminology (base, equity, RSU, cliff, sign-on bonus)",
        "Ability to modulate tone between assertive confidence and cooperative warmth",
      ],
      totalEstimatedTime: "5.0 Hours",
      learningSteps: [
        {
          stepNumber: 1,
          title: "Initial Offer Anchor Reversal",
          topic: "Market Benchmarking & Value Anchoring",
          estimatedTime: "90 mins",
          englishMeaning: "Responding to an initial offer with gratitude while firmly pushing back on base pay.",
          exampleSentence: {
            english: "Thank you for the initial offer. I'm thrilled about the scope of the role, but based on recent senior benchmarks and my track record in streaming infra, I was targeting $185k base.",
          },
          notes: "Never apologize when countering. Pair excitement about the mission with objective benchmark data.",
        },
        {
          stepNumber: 2,
          title: "Countering Low-Ball Base Offers",
          topic: "Equity & Sign-On Bonus Trade-Offs",
          estimatedTime: "100 mins",
          englishMeaning: "Expanding the negotiation pie across non-base variables when base budget is capped.",
          exampleSentence: {
            english: "If the base band is strictly capped at $165k, could we bridge the differential through an upfront sign-on bonus or accelerated equity vesting?",
          },
          notes: "Use collaborative conditional language ('could we bridge the differential...') to make them your partner.",
        },
        {
          stepNumber: 3,
          title: "Closing the Deal with Professional Finality",
          topic: "Final Term Alignment & Letter Signing",
          estimatedTime: "110 mins",
          englishMeaning: "Solidifying agreements in writing before accepting formal offers.",
          exampleSentence: {
            english: "If you're able to bring the equity grant to 20,000 RSUs and formalize the remote flexibility, I'm ready to sign today.",
          },
          notes: "Deliver this with steady eye contact and downward pitch stress on 'today'.",
        },
      ],
      practiceActivities: [
        {
          type: "roleplay",
          title: "Salary Negotiation Simulation",
          description: "Live evaluation on assertive tone, counter-offers, pause duration, and executive compensation terminology.",
          scenarioId: "salary-negotiation",
        },
        {
          type: "speech",
          title: "Strategic Silence & Pitch Drill",
          description: "Practice stating your target number and maintaining a 5-second silence without backpedaling.",
        },
      ],
    },
    {
      id: "en-sec-4",
      sectionNumber: 4,
      title: "Keynote Rhetoric & Strategic Pitch Defense",
      levelBadge: "CEFR C2 • Master Rhetoric",
      goal: "Pitch high-growth ventures to cynical investors, handle hostile audience Q&A sessions, defend unit economics under cross-examination, and deliver charismatic keynote presentations.",
      prerequisites: [
        "Advanced C1+ language fluency",
        "Understanding of investor metrics (ARR, CAC, LTV, Net Retention, Moats)",
        "Experience presenting in front of critical audiences",
      ],
      totalEstimatedTime: "6.0 Hours",
      learningSteps: [
        {
          stepNumber: 1,
          title: "The Hook & Economic Flywheel",
          topic: "Opening Hooks & Retention Metrics",
          estimatedTime: "120 mins",
          englishMeaning: "Capturing investor attention within the first 30 seconds with hard traction.",
          exampleSentence: {
            english: "We've built a proprietary multimodal language flywheel generating 42% net retention month-over-month without paid user acquisition.",
          },
          notes: "Avoid buzzwords without immediate quantifiable proof. Lead with concrete metrics.",
        },
        {
          stepNumber: 2,
          title: "Defending Moats Against Big Tech",
          topic: "Defensibility, Patents & Distribution",
          estimatedTime: "120 mins",
          englishMeaning: "Neutralizing the inevitable 'What if Google or OpenAI copies this?' challenge.",
          exampleSentence: {
            english: "Frontier model providers commoditize the model layer, but our proprietary phonetic training sets and real-time client inference give us a two-year distribution moat.",
          },
          notes: "Never dismiss competitors. Acknowledge the trend, then explain your structural divergence.",
        },
        {
          stepNumber: 3,
          title: "Hostile Q&A & Reframing",
          topic: "Rhetorical Pivot & Graceful Reframing",
          estimatedTime: "120 mins",
          englishMeaning: "Taking aggressive objections and pivoting them into proof of your value proposition.",
          exampleSentence: {
            english: "That is precisely why we architected the system this way—what appears to be high initial friction is actually our primary retention driver.",
          },
          notes: "The 'That is precisely why...' pivot instantly flips a perceived weakness into deliberate strategy.",
        },
      ],
      practiceActivities: [
        {
          type: "roleplay",
          title: "Pitching AI Startup to Investors",
          description: "High-stakes C2 fluency exam. Handle aggressive CAC questions, defensive moat challenges, and articulate ARR scaling.",
          scenarioId: "startup-pitch",
        },
        {
          type: "speech",
          title: "3-Minute Keynote Impromptu Delivery",
          description: "Deliver a 3-minute persuasive keynote speech on technological disruption without prior notes.",
        },
      ],
    },
  ],
};

export { FRENCH_COURSE_ROADMAP } from "./roadmaps/frenchRoadmap";
export { KOREAN_COURSE_ROADMAP } from "./roadmaps/koreanRoadmap";
export { GERMAN_COURSE_ROADMAP } from "./roadmaps/germanRoadmap";
export { SPANISH_COURSE_ROADMAP } from "./roadmaps/spanishRoadmap";

import { FRENCH_COURSE_ROADMAP } from "./roadmaps/frenchRoadmap";
import { KOREAN_COURSE_ROADMAP } from "./roadmaps/koreanRoadmap";
import { GERMAN_COURSE_ROADMAP } from "./roadmaps/germanRoadmap";
import { SPANISH_COURSE_ROADMAP } from "./roadmaps/spanishRoadmap";

/**
 * Returns the relevant CourseRoadmap dynamically based on the active language code.
 */
export function getCourseRoadmap(langCode: string): CourseRoadmap {
  switch (langCode) {
    case "japanese":
      return JAPANESE_COURSE_ROADMAP;
    case "french":
      return FRENCH_COURSE_ROADMAP;
    case "korean":
      return KOREAN_COURSE_ROADMAP;
    case "german":
      return GERMAN_COURSE_ROADMAP;
    case "spanish":
      return SPANISH_COURSE_ROADMAP;
    case "english":
    default:
      return ENGLISH_COURSE_ROADMAP;
  }
}

