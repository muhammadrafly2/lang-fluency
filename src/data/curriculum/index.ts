import { CurriculumArea, CurriculumTopic } from "./types";
import { ENGLISH_FULL_CURRICULUM } from "./englishCurriculum";
import { JAPANESE_FULL_CURRICULUM } from "./japaneseCurriculum";
import { SPANISH_FULL_CURRICULUM } from "./spanishCurriculum";
import { FRENCH_FULL_CURRICULUM } from "./frenchCurriculum";
import { KOREAN_FULL_CURRICULUM } from "./koreanCurriculum";
import { GERMAN_FULL_CURRICULUM } from "./germanCurriculum";

export * from "./types";
export { ENGLISH_FULL_CURRICULUM } from "./englishCurriculum";
export { JAPANESE_FULL_CURRICULUM } from "./japaneseCurriculum";
export { SPANISH_FULL_CURRICULUM } from "./spanishCurriculum";
export { FRENCH_FULL_CURRICULUM } from "./frenchCurriculum";
export { KOREAN_FULL_CURRICULUM } from "./koreanCurriculum";
export { GERMAN_FULL_CURRICULUM } from "./germanCurriculum";

/**
 * Returns the full curriculum areas (11 topic areas with in-depth topics)
 * for the selected language code. Falls back to English for areas not yet localized.
 */
export function getCurriculumAreas(langCode: string): CurriculumArea[] {
  let selectedCurriculum: CurriculumArea[];

  switch (langCode?.toLowerCase()) {
    case "ja":
    case "japanese":
      selectedCurriculum = JAPANESE_FULL_CURRICULUM;
      break;
    case "es":
    case "spanish":
      selectedCurriculum = SPANISH_FULL_CURRICULUM;
      break;
    case "fr":
    case "french":
      selectedCurriculum = FRENCH_FULL_CURRICULUM;
      break;
    case "ko":
    case "korean":
      selectedCurriculum = KOREAN_FULL_CURRICULUM;
      break;
    case "de":
    case "german":
      selectedCurriculum = GERMAN_FULL_CURRICULUM;
      break;
    case "en":
    case "english":
    default:
      return ENGLISH_FULL_CURRICULUM;
  }

  // Merge with English for any of the 11 areas that haven't been translated yet
  // to guarantee all 11 areas are ALWAYS fully populated!
  return ENGLISH_FULL_CURRICULUM.map((enArea) => {
    const localizedArea = selectedCurriculum.find((a) => a.id === enArea.id);
    if (localizedArea && localizedArea.topics.length > 0) {
      return localizedArea;
    }
    return enArea;
  });
}

/**
 * Retrieves a single specific topic by ID across all areas.
 */
export function getCurriculumTopic(langCode: string, topicId: string): CurriculumTopic | undefined {
  const areas = getCurriculumAreas(langCode);
  for (const area of areas) {
    const match = area.topics.find((t) => t.id === topicId);
    if (match) return match;
  }
  return undefined;
}

/**
 * Flattens all topics for easy listing and search.
 */
export function getAllCurriculumTopics(langCode: string): CurriculumTopic[] {
  const areas = getCurriculumAreas(langCode);
  return areas.flatMap((a) => a.topics);
}
