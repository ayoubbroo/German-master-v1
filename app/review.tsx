import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { ALL_VOCABULARY } from "@/data";
import { getDueVocabIds } from "@/lib/srsEngine";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography } from "@/lib/theme";

export default function ReviewScreen() {
  const router = useRouter();
  const { state, reviewWord } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  const dueIds = useMemo(() => {
    const ids = getDueVocabIds(state.vocabProgress);
    // Include a handful of brand-new words too, so review is never empty
    const newWords = ALL_VOCABULARY.filter((v) => !state.vocabProgress[v.id])
      .slice(0, 10)
      .map((v) => v.id);
    return Array.from(new Set([...ids, ...newWords])).slice(0, 15);
  }, [state.vocabProgress]);

  const dueWords = dueIds
    .map((id) => ALL_VOCABULARY.find((v) => v.id === id))
    .filter(Boolean) as typeof ALL_VOCABULARY;

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionDone, setSessionDone] = useState(dueWords.length === 0);
  const [correctCount, setCorrectCount] = useState(0);

  const current = dueWords[index];

  const handleAnswer = (knewIt: boolean) => {
    if (!current) return;
    reviewWord(current.id, knewIt);
    if (knewIt) setCorrectCount((c) => c + 1);
    setShowAnswer(false);
    if (index < dueWords.length - 1) {
      setIndex(index + 1);
    } else {
      setSessionDone(true);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0B0F1A", "#0F1424"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.header, rtl && styles.rowReverse]}>
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>
            {rtl ? "المراجعة الذكية" : "Révision intelligente"}
          </Text>
          <View style={{ width: 24 }} />
        </View>

        {sessionDone ? (
          <View style={styles.doneContainer}>
            <LinearGradient colors={colors.gradientPrimary} style={styles.doneCircle}>
              <Ionicons name="checkmark" size={36} color="#0B0F1A" />
            </LinearGradient>
            <Text style={styles.doneTitle}>
              {dueWords.length === 0
                ? rtl
                  ? "لا توجد كلمات للمراجعة الآن!"
                  : "Rien à réviser pour l'instant !"
                : rtl
                ? `راجعت ${dueWords.length} كلمة`
                : `${dueWords.length} mots révisés`}
            </Text>
            {dueWords.length > 0 && (
              <Text style={styles.doneSub}>
                {correctCount}/{dueWords.length} {rtl ? "صحيحة" : "correctes"}
              </Text>
            )}
            <GradientButton
              title={rtl ? "العودة" : "Retour"}
              onPress={() => router.back()}
              style={{ marginTop: spacing.xl, width: "100%" }}
            />
          </View>
        ) : (
          <View style={styles.reviewArea}>
            <Text style={styles.counter}>
              {index + 1} / {dueWords.length}
            </Text>
            <Pressable onPress={() => setShowAnswer(!showAnswer)}>
              <GlassCard style={styles.flashcard}>
                <Text style={styles.germanWord}>
                  {current?.article ? `${current.article} ` : ""}
                  {current?.german}
                </Text>
                <Pressable
                  onPress={() =>
                    current && Speech.speak(current.german, { language: "de-DE", rate: 0.85 })
                  }
                  style={styles.speakBtn}
                >
                  <Ionicons name="volume-medium" size={20} color={colors.cyan} />
                </Pressable>

                {showAnswer ? (
                  <View style={styles.answerArea}>
                    <Text style={[styles.translation, rtl && styles.rtl]}>
                      {rtl ? current?.arabic : current?.french}
                    </Text>
                    <Text style={styles.example}>{current?.exampleSentence.de}</Text>
                  </View>
                ) : (
                  <Text style={styles.tapHint}>
                    {rtl ? "اضغط لعرض الترجمة" : "Touche pour voir la traduction"}
                  </Text>
                )}
              </GlassCard>
            </Pressable>

            {showAnswer && (
              <View style={styles.answerButtons}>
                <Pressable
                  onPress={() => handleAnswer(false)}
                  style={[styles.answerBtn, styles.answerBtnWrong]}
                >
                  <Ionicons name="close" size={20} color={colors.danger} />
                  <Text style={[styles.answerBtnText, { color: colors.danger }]}>
                    {rtl ? "لم أكن أعرف" : "Je ne savais pas"}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => handleAnswer(true)}
                  style={[styles.answerBtn, styles.answerBtnRight]}
                >
                  <Ionicons name="checkmark" size={20} color={colors.success} />
                  <Text style={[styles.answerBtnText, { color: colors.success }]}>
                    {rtl ? "كنت أعرف" : "Je savais"}
                  </Text>
                </Pressable>
              </View>
            )}
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
  rtl: { writingDirection: "rtl", textAlign: "right" },
  headerTitle: { ...typography.h3, color: colors.textPrimary },
  reviewArea: { flex: 1, padding: spacing.lg, justifyContent: "center", gap: spacing.lg },
  counter: { color: colors.textMuted, textAlign: "center", fontWeight: "600" },
  flashcard: { alignItems: "center", paddingVertical: spacing.xxl, gap: spacing.sm },
  germanWord: { ...typography.h1, color: colors.textPrimary },
  speakBtn: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: "rgba(34,211,238,0.1)",
    alignItems: "center", justifyContent: "center", marginTop: spacing.sm,
  },
  answerArea: { marginTop: spacing.md, alignItems: "center", gap: 6 },
  translation: { ...typography.h3, color: colors.cyan },
  example: { color: colors.textSecondary, fontStyle: "italic" },
  tapHint: { color: colors.textMuted, marginTop: spacing.md },
  answerButtons: { flexDirection: "row", gap: spacing.md },
  answerBtn: {
    flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6,
    paddingVertical: 14, borderRadius: 16, borderWidth: 1.5,
  },
  answerBtnWrong: { borderColor: colors.danger, backgroundColor: "rgba(248,113,113,0.1)" },
  answerBtnRight: { borderColor: colors.success, backgroundColor: "rgba(52,211,153,0.1)" },
  answerBtnText: { fontWeight: "700" },
  doneContainer: { flex: 1, alignItems: "center", justifyContent: "center", padding: spacing.lg },
  doneCircle: { width: 88, height: 88, borderRadius: 44, alignItems: "center", justifyContent: "center", marginBottom: spacing.lg },
  doneTitle: { ...typography.h2, color: colors.textPrimary, textAlign: "center" },
  doneSub: { color: colors.textSecondary, marginTop: spacing.sm },
});
