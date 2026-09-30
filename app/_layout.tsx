import React, { useEffect, useState } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, I18nManager } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppStoreProvider, useAppStore } from "@/hooks/useAppStore";
import { colors } from "@/lib/theme";

function RootNavigation() {
  const { state, isLoading } = useAppStore();
  const router = useRouter();
  const segments = useSegments();
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  useEffect(() => {
    if (isLoading || !navReady) return;

    const inOnboarding = segments[0] === "onboarding";
    const onboardingDone = state.profile?.onboardingCompleted;

    if (!onboardingDone && !inOnboarding) {
      router.replace("/onboarding/welcome");
    } else if (onboardingDone && inOnboarding) {
      router.replace("/(tabs)/home");
    }
  }, [isLoading, navReady, state.profile, segments]);

  if (isLoading) {
    return <View style={{ flex: 1, backgroundColor: colors.background }} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="lesson/[id]" options={{ presentation: "card" }} />
      <Stack.Screen name="conversation/[id]" options={{ presentation: "card" }} />
      <Stack.Screen name="review" options={{ presentation: "modal" }} />
      <Stack.Screen name="express" options={{ presentation: "modal" }} />
      <Stack.Screen name="achievements" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="search" options={{ presentation: "modal" }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppStoreProvider>
        <StatusBar style="light" />
        <RootNavigation />
      </AppStoreProvider>
    </SafeAreaProvider>
  );
}
