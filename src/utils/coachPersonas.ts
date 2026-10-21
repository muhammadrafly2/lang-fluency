/**
 * Coach / AI Assistant Persona resolver.
 * Dynamically resolves coach name, localized badge, role, avatar, and sample audio text
 * based on the active language and detected Speech Synthesis Voice Engine.
 *
 * Rules:
 * - For American English: Always Elena Vance (/elena-coach.jpg)
 * - For other languages: The coach name and avatar dynamically match the Voice Engine.
 */

export interface CoachPersona {
  name: string;
  badge: string;
  role: string;
  avatarUrl: string;
  sampleText: string;
  fallbackVoice: string;
}

export function getCoachPersona(
  langCode: string,
  voiceEngineName?: string
): CoachPersona {
  // Rule: American English is always Elena Vance
  if (langCode === "english") {
    return {
      name: "Elena Vance",
      badge: "OXFORD C2 COACH",
      role: "Oxford C2 Executive Voice Coach • Real-time Dialogue",
      avatarUrl: "/elena-coach.jpg",
      sampleText: "Hello! I'm Elena, your Oxford executive voice coach. Let's practice with natural clarity, poise, and confidence.",
      fallbackVoice: "Elena Vance (Oxford C2 — British)",
    };
  }

  // Extract clean first word / name from voice engine name
  const rawClean = (voiceEngineName || "")
    .replace(/^Microsoft /i, "")
    .replace(/^Google /i, "")
    .replace(/^Apple /i, "")
    .replace(/Online \(Natural\)/gi, "")
    .replace(/\(Enhanced\)/gi, "")
    .replace(/\(Premium\)/gi, "")
    .replace(/\(Compact\)/gi, "")
    .replace(/- .*$/, "")
    .trim();
  const detectedFirst = rawClean.split(/[\s(]/)[0]?.trim();

  switch (langCode) {
    case "japanese": {
      let coachName = "Kyoko (京子)";
      let sample = "はじめまして！京子です。自然な発音とビジネス敬語で、一緒に練習しましょう。";

      if (detectedFirst && !["japanese", "日本語"].includes(detectedFirst.toLowerCase())) {
        if (/kyoko/i.test(detectedFirst)) {
          coachName = "Kyoko (京子)";
          sample = "はじめまして！京子です。自然な発音とビジネス敬語で、一緒に練習しましょう。";
        } else if (/nanami/i.test(detectedFirst)) {
          coachName = "Nanami (七海)";
          sample = "はじめまして！七海です。自然な発音とビジネス敬語で、一緒に練習しましょう。";
        } else if (/otoya/i.test(detectedFirst)) {
          coachName = "Otoya (音也)";
          sample = "はじめまして！音也です。自然な発音とビジネス敬語で、一緒に練習しましょう。";
        } else {
          coachName = `${detectedFirst} (AI Coach)`;
          sample = `はじめまして！${detectedFirst}です。自然な発音とビジネス敬語で、一緒に練習しましょう。`;
        }
      }

      return {
        name: coachName,
        badge: "TOKYO COACH",
        role: "Tokyo Executive & Business Keigo Coach • Spoken Japanese",
        avatarUrl: "/kyoko-coach.jpg",
        sampleText: sample,
        fallbackVoice: "Kyoko (Tokyo Natural — 日本語)",
      };
    }

    case "french": {
      let coachName = "Amélie";
      let sample = "Bonjour ! Je suis Amélie, votre coach de conversation en français. Pratiquons ensemble avec fluidité, élégance et assurance !";

      if (detectedFirst && !["french", "français", "francais"].includes(detectedFirst.toLowerCase())) {
        if (/amelie|amélie/i.test(detectedFirst)) {
          coachName = "Amélie";
        } else if (/audrey/i.test(detectedFirst)) {
          coachName = "Audrey";
        } else if (/thomas/i.test(detectedFirst)) {
          coachName = "Thomas";
        } else if (/marie/i.test(detectedFirst)) {
          coachName = "Marie";
        } else {
          coachName = detectedFirst;
        }
        sample = `Bonjour ! Je suis ${coachName}, votre coach de conversation en français. Pratiquons ensemble avec fluidité, élégance et assurance !`;
      }

      return {
        name: coachName,
        badge: "PARISIAN COACH",
        role: "Coach de conversation parisienne & prononciation française",
        avatarUrl: "/amelie-coach.jpg",
        sampleText: sample,
        fallbackVoice: "Amélie (Parisienne Naturelle — Français)",
      };
    }

    case "korean": {
      let coachName = "Yuna (유나)";
      let sample = "안녕하세요! 유나입니다. 자연스러운 한국어 발음과 생생한 일상 회화를 저와 함께 연습해봐요!";

      if (detectedFirst && !["korean", "한국어"].includes(detectedFirst.toLowerCase())) {
        if (/yuna/i.test(detectedFirst)) {
          coachName = "Yuna (유나)";
        } else if (/sun-hi|sunhi/i.test(detectedFirst)) {
          coachName = "Sun-Hi (선희)";
        } else if (/sora/i.test(detectedFirst)) {
          coachName = "Sora (소라)";
        } else if (/minji/i.test(detectedFirst)) {
          coachName = "Minji (민지)";
        } else {
          coachName = `${detectedFirst} (AI Coach)`;
        }
        sample = `안녕하세요! ${coachName.split(" ")[0]}입니다. 자연스러운 한국어 발음과 생생한 일상 회화를 저와 함께 연습해봐요!`;
      }

      return {
        name: coachName,
        badge: "SEOUL COACH",
        role: "서울 일상회화 및 비즈니스 한국어 코치 (Seoul Fluency Coach)",
        avatarUrl: "/yuna-coach.jpg",
        sampleText: sample,
        fallbackVoice: "Yuna (Seoul Natural — 한국어)",
      };
    }

    case "german": {
      let coachName = "Anna";
      let sample = "Hallo! Ich bin Anna, deine Sprachcoachin für Deutsch. Lass uns gemeinsam fließend, präzise und selbstbewusst Deutsch sprechen!";

      if (detectedFirst && !["german", "deutsch"].includes(detectedFirst.toLowerCase())) {
        if (/anna/i.test(detectedFirst)) {
          coachName = "Anna";
        } else if (/petra/i.test(detectedFirst)) {
          coachName = "Petra";
        } else if (/marlene/i.test(detectedFirst)) {
          coachName = "Marlene";
        } else if (/katja/i.test(detectedFirst)) {
          coachName = "Katja";
        } else {
          coachName = detectedFirst;
        }
        sample = `Hallo! Ich bin ${coachName}, deine Sprachcoachin für Deutsch. Lass uns gemeinsam fließend, präzise und selbstbewusst Deutsch sprechen!`;
      }

      return {
        name: coachName,
        badge: "BERLIN COACH",
        role: "Berlin Business & Alltagskonversation Coach",
        avatarUrl: "/anna-coach.jpg",
        sampleText: sample,
        fallbackVoice: "Anna (Berlin Natürlich — Deutsch)",
      };
    }

    case "spanish": {
      let coachName = "Mónica";
      let sample = "¡Hola! Soy Mónica, tu coach de conversación en español. ¡Practiquemos juntos para hablar con fluidez, soltura y confianza natural!";

      if (detectedFirst && !["spanish", "español", "espanol"].includes(detectedFirst.toLowerCase())) {
        if (/monica|mónica/i.test(detectedFirst)) {
          coachName = "Mónica";
        } else if (/paulina/i.test(detectedFirst)) {
          coachName = "Paulina";
        } else if (/lucia|lucía/i.test(detectedFirst)) {
          coachName = "Lucía";
        } else if (/conchita/i.test(detectedFirst)) {
          coachName = "Conchita";
        } else {
          coachName = detectedFirst;
        }
        sample = `¡Hola! Soy ${coachName}, tu coach de conversación en español. ¡Practiquemos juntos para hablar con fluidez, soltura y confianza natural!`;
      }

      return {
        name: coachName,
        badge: "MADRID COACH",
        role: "Coach de conversación fluida y español profesional",
        avatarUrl: "/monica-coach.jpg",
        sampleText: sample,
        fallbackVoice: "Mónica (Madrid Natural — Español)",
      };
    }

    default:
      return {
        name: "Elena Vance",
        badge: "EXECUTIVE COACH",
        role: "Executive AI Voice Coach",
        avatarUrl: "/elena-coach.jpg",
        sampleText: "Hello! Let's practice with natural clarity, poise, and confidence.",
        fallbackVoice: "Elena Vance (Natural)",
      };
  }
}
