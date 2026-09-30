import React, { useMemo } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { ProgressRing } from "@/components/ProgressRing";
import { getLessonsByLevel } from "@/data";
import { LEVELS } from "@/data/levels";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography } from "@/lib/theme";

export default function ProgressScreen() {
  const { state } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  const wordsLearned = Object.keys(state.vocabProgress).length;
  const wordsMastered = Object.values(state.vocabProgress).filter(
    (v) => v.status === "MASTERED"
  ).length;
  const lessonsCompleted = Object.values(state.lessonProgress).filter(
    (l) => l.completed
  ).length;
  const totalAttempts = Object.values(state.lessonProgress).reduce(
    (sum, l) => sum + l.attempts,
    0
  );
  const avgScore =
    Object.values(state.lessonProgress).length > 0
      ? Math.round(
          Object.values(state.lessonProgress).reduce(
            (sum, l) => sum + l.bestScorePercent,
            0
          ) / Object.values(state.lessonProgress).length
        )
      : 0;
  const totalMinutes = state.dailyActivity.reduce((sum, d) => sum + d.minutesSpent, 0);

  const levelStats = useMemo(
    () =>
      LEVELS.map((lvl) => {
        const lessons = getLessonsByLevel(lvl);
        const done = lessons.filter((l) => state.lessonProgress[l.id]?.completed).length;
        return { level: lvl, done, total: lessons.length };
      }),
    [state.lessonProgress]
  );

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={[styles.header, rtl && styles.rtl]}>
            {rtl ? "تقدمك" : "Ta progression"}
          </Text>

          <View style={styles.statsGrid}>
            <StatBox icon="star" color={colors.cyan} value={state.xp.totalXp} label="XP" />
            <StatBox icon="trending-up" color={colors.violet} value={state.xp.xpLevel} label={rtl ? "المستوى" : "Niveau XP"} />
            <StatBox icon="flame" color={colors.warning} value={state.streak.currentStreak} label={rtl ? "سلسلة حالية" : "Série actuelle"} />
            <StatBox icon="trophy" color={colors.success} value={state.streak.longestStreak} label={rtl ? "أطول سلسلة" : "Meilleure série"} />
            <StatBox icon="book" color={colors.cyan} value={lessonsCompleted} label={rtl ? "دروس مكتملة" : "Leçons faites"} />
            <StatBox icon="library" color={colors.blue} value={wordsLearned} label={rtl ? "كلمات" : "Mots vus"} />
            <StatBox icon="ribbon" color={colors.violet} value={wordsMastered} label={rtl ? "متقنة" : "Mots maîtrisés"} />
            <StatBox icon="chatbubbles" color={colors.success} value={state.conversationsCompleted.length} label={rtl ? "محادثات" : "Conversations"} />
            <StatBox icon="checkmark-circle" color={colors.cyan} value={`${avgScore}%`} label={rtl ? "دقة الاختبارات" : "Précision quiz"} />
            <StatBox icon="time" color={colors.textSecondary} value={`${totalMinutes}m`} label={rtl ? "وقت التعلم" : "Temps d'étude"} />
          </View>

          <Text style={[styles.sectionTitle, rtl && styles.rtl]}>
            {rtl ? "التقدم حسب المستوى" : "Progression par niveau"}
          </Text>
          <View style={styles.levelsRow}>
            {levelStats.map((s) => (
              <GlassCard key={s.level} style={styles.levelCard}>
                <ProgressRing
                  progress={s.total > 0 ? s.done / s.total : 0}
                  size={64}
                  strokeWidth={6}
                  centerText={s.level}
                />
                <Text style={styles.levelCardText}>
                  {s.done}/{s.total}
                </Text>
              </GlassCard>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function StatBox({
  icon,
  color,
  value,
  label,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  value: string | number;
  label: string;
}) {
  return (
    <GlassCard style={styles.statBox}>
      <Ionicons name={icon} size={20} color={color} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: 100, gap: spacing.md },
  header: { ...typography.h1, color: colors.textPrimary },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  statsGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  statBox: { width: "31%", alignItems: "center", paddingVertical: spacing.md, gap: 4 },
  statValue: { ...typography.h3, color: colors.textPrimary },
  statLabel: { ...typography.small, color: colors.textMuted, textAlign: "center" },
  sectionTitle: { ...typography.h3, color: colors.textPrimary, marginTop: spacing.md },
  levelsRow: { flexDirection: "row", gap: spacing.sm },
  levelCard: { flex: 1, alignItems: "center", paddingVertical: spacing.md, gap: 6 },
  levelCardText: { color: colors.textSecondary, fontSize: 12, fontWeight: "700" },
});
