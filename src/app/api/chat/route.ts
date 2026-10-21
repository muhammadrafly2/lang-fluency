import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { 
      message = "Hello Elena", 
      history = [], 
      scenarioId, 
      scenarioTitle,
      tutorStyle = "friendly", 
      level = "advanced", 
      apiKey, 
      targetLanguage = "english",
      customPersona
    } = await req.json();

    let key = apiKey || process.env.OPENROUTER_API_KEY;
    if (key === "undefined" || key === "null" || !key) {
      key = process.env.OPENROUTER_API_KEY;
    }
    if (key && key.startsWith("AIza")) {
      key = process.env.OPENROUTER_API_KEY;
    }
    key = key?.trim();

    let fullText = "";

    // Fast attempt with OpenRouter (3.5s max timeout to prevent UI lag)
    if (key) {
      try {
        const systemPrompt = buildElenaSystemPrompt({
          scenarioId,
          scenarioTitle,
          mode: "roleplay",
          tutorStyle,
          level,
          targetLanguage,
          customPersona
        });

        const messages = [
          { role: "system", content: systemPrompt },
          ...history.slice(-4).map((h: { role: string; text: string }) => ({
            role: h.role === "ai" ? "assistant" : "user",
            content: h.text,
          })),
          { role: "user", content: message },
        ];

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${key}`,
            "HTTP-Referer": "https://fluencyai.app",
            "X-Title": "Fluency AI",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "nvidia/nemotron-3.5-lightning:free",
            messages,
            temperature: 0.7,
            max_tokens: 300,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          if (data.choices?.[0]?.message?.content) {
            fullText = data.choices[0].message.content;
          }
        }
      } catch {
        // Fallback below
      }
    }

    if (!fullText) {
      fullText = generateContextualResponse({
        message,
        scenarioId,
        scenarioTitle,
        level,
        tutorStyle,
      });
    }

    const parsedData = parseElenaResponse(fullText, message);

    return NextResponse.json({
      response: parsedData.cleanSpeech,
      fullText: fullText,
      feedback: parsedData.feedback,
      phonetics: parsedData.phonetics,
      executiveTip: parsedData.executiveTip,
      clarityScore: parsedData.clarityScore,
      fillersDetected: parsedData.fillersDetected,
    });
  } catch (err: unknown) {
    console.error("Fluency AI API error:", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

interface PromptOptions {
  scenarioId?: string;
  scenarioTitle?: string;
  mode: string;
  tutorStyle: string;
  level: string;
  targetLanguage: string;
  customPersona?: {
    name?: string;
    role?: string;
    dialect?: string;
    conflictLevel?: string;
    topic?: string;
  };
}

function buildElenaSystemPrompt({
  scenarioId,
  scenarioTitle,
  tutorStyle,
  level,
  targetLanguage,
  customPersona
}: PromptOptions): string {
  let roleplayContext = "";

  if (scenarioId === "salary-negotiation") {
    roleplayContext = `
SCENARIO: High-Stakes Salary & Executive Compensation Negotiation.
YOUR ROLE: VP of Engineering / Hiring Director.
SITUATION: The candidate (user) wants +25% base compensation and equity refreshers.
OBJECTIVE: Evaluate assertiveness, poise, and executive corporate vocabulary.`;
  } else if (scenarioId === "coffee-twist") {
    roleplayContext = `
SCENARIO: Coffee Order with Sudden Social Twist.
YOUR ROLE: Barista at an artisanal Melbourne cafe. Oat milk is depleted and card machine broke.
OBJECTIVE: Evaluate spontaneous social improvisation, polite negotiation, and humor.`;
  } else if (scenarioId === "startup-pitch") {
    roleplayContext = `
SCENARIO: Pitching AI Startup to Seasoned Silicon Valley Venture Capitalists.
YOUR ROLE: Managing Partner at Horizon Ventures.
OBJECTIVE: Challenge their CAC, LTV, ARR defense against Big Tech, and defensibility moat.`;
  } else if (scenarioId === "tech-standup") {
    roleplayContext = `
SCENARIO: Cross-Functional Agile Tech Standup.
YOUR ROLE: Lead Product Manager running sprint sync.
OBJECTIVE: Concise status update, identifying blockers, and cross-team trade-offs.`;
  } else if (customPersona) {
    roleplayContext = `
CUSTOM SCENARIO: ${customPersona.topic || "Professional Banter"}
YOUR ROLE: ${customPersona.name || "Elena"} (${customPersona.role || "Executive Partner"}).`;
  } else {
    roleplayContext = `
SCENARIO: ${scenarioTitle || "Spontaneous Spoken Fluency Practice"}.
YOUR ROLE: Elena, an empathetic executive AI voice coach.`;
  }

  return `You are Elena, an elite generative voice AI coach at Fluency AI.
User Target: ${targetLanguage.toUpperCase()} (CEFR ${level}). Style: ${tutorStyle}.
${roleplayContext}

CONVERSATION GUIDELINES:
1. Stay in character! Respond naturally, concisely (2-3 sentences max) like a voice phone call.
2. Structure your response into two distinct sections separated by "---":
[Spoken Dialogue for Voice TTS - 2-3 sentences max]
---
[FEEDBACK_TELEMETRY]
❌ Error: (Grammar/collocation slip or "None")
⚠️ Suggestion: (Executive upgrade, e.g., 'Pair with tangible ROI')
✅ Highlight: (Commend articulate phrase or sharp vocabulary)
🔤 Phonetic: word = /IPA/ (1 advanced word from context)
💡 Executive Tip: (1 high-impact communication tip)
Clarity: 94%`;
}

function parseElenaResponse(fullText: string, userMessage: string) {
  const parts = fullText.split("---");
  const cleanSpeech = parts[0]?.trim() || fullText.trim();
  const feedbackBlock = parts[1] || "";

  const feedback: { type: "error" | "warn" | "good"; label: string; detail: string }[] = [];
  let phonetics: { word: string; ipa: string } | null = null;
  let executiveTip = "Anchor your assertions with quantifiable business impact.";
  let clarityScore = 93;

  const fillers = ["um", "uh", "like", "you know", "actually", "basically", "sort of", "kind of"];
  const lowerUser = userMessage.toLowerCase();
  const detectedFillers = fillers.filter(f => new RegExp(`\\b${f}\\b`, "i").test(lowerUser));

  if (feedbackBlock) {
    const lines = feedbackBlock.split("\n");
    for (const line of lines) {
      if (line.includes("❌ Error:") && !line.includes("None")) {
        feedback.push({
          type: "error",
          label: "Grammar & Collocation",
          detail: line.replace(/.*?❌ Error:\s*/, "").trim(),
        });
      } else if (line.includes("⚠️ Suggestion:")) {
        feedback.push({
          type: "warn",
          label: "Executive Upgrade",
          detail: line.replace(/.*?⚠️ Suggestion:\s*/, "").trim(),
        });
      } else if (line.includes("✅ Highlight:")) {
        feedback.push({
          type: "good",
          label: "Native Cadence",
          detail: line.replace(/.*?✅ Highlight:\s*/, "").trim(),
        });
      } else if (line.includes("🔤 Phonetic:")) {
        const raw = line.replace(/.*?🔤 Phonetic:\s*/, "").trim();
        const m = raw.match(/([a-zA-Z]+)\s*=\s*(\/[^\/]+\/)/);
        if (m) {
          phonetics = { word: m[1], ipa: m[2] };
        }
      } else if (line.includes("💡 Executive Tip:")) {
        executiveTip = line.replace(/.*?💡 Executive Tip:\s*/, "").trim();
      } else if (line.includes("Clarity:")) {
        const scoreMatch = line.match(/(\d+)/);
        if (scoreMatch) {
          clarityScore = parseInt(scoreMatch[1]);
        }
      }
    }
  }

  if (feedback.length === 0) {
    feedback.push({
      type: "good",
      label: "Articulate Delivery",
      detail: "Excellent cadence and assertive vocal posture. Keep this momentum.",
    });
  }

  if (!phonetics) {
    const sampleWords = [
      { word: "reduction", ipa: "/rɪˈdʌk.ʃən/" },
      { word: "aggregation", ipa: "/ˌæɡ.rɪˈɡeɪ.ʃən/" },
      { word: "leverage", ipa: "/ˈliː.vər.ɪdʒ/" },
      { word: "synergy", ipa: "/ˈsɪn.ə.dʒi/" },
      { word: "consequently", ipa: "/ˈkɒn.sɪ.kwənt.li/" },
    ];
    phonetics = sampleWords[Math.floor(Math.random() * sampleWords.length)];
  }

  return {
    cleanSpeech,
    feedback,
    phonetics,
    executiveTip,
    clarityScore,
    fillersDetected: detectedFillers,
  };
}

function generateContextualResponse({
  scenarioId,
}: {
  message: string;
  scenarioId?: string;
  scenarioTitle?: string;
  level: string;
  tutorStyle: string;
}) {
  if (scenarioId === "salary-negotiation") {
    return `I appreciate you putting your target on the table candidly. However, given our compensation bands and the current market climate, a 25% bump is above our typical ceiling for this bracket. How would you justify that delta in terms of immediate impact and team leadership?
---
❌ Error: None
⚠️ Suggestion: Pair your counter-offer with 'quantifiable business impact' and 'pipeline velocity'
✅ Highlight: Assertive, professional tone without hesitation
🔤 Phonetic: compensation = /ˌkɒm.penˈseɪ.ʃən/
💡 Executive Tip: Frame salary increases around tangible ROI rather than personal living costs.
Clarity: 95%`;
  }

  if (scenarioId === "coffee-twist") {
    return `Oh mate, you won't believe this—our oat milk shipment got delayed, and our EFTPOS terminal just completely crashed two minutes ago! Cash only or bank transfer, and all I've got left is almond or dairy. Can we make that work for you?
---
❌ Error: None
⚠️ Suggestion: Use 'No worries at all, let's roll with almond' for Australian/British colloquial ease
✅ Highlight: Natural, friendly tone in spontaneous social tension
🔤 Phonetic: impromptu = /ɪmˈprɒmp.tjuː/
💡 Executive Tip: Lean into conversational warmth when handling service hiccups.
Clarity: 93%`;
  }

  if (scenarioId === "startup-pitch") {
    return `Your top-line growth is certainly eye-catching, but what really worries me is your net retention rate and vulnerability to commoditization once OpenAI ships their next model. What is your defensibility moat, and what does your CAC payback curve look like?
---
❌ Error: None
⚠️ Suggestion: Pivot directly to your proprietary data flywheel and multi-tenant architecture
✅ Highlight: Strong conviction and executive presence under pressure
🔤 Phonetic: defensibility = /dɪˌfen.səˈbɪl.ə.ti/
💡 Executive Tip: Never get defensive in investor Q&A—validate their skepticism before re-anchoring your moat.
Clarity: 96%`;
  }

  return `That's a very articulate perspective! I particularly like how you phrased that transition. Let's delve a bit deeper: if you had to present that exact thesis to an executive committee tomorrow, how would you summarize the core strategic takeaway in one sentence?
---
❌ Error: None
⚠️ Suggestion: Try beginning with an executive summary hook like 'The fundamental premise is...'
✅ Highlight: Smooth prosody and confident vocal tempo
🔤 Phonetic: articulated = /ɑːˈtɪk.jə.leɪ.tɪd/
💡 Executive Tip: Avoid filler pauses like 'um' or 'like' by embracing a 1-second deliberate silence.
Clarity: 94%`;
}
