import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientButton } from "@/components/GradientButton";
import { GlassCard } from "@/components/GlassCard";
import { useOnboardingDraft } from "./_layout";
import { t, isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";
import { Level } from "@/types";

const LEVEL_OPTIONS: { value: Level | "complete_beginner"; labelKey?: string; badge: string }[] = [
  { value: "complete_beginner", badge: "🌱" },
  { value: "A1", badge: "A1" },
  { value: "A2", badge: "A2" },
  { value: "B1", badge: "B1" },
  { value: "B2", badge: "B2" },
];

export default function LevelScreen() {
  const router = useRouter();
  const { draft, update } = useOnboardingDraft();
  const rtl = isRTL(draft.interfaceLanguage);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, rtl && styles.rtl]}>{t("your_level", draft.interfaceLanguage)}</Text>

      <View style={styles.options}>
        {LEVEL_OPTIONS.map((opt) => {
          const selected = draft.startingLevel === opt.value;
          return (
            <Pressable key={opt.value} onPress={() => update({ startingLevel: opt.value })}>
              <GlassCard style={selected ? { ...styles.card, ...styles.cardSelected } : styles.card}>
                <View style={styles.row}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{opt.badge}</Text>
                  </View>
                  <Text style={[styles.optionText, rtl && styles.rtl]}>
                    {opt.value === "complete_beginner"
                      ? t("complete_beginner", draft.interfaceLanguage)
                      : opt.value}
                  </Text>
                </View>
              </GlassCard>
            </Pressable>
          );
        })}
      </View>

      <GradientButton
        title={t("continue", draft.interfaceLanguage)}
        onPress={() => router.push("/onboarding/goal")}
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
  badge: {
    width: 40, height: 40, borderRadius: radius.sm,
    backgroundColor: "rgba(34,211,238,0.15)",
    alignItems: "center", justifyContent: "center",
  },
  badgeText: { color: colors.cyan, fontWeight: "700", fontSize: 13 },
  optionText: { ...typography.bodyBold, color: colors.textPrimary },
  button: { marginTop: "auto", marginBottom: spacing.lg },
});
