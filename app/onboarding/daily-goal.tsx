import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientButton } from "@/components/GradientButton";
import { GlassCard } from "@/components/GlassCard";
import { useOnboardingDraft } from "./_layout";
import { t, isRTL } from "@/lib/i18n";
import { colors, spacing, typography } from "@/lib/theme";
import { DailyGoalMinutes } from "@/types";

const OPTIONS: DailyGoalMinutes[] = [10, 15, 20, 30];

export default function DailyGoalScreen() {
  const router = useRouter();
  const { draft, update } = useOnboardingDraft();
  const rtl = isRTL(draft.interfaceLanguage);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, rtl && styles.rtl]}>
        {t("daily_goal_title", draft.interfaceLanguage)}
      </Text>

      <View style={styles.grid}>
        {OPTIONS.map((min) => {
          const selected = draft.dailyGoalMinutes === min;
          return (
            <Pressable key={min} onPress={() => update({ dailyGoalMinutes: min })} style={styles.gridItem}>
              <GlassCard style={selected ? { ...styles.card, ...styles.cardSelected } : styles.card}>
                <Text style={styles.minutes}>{min}</Text>
                <Text style={styles.minutesLabel}>min/jour</Text>
              </GlassCard>
            </Pressable>
          );
        })}
      </View>

      <GradientButton
        title={t("continue", draft.interfaceLanguage)}
        onPress={() => router.push("/onboarding/ready")}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  title: { ...typography.h2, color: colors.textPrimary, marginTop: spacing.lg, marginBottom: spacing.xl },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.md },
  gridItem: { width: "47%" },
  card: { alignItems: "center", paddingVertical: spacing.lg },
  cardSelected: { borderColor: colors.cyan, borderWidth: 1.5 },
  minutes: { fontSize: 32, fontWeight: "800", color: colors.textPrimary },
  minutesLabel: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
  button: { marginTop: "auto", marginBottom: spacing.lg },
});
