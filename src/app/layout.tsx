import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Fluency AI — Spontaneous Spoken Fluency & AI Coaching",
  description:
    "Master spontaneous spoken English with Elena AI Coach. Real-time phonetic analysis, Apple Fitness-inspired activity rings, high-stakes roleplays, and tiered league gamification.",
  keywords: ["Fluency AI", "AI English Coach", "Elena AI", "CEFR C1", "Pronunciation", "Speech Recognition"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#070b14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="bg-[#f8fafc] text-[#0f172a] font-[var(--font-poppins)] antialiased select-none" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
