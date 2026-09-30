import { SrsStatus, VocabProgressEntry } from "@/types";

// Simplified SM-2-inspired spaced repetition intervals (in days)
const INTERVAL_STEPS = [0, 1, 3, 7, 14, 30, 60, 120];

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function createNewVocabProgress(vocabId: string): VocabProgressEntry {
  return {
    vocabId,
    status: "NEW",
    timesCorrect: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    nextDueAt: null,
    intervalDays: 0,
    isFavorite: false,
  };
}

function statusFromInterval(intervalDays: number): SrsStatus {
  if (intervalDays === 0) return "LEARNING";
  if (intervalDays >= 60) return "MASTERED";
  return "REVIEW";
}

/**
 * Updates a vocabulary progress entry after the user answers a
 * review/quiz item involving that word.
 */
export function reviewVocabItem(
  entry: VocabProgressEntry,
  wasCorrect: boolean
): VocabProgressEntry {
  const now = new Date();
  let stepIndex = INTERVAL_STEPS.indexOf(entry.intervalDays);
  if (stepIndex === -1) stepIndex = 0;

  if (wasCorrect) {
    stepIndex = Math.min(stepIndex + 1, INTERVAL_STEPS.length - 1);
  } else {
    stepIndex = Math.max(stepIndex - 2, 0); // penalize wrong answers
  }

  const intervalDays = INTERVAL_STEPS[stepIndex];
  const nextDueAt = addDays(now, Math.max(intervalDays, 1)).toISOString();

  return {
    ...entry,
    status: statusFromInterval(intervalDays),
    timesCorrect: entry.timesCorrect + (wasCorrect ? 1 : 0),
    timesIncorrect: entry.timesIncorrect + (wasCorrect ? 0 : 1),
    lastReviewedAt: now.toISOString(),
    nextDueAt,
    intervalDays,
  };
}

export function isDueForReview(entry: VocabProgressEntry): boolean {
  if (entry.status === "NEW") return true;
  if (!entry.nextDueAt) return true;
  return new Date(entry.nextDueAt).getTime() <= Date.now();
}

export function getDueVocabIds(
  progress: Record<string, VocabProgressEntry>
): string[] {
  return Object.values(progress)
    .filter(isDueForReview)
    .map((e) => e.vocabId);
}
