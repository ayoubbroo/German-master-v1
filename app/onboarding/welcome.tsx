import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientButton } from "@/components/GradientButton";
import { colors, spacing, typography } from "@/lib/theme";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0B0F1A", "#131A2E", "#0B0F1A"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.content}>
        <View style={styles.logoArea}>
          <LinearGradient
            colors={colors.gradientPrimary}
            style={styles.logoCircle}
          >
            <Text style={styles.logoText}>DE</Text>
          </LinearGradient>
          <Text style={styles.title}>German Master</Text>
          <Text style={styles.subtitle}>
            Apprends l'allemand progressivement, du zéro absolu jusqu'au niveau B2 — pour ton quotidien, tes voyages et ta carrière.
          </Text>
        </View>

        <View style={styles.footer}>
          <GradientButton
            title="Commencer"
            onPress={() => router.push("/onboarding/language")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, justifyContent: "space-between", padding: spacing.lg },
  logoArea: { flex: 1, alignItems: "center", justifyContent: "center" },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  logoText: { fontSize: 32, fontWeight: "800", color: "#0B0F1A" },
  title: { ...typography.h1, color: colors.textPrimary, marginBottom: spacing.sm },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    paddingHorizontal: spacing.lg,
    lineHeight: 22,
  },
  footer: { paddingBottom: spacing.lg },
});
