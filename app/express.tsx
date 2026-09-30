import React, { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { ExerciseRenderer } from "@/components/ExerciseRenderer";
import { ALL_LESSONS } from "@/data";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";

type Phase = "vocabulary" | "listening" | "grammar" | "conversation" | "challenge" | "done";
const PHASES: Phase[] = ["vocabulary", "listening", "grammar", "conversation", "challenge"];
const PHASE_SECONDS = 120; // exactly 2 minutes per phase, per spec

const PHASE_LABELS: Record<Phase, { fr: string; ar: string; icon: keyof typeof Ionicons.glyphMap }> = {
  vocabulary: { fr: "Vocabulaire", ar: "المفردات", icon: "book" },
  listening: { fr: "Écoute", ar: "الاستماع", icon: "headset" },
  grammar: { fr: "Grammaire", ar: "القواعد", icon: "school" },
  conversation: { fr: "Conversation", ar: "محادثة", icon: "chatbubbles" },
  challenge: { fr: "Défi", ar: "تحدٍ", icon: "flash" },
  done: { fr: "Terminé", ar: "انتهى", icon: "checkmark" },
};

export default function ExpressScreen() {
  const router = useRouter();
  const { state, logExpressSession } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(PHASE_SECONDS);
  const [done, setDone] = useState(false);

  const phase = PHASES[phaseIndex];

  // Pull a random lesson's content to power the express drill
  const sourceLesson = useMemo(
    () => ALL_LESSONS[Math.floor(Math.random() * ALL_LESSONS.length)],
    []
  );

  useEffect(() => {
    if (done) return;
    if (secondsLeft <= 0) {
      if (phaseIndex < PHASES.length - 1) {
        setPhaseIndex((p) => p + 1);
        setSecondsLeft(PHASE_SECONDS);
      } else {
        finishSession();
      }
      return;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, phaseIndex, done]);

  const finishSession = async () => {
    setDone(true);
    await logExpressSession();
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progress = ((phaseIndex * PHASE_SECONDS + (PHASE_SECONDS - secondsLeft)) / (PHASE_SECONDS * PHASES.length));

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0B0F1A", "#0F1424"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.header, rtl && styles.rowReverse]}>
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>10 MIN EXPRESS</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>

        {done ? (
          <View style={styles.doneContainer}>
            <LinearGradient colors={colors.gradientPrimary} style={styles.doneCircle}>
              <Ionicons name="flash" size={36} color="#0B0F1A" />
            </LinearGradient>
            <Text style={styles.doneTitle}>
              {rtl ? "أحسنت! أكملت التدريب السريع" : "Bravo ! Session express terminée"}
            </Text>
            <Text style={styles.doneXp}>+20 XP</Text>
            <GradientButton
              title={rtl ? "العودة" : "Retour"}
              onPress={() => router.back()}
              style={{ marginTop: spacing.xl, width: "100%" }}
            />
          </View>
        ) : (
          <View style={styles.phaseArea}>
            <View style={styles.timerRow}>
              <Ionicons name={PHASE_LABELS[phase].icon} size={22} color={colors.cyan} />
              <Text style={styles.phaseLabel}>
                {rtl ? PHASE_LABELS[phase].ar : PHASE_LABELS[phase].fr}
              </Text>
              <Text style={styles.timer}>
                {minutes}:{seconds.toString().padStart(2, "0")}
              </Text>
            </View>

            <GlassCard style={styles.phaseContent}>
              {phase === "vocabulary" && (
                <View style={styles.centeredContent}>
                  <Text style={styles.bigWord}>{sourceLesson.title.de}</Text>
                  <Text style={styles.subText}>
                    {rtl
                      ? "راجع المفردات الأساسية لهذا الموضوع بسرعة"
                      : "Révise rapidement le vocabulaire clé de ce thème"}
                  </Text>
                </View>
              )}
              {phase === "listening" && (
                <View style={styles.centeredContent}>
                  <Ionicons name="headset" size={40} color={colors.violet} />
                  <Text style={styles.subText}>{sourceLesson.listeningText}</Text>
                </View>
              )}
              {phase === "grammar" && (
                <View style={styles.centeredContent}>
                  <Text style={styles.subText}>
                    {rtl
                      ? "راجع قاعدة نحوية واحدة تعلمتها مؤخراً في ذهنك."
                      : "Repasse mentalement une règle de grammaire récente."}
                  </Text>
                </View>
              )}
              {phase === "conversation" && (
                <View style={styles.centeredContent}>
                  <Ionicons name="chatbubbles" size={40} color={colors.cyan} />
                  <Text style={styles.subText}>
                    {rtl
                      ? "تخيل حواراً قصيراً باستخدام ما تعلمته وتدرب بصوت عالٍ."
                      : "Imagine un court dialogue avec ce que tu as appris et entraîne-toi à voix haute."}
                  </Text>
                </View>
              )}
              {phase === "challenge" && sourceLesson.exercises[0] && (
                <ExerciseRenderer
                  exercise={sourceLesson.exercises[0]}
                  lang={lang}
                  onResult={() => {}}
                />
              )}
            </GlassCard>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: spacing.lg, paddingTop: spacing.sm,
  },
  rowReverse: { flexDirection: "row-reverse" },
  headerTitle: { ...typography.h3, color: colors.textPrimary },
  progressTrack: {
    height: 4, backgroundColor: colors.surface, marginHorizontal: spacing.lg, marginTop: spacing.sm,
    borderRadius: 2, overflow: "hidden",
  },
  progressFill: { height: "100%", backgroundColor: colors.cyan },
  phaseArea: { flex: 1, padding: spacing.lg, gap: spacing.lg },
  timerRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  phaseLabel: { ...typography.h3, color: colors.textPrimary, flex: 1 },
  timer: { ...typography.h2, color: colors.cyan, fontVariant: ["tabular-nums"] },
  phaseContent: { flex: 1, justifyContent: "center" },
  centeredContent: { alignItems: "center", gap: spacing.md, paddingVertical: spacing.xl },
  bigWord: { ...typography.h1, color: colors.textPrimary },
  subText: { color: colors.textSecondary, textAlign: "center", lineHeight: 22 },
  doneContainer: { flex: 1, alignItems: "center", justifyContent: "center", padding: spacing.lg },
  doneCircle: { width: 88, height: 88, borderRadius: 44, alignItems: "center", justifyContent: "center", marginBottom: spacing.lg },
  doneTitle: { ...typography.h2, color: colors.textPrimary, textAlign: "center" },
  doneXp: { color: colors.cyan, fontWeight: "700", marginTop: spacing.sm, fontSize: 18 },
});
