"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Check, Search, ChevronDown, ChevronLeft, Globe, 
  Sparkles, CheckCircle2 
} from "lucide-react";

export interface SupportedLanguageOption {
  id: string;
  code: "english" | "japanese" | "french" | "german" | "spanish" | "korean";
  name: string;
  flag: string;
  chaptersCount: number;
  levelsCount: number;
  description: string;
  recognitionLang: string;
  courseTitle: string;
}

export const SUPPORTED_LANGUAGES: SupportedLanguageOption[] = [
  {
    id: "lang-en",
    code: "english",
    name: "American English",
    flag: "🇺🇸",
    chaptersCount: 6,
    levelsCount: 4,
    description: "Oxford C2 Accent • Agile standups, salary negotiations & VC pitches",
    recognitionLang: "en-US",
    courseTitle: "English for business",
  },
  {
    id: "lang-ja",
    code: "japanese",
    name: "Japanese (日本語)",
    flag: "🇯🇵",
    chaptersCount: 6,
    levelsCount: 4,
    description: "Tokyo Keigo & Daily Fluency • Izakaya orders, Shinkansen rebooking & corporate pitches",
    recognitionLang: "ja-JP",
    courseTitle: "Japanese for conversation (日本語)",
  },
  {
    id: "lang-fr",
    code: "french",
    name: "French (Français)",
    flag: "🇫🇷",
    chaptersCount: 3,
    levelsCount: 3,
    description: "Parisian everyday conversation, café culture & dining etiquette",
    recognitionLang: "fr-FR",
    courseTitle: "French for travel & culture",
  },
  {
    id: "lang-de",
    code: "german",
    name: "German (Deutsch)",
    flag: "🇩🇪",
    chaptersCount: 2,
    levelsCount: 4,
    description: "Grammar cases, professional workplace syncs & daily living",
    recognitionLang: "de-DE",
    courseTitle: "German for professionals",
  },
  {
    id: "lang-es",
    code: "spanish",
    name: "Spanish (Español)",
    flag: "🇪🇸",
    chaptersCount: 4,
    levelsCount: 3,
    description: "Conversational banter, travel, and Latin American idioms",
    recognitionLang: "es-ES",
    courseTitle: "Spanish for daily fluency",
  },
  {
    id: "lang-ko",
    code: "korean",
    name: "Korean (한국어)",
    flag: "🇰🇷",
    chaptersCount: 5,
    levelsCount: 3,
    description: "Honorifics (존댓말), Hangul pronunciation, and modern Seoul lifestyle",
    recognitionLang: "ko-KR",
    courseTitle: "Korean for daily conversation",
  },
];

export const NATIVE_LANGUAGES = [
  { id: "id", name: "Indonesian", flag: "🇮🇩" },
  { id: "en", name: "English", flag: "🇺🇸" },
  { id: "ja", name: "Japanese", flag: "🇯🇵" },
  { id: "fr", name: "French", flag: "🇫🇷" },
  { id: "es", name: "Spanish", flag: "🇪🇸" },
  { id: "de", name: "German", flag: "🇩🇪" },
];

interface LanguageSelectionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: string;
  onSelectLanguage: (lang: SupportedLanguageOption) => void;
}

export function LanguageSelectionSheet({
  isOpen,
  onClose,
  currentLanguage,
  onSelectLanguage,
}: LanguageSelectionSheetProps) {
  const [selectedLangId, setSelectedLangId] = useState<string>(() => {
    const match = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage);
    return match ? match.id : "lang-en";
  });
  const [nativeLang, setNativeLang] = useState<string>("Indonesian");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isNativeDropdownOpen, setIsNativeDropdownOpen] = useState(false);

  const filteredLanguages = SUPPORTED_LANGUAGES.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApply = () => {
    const found = SUPPORTED_LANGUAGES.find((l) => l.id === selectedLangId);
    if (found) {
      onSelectLanguage(found);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="w-full max-w-lg bg-white rounded-t-[32px] sm:rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] text-[#0f172a] border border-slate-200"
      >
        {/* Drag handle for mobile */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-slate-300" />
        </div>

        {/* Header matching image: < Back | Lessons | Close */}
        <div className="px-6 py-3 flex items-center justify-between border-b border-slate-100">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-600 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-base font-bold text-slate-900 font-space tracking-tight">
            Lessons & Language
          </h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6 flex-1">
          {/* Section 1: "I speak" matching image */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-700 tracking-wide">
              I speak
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsNativeDropdownOpen(!isNativeDropdownOpen)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 flex items-center justify-between shadow-sm transition-all text-sm font-semibold text-slate-800"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl leading-none">
                    {NATIVE_LANGUAGES.find((n) => n.name === nativeLang)?.flag || "🇮🇩"}
                  </span>
                  <span>{nativeLang}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 transition-transform ${
                    isNativeDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Native Dropdown options */}
              <AnimatePresence>
                {isNativeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-20 py-2 overflow-hidden"
                  >
                    {NATIVE_LANGUAGES.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setNativeLang(item.name);
                          setIsNativeDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 flex items-center justify-between text-left text-sm hover:bg-slate-50 transition-colors ${
                          nativeLang === item.name
                            ? "bg-emerald-50 text-emerald-800 font-bold"
                            : "text-slate-700"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-xl">{item.flag}</span>
                          <span>{item.name}</span>
                        </span>
                        {nativeLang === item.name && (
                          <Check size={16} className="text-emerald-600" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Section 2: "I want to learn" matching image */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 tracking-wide">
                I want to learn
              </label>
              <span className="text-[11px] font-medium text-slate-400">
                All content adjusts to selection
              </span>
            </div>

            {/* Search Input: 🔍 Find language */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find language"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0f4a3c] focus:ring-2 focus:ring-[#0f4a3c]/10 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
              />
            </div>

            {/* Language Cards Grid (2 columns matching image) */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {filteredLanguages.map((lang) => {
                const isSelected = selectedLangId === lang.id;

                return (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => setSelectedLangId(lang.id)}
                    className={`p-4 rounded-2xl border text-center transition-all duration-150 flex flex-col items-center justify-between gap-3 relative ${
                      isSelected
                        ? "bg-white border-[#0f4a3c] ring-2 ring-[#0f4a3c] shadow-md shadow-emerald-950/10"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-sm"
                    }`}
                  >
                    {/* Selected badge checkmark */}
                    {isSelected && (
                      <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#0f4a3c] text-white flex items-center justify-center shadow-sm">
                        <Check size={12} strokeWidth={3} />
                      </span>
                    )}

                    {/* Flag Icon */}
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-slate-100 shadow-inner mt-1">
                      <span className="text-3xl leading-none select-none">
                        {lang.flag}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex flex-col items-center">
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight">
                        {lang.name}
                      </h4>
                    </div>

                    {/* Meta stats matching image: 6 Chapters • 4 Lv. */}
                    <div className="w-full pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-500">
                      <span>{lang.chaptersCount} Chapters</span>
                      <span className="text-slate-300">•</span>
                      <span>{lang.levelsCount} Lv.</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA: Apply Now (Clean forest green matching image) */}
        <div className="p-5 sm:p-6 border-t border-slate-100 bg-white">
          <button
            type="button"
            onClick={handleApply}
            className="w-full py-3.5 rounded-2xl bg-[#0f4a3c] hover:bg-[#0a352a] active:scale-[0.99] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0f4a3c]/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply Now</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
