"use client";

import { useState, useEffect } from "react";
import { 
  Sparkles, Zap, LayoutGrid, AudioLines, Award, Trophy, TrendingUp, 
  Settings as SettingsIcon, ChevronDown, Globe, BookOpen, Flame
} from "lucide-react";

import { 
  TabType, Scenario, ActivityRingData, DailyTarget, 
  StreakVaultData, AppSettings 
} from "@/types";

import { FluencyCoreRings } from "@/components/FluencyCoreRings";
import { DynamicIslandNotification } from "@/components/DynamicIslandNotification";
import { DailyTargetWidgets } from "@/components/DailyTargetWidgets";
import { StreakVaultCard } from "@/components/StreakVaultCard";
import { NextUpRecommendations } from "@/components/NextUpRecommendations";
import { ScenarioHubView } from "@/components/ScenarioHubView";
import { QuestsArenaView } from "@/components/QuestsArenaView";
import { MasteryView } from "@/components/MasteryView";
import { LiveCallModal } from "@/components/LiveCallModal";
import { VocalWarmupModal } from "@/components/VocalWarmupModal";
import { CustomScenarioStudioModal } from "@/components/CustomScenarioStudioModal";
import { SettingsModal } from "@/components/SettingsModal";
import { HomeLanguageStudyHub } from "@/components/HomeLanguageStudyHub";
import { 
  LanguageSelectionSheet, 
  SUPPORTED_LANGUAGES, 
  SupportedLanguageOption 
} from "@/components/LanguageSelectionSheet";
import { WelcomeOnboardingModal } from "@/components/WelcomeOnboardingModal";
import { CleanHomeDashboard } from "@/components/CleanHomeDashboard";
import { getCoachPersona } from "@/utils/coachPersonas";

// Initial Catalog of Scenarios per PRD specifications
const INITIAL_SCENARIOS: Scenario[] = [
  {
    id: "salary-negotiation",
    title: "Salary Negotiation Simulation",
    subtitle: "High-Stakes Corporate Banter",
    category: "Career & Tech",
    difficulty: "Hard",
    xpReward: 120,
    cefrLevel: "C1",
    durationMinutes: 12,
    imageUrl: "/salary-negotiation.jpg",
    description: "Live AI evaluation on assertive tone, counter-offers, pause duration, and executive compensation terminology.",
    keySkills: ["Executive Framing", "Market Benchmarks", "Assertive Tone", "Equity Cliff"],
    starterPrompt: "Thank you for the initial offer. I'd like to discuss bringing the base compensation in line with senior industry benchmarks.",
    aiFirstMessage: "Thank you for joining. We were thrilled with your interview rounds. Before we finalize paperwork, how are you feeling about the compensation structure we proposed?",
  },
  {
    id: "coffee-twist",
    title: "Coffee Order with Sudden Twist",
    subtitle: "Spontaneous Social Friction",
    category: "Daily Life",
    difficulty: "Medium",
    xpReward: 50,
    cefrLevel: "B2",
    durationMinutes: 5,
    imageUrl: "/coffee-twist.jpg",
    description: "The barista spilled dairy milk and gave the wrong pastry. Rapid improvisation drill under polite social tension.",
    keySkills: ["Conversational Warmth", "Improvisation", "Polite Negotiation", "Colloquial Flow"],
    starterPrompt: "Hi there! Could I get an oat flat white with an extra shot to go, please?",
    aiFirstMessage: "Hey mate! Ah, you're not going to believe this—our oat milk delivery got delayed and our card reader just completely died two minutes ago. Can we make almond or dairy work, and do you have cash?",
  },
  {
    id: "startup-pitch",
    title: "Pitching AI Startup to Investors",
    subtitle: "Silicon Valley Term Sheet Defense",
    category: "Debate & Pitch",
    difficulty: "Master",
    xpReward: 200,
    cefrLevel: "C2",
    durationMinutes: 15,
    imageUrl: "/startup-pitch.jpg",
    description: "High-stakes C1 fluency exam. Handle aggressive CAC questions, defensive moat challenges, and articulate ARR scaling.",
    keySkills: ["CAC/LTV Ratio", "Defensibility Moats", "Executive Brevity", "Objection Handling"],
    starterPrompt: "We've built a proprietary multi-modal language flywheel generating 42% net retention month-over-month.",
    aiFirstMessage: "Your top-line momentum is impressive on paper. But what is your actual moat once frontier model providers commoditize this layer next quarter?",
  },
  {
    id: "tech-standup",
    title: "Tech Standup: Agile Cross-Functional",
    subtitle: "Sprint Delivery Sync",
    category: "Career & Tech",
    difficulty: "Hard",
    xpReward: 80,
    cefrLevel: "C1",
    durationMinutes: 8,
    imageUrl: "/tech-standup.png",
    description: "Articulating complex technical trade-offs, async blocking issues, and sprint delivery coordination in fluent corporate tech English.",
    keySkills: ["Agile Jargon", "Blocker Articulation", "Cross-Team Trade-offs"],
    starterPrompt: "Yesterday I completed the token streaming refactor. Today I'm blocked on the auth service endpoint latency.",
    aiFirstMessage: "Morning team. Let's do a quick round-robin. Rafly, how is the streaming engine rollout tracking for tomorrow's release?",
  },
  // ── Japanese Learning Scenarios (日本語 実践ロールプレイ) ──
  {
    id: "izakaya-order",
    title: "居酒屋・カフェでの注文と雑談 (Izakaya & Café Banter)",
    subtitle: "日常会話・基礎 (Daily Social & Café)",
    category: "Daily Life",
    difficulty: "Easy",
    xpReward: 60,
    cefrLevel: "B1",
    durationMinutes: 6,
    imageUrl: "/small-talk.png",
    description: "渋谷の居酒屋での注文、店員との自然な雑談、お会計の個別精算を実践する基礎会話ロールプレイ。(Live Japanese roleplay practicing ordering food, polite requests, and splitting bills).",
    keySkills: ["日常会話 (Daily Talk)", "丁寧語 (Teineigo)", "助詞の使い分け (Particles)", "注文表現 (Ordering)"],
    starterPrompt: "すみません、生ビールを一つと、焼き鳥の盛り合わせをお願いできますか？",
    aiFirstMessage: "いらっしゃいませ！喜んで！生ビールと焼き鳥盛り合わせですね。焼き鳥はタレと塩、どちらにいたしましょうか？",
  },
  {
    id: "shinkansen-trouble",
    title: "新幹線の乗り遅れと座席変更 (Shinkansen Re-routing)",
    subtitle: "旅行とトラブル対応 (Travel & Friction)",
    category: "Travel",
    difficulty: "Medium",
    xpReward: 90,
    cefrLevel: "B2",
    durationMinutes: 8,
    imageUrl: "/coffee-twist.jpg",
    description: "東京駅のみどりの窓口にて、乗り遅れた新幹線の後続列車への振替や座席変更を円滑に依頼する実践ロールプレイ。(Live Japanese roleplay navigating missed Shinkansen train rebooking with station staff).",
    keySkills: ["トラブル対応 (Trouble Handling)", "〜てしまう表現 (Regret)", "依頼表現 (Polite Requests)", "駅構内用語 (Station Terms)"],
    starterPrompt: "大変申し訳ございません。指定席の列車に乗り遅れてしまったのですが、次の列車の自由席に変更していただけますでしょうか？",
    aiFirstMessage: "恐れ入ります、乗り遅れでございますね。お手元の特急券を拝見できますでしょうか？本日の後続列車の空席状況をお調べいたします。",
  },
  {
    id: "tokyo-tech-standup",
    title: "東京IT企業での朝会・スタンドアップ (Tokyo Agile Standup)",
    subtitle: "IT開発・朝会 (Tech & Agile Standup)",
    category: "Career & Tech",
    difficulty: "Hard",
    xpReward: 120,
    cefrLevel: "C1",
    durationMinutes: 10,
    imageUrl: "/tech-standup.png",
    description: "日系メガベンチャーでのデイリースクラム。APIリファクタリングの進捗、レイテンシ問題のブロッカー、リリースの前倒しを報告する。(Participate in an agile standup in a Tokyo tech company discussing blockers and release maedaoshi).",
    keySkills: ["朝会報告 (Standup Delivery)", "前倒し交渉 (Timeline Maedaoshi)", "技術用語 (Tech Lexemes)", "合意形成 (Consensus)"],
    starterPrompt: "昨日は認証基盤のAPIリファクタリングを完了しました。本日は決済連携のエンドポイント実装に着手しますが、ステージング環境のレイテンシがボトルネックになっております。",
    aiFirstMessage: "ラフリーさん、お疲れ様です。認証基盤の完了ありがとうございます。ステージングのレイテンシの件ですが、インフラチームへのエスカレーションは済んでいますか？",
  },
  {
    id: "tokyo-pitch-negotiation",
    title: "経営陣へのピッチ・価格交渉 (Executive Pitch & Keigo)",
    subtitle: "経営ピッチ・商談 (Executive Pitch & Keigo)",
    category: "Debate & Pitch",
    difficulty: "Master",
    xpReward: 200,
    cefrLevel: "C2",
    durationMinutes: 15,
    imageUrl: "/startup-pitch.jpg",
    description: "日本のエンタープライズ経営陣および投資家に対するAIスタートアップのピッチと価格交渉。参入障壁の防衛と着地点の模索。(Deliver a high-stakes VC pitch and enterprise contract negotiation in formal Japanese Keigo).",
    keySkills: ["高度敬語 (Executive Keigo)", "参入障壁防衛 (Moat Defense)", "価格妥協 (Concession Bargaining)", "着地点模索 (Reaching Consensus)"],
    starterPrompt: "弊社のマルチモーダルAIプラットフォームは、導入企業の顧客オンボーディング期間を70%短縮し、業界屈指の実績を達成しております。",
    aiFirstMessage: "ご説明ありがとうございます。数字の伸びは大変魅力的ですが、米系メガテック企業が同様の音声モデルを投入してきた場合、貴社はどのように差別化と参入障壁を担保されるお考えでしょうか？",
  },
  // ── French Learning Scenarios (Français) ──
  {
    id: "cafe-paris",
    title: "Café & Bistrot de Paris (Ordering & Small Talk)",
    subtitle: "Conversation quotidienne & bistrot parisien",
    category: "Daily Life",
    difficulty: "Easy",
    xpReward: 60,
    cefrLevel: "B1",
    durationMinutes: 6,
    imageUrl: "/small-talk.png",
    description: "Pratiquez la commande d'un café et de croissants dans un bistrot parisien avec aisance et politesse naturelle.",
    keySkills: ["Politesse parisienne", "Formules de commande", "Vocabulaire café", "Intonation française"],
    starterPrompt: "Bonjour ! Je voudrais un café crème et un croissant au beurre s'il vous plaît.",
    aiFirstMessage: "Bonjour ! Très bien, un café crème et un croissant bien chaud. Vous préférez vous installer en terrasse ou en salle ?",
  },
  {
    id: "paris-metro-rer",
    title: "Metro & TGV Grève (Transit Friction & Alternatives)",
    subtitle: "Imprévus et transports parisiens",
    category: "Travel",
    difficulty: "Medium",
    xpReward: 90,
    cefrLevel: "B2",
    durationMinutes: 8,
    imageUrl: "/coffee-twist.jpg",
    description: "Gérer un retard inattendu sur la ligne 1 du métro ou une perturbation du RER à la Gare de Lyon.",
    keySkills: ["Gestion d'imprévus", "Demande d'itinéraire", "Conditionnel de politesse", "Vocabulaire RATP/SNCF"],
    starterPrompt: "Pardonnez-moi, le train pour Lyon semble retardé de quarante minutes. Est-il possible de monter dans le TGV précédent ?",
    aiFirstMessage: "Bonjour monsieur. En effet, nous avons une panne de signalisation sur la voie 2. Pourriez-vous me montrer votre billet de réservation s'il vous plaît ?",
  },
  {
    id: "paris-tech-standup",
    title: "Station F Tech Standup (Agile Engineering)",
    subtitle: "Sprint Delivery & Synchronisation Technique",
    category: "Career & Tech",
    difficulty: "Hard",
    xpReward: 120,
    cefrLevel: "C1",
    durationMinutes: 10,
    imageUrl: "/tech-standup.png",
    description: "Participer à un standup d'ingénieurs à la Station F : expliquer un point de blocage sur l'API et négocier une mise en production.",
    keySkills: ["Jargon tech français", "Explication de bloqueurs", "Négociation de sprint", "Précision technique"],
    starterPrompt: "Hier j'ai finalisé le déploiement de l'API de streaming. Aujourd'hui, je suis ralenti par la latence du microservice d'authentification.",
    aiFirstMessage: "Bonjour l'équipe. Rafly, merci pour le retour. Est-ce que tu as déjà partagé les métriques de latence avec l'équipe DevOps pour qu'on puisse avancer ?",
  },
  {
    id: "paris-pitch-stationf",
    title: "Station F Pitch & Négociation (Executive VC)",
    subtitle: "Levée de fonds et défense de valorisation",
    category: "Debate & Pitch",
    difficulty: "Master",
    xpReward: 200,
    cefrLevel: "C2",
    durationMinutes: 15,
    imageUrl: "/startup-pitch.jpg",
    description: "Défendre la valorisation de sa startup face à des investisseurs parisiens exigeants lors d'un tour de table Series A.",
    keySkills: ["Rhétorique exécutive", "Défense de barrières à l'entrée", "Négociation de valorisation", "Persuasion stratégique"],
    starterPrompt: "Notre plateforme génère une rétention nette de 45% mois après mois et possède une avance technologique décisive sur les modèles ouverts.",
    aiFirstMessage: "Vos métriques d'acquisition sont séduisantes, mais comment protégez-vous vos marges face à la commoditisation accélérée de l'IA générative ?",
  },
  // ── Korean Learning Scenarios (한국어) ──
  {
    id: "hongdae-cafe",
    title: "홍대 카페 주문 및 일상 대화 (Hongdae Café Banter)",
    subtitle: "자연스러운 주문과 음료 커스터마이징",
    category: "Daily Life",
    difficulty: "Easy",
    xpReward: 60,
    cefrLevel: "B1",
    durationMinutes: 6,
    imageUrl: "/small-talk.png",
    description: "홍대 감성 카페에서 아이스 아메리카노와 디저트를 주문하고 직원과 자연스러운 일상 대화를 나누는 실전 롤플레이.",
    keySkills: ["해요체 존댓말", "주문 표현", "음료 옵션 요청", "한국어 자연스러운 억양"],
    starterPrompt: "안녕하세요, 아이스 아메리카노 한 잔 연하게 테이크아웃 부탁드려요.",
    aiFirstMessage: "안녕하세요! 네, 아이스 아메리카노 연하게 한 잔 테이크아웃 준비해 드릴게요. 원두는 고소한 맛과 산미 있는 맛 중 어느 쪽으로 해드릴까요?",
  },
  {
    id: "seoul-subway",
    title: "서울 지하철 환승 및 교통 카드 트러블 (Seoul Metro Trouble)",
    subtitle: "교통카드 오류와 역무원 문의",
    category: "Travel",
    difficulty: "Medium",
    xpReward: 90,
    cefrLevel: "B2",
    durationMinutes: 8,
    imageUrl: "/coffee-twist.jpg",
    description: "서울역 1호선 환승 개표구에서 교통카드 태그 오류 시 역무원에게 정중하게 상황을 설명하고 해결하는 롤플레이.",
    keySkills: ["상황 설명하기", "요청하기 (-아/어 주시겠어요?)", "교통 어휘", "정중한 대화"],
    starterPrompt: "죄송한데요, 환승 카드를 찍었는데 오류가 나서 개표구가 열리지 않아요. 확인해 주실 수 있나요?",
    aiFirstMessage: "아, 그러셨군요. 카드 한 번 보여주시겠어요? 직전 정거장에서 하차 처리가 정상적으로 되지 않은 것 같네요.",
  },
  {
    id: "pangyo-tech-standup",
    title: "판교 IT 테크 스탠드업 (Pangyo Agile Standup)",
    subtitle: "스프린트 지연 이슈 및 API 아키텍처 보고",
    category: "Career & Tech",
    difficulty: "Hard",
    xpReward: 120,
    cefrLevel: "C1",
    durationMinutes: 10,
    imageUrl: "/tech-standup.png",
    description: "판교 테크노밸리 IT 기업에서 데일리 스크럼에 참여하여 실시간 스트리밍 지연 이슈와 해결 방안을 보고하는 비즈니스 한국어 롤플레이.",
    keySkills: ["비즈니스 어휘", "블로커 설명", "기술적 의사소통", "협업 조율"],
    starterPrompt: "어제 토큰 스트리밍 최적화 작업을 마쳤고, 오늘은 인증 서비스 지연 이슈를 파악하고 있습니다.",
    aiFirstMessage: "라플리 님 수고 많으셨습니다. 인증 서비스 지연 건은 백엔드 인프라 팀과 일정 조율이 완료되었을까요?",
  },
  {
    id: "gangnam-pitch",
    title: "강남 테헤란로 스타트업 투자 피칭 (Teheran-ro VC Pitch)",
    subtitle: "VC 질의응답 및 BM 방어",
    category: "Debate & Pitch",
    difficulty: "Master",
    xpReward: 200,
    cefrLevel: "C2",
    durationMinutes: 15,
    imageUrl: "/startup-pitch.jpg",
    description: "강남 벤처캐피털 투자 심사역 앞에서 AI 스타트업의 수익 모델과 독점적 해자를 논리정연하게 방어하는 최고급 한국어 피칭.",
    keySkills: ["고급 비즈니스 한국어", "투자 유치 논리", "질의응답 방어", "전문 용어 구사"],
    starterPrompt: "저희 멀티모달 음성 엔진은 높은 사용자 유지율을 바탕으로 이미 확실한 시장 지배력을 확보하고 있습니다.",
    aiFirstMessage: "초기 지표는 매우 긍정적입니다만, 글로벌 빅테크 기업들이 유사한 모델을 무료로 배포할 경우 어떤 전략으로 해자를 지켜내실 계획인가요?",
  },
  // ── German Learning Scenarios (Deutsch) ──
  {
    id: "berlin-cafe",
    title: "Berliner Bäckerei & Café Bestellung (Bakery Banter)",
    subtitle: "Alltagskommunikation im Café",
    category: "Daily Life",
    difficulty: "Easy",
    xpReward: 60,
    cefrLevel: "B1",
    durationMinutes: 6,
    imageUrl: "/small-talk.png",
    description: "Bestellen Sie Kaffee und frische Brötchen in einer Berliner Bäckerei mit natürlicher Höflichkeit.",
    keySkills: ["Höfliche Bitten", "Kaffee- und Bäckerei-Wortschatz", "Akkusativ-Objekte", "Berliner Gelassenheit"],
    starterPrompt: "Guten Tag! Ich hätte gerne einen Cappuccino mit Hafermilch und zwei Dinkelbrötchen zum Mitnehmen, bitte.",
    aiFirstMessage: "Guten Tag! Sehr gerne. Möchten Sie die Brötchen gleich belegt haben, oder einfach so eingepackt?",
  },
  {
    id: "bahn-verspaetung",
    title: "Deutsche Bahn Zugausfall & Umbuchung (DB Travel Friction)",
    subtitle: "Fahrkartenumtausch und Reisealternativen",
    category: "Travel",
    difficulty: "Medium",
    xpReward: 90,
    cefrLevel: "B2",
    durationMinutes: 8,
    imageUrl: "/coffee-twist.jpg",
    description: "Am Hauptbahnhof Schalter eine spontane Alternative für einen ausgefallenen ICE verhandeln.",
    keySkills: ["Beschwerde und Lösung", "Konjunktiv II", "Bahn-Wortschatz", "Sachliche Durchsetzungsstärke"],
    starterPrompt: "Entschuldigung, mein ICE nach München fällt leider aus. Könnten Sie meine Sitzplatzreservierung bitte auf den nächsten Zug umbuchen?",
    aiFirstMessage: "Guten Tag. Ja, wegen einer Weichenstörung ist der Zug leider entfallen. Lassen Sie mich kurz Ihr Ticket einscannen.",
  },
  {
    id: "berlin-tech-standup",
    title: "Berlin Tech Standup & Sprint Sync (Agile German)",
    subtitle: "Blocker-Analyse und API-Architektur",
    category: "Career & Tech",
    difficulty: "Hard",
    xpReward: 120,
    cefrLevel: "C1",
    durationMinutes: 10,
    imageUrl: "/tech-standup.png",
    description: "In einem Berliner Tech-Startup im Daily Standup über Sprint-Blocker, Latenz und Deployment-Pipelines berichten.",
    keySkills: ["Agile Fachsprache", "Präzise Problembeschreibung", "Teamabstimmung", "Technisches Deutsch"],
    starterPrompt: "Gestern habe ich das Refactoring der Streaming-Pipeline abgeschlossen. Heute hänge ich leider an der Latenz des Auth-Endpoints.",
    aiFirstMessage: "Morgen zusammen. Danke für das Update, Rafly. Hast du das Problem schon im DevOps-Channel angesprochen?",
  },
  {
    id: "frankfurt-pitch",
    title: "Frankfurt Executive Pitch & B2B Verhandlung (Enterprise Deal)",
    subtitle: "DSGVO-Compliance und B2B-Preismodell",
    category: "Debate & Pitch",
    difficulty: "Master",
    xpReward: 200,
    cefrLevel: "C2",
    durationMinutes: 15,
    imageUrl: "/startup-pitch.jpg",
    description: "Verhandeln Sie vor deutschen Vorständen und VCs über Datenschutz, DSGVO-Sicherheit und Enterprise-Verträge.",
    keySkills: ["Gehobene Verhandlungssprache", "DSGVO-Argumentation", "Souveräne Einwandbehandlung", "B2B-Abschlusskompetenz"],
    starterPrompt: "Unsere Architektur ist vollständig DSGVO-konform und garantiert On-Premise-Datensicherheit bei höchster Skalierbarkeit.",
    aiFirstMessage: "Das Sicherheitskonzept klingt durchdacht. Wie sieht jedoch Ihre vertragliche Haftung im Falle von unerwarteten Latenzspitzen aus?",
  },
  // ── Spanish Learning Scenarios (Español) ──
  {
    id: "tapas-madrid",
    title: "Tapeo y Pedidos en Madrid (Tapas Bar Banter)",
    subtitle: "Conversación fluida y vida social en el bar",
    category: "Daily Life",
    difficulty: "Easy",
    xpReward: 60,
    cefrLevel: "B1",
    durationMinutes: 6,
    imageUrl: "/small-talk.png",
    description: "Pide tapas tradicionales en el centro de Madrid, interactúa con el camarero y pide la cuenta separada.",
    keySkills: ["Español coloquial", "Pedidos y comida", "Trato de tú y cortesía", "Expresiones cotidianas"],
    starterPrompt: "¡Hola buenas! ¿Nos pones una caña bien tirada, una de bravas y media de tortilla por favor?",
    aiFirstMessage: "¡Buenas! Marchando esa caña bien fría. ¿Las bravas las queréis con la salsa picante tradicional o más suave?",
  },
  {
    id: "renfe-incidencia",
    title: "Incidencia y Cambio de Billete Renfe AVE (Renfe Transit Trouble)",
    subtitle: "Gestión de retrasos y cambios en ventanilla",
    category: "Travel",
    difficulty: "Medium",
    xpReward: 90,
    cefrLevel: "B2",
    durationMinutes: 8,
    imageUrl: "/coffee-twist.jpg",
    description: "Gestiona en la estación de Atocha el cambio de billete tras la pérdida o retraso de un tren AVE.",
    keySkills: ["Resolución de incidencias", "Condicional de cortesía", "Léxico ferroviario", "Asertividad calmada"],
    starterPrompt: "Buenas tardes, acabo de perder el AVE con destino a Barcelona por un retraso del metro. ¿Sería posible cambiar mi billete al siguiente tren?",
    aiFirstMessage: "Buenas tardes. Déjeme ver su billete y localizador, por favor. Vamos a comprobar las plazas libres en el tren de las 18:30.",
  },
  {
    id: "madrid-tech-standup",
    title: "Standup Técnico en Startup de Madrid (Agile Standup)",
    subtitle: "Despliegue y latencia de endpoints",
    category: "Career & Tech",
    difficulty: "Hard",
    xpReward: 120,
    cefrLevel: "C1",
    durationMinutes: 10,
    imageUrl: "/tech-standup.png",
    description: "Participa en el standup diario de una tecnológica en Madrid explicando bloqueos de infraestructura y plazos de entrega.",
    keySkills: ["Jerga tech en español", "Explicación de cuellos de botella", "Coordinación ágil", "Negociación de plazos"],
    starterPrompt: "Ayer completé la integración de WebSockets para el streaming. Hoy estoy bloqueado con los tiempos de respuesta del endpoint de autenticación.",
    aiFirstMessage: "¡Hola equipo! Bien visto ese avance con WebSockets, Rafly. ¿Has podido revisar los logs de staging con la gente de sistemas?",
  },
  {
    id: "latam-pitch",
    title: "Pitch de Inversión y Negociación B2B (VC Investment Pitch)",
    subtitle: "Estrategia de tracción y expansión regional",
    category: "Debate & Pitch",
    difficulty: "Master",
    xpReward: 200,
    cefrLevel: "C2",
    durationMinutes: 15,
    imageUrl: "/startup-pitch.jpg",
    description: "Defiende tu valoración y tracción empresarial ante inversores de capital riesgo en un pitch de alta exigencia.",
    keySkills: ["Elocuencia ejecutiva", "Defensa de ventajas competitivas", "Tracción y CAC/LTV", "Negociación estratégica"],
    starterPrompt: "Nuestra tecnología ha alcanzado un ratio de retención neta del 40% mensual con una estructura de costes sumamente eficiente.",
    aiFirstMessage: "Sus cifras de crecimiento son interesantes, pero ¿cómo piensan defender su cuota de mercado cuando los gigantes tecnológicos liberen modelos similares?",
  },
];

const DEFAULT_SETTINGS: AppSettings = {
  apiKey: "",
  targetLanguage: "english",
  recognitionLang: "en-US",
  level: "advanced",
  autoplayTTS: true,
  phoneticHints: true,
  ttsVoiceURI: "",
  ttsSpeed: 0.94,
  ttsPitch: 1.02,
};

export default function FluencyAIPage() {
  // Navigation Tab: "today" | "talk" | "quests" | "mastery"
  const [activeTab, setActiveTab] = useState<TabType>("today");

  // User Progression State (matches 2,190 XP and 1,420 Gems from screenshot)
  const [userXp, setUserXp] = useState<number>(2190);
  const [userGems, setUserGems] = useState<number>(1420);
  const [streakDays, setStreakDays] = useState<number>(5);

  // Concentric Rings Data
  const [ringData, setRingData] = useState<ActivityRingData>({
    speakingMinutes: 12,
    speakingGoalMinutes: 15,
    vocabAdded: 34,
    vocabGoal: 50,
    clarityPct: 92,
    clarityGoalPct: 100,
    overallCefrScore: 85,
    cefrRating: "C1 Advanced",
  });

  // Daily Targets
  const [dailyTargets, setDailyTargets] = useState<DailyTarget[]>([
    {
      id: "target-speak",
      title: "Speak 15 mins",
      progress: 12,
      target: 15,
      unit: "mins",
      percentage: 80,
      completed: false,
      actionLabel: "Continue",
      actionScenarioId: "salary-negotiation",
    },
    {
      id: "target-idioms",
      title: "Master 5 Idioms",
      progress: 2,
      target: 5,
      unit: "idioms",
      percentage: 40,
      completed: false,
      actionLabel: "Practice",
      actionScenarioId: "coffee-twist",
    },
    {
      id: "target-drills",
      title: "Pronunciation Drills",
      progress: 3,
      target: 3,
      unit: "drills",
      percentage: 100,
      completed: true,
      actionLabel: "Review",
    },
  ]);

  // Streak Vault State
  const [streakVault, setStreakVault] = useState<StreakVaultData>({
    currentStreak: 5,
    multiplier: 1.5,
    chestUnlockHours: 2,
    chestUnlockMinutes: 14,
    chestClaimed: false,
  });

  // Scenarios catalog
  const [scenarios, setScenarios] = useState<Scenario[]>(INITIAL_SCENARIOS);
  const [selectedScenarioForCall, setSelectedScenarioForCall] = useState<Scenario | null>(null);

  // Modals state
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isWarmupModalOpen, setIsWarmupModalOpen] = useState(false);
  const [isStudioModalOpen, setIsStudioModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  // App Settings initialized identically on server and client to avoid SSR hydration mismatch
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [isClientMounted, setIsClientMounted] = useState(false);
  const [ttsVoices, setTtsVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Hydrate settings from localStorage safely after mount
  useEffect(() => {
    setIsClientMounted(true);
    try {
      const saved = localStorage.getItem("fluency_settings");
      const hasChosen = localStorage.getItem("fluency_has_chosen_language");
      if (saved) {
        const parsed = JSON.parse(saved);
        setSettings((prev) => ({ ...prev, ...parsed }));
      }
      if (!hasChosen) {
        // First-time language selection requirement per prompt
        setIsLanguageSheetOpen(true);
      }
    } catch {}
  }, []);

  // Load Voices
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const load = () => {
        const v = window.speechSynthesis.getVoices();
        if (v.length > 0) setTtsVoices(v);
      };
      load();
      window.speechSynthesis.onvoiceschanged = load;
    }
  }, []);

  // Language Selection Sheet & Onboarding Modal state
  const [isLanguageSheetOpen, setIsLanguageSheetOpen] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);

  // Active language option matching mockup
  const currentLanguageOption: SupportedLanguageOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === settings.targetLanguage) ||
    SUPPORTED_LANGUAGES[0];

  const handleSelectLanguageOption = (lang: SupportedLanguageOption) => {
    const targetLanguage = lang.code;
    const recognitionLang = lang.recognitionLang || (lang.code === "japanese" ? "ja-JP" : "en-US");
    setSettings((prev) => {
      const updated: AppSettings = {
        ...prev,
        targetLanguage,
        recognitionLang,
        ttsVoiceURI: "",
      };
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("fluency_settings", JSON.stringify(updated));
          localStorage.setItem("fluency_has_chosen_language", "true");
        } catch {}
      }
      return updated;
    });
    setIsLanguageSheetOpen(false);
  };

  // Handle language selection from Home screen or header
  const handleSelectLanguage = (lang: string) => {
    const opt = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
    const recognitionLang = opt?.recognitionLang || (lang === "japanese" ? "ja-JP" : "en-US");
    setSettings((prev) => {
      const updated: AppSettings = {
        ...prev,
        targetLanguage: lang,
        recognitionLang,
        ttsVoiceURI: "",
      };
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("fluency_settings", JSON.stringify(updated));
        } catch {}
      }
      return updated;
    });
  };

  // Launch a Scenario Call
  const handleStartCall = (scenario: Scenario) => {
    setSelectedScenarioForCall(scenario);
    setIsCallModalOpen(true);
  };

  // Launch Free Call with Coach
  const handleStartFreeCall = () => {
    const coachPersona = getCoachPersona(settings.targetLanguage, settings.ttsVoiceURI);
    const firstName = coachPersona.name.split(" ")[0];
    const freeCallScenario: Scenario = {
      id: `free-call-${settings.targetLanguage}`,
      title: `${firstName} AI Coach Free Call`,
      subtitle: "Spontaneous Verbal Dialogue",
      category: "Daily Life",
      difficulty: "Medium",
      xpReward: 90,
      cefrLevel: "C1",
      durationMinutes: 10,
      imageUrl: coachPersona.avatarUrl,
      description: `Low-latency free conversation with Coach ${firstName}. Test spontaneous fluency on any topic with instant phonetic analysis.`,
      keySkills: ["Spontaneous Fluency", "Pronunciation", "Natural Banter"],
      starterPrompt: "Let's do a freeform practice session today.",
      aiFirstMessage: coachPersona.sampleText,
    };
    handleStartCall(freeCallScenario);
  };

  // Handle Post-Call Wrap-up Telemetry & Rings Updates
  const handleSessionComplete = (results: { xpGained: number; speakingMinutes: number; wordsAssim: number }) => {
    setUserXp((prev) => prev + results.xpGained);
    setRingData((prev) => ({
      ...prev,
      speakingMinutes: Math.min(prev.speakingMinutes + results.speakingMinutes, 15),
      vocabAdded: prev.vocabAdded + results.wordsAssim,
      overallCefrScore: Math.min(prev.overallCefrScore + 1, 98),
    }));

    // Update daily targets
    setDailyTargets((prev) =>
      prev.map((t) => {
        if (t.id === "target-speak") {
          const next = Math.min(t.progress + results.speakingMinutes, t.target);
          return {
            ...t,
            progress: next,
            percentage: Math.round((next / t.target) * 100),
            completed: next >= t.target,
          };
        }
        return t;
      })
    );
  };

  // Handle Target Widget Click
  const handleTargetAction = (target: DailyTarget) => {
    if (target.id === "target-drills") {
      setIsWarmupModalOpen(true);
    } else {
      const match = scenarios.find((s) => s.id === target.actionScenarioId) || scenarios[0];
      handleStartCall(match);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between pb-24 selection:bg-emerald-200 selection:text-emerald-950 font-[var(--font-poppins)]">
      {/* ── Apple Dynamic Island Achievement Toast ── */}
      <DynamicIslandNotification
        streak={streakDays}
        xpBoost={100}
        isCalling={isCallModalOpen}
        onOpenCall={handleStartFreeCall}
      />

      {/* ── App Top Header (Clean Light Theme matching mockup) ── */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-[#0f4a3c] text-white flex items-center justify-center shadow-sm">
              <span className="font-space font-extrabold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-space font-extrabold text-slate-900 leading-tight tracking-tight">
                Mingle Fluency
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-700 uppercase">
                {activeTab === "quests" || activeTab === "arena" ? "QUESTS & ARENAS" : "AI VOICE COACH"}
              </span>
            </div>
          </div>

          {/* User Stats & Language & Profile Avatar */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Language Selection Button -> Opens Screen 3 Language Selection Sheet */}
            <button
              onClick={() => setIsLanguageSheetOpen(true)}
              className="px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 transition-all flex items-center gap-2 shadow-xs cursor-pointer group"
              title="Click to select study language"
            >
              <span className="text-base">{currentLanguageOption.flag}</span>
              <span className="hidden sm:inline font-semibold">{currentLanguageOption.name.split(" ")[0]}</span>
              <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-700" />
            </button>

            {/* Welcome Tour Button */}
            <button
              onClick={() => setIsWelcomeModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Sparkles size={13} className="text-emerald-600" />
              <span>Tour</span>
            </button>

            {/* Streak Pill matching image: 🔥 12 */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-orange-700 shadow-xs">
              <Flame size={14} className="text-orange-500 fill-orange-500" />
              <span className="font-bold">{streakDays}</span>
            </div>

            {/* XP / Points Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-xs">
              <span className="text-amber-500">✨</span>
              <span className="font-bold">{userXp.toLocaleString()}</span>
            </div>

            {/* Profile Avatar */}
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-600 hover:border-emerald-700 transition-colors shrink-0 shadow-sm ml-0.5 cursor-pointer"
              title="Settings & Profile"
            >
              <img src="/aura-avatar.png" alt="Profile" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Viewports by Tab (Full Desktop max-w-6xl & Responsive Mobile) ── */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 pb-36 flex-1 flex flex-col gap-6">
        {/* Tab: Talk (AI Roleplay & Scenario Hub) */}
        {(activeTab === "talk" || activeTab === "scenarios") && (
          <ScenarioHubView
            scenarios={scenarios}
            onSelectScenario={handleStartCall}
            onOpenWarmup={() => setIsWarmupModalOpen(true)}
            onOpenStudio={() => setIsStudioModalOpen(true)}
            onStartFreeCall={handleStartFreeCall}
            targetLanguage={settings.targetLanguage}
            ttsVoiceURI={settings.ttsVoiceURI}
          />
        )}

        {/* Tab: Today / Home Fluency Dashboard */}
        {activeTab === "today" && (
          <div className="flex flex-col gap-8 animate-slide-up-fade">
            {/* Screen 2: Clean Fun Learning Dashboard matching layout & colors */}
            <CleanHomeDashboard
              currentLanguage={currentLanguageOption}
              onOpenLanguageSheet={() => setIsLanguageSheetOpen(true)}
              onStartCall={(scenarioId) => {
                if (scenarioId) {
                  const match = scenarios.find(
                    (s) => s.id === scenarioId || s.title.toLowerCase().includes(scenarioId.toLowerCase())
                  );
                  if (match) {
                    handleStartCall(match);
                    return;
                  }
                }
                handleStartFreeCall();
              }}
              onOpenSettings={() => setIsSettingsModalOpen(true)}
              onNavigateTab={(tab) => setActiveTab(tab as TabType)}
              streakDays={streakDays}
              userXp={userXp}
              userGems={userGems}
              ttsVoices={ttsVoices}
              ttsVoiceURI={settings.ttsVoiceURI}
            />

            {/* Quick Practice & Progression Rings section */}
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
              <FluencyCoreRings
                data={ringData}
                onOpenLiveSession={handleStartFreeCall}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StreakVaultCard
                  data={streakVault}
                  onClaimReward={() => {
                    setUserXp((prev) => prev + 250);
                    setUserGems((prev) => prev + 50);
                    setStreakVault((prev) => ({ ...prev, chestClaimed: true }));
                  }}
                />
                <DailyTargetWidgets
                  targets={dailyTargets}
                  onActionClick={handleTargetAction}
                />
              </div>

              <NextUpRecommendations
                scenarios={scenarios.slice(0, 3)}
                onSelectScenario={handleStartCall}
              />
            </div>
          </div>
        )}

        {/* Tab: Quests & Arena */}
        {(activeTab === "quests" || activeTab === "arena") && (
          <QuestsArenaView
            userXp={userXp}
            userGems={userGems}
            onUpdateGems={(g) => setUserGems(g)}
            onClaimQuest={(qId, xp) => {
              setUserXp((prev) => prev + xp);
            }}
            onResumeDrill={() => {
              const match = scenarios.find((s) => s.id === "tech-standup") || scenarios[0];
              handleStartCall(match);
            }}
            onStartScenario={(id) => {
              const match = scenarios.find((s) => s.id === id) || scenarios[0];
              handleStartCall(match);
            }}
          />
        )}

        {/* Tab: Mastery */}
        {activeTab === "mastery" && (
          <MasteryView
            initialLanguage={settings.targetLanguage}
            onLanguageChange={handleSelectLanguage}
            onLaunchNodeScenario={(titleOrId) => {
              const match = scenarios.find(
                (s) => s.id === titleOrId || s.title.toLowerCase().includes(titleOrId.toLowerCase())
              ) || scenarios[0];
              handleStartCall(match);
            }}
          />
        )}
      </main>

      {/* ── Apple HIG Clean Glass Bottom Navigation Dock ── */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-2 flex items-center justify-around border border-slate-200/90 shadow-[0_12px_36px_rgba(15,74,60,0.12)]">
        {[
          { id: "today", label: "Home", icon: LayoutGrid },
          { id: "talk", label: "Talk", icon: AudioLines },
          { id: "quests", label: "Quests", icon: Trophy },
          { id: "mastery", label: "Roadmap", icon: TrendingUp },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive =
            activeTab === tab.id ||
            (tab.id === "talk" && activeTab === "scenarios") ||
            (tab.id === "quests" && activeTab === "arena");
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex-1 py-1.5 px-3 rounded-2xl flex flex-col items-center gap-1 transition-all duration-300 relative ${
                isActive ? "text-[#0f4a3c] font-bold" : "text-slate-400 hover:text-slate-700"
              }`}
            >
              {isActive ? (
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#0f4a3c] flex items-center justify-center shadow-xs">
                  <Icon size={17} />
                </div>
              ) : (
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icon size={19} />
                </div>
              )}
              <span
                className={`text-[10px] tracking-wide ${
                  isActive ? "font-bold text-[#0f4a3c]" : "font-medium text-slate-500"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* ── Screen 3: Live AI Voice Coaching Full Modal ── */}
      <LiveCallModal
        open={isCallModalOpen}
        scenario={selectedScenarioForCall}
        onClose={() => setIsCallModalOpen(false)}
        onSessionComplete={handleSessionComplete}
        apiKey={settings.apiKey}
        ttsSpeed={settings.ttsSpeed}
        ttsPitch={settings.ttsPitch}
        ttsVoiceURI={settings.ttsVoiceURI}
        targetLanguage={settings.targetLanguage}
      />

      {/* ── 30-Second Vocal Warmup Drill Modal ── */}
      <VocalWarmupModal
        open={isWarmupModalOpen}
        onClose={() => setIsWarmupModalOpen(false)}
        onCompleteWarmup={(bonusXp) => {
          setUserXp((prev) => prev + bonusXp);
          setRingData((prev) => ({ ...prev, clarityPct: 96 }));
        }}
      />

      {/* ── Custom Scenario Studio Builder Modal ── */}
      <CustomScenarioStudioModal
        open={isStudioModalOpen}
        onClose={() => setIsStudioModalOpen(false)}
        onLaunchCustomScenario={(customScenario) => {
          setScenarios((prev) => [customScenario, ...prev]);
          handleStartCall(customScenario);
        }}
      />

      {/* ── Settings Modal ── */}
      <SettingsModal
        open={isSettingsModalOpen}
        settings={settings}
        voices={ttsVoices}
        userXp={userXp}
        userGems={userGems}
        streakDays={streakDays}
        onChange={(partial) => setSettings((prev) => ({ ...prev, ...partial }))}
        onClose={() => setIsSettingsModalOpen(false)}
        onSave={() => {
          localStorage.setItem("fluency_settings", JSON.stringify(settings));
          setIsSettingsModalOpen(false);
        }}
      />

      {/* ── Screen 3: Language Selection Sheet (Lessons Modal) ── */}
      <LanguageSelectionSheet
        isOpen={isLanguageSheetOpen}
        onClose={() => setIsLanguageSheetOpen(false)}
        currentLanguage={settings.targetLanguage}
        onSelectLanguage={handleSelectLanguageOption}
      />

      {/* ── Screen 1: Welcome Onboarding Modal ("Master a new language in just minutes a day") ── */}
      <WelcomeOnboardingModal
        isOpen={isWelcomeModalOpen}
        onGetStarted={() => {
          setIsWelcomeModalOpen(false);
          setIsLanguageSheetOpen(true);
        }}
        onContinue={() => setIsWelcomeModalOpen(false)}
      />
    </div>
  );
}
