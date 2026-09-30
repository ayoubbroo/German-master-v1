import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  AppState,
  UserProfile,
  AchievementId,
} from "@/types";
import { loadAppState, saveAppState, resetAppState, defaultAppState } from "@/services/storage";
import { addXp, XP_REWARDS } from "@/lib/xpEngine";
import { registerLearningActivity } from "@/lib/streakEngine";
import { reviewVocabItem, createNewVocabProgress } from "@/lib/srsEngine";
import { getLessonIdsByLevel } from "@/data";
import { isLevelUnlocked as computeLevelUnlocked } from "@/data/levels";
import { ACHIEVEMENTS } from "@/data/achievements";

interface AppStoreValue {
  state: AppState;
  isLoading: boolean;
  completeOnboarding: (profile: UserProfile) => Promise<void>;
  completeLesson: (lessonId: string, scorePercent: number, xp: number) => Promise<void>;
  reviewWord: (vocabId: string, wasCorrect: boolean) => Promise<void>;
  completeConversation: (conversationId: string, xp: number) => Promise<void>;
  toggleFavoriteWord: (vocabId: string) => Promise<void>;
  logExpressSession: () => Promise<void>;
  updateSettings: (patch: Partial<AppState["settings"]>) => Promise<void>;
  resetProgress: () => Promise<void>;
  isLevelUnlocked: (level: "A1" | "A2" | "B1" | "B2") => boolean;
}

const AppStoreContext = createContext<AppStoreValue | null>(null);

function checkAndUnlockAchievements(state: AppState): AppState {
  const next = { ...state, achievements: { ...state.achievements } };
  const wordsLearned = Object.keys(next.vocabProgress).length;
  const lessonsCompleted = Object.values(next.lessonProgress).filter(
    (l) => l.completed
  ).length;

  const unlock = (id: AchievementId) => {
    if (!next.achievements[id]?.unlocked) {
      next.achievements[id] = {
        id,
        unlocked: true,
        unlockedAt: new Date().toISOString(),
      };
    }
  };

  if (wordsLearned >= 1) unlock("first_word");
  if (lessonsCompleted >= 1) unlock("first_lesson");
  if (next.conversationsCompleted.length >= 1) unlock("first_conversation");
  if (next.streak.currentStreak >= 7) unlock("streak_7");
  if (next.streak.currentStreak >= 30) unlock("streak_30");
  if (wordsLearned >= 100) unlock("words_100");
  if (wordsLearned >= 500) unlock("words_500");
  if (wordsLearned >= 1000) unlock("words_1000");

  const lessonIdsByLevel = getLessonIdsByLevel();
  const levelComplete = (ids: string[]) =>
    ids.length > 0 && ids.every((id) => next.lessonProgress[id]?.completed);

  if (levelComplete(lessonIdsByLevel.A1)) unlock("a1_complete");
  if (levelComplete(lessonIdsByLevel.A2)) unlock("a2_complete");
  if (levelComplete(lessonIdsByLevel.B1)) unlock("b1_complete");
  if (levelComplete(lessonIdsByLevel.B2)) unlock("b2_complete");
  if (
    levelComplete(lessonIdsByLevel.A1) &&
    levelComplete(lessonIdsByLevel.A2) &&
    levelComplete(lessonIdsByLevel.B1) &&
    levelComplete(lessonIdsByLevel.B2)
  ) {
    unlock("language_master");
  }

  return next;
}

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(defaultAppState());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAppState().then((loaded) => {
      setState(loaded);
      setIsLoading(false);
    });
  }, []);

  const persist = useCallback(async (next: AppState) => {
    setState(next);
    await saveAppState(next);
  }, []);

  const completeOnboarding = useCallback(
    async (profile: UserProfile) => {
      await persist({ ...state, profile });
    },
    [state, persist]
  );

  const completeLesson = useCallback(
    async (lessonId: string, scorePercent: number, xp: number) => {
      const existing = state.lessonProgress[lessonId];
      const updatedEntry = {
        lessonId,
        completed: true,
        completedAt: new Date().toISOString(),
        bestScorePercent: Math.max(existing?.bestScorePercent ?? 0, scorePercent),
        attempts: (existing?.attempts ?? 0) + 1,
      };

      let next: AppState = {
        ...state,
        lessonProgress: { ...state.lessonProgress, [lessonId]: updatedEntry },
        xp: addXp(state.xp, xp),
        streak: registerLearningActivity(state.streak),
      };
      next = checkAndUnlockAchievements(next);
      await persist(next);
    },
    [state, persist]
  );

  const reviewWord = useCallback(
    async (vocabId: string, wasCorrect: boolean) => {
      const existing =
        state.vocabProgress[vocabId] ?? createNewVocabProgress(vocabId);
      const updated = reviewVocabItem(existing, wasCorrect);
      let next: AppState = {
        ...state,
        vocabProgress: { ...state.vocabProgress, [vocabId]: updated },
        xp: addXp(
          state.xp,
          wasCorrect ? XP_REWARDS.VOCAB_PRACTICE_CORRECT : 0
        ),
        streak: registerLearningActivity(state.streak),
      };
      next = checkAndUnlockAchievements(next);
      await persist(next);
    },
    [state, persist]
  );

  const completeConversation = useCallback(
    async (conversationId: string, xp: number) => {
      const already = state.conversationsCompleted.includes(conversationId);
      let next: AppState = {
        ...state,
        conversationsCompleted: already
          ? state.conversationsCompleted
          : [...state.conversationsCompleted, conversationId],
        xp: addXp(state.xp, xp),
        streak: registerLearningActivity(state.streak),
      };
      next = checkAndUnlockAchievements(next);
      await persist(next);
    },
    [state, persist]
  );

  const toggleFavoriteWord = useCallback(
    async (vocabId: string) => {
      const existing =
        state.vocabProgress[vocabId] ?? createNewVocabProgress(vocabId);
      const updated = { ...existing, isFavorite: !existing.isFavorite };
      await persist({
        ...state,
        vocabProgress: { ...state.vocabProgress, [vocabId]: updated },
      });
    },
    [state, persist]
  );

  const logExpressSession = useCallback(async () => {
    let next: AppState = {
      ...state,
      xp: addXp(state.xp, XP_REWARDS.EXPRESS_SESSION),
      streak: registerLearningActivity(state.streak),
    };
    next = checkAndUnlockAchievements(next);
    await persist(next);
  }, [state, persist]);

  const updateSettings = useCallback(
    async (patch: Partial<AppState["settings"]>) => {
      await persist({ ...state, settings: { ...state.settings, ...patch } });
    },
    [state, persist]
  );

  const resetProgress = useCallback(async () => {
    const fresh = await resetAppState();
    setState(fresh);
  }, []);

  const isLevelUnlockedFn = useCallback(
    (level: "A1" | "A2" | "B1" | "B2") =>
      computeLevelUnlocked(level, state.lessonProgress, getLessonIdsByLevel()),
    [state.lessonProgress]
  );

  return (
    <AppStoreContext.Provider
      value={{
        state,
        isLoading,
        completeOnboarding,
        completeLesson,
        reviewWord,
        completeConversation,
        toggleFavoriteWord,
        logExpressSession,
        updateSettings,
        resetProgress,
        isLevelUnlocked: isLevelUnlockedFn,
      }}
    >
      {children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore(): AppStoreValue {
  const ctx = useContext(AppStoreContext);
  if (!ctx) {
    throw new Error("useAppStore must be used within AppStoreProvider");
  }
  return ctx;
}

export { ACHIEVEMENTS };
