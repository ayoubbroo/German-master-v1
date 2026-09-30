import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientButton } from "@/components/GradientButton";
import { useOnboardingDraft } from "./_layout";
import { t, isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";

export default function NameScreen() {
  const router = useRouter();
  const { draft, update } = useOnboardingDraft();
  const [localName, setLocalName] = useState(draft.name);
  const rtl = isRTL(draft.interfaceLanguage);

  const handleContinue = () => {
    update({ name: localName.trim() || "Freund" });
    router.push("/onboarding/level");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, rtl && styles.rtlText]}>
          {t("your_name", draft.interfaceLanguage)}
        </Text>
        <TextInput
          value={localName}
          onChangeText={setLocalName}
          placeholder="..."
          placeholderTextColor={colors.textMuted}
          style={[styles.input, rtl && styles.rtlText]}
          autoFocus
          textAlign={rtl ? "right" : "left"}
        />
        <GradientButton
          title={t("continue", draft.interfaceLanguage)}
          onPress={handleContinue}
          disabled={localName.trim().length === 0}
          style={styles.button}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, justifyContent: "center" },
  title: { ...typography.h2, color: colors.textPrimary, marginBottom: spacing.lg },
  rtlText: { writingDirection: "rtl", textAlign: "right" },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
    borderRadius: radius.md,
    padding: spacing.md,
    color: colors.textPrimary,
    fontSize: 18,
    marginBottom: spacing.xl,
  },
  button: {},
});
