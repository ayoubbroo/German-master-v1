import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { isRTL, t } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";

export default function ProfileScreen() {
  const router = useRouter();
  const { state } = useAppStore();
  const profile = state.profile;
  const lang = profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  const unlockedCount = Object.values(state.achievements).filter((a) => a.unlocked).length;

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.headerCard}>
            <LinearGradient colors={colors.gradientPrimary} style={styles.avatar}>
              <Text style={styles.avatarText}>{(profile?.name ?? "?").charAt(0).toUpperCase()}</Text>
            </LinearGradient>
            <Text style={styles.name}>{profile?.name}</Text>
            <View style={styles.levelPill}>
              <Text style={styles.levelPillText}>{profile?.currentLevel}</Text>
            </View>
          </View>

          <View style={styles.quickStats}>
            <QuickStat value={state.xp.totalXp} label="XP" />
            <QuickStat value={state.streak.currentStreak} label={rtl ? "أيام" : "Jours"} />
            <QuickStat value={unlockedCount} label={rtl ? "إنجازات" : "Succès"} />
          </View>

          <Pressable onPress={() => router.push("/achievements")}>
            <GlassCard style={styles.menuItem}>
              <View style={[styles.menuRow, rtl && styles.rowReverse]}>
                <Ionicons name="trophy-outline" size={20} color={colors.warning} />
                <Text style={[styles.menuText, rtl && styles.rtl]}>
                  {t("achievements", lang)}
                </Text>
                <Ionicons
                  name={rtl ? "chevron-back" : "chevron-forward"}
                  size={18}
                  color={colors.textMuted}
                  style={styles.chevron}
                />
              </View>
            </GlassCard>
          </Pressable>

          <Pressable onPress={() => router.push("/settings")}>
            <GlassCard style={styles.menuItem}>
              <View style={[styles.menuRow, rtl && styles.rowReverse]}>
                <Ionicons name="settings-outline" size={20} color={colors.textSecondary} />
                <Text style={[styles.menuText, rtl && styles.rtl]}>
                  {t("settings", lang)}
                </Text>
                <Ionicons
                  name={rtl ? "chevron-back" : "chevron-forward"}
                  size={18}
                  color={colors.textMuted}
                  style={styles.chevron}
                />
              </View>
            </GlassCard>
          </Pressable>

          <Text style={[styles.sectionTitle, rtl && styles.rtl]}>
            {rtl ? "الهدف" : "Objectif"}
          </Text>
          <GlassCard>
            <Text style={[styles.goalText, rtl && styles.rtl]}>
              {rtl
                ? `هدفك: ${profile?.dailyGoalMinutes} دقيقة يومياً`
                : `${profile?.dailyGoalMinutes} minutes par jour`}
            </Text>
          </GlassCard>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function QuickStat({ value, label }: { value: number; label: string }) {
  return (
    <View style={styles.quickStatItem}>
      <Text style={styles.quickStatValue}>{value}</Text>
      <Text style={styles.quickStatLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: 100, gap: spacing.md },
  headerCard: { alignItems: "center", paddingVertical: spacing.lg },
  avatar: { width: 72, height: 72, borderRadius: 36, alignItems: "center", justifyContent: "center", marginBottom: spacing.sm },
  avatarText: { fontSize: 28, fontWeight: "800", color: "#0B0F1A" },
  name: { ...typography.h2, color: colors.textPrimary },
  levelPill: {
    marginTop: 6, backgroundColor: "rgba(34,211,238,0.15)",
    borderRadius: radius.full, paddingHorizontal: 12, paddingVertical: 4,
  },
  levelPillText: { color: colors.cyan, fontWeight: "700", fontSize: 12 },
  quickStats: { flexDirection: "row", justifyContent: "space-around" },
  quickStatItem: { alignItems: "center" },
  quickStatValue: { ...typography.h2, color: colors.textPrimary },
  quickStatLabel: { ...typography.caption, color: colors.textMuted },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  menuItem: {},
  menuRow: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  rowReverse: { flexDirection: "row-reverse" },
  menuText: { ...typography.bodyBold, color: colors.textPrimary, flex: 1 },
  chevron: {},
  sectionTitle: { ...typography.h3, color: colors.textPrimary, marginTop: spacing.sm },
  goalText: { color: colors.textSecondary },
});
