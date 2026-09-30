import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { colors, radius, typography } from "@/lib/theme";

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

export function GradientButton({
  title,
  onPress,
  style,
  disabled,
  loading,
  variant = "primary",
}: Props) {
  const handlePress = () => {
    if (disabled || loading) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onPress();
  };

  if (variant === "secondary") {
    return (
      <Pressable
        onPress={handlePress}
        disabled={disabled || loading}
        style={[
          styles.secondaryButton,
          disabled && styles.disabled,
          style,
        ]}
        accessibilityRole="button"
        accessibilityLabel={title}
      >
        {loading ? (
          <ActivityIndicator color={colors.cyan} />
        ) : (
          <Text style={styles.secondaryText}>{title}</Text>
        )}
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || loading}
      style={[styles.wrapper, disabled && styles.disabled, style]}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <LinearGradient
        colors={colors.gradientPrimary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {loading ? (
          <ActivityIndicator color="#0B0F1A" />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radius.md,
    overflow: "hidden",
    minHeight: 52,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 24,
    minHeight: 52,
  },
  text: {
    ...typography.bodyBold,
    color: "#0B0F1A",
    fontSize: 16,
  },
  secondaryButton: {
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.surfaceBorder,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 24,
    minHeight: 52,
  },
  secondaryText: {
    ...typography.bodyBold,
    color: colors.textPrimary,
    fontSize: 16,
  },
  disabled: {
    opacity: 0.5,
  },
});
