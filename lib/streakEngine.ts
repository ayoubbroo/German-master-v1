import { StreakData } from "@/types";

function todayStr(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function daysBetween(dateA: string, dateB: string): number {
  const a = new Date(dateA + "T00:00:00");
  const b = new Date(dateB + "T00:00:00");
  const diffMs = b.getTime() - a.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Call this once whenever the user completes any learning activity
 * (lesson, review, conversation, express session) on a given day.
 * Correctly handles:
 *  - Same-day repeat activity -> no change (idempotent)
 *  - Consecutive day -> streak +1
 *  - Gap of 2+ days -> streak resets to 1
 * A simple app restart never resets progress since this only reads
 * from persisted storage, never from in-memory session state.
 */
export function registerLearningActivity(streak: StreakData): StreakData {
  const today = todayStr();

  if (streak.lastLearningDate === today) {
    return streak; // already logged today
  }

  let newCurrent: number;

  if (streak.lastLearningDate === null) {
    newCurrent = 1;
  } else {
    const gap = daysBetween(streak.lastLearningDate, today);
    if (gap === 1) {
      newCurrent = streak.currentStreak + 1;
    } else if (gap <= 0) {
      // clock skew safeguard
      newCurrent = streak.currentStreak || 1;
    } else {
      newCurrent = 1; // streak broken
    }
  }

  return {
    currentStreak: newCurrent,
    longestStreak: Math.max(streak.longestStreak, newCurrent),
    lastLearningDate: today,
  };
}

/**
 * Non-mutating check used by the Home screen to display whether the
 * streak is "at risk" (no activity logged yet today).
 */
export function isStreakAtRiskToday(streak: StreakData): boolean {
  if (!streak.lastLearningDate) return false;
  return streak.lastLearningDate !== todayStr() && streak.currentStreak > 0;
}
