import React, { createContext, useContext, useState } from "react";
import { Stack } from "expo-router";
import {
  InterfaceLanguage,
  Level,
  LearningGoal,
  DailyGoalMinutes,
} from "@/types";

interface OnboardingDraft {
  interfaceLanguage: InterfaceLanguage;
  name: string;
  startingLevel: Level | "complete_beginner";
  learningGoal: LearningGoal;
  dailyGoalMinutes: DailyGoalMinutes;
}

interface OnboardingContextValue {
  draft: OnboardingDraft;
  update: (patch: Partial<OnboardingDraft>) => void;
}

const defaultDraft: OnboardingDraft = {
  interfaceLanguage: "fr",
  name: "",
  startingLevel: "complete_beginner",
  learningGoal: "daily_life",
  dailyGoalMinutes: 15,
};

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function useOnboardingDraft() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboardingDraft must be used within onboarding flow");
  return ctx;
}

export default function OnboardingLayout() {
  const [draft, setDraft] = useState<OnboardingDraft>(defaultDraft);

  const update = (patch: Partial<OnboardingDraft>) =>
    setDraft((prev) => ({ ...prev, ...patch }));

  return (
    <OnboardingContext.Provider value={{ draft, update }}>
      <Stack screenOptions={{ headerShown: false }} />
    </OnboardingContext.Provider>
  );
}
