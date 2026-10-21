"use client";

import { clsx } from "clsx";
import ReactMarkdown from "react-markdown";
import { ChatMessage } from "@/types";

interface ChatMessageProps {
  message: ChatMessage;
  onSpeak?: (text: string) => void;
}

export function ChatMessageBubble({ message, onSpeak }: ChatMessageProps) {
  const isAi = message.role === "ai";

  return (
    <div className={clsx("flex flex-col gap-2 group animate-fade-in", isAi ? "items-start" : "items-end")}>
      <div className={clsx("flex items-center gap-3 mb-1", isAi ? "flex-row" : "flex-row-reverse")}>
        <div className={clsx(
          "w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold",
          isAi ? "bg-cyan-400/20 text-cyan-400" : "bg-purple-500/20 text-purple-400"
        )}>
          {isAi ? "AI" : "YOU"}
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          {isAi ? "Nexora" : "Rafly"}
        </span>
      </div>

      <div className={clsx(
        "relative max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed transition-all",
        isAi 
          ? "bg-white/5 text-slate-200 rounded-tl-none border border-white/5" 
          : "bg-gradient-to-br from-cyan-400 to-cyan-600 text-white rounded-tr-none shadow-[0_4px_15px_rgba(0,212,255,0.2)]"
      )}>
        <div className="prose prose-invert prose-sm">
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </div>

        {isAi && onSpeak && (
          <button
            onClick={() => onSpeak(message.text)}
            className="absolute -right-10 top-2 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 text-slate-500 opacity-0 group-hover:opacity-100 transition-all hover:text-cyan-400 hover:bg-white/10"
          >
            🔊
          </button>
        )}
      </div>

      <span className="text-[9px] font-medium text-slate-600 px-2">
        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex flex-col gap-2 items-start animate-fade-in">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-6 h-6 rounded-lg bg-cyan-400/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold">AI</div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nexora is thinking</span>
      </div>
      <div className="bg-white/5 px-5 py-4 rounded-3xl rounded-tl-none border border-white/5 flex gap-1.5">
        <div className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-bounce" />
      </div>
    </div>
  );
}
