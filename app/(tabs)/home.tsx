import React, { useMemo } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { ProgressRing } from "@/components/ProgressRing";
import { getLessonsByLevel } from "@/data";
import { t, isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";

function getGreetingKey(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "greeting_morning";
  if (hour < 18) return "greeting_afternoon";
  return "greeting_evening";
}

export default function HomeScreen() {
  const router = useRouter();
  const { state } = useAppStore();
  const profile = state.profile;
  const lang = profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  const levelLessons = useMemo(
    () => getLessonsByLevel(profile?.currentLevel ?? "A1"),
    [profile?.currentLevel]
  );

  const nextLesson = useMemo(
    () => levelLessons.find((l) => !state.lessonProgress[l.id]?.completed) ?? levelLessons[0],
    [levelLessons, state.lessonProgress]
  );

  const completedInLevel = levelLessons.filter(
    (l) => state.lessonProgress[l.id]?.completed
  ).length;
  const levelProgress = levelLessons.length > 0 ? completedInLevel / levelLessons.length : 0;

  const wordsLearned = Object.keys(state.vocabProgress).length;
  const lessonsCompletedTotal = Object.values(state.lessonProgress).filter(
    (l) => l.completed
  ).length;

  const todayStr = new Date().toISOString().slice(0, 10);
  const todayActivity = state.dailyActivity.find((d) => d.date === todayStr);
  const dailyGoal = profile?.dailyGoalMinutes ?? 15;
  const minutesToday = todayActivity?.minutesSpent ?? 0;
  const dailyProgress = Math.min(1, minutesToday / dailyGoal);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0B0F1A", "#0F1424"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={[styles.header, rtl && styles.rowReverse]}>
            <View>
              <Text style={[styles.greeting, rtl && styles.rtl]}>
                {t(getGreetingKey(), lang)}, {profile?.name ?? ""} 👋
              </Text>
              <View style={[styles.levelPill, rtl && styles.rowReverse]}>
                <Text style={styles.levelPillText}>{profile?.currentLevel ?? "A1"}</Text>
              </View>
            </View>
            <Pressable onPress={() => router.push("/search")} style={styles.searchBtn}>
              <Ionicons name="search" size={20} color={colors.textPrimary} />
            </Pressable>
          </View>

          {/* Stats row */}
          <View style={styles.statsRow}>
            <GlassCard style={styles.statCard}>
              <Ionicons name="flame" size={20} color={colors.warning} />
              <Text style={styles.statValue}>{state.streak.currentStreak}</Text>
              <Text style={styles.statLabel}>{t("streak", lang)}</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <Ionicons name="star" size={20} color={colors.cyan} />
              <Text style={styles.statValue}>{state.xp.totalXp}</Text>
              <Text style={styles.statLabel}>XP</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <Ionicons name="library" size={20} color={colors.violet} />
              <Text style={styles.statValue}>{wordsLearned}</Text>
              <Text style={styles.statLabel}>{t("words_learned", lang)}</Text>
            </GlassCard>
          </View>

          {/* Daily progress + level progress */}
          <GlassCard style={styles.progressCard}>
            <View style={[styles.progressRow, rtl && styles.rowReverse]}>
              <ProgressRing
                progress={dailyProgress}
                size={72}
                strokeWidth={7}
                centerText={`${minutesToday}/${dailyGoal}`}
              />
              <View style={{ flex: 1, marginHorizontal: spacing.md }}>
                <Text style={[styles.progressTitle, rtl && styles.rtl]}>
                  {rtl ? "هدفك اليومي" : "Objectif du jour"}
                </Text>
                <Text style={[styles.progressSub, rtl && styles.rtl]}>
                  {rtl
                    ? `${lessonsCompletedTotal} درس مكتمل بالإجمال`
                    : `${lessonsCompletedTotal} leçons complétées au total`}
                </Text>
              </View>
              <ProgressRing
                progress={levelProgress}
                size={72}
                strokeWidth={7}
                centerText={`${completedInLevel}/${levelLessons.length}`}
              />
            </View>
          </GlassCard>

          {/* Today's lesson */}
          {nextLesson && (
            <Pressable onPress={() => router.push(`/lesson/${nextLesson.id}`)}>
              <GlassCard style={styles.lessonCard}>
                <Text style={[styles.lessonLabel, rtl && styles.rtl]}>
                  {t("todays_lesson", lang)}
                </Text>
                <Text style={[styles.lessonTitle, rtl && styles.rtl]}>
                  {rtl ? nextLesson.title.ar : lang === "en" ? nextLesson.title.de : nextLesson.title.fr}
                </Text>
                <Text style={[styles.lessonMeta, rtl && styles.rtl]}>
                  {nextLesson.estimatedMinutes} min · +{nextLesson.xpReward} XP
                </Text>
                <View style={styles.startButton}>
                  <LinearGradient colors={colors.gradientPrimary} style={styles.startButtonGradient}>
                    <Text style={styles.startButtonText}>{t("start_lesson", lang)}</Text>
                  </LinearGradient>
                </View>
              </GlassCard>
            </Pressable>
          )}

          {/* Main action buttons */}
          <View style={styles.actionsGrid}>
            <Pressable style={styles.actionItem} onPress={() => router.push("/express")}>
              <GlassCard style={styles.actionCard}>
                <Ionicons name="flash" size={24} color={colors.cyan} />
                <Text style={styles.actionText}>{t("express_10min", lang)}</Text>
              </GlassCard>
            </Pressable>
            <Pressable style={styles.actionItem} onPress={() => router.push("/review")}>
              <GlassCard style={styles.actionCard}>
                <Ionicons name="repeat" size={24} color={colors.violet} />
                <Text style={styles.actionText}>{t("smart_review", lang)}</Text>
              </GlassCard>
            </Pressable>
            <Pressable
              style={styles.actionItem}
              onPress={() => router.push("/conversation/conv-a1-restaurant")}
            >
              <GlassCard style={styles.actionCard}>
                <Ionicons name="chatbubbles" size={24} color={colors.blue} />
                <Text style={styles.actionText}>{t("conversation", lang)}</Text>
              </GlassCard>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollContent: { padding: spacing.lg, paddingBottom: 100, gap: spacing.md },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  rowReverse: { flexDirection: "row-reverse" },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  greeting: { ...typography.h3, color: colors.textPrimary },
  levelPill: {
    alignSelf: "flex-start", marginTop: 6, backgroundColor: "rgba(34,211,238,0.15)",
    borderRadius: radius.full, paddingHorizontal: 10, paddingVertical: 3,
  },
  levelPillText: { color: colors.cyan, fontWeight: "700", fontSize: 12 },
  searchBtn: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: colors.surface,
    alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: colors.surfaceBorder,
  },
  statsRow: { flexDirection: "row", gap: spacing.sm },
  statCard: { flex: 1, alignItems: "center", paddingVertical: spacing.md },
  statValue: { ...typography.h3, color: colors.textPrimary, marginTop: 4 },
  statLabel: { ...typography.small, color: colors.textMuted, marginTop: 2, textAlign: "center" },
  progressCard: {},
  progressRow: { flexDirection: "row", alignItems: "center" },
  progressTitle: { ...typography.bodyBold, color: colors.textPrimary },
  progressSub: { ...typography.caption, color: colors.textSecondary, marginTop: 2 },
  lessonCard: {},
  lessonLabel: { ...typography.small, color: colors.cyan, textTransform: "uppercase", letterSpacing: 1 },
  lessonTitle: { ...typography.h2, color: colors.textPrimary, marginTop: 6 },
  lessonMeta: { ...typography.caption, color: colors.textSecondary, marginTop: 4, marginBottom: spacing.md },
  startButton: { borderRadius: radius.md, overflow: "hidden" },
  startButtonGradient: { paddingVertical: 14, alignItems: "center" },
  startButtonText: { fontWeight: "700", color: "#0B0F1A", fontSize: 15 },
  actionsGrid: { flexDirection: "row", gap: spacing.sm },
  actionItem: { flex: 1 },
  actionCard: { alignItems: "center", paddingVertical: spacing.md, gap: 6 },
  actionText: { ...typography.small, color: colors.textPrimary, textAlign: "center" },
});
