/**
 * Web Audio Synthesized Sound Effects for Language & Stroke Order Mastery
 * Zero-dependency, offline-ready, instant-latency crystal sound effects.
 */

class SoundFXEngine {
  private audioCtx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    try {
      if (!this.audioCtx) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.audioCtx = new AudioCtx();
        }
      }
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    } catch {
      return null;
    }
  }

  /**
   * Crisp, sparkling checklist / celebration chime ("cring!")
   * Simulates a bright, rewarding Japanese chime / Duolingo-style achievement bell.
   */
  public playSuccessChime() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Harmonic chime arpeggio: C6 (1046Hz) -> E6 (1318Hz) -> G6 (1568Hz) -> C7 (2093Hz)
      const notes = [
        { freq: 1046.5, time: 0, duration: 0.18, gain: 0.12 },
        { freq: 1318.5, time: 0.06, duration: 0.22, gain: 0.16 },
        { freq: 1567.98, time: 0.12, duration: 0.28, gain: 0.18 },
        { freq: 2093.0, time: 0.18, duration: 0.55, gain: 0.25 },
      ];

      notes.forEach(({ freq, time, duration, gain }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // Sine wave for pure bell tone
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + time);

        // Immediate crisp attack with smooth exponential ring-out
        gainNode.gain.setValueAtTime(0.0001, now + time);
        gainNode.gain.linearRampToValueAtTime(gain, now + time + 0.012);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + time + duration);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + duration);
      });
    } catch {
      // Audio context playback error suppressed
    }
  }

  /**
   * Subtle, satisfying tactile tap/pop when an individual stroke is laid down
   */
  public playStrokeTick() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);

      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(0.08, now + 0.008);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch {
      // Audio context error suppressed
    }
  }

  /**
   * Soft, gentle reminder tone when strokes are incomplete
   */
  public playGentleError() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const notes = [
        { freq: 380, time: 0, duration: 0.12, gain: 0.1 },
        { freq: 320, time: 0.1, duration: 0.18, gain: 0.1 },
      ];

      notes.forEach(({ freq, time, duration, gain }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + time);

        gainNode.gain.setValueAtTime(0.001, now + time);
        gainNode.gain.linearRampToValueAtTime(gain, now + time + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + time + duration);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + duration);
      });
    } catch {
      // Audio context error suppressed
    }
  }
}

export const soundFX = new SoundFXEngine();
export const playSuccessChime = () => soundFX.playSuccessChime();
export const playStrokeTick = () => soundFX.playStrokeTick();
export const playGentleError = () => soundFX.playGentleError();
