"use client";

import { clsx } from "clsx";
import { PRACTICE_MODES, QUICK_PHRASES, TUTOR_STYLES, PracticeMode, TutorStyle } from "@/types";

interface LeftPanelProps {
  activeMode: PracticeMode;
  activeTutor: TutorStyle;
  onModeChange: (m: PracticeMode) => void;
  onTutorChange: (t: TutorStyle) => void;
}

export function LeftPanel({
  activeMode,
  activeTutor,
  onModeChange,
  onTutorChange,
}: LeftPanelProps) {
  return (
    <div className="flex flex-col gap-8">
      {/* Modes */}
      <div className="flex flex-col gap-2">
        {PRACTICE_MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => onModeChange(m.id)}
            className={clsx(
              "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all group",
              activeMode === m.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="text-base">{m.icon}</span>
              <span>{m.label}</span>
            </div>
            {activeMode === m.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
          </button>
        ))}
      </div>

      {/* Tutor Styles */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Tutor Style</h4>
        <div className="flex flex-wrap gap-2">
          {TUTOR_STYLES.map((t) => (
            <button
              key={t.id}
              onClick={() => onTutorChange(t.id)}
              className={clsx(
                "px-4 py-2 rounded-full text-xs font-bold transition-all border",
                activeTutor === t.id
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface RightPanelProps {
  feedbackItems: unknown[];
  onQuickPhrase: (phrase: string) => void;
  children?: React.ReactNode;
}

export function RightPanel({ onQuickPhrase, children }: RightPanelProps) {
  return (
    <div className="flex flex-col gap-8">
      {children}

      <div className="flex flex-col gap-4">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Quick Phrases</h4>
        <div className="flex flex-col gap-2">
          {QUICK_PHRASES.map((p, i) => (
            <button
              key={i}
              onClick={() => onQuickPhrase(p.phrase)}
              className="text-left px-4 py-3 rounded-2xl bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100 hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm"
            >
              &ldquo;{p.label}&rdquo;
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
