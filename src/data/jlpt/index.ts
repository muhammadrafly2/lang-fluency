export * from "./types";
export * from "./kanaData";
export * from "./strokeData";
export { N5_KANJI } from "./kanjiN5";
export { N4_KANJI } from "./kanjiN4";
export { N3_KANJI } from "./kanjiN3";
export { N2_KANJI } from "./kanjiN2";
export { N1_KANJI } from "./kanjiN1";
export { JLPT_N5_ROADMAP } from "./roadmapN5";
export { JLPT_N4_ROADMAP } from "./roadmapN4";
export { JLPT_N3_ROADMAP } from "./roadmapN3";
export { JLPT_N2_ROADMAP } from "./roadmapN2";
export { JLPT_N1_ROADMAP } from "./roadmapN1";

import { JLPTLevel, KanjiEntry, JLPTLevelRoadmap, JLPTExercise } from "./types";
import { N5_KANJI } from "./kanjiN5";
import { N4_KANJI } from "./kanjiN4";
import { N3_KANJI } from "./kanjiN3";
import { N2_KANJI } from "./kanjiN2";
import { N1_KANJI } from "./kanjiN1";
import { JLPT_N5_ROADMAP } from "./roadmapN5";
import { JLPT_N4_ROADMAP } from "./roadmapN4";
import { JLPT_N3_ROADMAP } from "./roadmapN3";
import { JLPT_N2_ROADMAP } from "./roadmapN2";
import { JLPT_N1_ROADMAP } from "./roadmapN1";

export const JLPT_ROADMAPS: Record<JLPTLevel, JLPTLevelRoadmap> = {
  N5: JLPT_N5_ROADMAP,
  N4: JLPT_N4_ROADMAP,
  N3: JLPT_N3_ROADMAP,
  N2: JLPT_N2_ROADMAP,
  N1: JLPT_N1_ROADMAP,
};

export const KANJI_BY_LEVEL: Record<JLPTLevel, KanjiEntry[]> = {
  N5: N5_KANJI,
  N4: N4_KANJI,
  N3: N3_KANJI,
  N2: N2_KANJI,
  N1: N1_KANJI,
};

export function getRoadmapForLevel(level: JLPTLevel): JLPTLevelRoadmap {
  return JLPT_ROADMAPS[level] || JLPT_N5_ROADMAP;
}

export function getKanjiForLevel(level: JLPTLevel): KanjiEntry[] {
  return KANJI_BY_LEVEL[level] || [];
}

export function getAllExercisesForLevel(level: JLPTLevel): JLPTExercise[] {
  const roadmap = getRoadmapForLevel(level);
  const exercises: JLPTExercise[] = [];
  roadmap.sections.forEach((sec) => {
    sec.units.forEach((unit) => {
      exercises.push(...unit.exercises);
    });
  });
  return exercises;
}
