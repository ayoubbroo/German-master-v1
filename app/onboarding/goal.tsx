import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { GradientButton } from "@/components/GradientButton";
import { GlassCard } from "@/components/GlassCard";
import { useOnboardingDraft } from "./_layout";
import { t, isRTL } from "@/lib/i18n";
import { colors, spacing, typography } from "@/lib/theme";
import { LearningGoal } from "@/types";

const GOALS: { value: LearningGoal; icon: keyof typeof Ionicons.glyphMap; key: string }[] = [
  { value: "daily_life", icon: "home-outline", key: "goal_daily_life" },
  { value: "travel", icon: "airplane-outline", key: "goal_travel" },
  { value: "work", icon: "briefcase-outline", key: "goal_work" },
  { value: "study", icon: "school-outline", key: "goal_study" },
  { value: "living_in_germany", icon: "flag-outline", key: "goal_living_de" },
];

export default function GoalScreen() {
  const router = useRouter();
  const { draft, update } = useOnboardingDraft();
  const rtl = isRTL(draft.interfaceLanguage);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, rtl && styles.rtl]}>{t("your_goal", draft.interfaceLanguage)}</Text>

      <View style={styles.options}>
        {GOALS.map((g) => {
          const selected = draft.learningGoal === g.value;
          return (
            <Pressable key={g.value} onPress={() => update({ learningGoal: g.value })}>
              <GlassCard style={selected ? { ...styles.card, ...styles.cardSelected } : styles.card}>
                <View style={styles.row}>
                  <Ionicons name={g.icon} size={22} color={colors.cyan} />
                  <Text style={[styles.optionText, rtl && styles.rtl]}>
                    {t(g.key, draft.interfaceLanguage)}
                  </Text>
                </View>
              </GlassCard>
            </Pressable>
          );
        })}
      </View>

      <GradientButton
        title={t("continue", draft.interfaceLanguage)}
        onPress={() => router.push("/onboarding/daily-goal")}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  title: { ...typography.h2, color: colors.textPrimary, marginTop: spacing.lg, marginBottom: spacing.xl },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  options: { gap: spacing.sm },
  card: { paddingVertical: spacing.md },
  cardSelected: { borderColor: colors.cyan, borderWidth: 1.5 },
  row: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  optionText: { ...typography.bodyBold, color: colors.textPrimary },
  button: { marginTop: "auto", marginBottom: spacing.lg },
});
