"use client";

import { clsx } from "clsx";
import { FeedbackItem } from "@/types";

interface FeedbackPanelProps {
  items: FeedbackItem[];
}

export function FeedbackPanel({ items }: FeedbackPanelProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl mb-4">💬</div>
        <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-[180px]">
          Grammar & fluency feedback will appear here after your first message.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className={clsx(
            "p-4 rounded-2xl border transition-all animate-slide-up",
            item.type === "error" && "border-red-500/20 bg-red-500/5",
            item.type === "warn"  && "border-amber-500/20 bg-amber-500/5",
            item.type === "good"  && "border-cyan-500/20 bg-cyan-500/5"
          )}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={clsx(
              "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full",
              item.type === "error" && "bg-red-500/10 text-red-400",
              item.type === "warn"  && "bg-amber-500/10 text-amber-400",
              item.type === "good"  && "bg-cyan-500/10 text-cyan-400"
            )}>
              {item.label}
            </span>
            <span className="text-[10px]">{item.type === "error" ? "🔴" : item.type === "warn" ? "🟡" : "🟢"}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
