import { Level, LessonProgressEntry } from "@/types";

export const LEVELS: Level[] = ["A1", "A2", "B1", "B2"];

export const LEVEL_LABELS: Record<Level, { de: string; ar: string; fr: string }> = {
  A1: { de: "Anfänger", ar: "مبتدئ", fr: "Débutant" },
  A2: { de: "Grundlegend", ar: "أساسي", fr: "Élémentaire" },
  B1: { de: "Mittelstufe", ar: "متوسط", fr: "Intermédiaire" },
  B2: { de: "Fortgeschritten", ar: "متقدم", fr: "Avancé supérieur" },
};

// Lessons per level, per the curriculum spec (30 each, 120 total)
export const LESSONS_PER_LEVEL = 30;

/**
 * A level unlocks once the previous level's lessons are all completed.
 * A1 is always unlocked by default.
 */
export function isLevelUnlocked(
  level: Level,
  lessonProgress: Record<string, LessonProgressEntry>,
  allLessonIdsByLevel: Record<Level, string[]>
): boolean {
  if (level === "A1") return true;

  const levelIndex = LEVELS.indexOf(level);
  const previousLevel = LEVELS[levelIndex - 1];
  const previousLessonIds = allLessonIdsByLevel[previousLevel] || [];

  if (previousLessonIds.length === 0) return false;

  return previousLessonIds.every(
    (id) => lessonProgress[id]?.completed === true
  );
}

export function isLessonUnlocked(
  lessonId: string,
  orderedLessonIdsInLevel: string[],
  lessonProgress: Record<string, LessonProgressEntry>
): boolean {
  const index = orderedLessonIdsInLevel.indexOf(lessonId);
  if (index <= 0) return true; // first lesson of a level always unlocked
  const previousLessonId = orderedLessonIdsInLevel[index - 1];
  return lessonProgress[previousLessonId]?.completed === true;
}
