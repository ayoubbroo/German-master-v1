import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { getLessonsByLevel } from "@/data";
import { isLessonUnlocked } from "@/data/levels";
import { LEVELS, LEVEL_LABELS } from "@/data/levels";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";
import { Level } from "@/types";

export default function LearnScreen() {
  const router = useRouter();
  const { state, isLevelUnlocked } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);
  const [selectedLevel, setSelectedLevel] = useState<Level>(state.profile?.currentLevel ?? "A1");

  const lessons = useMemo(() => getLessonsByLevel(selectedLevel), [selectedLevel]);
  const orderedIds = lessons.map((l) => l.id);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <View style={styles.levelTabs}>
          {LEVELS.map((lvl) => {
            const unlocked = isLevelUnlocked(lvl);
            const active = selectedLevel === lvl;
            return (
              <Pressable
                key={lvl}
                onPress={() => unlocked && setSelectedLevel(lvl)}
                style={[
                  styles.levelTab,
                  active && styles.levelTabActive,
                  !unlocked && styles.levelTabLocked,
                ]}
              >
                <Text style={[styles.levelTabText, active && styles.levelTabTextActive]}>
                  {lvl}
                </Text>
                {!unlocked && <Ionicons name="lock-closed" size={10} color={colors.textMuted} />}
              </Pressable>
            );
          })}
        </View>

        <Text style={[styles.levelDesc, rtl && styles.rtl]}>
          {rtl ? LEVEL_LABELS[selectedLevel].ar : LEVEL_LABELS[selectedLevel].fr}
        </Text>

        <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
          {lessons.length === 0 ? (
            <GlassCard style={{ alignItems: "center", paddingVertical: spacing.xl }}>
              <Ionicons name="construct-outline" size={28} color={colors.textMuted} />
              <Text style={{ color: colors.textMuted, marginTop: 8, textAlign: "center" }}>
                {rtl
                  ? "محتوى هذا المستوى قيد الإنشاء وسيُضاف قريباً."
                  : "Le contenu de ce niveau est en cours de création et arrive bientôt."}
              </Text>
            </GlassCard>
          ) : (
            lessons.map((lesson, idx) => {
              const unlocked = isLessonUnlocked(lesson.id, orderedIds, state.lessonProgress);
              const completed = state.lessonProgress[lesson.id]?.completed;
              return (
                <Pressable
                  key={lesson.id}
                  disabled={!unlocked}
                  onPress={() => router.push(`/lesson/${lesson.id}`)}
                >
                  <GlassCard style={[styles.lessonRow, !unlocked && styles.lessonRowLocked]}>
                    <View style={[styles.rowInner, rtl && styles.rowReverse]}>
                      <View
                        style={[
                          styles.numberBadge,
                          completed && styles.numberBadgeDone,
                        ]}
                      >
                        {completed ? (
                          <Ionicons name="checkmark" size={16} color="#0B0F1A" />
                        ) : !unlocked ? (
                          <Ionicons name="lock-closed" size={14} color={colors.textMuted} />
                        ) : (
                          <Text style={styles.numberText}>{idx + 1}</Text>
                        )}
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.lessonTitle, rtl && styles.rtl, !unlocked && styles.dimmed]}>
                          {rtl ? lesson.title.ar : lang === "en" ? lesson.title.de : lesson.title.fr}
                        </Text>
                        <Text style={[styles.lessonMeta, rtl && styles.rtl]}>
                          {lesson.estimatedMinutes} min · +{lesson.xpReward} XP
                        </Text>
                      </View>
                    </View>
                  </GlassCard>
                </Pressable>
              );
            })
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  levelTabs: { flexDirection: "row", paddingHorizontal: spacing.lg, gap: spacing.sm, paddingTop: spacing.sm },
  levelTab: {
    flex: 1, alignItems: "center", paddingVertical: 10, borderRadius: radius.md,
    backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.surfaceBorder, gap: 2,
  },
  levelTabActive: { borderColor: colors.cyan, backgroundColor: "rgba(34,211,238,0.12)" },
  levelTabLocked: { opacity: 0.5 },
  levelTabText: { color: colors.textSecondary, fontWeight: "700", fontSize: 13 },
  levelTabTextActive: { color: colors.cyan },
  levelDesc: { color: colors.textMuted, paddingHorizontal: spacing.lg, marginTop: spacing.sm, marginBottom: spacing.sm },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  list: { padding: spacing.lg, paddingTop: 0, gap: spacing.sm, paddingBottom: 100 },
  lessonRow: { paddingVertical: spacing.sm },
  lessonRowLocked: { opacity: 0.5 },
  rowInner: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  rowReverse: { flexDirection: "row-reverse" },
  numberBadge: {
    width: 32, height: 32, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center", justifyContent: "center",
  },
  numberBadgeDone: { backgroundColor: colors.success },
  numberText: { color: colors.textPrimary, fontWeight: "700", fontSize: 12 },
  lessonTitle: { ...typography.bodyBold, color: colors.textPrimary },
  lessonMeta: { ...typography.small, color: colors.textMuted, marginTop: 2 },
  dimmed: { color: colors.textMuted },
});
