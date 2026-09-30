import { XpData } from "@/types";

// XP required grows progressively per level (simple quadratic curve)
export function xpRequiredForLevel(level: number): number {
  return Math.round(100 * Math.pow(level, 1.35));
}

export function computeXpLevel(totalXp: number): {
  xpLevel: number;
  xpToNextLevel: number;
} {
  let level = 1;
  let remaining = totalXp;
  let threshold = xpRequiredForLevel(level);

  while (remaining >= threshold) {
    remaining -= threshold;
    level += 1;
    threshold = xpRequiredForLevel(level);
  }

  return { xpLevel: level, xpToNextLevel: threshold - remaining };
}

export function addXp(current: XpData, amount: number): XpData {
  const totalXp = current.totalXp + amount;
  const { xpLevel, xpToNextLevel } = computeXpLevel(totalXp);
  return { totalXp, xpLevel, xpToNextLevel };
}

// XP reward constants — used across lessons, review, conversations
export const XP_REWARDS = {
  LESSON_COMPLETE: 40,
  VOCAB_PRACTICE_CORRECT: 2,
  QUIZ_COMPLETE: 15,
  CONVERSATION_COMPLETE: 25,
  DAILY_GOAL_MET: 20,
  REVIEW_SESSION: 10,
  STREAK_MILESTONE_7: 50,
  STREAK_MILESTONE_30: 200,
  EXPRESS_SESSION: 20,
} as const;
