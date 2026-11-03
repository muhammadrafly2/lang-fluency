"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Volume2, RotateCcw, Undo2, Play, Pause,
  Eye, EyeOff, Check, CheckCircle2, ChevronLeft, ChevronRight,
  Sparkles, Award, Lightbulb, BookOpen, PenTool, ArrowRight,
  Flame, HelpCircle
} from "lucide-react";
import { getStrokesForCharacter, StrokePath } from "@/data/jlpt/strokeData";
import { speakElena } from "@/utils/speechEngine";
import { playSuccessChime, playStrokeTick, playGentleError } from "@/utils/soundEffects";

export interface PracticeTargetCharacter {
  character: string;
  romaji?: string;
  meanings?: string[];
  onyomi?: string[];
  kunyomi?: string[];
  strokeCount?: number;
  type: "kanji" | "hiragana" | "katakana";
  jlptLevel?: string;
  exampleWords?: { word: string; reading: string; meaning: string }[];
}

interface KanaKanjiStrokePracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  target: PracticeTargetCharacter | null;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  ttsVoiceURI?: string;
}

export function KanaKanjiStrokePracticeModal({
  isOpen,
  onClose,
  target,
  onNavigateNext,
  onNavigatePrev,
  ttsVoiceURI,
}: KanaKanjiStrokePracticeModalProps) {
  // Mode: "guide" (ghost character + starting dots) vs "memory" (blank canvas)
  const [guideMode, setGuideMode] = useState<"guide" | "memory">("guide");
  
  // Active stroke step highlight (null = all, or 1..N)
  const [activeStepStroke, setActiveStepStroke] = useState<number | null>(null);

  // Animation playback state
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Canvas drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawnStrokes, setDrawnStrokes] = useState<Array<Array<{ x: number; y: number }>>>([]);
  const isDrawingRef = useRef(false);
  const currentStrokePoints = useRef<Array<{ x: number; y: number }>>([]);

  // Evaluation & Celebration
  const [evaluated, setEvaluated] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  // Audio speech playback
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Stroke data for target character
  const char = target?.character || "";
  const strokes: StrokePath[] = useMemo(() => {
    if (!char) return [];
    return getStrokesForCharacter(char) || [];
  }, [char]);

  const totalStrokes = strokes.length > 0 ? strokes.length : (target?.strokeCount || 1);

  // Reset drawing canvas when target character changes or modal opens
  useEffect(() => {
    setDrawnStrokes([]);
    setEvaluated(false);
    setShowCelebration(false);
    setIsAnimating(false);
    setAnimationStep(0);
    setActiveStepStroke(null);
    isDrawingRef.current = false;
    currentStrokePoints.current = [];
    if (animationTimerRef.current) clearInterval(animationTimerRef.current);
  }, [char, isOpen]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationTimerRef.current) clearInterval(animationTimerRef.current);
    };
  }, []);

  // Redraw canvas whenever drawnStrokes changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid crosshairs inside canvas
    const w = canvas.width;
    const h = canvas.height;

    ctx.save();
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    // Center vertical line
    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();

    // Center horizontal line
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    ctx.restore();

    // Draw user strokes with calligraphy stroke styling
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    drawnStrokes.forEach((stroke) => {
      if (!stroke || stroke.length === 0) return;

      if (stroke.length === 1) {
        ctx.fillStyle = "#0f4a3c"; // Dark sumi ink
        ctx.beginPath();
        ctx.arc(stroke[0].x, stroke[0].y, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(stroke[0].x, stroke[0].y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      ctx.beginPath();
      ctx.strokeStyle = "#0f4a3c"; // Dark forest green / sumi ink
      ctx.lineWidth = 7;

      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();

      // Draw starting point dot on user's stroke
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(stroke[0].x, stroke[0].y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }, [drawnStrokes]);

  if (!isOpen || !target) return null;

  // Audio helper
  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    speakElena(target.character, {
      voiceURI: ttsVoiceURI,
      targetLanguage: "japanese",
      rate: 0.94,
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false),
    });
  };

  // ── Canvas Pointer Event Handlers ──
  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / (rect.width || 1);
    const scaleY = canvas.height / (rect.height || 1);
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    isDrawingRef.current = true;
    const pt = getCanvasCoords(e);
    currentStrokePoints.current = [pt];

    // Immediate visual response on canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.save();
        ctx.fillStyle = "#0f4a3c";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const pt = getCanvasCoords(e);
    currentStrokePoints.current.push(pt);

    // Live continuous ink preview on canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#0f4a3c";
    ctx.lineWidth = 7;

    const pts = currentStrokePoints.current;
    if (pts.length > 1) {
      ctx.beginPath();
      ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      ctx.stroke();
    }
    ctx.restore();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // ignore
    }

    // Clone the points so they persist after currentStrokePoints is reset
    if (currentStrokePoints.current.length > 0) {
      const strokeToCommit = [...currentStrokePoints.current];
      setDrawnStrokes((prev) => {
        const next = [...prev, strokeToCommit];
        // If this stroke completes the required strokes, trigger the success chime!
        if (next.length === totalStrokes) {
          playSuccessChime();
        } else {
          playStrokeTick();
        }
        return next;
      });
    }
    currentStrokePoints.current = [];
  };

  const handleUndo = () => {
    setDrawnStrokes((prev) => prev.slice(0, -1));
    setEvaluated(false);
  };

  const handleClear = () => {
    setDrawnStrokes([]);
    setEvaluated(false);
    setShowCelebration(false);
  };

  // Animate strokes playback step-by-step
  const handleToggleAnimation = () => {
    if (isAnimating) {
      if (animationTimerRef.current) clearInterval(animationTimerRef.current);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    setAnimationStep(1);

    if (animationTimerRef.current) clearInterval(animationTimerRef.current);

    let step = 1;
    animationTimerRef.current = setInterval(() => {
      step++;
      if (step > totalStrokes) {
        if (animationTimerRef.current) clearInterval(animationTimerRef.current);
        setIsAnimating(false);
        setAnimationStep(0);
      } else {
        setAnimationStep(step);
      }
    }, 700);
  };

  // Grade user drawing
  const handleCheckWriting = () => {
    setEvaluated(true);
    if (drawnStrokes.length >= totalStrokes) {
      playSuccessChime();
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    } else {
      playGentleError();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-in select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-full max-w-4xl max-h-[94vh] bg-[#f8fafc] border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800"
      >
        {/* ── Header Bar ── */}
        <div className="px-5 py-3.5 bg-white border-b border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#0f4a3c] flex items-center justify-center shrink-0 shadow-xs">
              <PenTool size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-space text-slate-900">
                  Stroke Order & Handwriting Studio
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase">
                  {target.type}
                </span>
                {target.jlptLevel && (
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold">
                    {target.jlptLevel}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Learn authentic stroke sequence with guided starting dots & freehand practice
              </p>
            </div>
          </div>

          {/* Navigation & Close */}
          <div className="flex items-center gap-1.5">
            {onNavigatePrev && (
              <button
                type="button"
                onClick={onNavigatePrev}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Previous character"
              >
                <ChevronLeft size={16} />
              </button>
            )}
            {onNavigateNext && (
              <button
                type="button"
                onClick={onNavigateNext}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Next character"
              >
                <ChevronRight size={16} />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer ml-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ── Main Content Body ── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* ══════════════════════════════════════════════════════════════════
              LEFT COLUMN (md:col-span-5): Character Hero & Step-by-Step Breakdown (Image 1)
             ══════════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-5 flex flex-col items-center bg-white border border-slate-200 rounded-3xl p-5 shadow-xs gap-4">
            
            {/* Big Character Display */}
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-6xl sm:text-7xl font-bold font-serif text-slate-900 leading-none">
                {target.character}
              </span>
              
              {/* Romaji / Reading */}
              {target.romaji && (
                <span className="text-lg font-space font-semibold text-slate-600 mt-1">
                  {target.romaji}
                </span>
              )}

              {/* Meanings */}
              {target.meanings && target.meanings.length > 0 && (
                <span className="text-xs font-medium text-slate-500 max-w-xs text-center">
                  {target.meanings.join(", ")}
                </span>
              )}

              {/* On / Kun readings if kanji */}
              {(target.onyomi?.length || target.kunyomi?.length) ? (
                <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-mono mt-1">
                  {target.onyomi && target.onyomi.length > 0 && (
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                      音: {target.onyomi.join("、")}
                    </span>
                  )}
                  {target.kunyomi && target.kunyomi.length > 0 && (
                    <span className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                      訓: {target.kunyomi.join("、")}
                    </span>
                  )}
                </div>
              ) : null}

              {/* Audio Listen Button */}
              <button
                type="button"
                onClick={handlePlayAudio}
                className="mt-1 px-3 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Volume2 size={13} className={isPlayingAudio ? "text-emerald-600 animate-pulse" : ""} />
                <span>Listen Audio</span>
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-slate-100" />

            {/* ── Step-by-Step Stroke Boxes (Matching Image 1 EXACTLY!) ── */}
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-full flex items-center justify-between text-xs px-1">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                  Stroke Sequence Breakdown
                </span>
                <span className="text-emerald-700 font-mono font-bold text-xs">
                  {totalStrokes} {totalStrokes === 1 ? "stroke" : "strokes"}
                </span>
              </div>

              {/* Vertical Stack of Kanji Grid Boxes */}
              <div className="w-full flex flex-col items-center gap-3 max-h-[380px] overflow-y-auto custom-scrollbar px-2 py-1">
                {Array.from({ length: totalStrokes }).map((_, stepIdx) => {
                  const currentStrokeNumber = stepIdx + 1;
                  const isHighlighted = activeStepStroke === currentStrokeNumber;
                  const currentStrokeData = strokes[stepIdx];

                  return (
                    <div
                      key={stepIdx}
                      onClick={() => setActiveStepStroke(isHighlighted ? null : currentStrokeNumber)}
                      className={`relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl border transition-all cursor-pointer flex items-center justify-center shadow-xs hover:border-emerald-400 ${
                        isHighlighted
                          ? "border-[#0f4a3c] ring-2 ring-emerald-200 bg-emerald-50/20"
                          : "border-slate-300"
                      }`}
                      title={`Step ${currentStrokeNumber}: Click to highlight on canvas`}
                    >
                      {/* Step Indicator Badge */}
                      <span className="absolute top-1.5 left-2 text-[10px] font-mono font-bold text-slate-400">
                        {currentStrokeNumber}
                      </span>

                      {/* SVG Canvas for this step matching Image 1 */}
                      <svg
                        viewBox="0 0 109 109"
                        className="w-full h-full p-2"
                      >
                        {/* Dashed Center Guide Lines (Crosshairs) */}
                        <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="#cbd5e1" strokeDasharray="3 3" strokeWidth="1" />
                        <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="#cbd5e1" strokeDasharray="3 3" strokeWidth="1" />

                        {strokes.length > 0 ? (
                          <>
                            {/* Previous strokes rendered in light faint gray (#cbd5e1) */}
                            {strokes.slice(0, stepIdx).map((s) => (
                              <path
                                key={`prev-${s.strokeNumber}`}
                                d={s.path}
                                fill="none"
                                stroke="#cbd5e1"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            ))}

                            {/* Current stroke rendered in bold dark charcoal (#1e293b) */}
                            {currentStrokeData && (
                              <path
                                d={currentStrokeData.path}
                                fill="none"
                                stroke="#1e293b"
                                strokeWidth="5.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            )}

                            {/* Red Glowing Start Dot on the current stroke (exact matching Image 1) */}
                            {currentStrokeData && currentStrokeData.start && (
                              <g>
                                <circle
                                  cx={currentStrokeData.start.x}
                                  cy={currentStrokeData.start.y}
                                  r="4.2"
                                  fill="#ef4444"
                                  stroke="#ffffff"
                                  strokeWidth="1.2"
                                  className="animate-pulse"
                                />
                                <circle
                                  cx={currentStrokeData.start.x}
                                  cy={currentStrokeData.start.y}
                                  r="2"
                                  fill="#ffffff"
                                  opacity="0.9"
                                />
                              </g>
                            )}
                          </>
                        ) : (
                          /* Fallback font rendering if SVG path unavailable */
                          <text
                            x="54.5"
                            y="75"
                            textAnchor="middle"
                            fontSize="52"
                            fontFamily="serif"
                            fill="#1e293b"
                            fontWeight="bold"
                          >
                            {target.character}
                          </text>
                        )}
                      </svg>
                    </div>
                  );
                })}
              </div>

              {/* Bottom label matching Image 1: "3 strokes" */}
              <span className="text-xs font-space font-bold text-slate-500 text-center pt-1">
                {totalStrokes} {totalStrokes === 1 ? "stroke" : "strokes"}
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT COLUMN (md:col-span-7): Interactive Writing & Tracing Canvas
             ══════════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-7 flex flex-col items-center bg-white border border-slate-200 rounded-3xl p-5 shadow-xs gap-4 justify-between">
            
            {/* Top Canvas Controls Bar */}
            <div className="w-full flex items-center justify-between gap-2 flex-wrap">
              {/* Mode Toggle: Guided Tracing vs Freehand */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
                <button
                  type="button"
                  onClick={() => setGuideMode("guide")}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    guideMode === "guide"
                      ? "bg-white text-[#0f4a3c] shadow-xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Eye size={13} />
                    <span>Ghost Guide</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setGuideMode("memory")}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    guideMode === "memory"
                      ? "bg-white text-[#0f4a3c] shadow-xs border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <EyeOff size={13} />
                    <span>Freehand Memory</span>
                  </span>
                </button>
              </div>

              {/* Animation Playback Button */}
              {strokes.length > 0 && (
                <button
                  type="button"
                  onClick={handleToggleAnimation}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                    isAnimating
                      ? "bg-emerald-600 text-white border-emerald-600 animate-pulse"
                      : "bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border-slate-200"
                  }`}
                  title="Watch animated stroke order"
                >
                  {isAnimating ? <Pause size={13} /> : <Play size={13} />}
                  <span>{isAnimating ? "Playing..." : "Animate Stroke Order"}</span>
                </button>
              )}
            </div>

            {/* ── Main Canvas Surface (Square Japanese Practice Grid) ── */}
            <div className="relative w-full max-w-[320px] aspect-square rounded-3xl border-2 border-slate-300 bg-[#fdfdfd] shadow-inner overflow-hidden flex items-center justify-center">
              
              {/* Background Ghost Template (Shown when guideMode is "guide") */}
              {guideMode === "guide" && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center select-none">
                  {strokes.length > 0 ? (
                    <svg viewBox="0 0 109 109" className="w-full h-full p-4">
                      {strokes.map((s, idx) => {
                        const isCurrentAnimated = isAnimating && idx < animationStep;
                        const isStepActive = activeStepStroke !== null && s.strokeNumber === activeStepStroke;
                        const isCompletedByStroke = idx < drawnStrokes.length;
                        const isNextActiveStroke = idx === drawnStrokes.length || isStepActive;

                        return (
                          <g key={`ghost-${s.strokeNumber}`}>
                            {/* Ghost stroke path: soft completed color when drawn, highlighted when active/animated, faint grey when upcoming */}
                            <path
                              d={s.path}
                              fill="none"
                              stroke={
                                isCurrentAnimated || isStepActive
                                  ? "#0f4a3c"
                                  : isCompletedByStroke
                                  ? "#059669"
                                  : "#cbd5e1"
                              }
                              strokeWidth={isCurrentAnimated || isStepActive ? "6.5" : isCompletedByStroke ? "5.5" : "4.5"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              opacity={
                                isCurrentAnimated || isStepActive
                                  ? 0.95
                                  : isCompletedByStroke
                                  ? 0.75
                                  : 0.4
                              }
                            />
                            {/* Glowing red starting dot ONLY on the CURRENT stroke to draw */}
                            {s.start && isNextActiveStroke && !isCurrentAnimated && (
                              <g>
                                <circle
                                  cx={s.start.x}
                                  cy={s.start.y}
                                  r="4.5"
                                  fill="#ef4444"
                                  stroke="#ffffff"
                                  strokeWidth="1.2"
                                  className="animate-pulse"
                                />
                                <circle
                                  cx={s.start.x}
                                  cy={s.start.y}
                                  r="2"
                                  fill="#ffffff"
                                />
                              </g>
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  ) : (
                    <span className="text-9xl font-serif font-bold text-slate-300/40 select-none">
                      {target.character}
                    </span>
                  )}
                </div>
              )}

              {/* Interactive HTML5 Drawing Canvas */}
              <canvas
                ref={canvasRef}
                width={320}
                height={320}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                style={{ touchAction: "none" }}
                className="absolute inset-0 w-full h-full touch-none cursor-crosshair z-10"
              />

              {/* Success Celebration Overlay */}
              <AnimatePresence>
                {showCelebration && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-emerald-950/75 backdrop-blur-xs flex flex-col items-center justify-center gap-2 text-white z-20 p-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                      <Sparkles size={24} />
                    </div>
                    <span className="text-base font-bold font-space">
                      Splendid Stroke Order!
                    </span>
                    <span className="text-xs text-emerald-200 font-mono">
                      Completed {drawnStrokes.length} of {totalStrokes} strokes (+10 XP)
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Canvas Action Bar: Stroke Counter, Undo, Clear, Check */}
            <div className="w-full flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs px-1">
                {/* Stroke Counter Indicator */}
                <div className="flex items-center gap-1.5 font-mono">
                  <span className="text-slate-500 font-medium">Strokes drawn:</span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded-md ${
                      drawnStrokes.length === totalStrokes
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {drawnStrokes.length} / {totalStrokes}
                  </span>
                </div>

                {/* Undo & Clear Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleUndo}
                    disabled={drawnStrokes.length === 0}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    title="Undo last stroke"
                  >
                    <Undo2 size={13} />
                    <span>Undo</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    disabled={drawnStrokes.length === 0}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    title="Clear canvas"
                  >
                    <RotateCcw size={13} />
                    <span>Clear</span>
                  </button>
                </div>
              </div>

              {/* Bottom Buttons: Check Writing / Next Character */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCheckWriting}
                  disabled={drawnStrokes.length === 0}
                  className="flex-1 py-2.5 rounded-2xl bg-[#0f4a3c] hover:bg-[#0a352a] disabled:opacity-40 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <CheckCircle2 size={15} />
                  <span>Check Writing Accuracy</span>
                </button>

                {onNavigateNext && (
                  <button
                    type="button"
                    onClick={onNavigateNext}
                    className="px-4 py-2.5 rounded-2xl bg-white hover:bg-emerald-50 text-[#0f4a3c] border border-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Next</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
