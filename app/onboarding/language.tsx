import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientButton } from "@/components/GradientButton";
import { GlassCard } from "@/components/GlassCard";
import { useOnboardingDraft } from "./_layout";
import { InterfaceLanguage } from "@/types";
import { colors, spacing, typography, radius } from "@/lib/theme";

const OPTIONS: { code: InterfaceLanguage; label: string; native: string }[] = [
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "fr", label: "French", native: "Français" },
  { code: "en", label: "English", native: "English" },
];

export default function LanguageScreen() {
  const router = useRouter();
  const { draft, update } = useOnboardingDraft();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choisis la langue de l'interface</Text>
      <Text style={styles.subtitle}>Choose your interface language</Text>

      <View style={styles.options}>
        {OPTIONS.map((opt) => {
          const selected = draft.interfaceLanguage === opt.code;
          return (
            <Pressable key={opt.code} onPress={() => update({ interfaceLanguage: opt.code })}>
              <GlassCard
                style={selected ? { ...styles.optionCard, ...styles.optionCardSelected } : styles.optionCard}
              >
                <Text style={styles.optionNative}>{opt.native}</Text>
                <Text style={styles.optionLabel}>{opt.label}</Text>
              </GlassCard>
            </Pressable>
          );
        })}
      </View>

      <GradientButton
        title="Continuer"
        onPress={() => router.push("/onboarding/name")}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  title: { ...typography.h2, color: colors.textPrimary, marginTop: spacing.lg },
  subtitle: { ...typography.caption, color: colors.textMuted, marginBottom: spacing.xl },
  options: { gap: spacing.md },
  optionCard: { alignItems: "center", paddingVertical: spacing.lg, borderRadius: radius.lg },
  optionCardSelected: { borderColor: colors.cyan, borderWidth: 1.5 },
  optionNative: { ...typography.h3, color: colors.textPrimary },
  optionLabel: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
  button: { marginTop: "auto", marginBottom: spacing.lg },
});
