import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { GradientButton } from "@/components/GradientButton";
import { useOnboardingDraft } from "./_layout";
import { useAppStore } from "@/hooks/useAppStore";
import { t, isRTL } from "@/lib/i18n";
import { colors, spacing, typography } from "@/lib/theme";
import { UserProfile } from "@/types";

export default function ReadyScreen() {
  const router = useRouter();
  const { draft } = useOnboardingDraft();
  const { completeOnboarding } = useAppStore();
  const rtl = isRTL(draft.interfaceLanguage);

  const handleStart = async () => {
    const profile: UserProfile = {
      name: draft.name,
      interfaceLanguage: draft.interfaceLanguage,
      currentLevel: draft.startingLevel === "complete_beginner" ? "A1" : draft.startingLevel,
      startingLevel: draft.startingLevel,
      learningGoal: draft.learningGoal,
      dailyGoalMinutes: draft.dailyGoalMinutes,
      onboardingCompleted: true,
      createdAt: new Date().toISOString(),
    };
    await completeOnboarding(profile);
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <LinearGradient colors={colors.gradientPrimary} style={styles.iconCircle}>
          <Ionicons name="checkmark" size={40} color="#0B0F1A" />
        </LinearGradient>
        <Text style={[styles.title, rtl && styles.rtl]}>
          {draft.name}, {rtl ? "أنت جاهز!" : "tu es prêt !"}
        </Text>
        <Text style={[styles.subtitle, rtl && styles.rtl]}>
          {rtl
            ? "تم إعداد رحلتك التعليمية. لنبدأ بأول درس."
            : "Ton parcours d'apprentissage est prêt. Commençons par ta première leçon."}
        </Text>
      </View>
      <GradientButton
        title={t("start_learning", draft.interfaceLanguage)}
        onPress={handleStart}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  iconCircle: {
    width: 80, height: 80, borderRadius: 40,
    alignItems: "center", justifyContent: "center", marginBottom: spacing.lg,
  },
  title: { ...typography.h1, color: colors.textPrimary, textAlign: "center", marginBottom: spacing.sm },
  subtitle: { ...typography.body, color: colors.textSecondary, textAlign: "center", paddingHorizontal: spacing.lg },
  button: { marginBottom: spacing.lg },
});
