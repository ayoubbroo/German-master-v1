import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState, AchievementId, AchievementProgress } from "@/types";
import { ACHIEVEMENTS } from "@/data/achievements";

const STORAGE_KEY = "german_master_app_state_v1";

function defaultAchievements(): Record<AchievementId, AchievementProgress> {
  const result = {} as Record<AchievementId, AchievementProgress>;
  ACHIEVEMENTS.forEach((a) => {
    result[a.id] = { id: a.id, unlocked: false, unlockedAt: null };
  });
  return result;
}

export function defaultAppState(): AppState {
  return {
    profile: null,
    xp: { totalXp: 0, xpLevel: 1, xpToNextLevel: 100 },
    streak: { currentStreak: 0, longestStreak: 0, lastLearningDate: null },
    lessonProgress: {},
    vocabProgress: {},
    achievements: defaultAchievements(),
    dailyActivity: [],
    conversationsCompleted: [],
    settings: {
      notificationsEnabled: false,
      soundEnabled: true,
      darkMode: true,
    },
  };
}

/**
 * Loads the full app state from disk. Falls back to a fresh default
 * state if nothing is stored yet or if parsing fails (never throws
 * so the app remains usable offline even on corrupted storage).
 */
export async function loadAppState(): Promise<AppState> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultAppState();
    const parsed = JSON.parse(raw) as Partial<AppState>;
    // Merge with defaults to survive schema additions between app versions
    return { ...defaultAppState(), ...parsed };
  } catch (err) {
    console.warn("Failed to load app state, using defaults:", err);
    return defaultAppState();
  }
}

export async function saveAppState(state: AppState): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn("Failed to persist app state:", err);
  }
}

export async function resetAppState(): Promise<AppState> {
  const fresh = defaultAppState();
  await saveAppState(fresh);
  return fresh;
}
