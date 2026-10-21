"use client";

import { useState, useEffect } from "react";
import { 
  Sparkles, Zap, LayoutGrid, AudioLines, Award, Trophy, TrendingUp, Settings as SettingsIcon 
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
      if (saved) {
        const parsed = JSON.parse(saved);
        setSettings((prev) => ({ ...prev, ...parsed }));
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

  // Handle language selection from Home screen or header
  const handleSelectLanguage = (lang: "english" | "japanese") => {
    const recognitionLang = lang === "japanese" ? "ja-JP" : "en-US";
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

  // Launch Free Call with Coach Elena
  const handleStartFreeCall = () => {
    const freeCallScenario: Scenario = {
      id: "free-call-elena",
      title: "Elena AI Coach Free Call",
      subtitle: "Spontaneous Verbal Dialogue",
      category: "Daily Life",
      difficulty: "Medium",
      xpReward: 90,
      cefrLevel: "C1",
      durationMinutes: 10,
      imageUrl: "/elena-coach.jpg",
      description: "Low-latency free conversation with Coach Elena. Test spontaneous fluency on any topic with instant phonetic analysis.",
      keySkills: ["Spontaneous Fluency", "Pronunciation", "Natural Banter"],
      starterPrompt: "Hey Elena! Let's do a freeform practice session today.",
      aiFirstMessage: "Hi Rafly! It's great to hear your voice. What topic or challenge shall we dive into today?",
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
    <div className="min-h-screen bg-[#070b14] text-white flex flex-col justify-between pb-24 selection:bg-cyan-400 selection:text-black">
      {/* ── Apple Dynamic Island Achievement Toast ── */}
      <DynamicIslandNotification
        streak={streakDays}
        xpBoost={100}
        isCalling={isCallModalOpen}
        onOpenCall={handleStartFreeCall}
      />

      {/* ── App Top Header ── */}
      <header className="sticky top-0 z-40 w-full bg-[#070b14]/90 backdrop-blur-md border-b border-white/5 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.35)]">
              <Sparkles size={18} className="text-[#00e5ff]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-space font-extrabold text-white leading-tight tracking-tight">
                Fluency AI
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#00e5ff] uppercase">
                {activeTab === "quests" || activeTab === "arena" ? "QUESTS & ARENAS" : "AI ROLEPLAY"}
              </span>
            </div>
          </div>

          {/* User Stats & Language & Profile Avatar */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Language Toggle Pill */}
            <div className="p-0.5 rounded-full bg-[#131a27] border border-slate-800 flex items-center shadow-sm">
              <button
                onClick={() => handleSelectLanguage("english")}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                  settings.targetLanguage === "english"
                    ? "bg-[#00e5ff] text-slate-950 shadow-[0_0_10px_rgba(0,229,255,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Study English"
              >
                <span>🇺🇸</span>
                <span className="hidden sm:inline">EN</span>
              </button>
              <button
                onClick={() => handleSelectLanguage("japanese")}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                  settings.targetLanguage === "japanese"
                    ? "bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Study Japanese (日本語)"
              >
                <span>🇯🇵</span>
                <span className="hidden sm:inline">JA</span>
              </button>
            </div>

            {/* Streak Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131a27] border border-slate-800 text-xs font-semibold text-white shadow-sm">
              <span>🔥</span>
              <span className="text-white font-bold">{streakDays}d</span>
            </div>

            {/* XP / Points Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131a27] border border-slate-800 text-xs font-semibold shadow-sm">
              <span className="text-amber-400">✨</span>
              <span className="text-[#00e5ff] font-bold">{userXp.toLocaleString()}</span>
            </div>

            {/* Profile Avatar */}
            <button
              onClick={() => setIsSettingsModalOpen(true)}
              className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#00e5ff] hover:border-cyan-300 transition-colors shrink-0 shadow-[0_0_12px_rgba(0,229,255,0.4)] ml-0.5"
              title="Settings & Profile"
            >
              <img src="/aura-avatar.png" alt="Profile" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Viewports by Tab (Full Desktop max-w-6xl & Responsive Mobile) ── */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 pb-28 flex-1 flex flex-col gap-6">
        {/* Tab: Talk (AI Roleplay & Scenario Hub) */}
        {(activeTab === "talk" || activeTab === "scenarios") && (
          <ScenarioHubView
            scenarios={scenarios}
            onSelectScenario={handleStartCall}
            onOpenWarmup={() => setIsWarmupModalOpen(true)}
            onOpenStudio={() => setIsStudioModalOpen(true)}
            onStartFreeCall={handleStartFreeCall}
          />
        )}

        {/* Tab: Today / Home Fluency Dashboard */}
        {activeTab === "today" && (
          <div className="flex flex-col gap-8 animate-slide-up-fade">
            {/* Step 1: Language Study Selector -> Step 2: Available AI Voice -> Step 3: Adjusted Roadmap */}
            <HomeLanguageStudyHub
              selectedLanguage={settings.targetLanguage === "japanese" ? "japanese" : "english"}
              onSelectLanguage={handleSelectLanguage}
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
              onNavigateToMastery={() => setActiveTab("mastery")}
              ttsVoices={ttsVoices}
              ttsVoiceURI={settings.ttsVoiceURI}
            />

            {/* Daily Core Rings Telemetry */}
            <FluencyCoreRings
              data={ringData}
              onOpenLiveSession={handleStartFreeCall}
            />

            {/* Streak Vault & Daily Targets */}
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
            <NextUpRecommendations
              scenarios={scenarios.slice(0, 3)}
              onSelectScenario={handleStartCall}
            />
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
            initialLanguage={settings.targetLanguage === "japanese" ? "japanese" : "english"}
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

      {/* ── Apple HIG Frosted Glass Bottom Navigation Dock ── */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md glass-dock rounded-3xl p-2 flex items-center justify-around border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
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
                isActive ? "text-[#00e5ff] font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              {isActive ? (
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-[#00e5ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.45)]">
                  <Icon size={17} />
                </div>
              ) : (
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icon size={19} />
                </div>
              )}
              <span
                className={`text-[10px] tracking-wide ${
                  isActive ? "font-bold text-[#00e5ff]" : "font-medium text-slate-400"
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
    </div>
  );
}
