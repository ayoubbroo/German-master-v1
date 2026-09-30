import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { ExerciseRenderer } from "@/components/ExerciseRenderer";
import { getLessonById, getVocabByIds, getGrammarByIds } from "@/data";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";

type Step = "situation" | "vocabulary" | "listening" | "grammar" | "exercises" | "mission" | "result";

const STEP_ORDER: Step[] = ["situation", "vocabulary", "listening", "grammar", "exercises", "mission", "result"];

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { state, completeLesson, reviewWord } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  const lesson = useMemo(() => getLessonById(id), [id]);
  const vocabItems = useMemo(() => (lesson ? getVocabByIds(lesson.vocabIds) : []), [lesson]);
  const grammarTopics = useMemo(() => (lesson ? getGrammarByIds(lesson.grammarTopicIds) : []), [lesson]);

  const [stepIndex, setStepIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  if (!lesson) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: colors.textPrimary, padding: spacing.lg }}>
          Leçon introuvable.
        </Text>
      </SafeAreaView>
    );
  }

  const visibleSteps = STEP_ORDER.filter((s) => {
    if (s === "grammar" && grammarTopics.length === 0) return false;
    if (s === "vocabulary" && vocabItems.length === 0) return false;
    return true;
  });
  const currentStep = visibleSteps[stepIndex];

  const goNext = () => {
    if (stepIndex < visibleSteps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handleExerciseResult = (correct: boolean) => {
    if (correct) setCorrectCount((c) => c + 1);
    lesson.vocabIds.forEach((vid) => reviewWord(vid, correct));
    setTimeout(() => {
      if (exerciseIndex < lesson.exercises.length - 1) {
        setExerciseIndex(exerciseIndex + 1);
      } else {
        goNext();
      }
    }, 900);
  };

  const finishLesson = async () => {
    const scorePercent = lesson.exercises.length
      ? Math.round((correctCount / lesson.exercises.length) * 100)
      : 100;
    await completeLesson(lesson.id, scorePercent, lesson.xpReward);
    setStepIndex(visibleSteps.indexOf("result"));
  };

  const title = rtl ? lesson.title.ar : lang === "en" ? lesson.title.de : lesson.title.fr;

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0B0F1A", "#0F1424"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </Pressable>
          <View style={styles.progressBarTrack}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${((stepIndex + 1) / visibleSteps.length) * 100}%` },
              ]}
            />
          </View>
          <Text style={styles.xpBadge}>+{lesson.xpReward} XP</Text>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {currentStep === "situation" && (
            <View style={styles.stepBlock}>
              <Text style={[styles.title, rtl && styles.rtl]}>{title}</Text>
              <GlassCard>
                <Text style={[styles.situationTitle, rtl && styles.rtl]}>
                  {rtl ? lesson.situation.title.ar : lesson.situation.title.fr}
                </Text>
                <Text style={[styles.situationDesc, rtl && styles.rtl]}>
                  {rtl ? lesson.situation.description.ar : lesson.situation.description.fr}
                </Text>
              </GlassCard>
              <Text style={[styles.sectionLabel, rtl && styles.rtl]}>
                {rtl ? "أهداف الدرس" : "Objectifs de la leçon"}
              </Text>
              {(rtl ? lesson.objectives.ar : lesson.objectives.fr).map((obj, i) => (
                <View key={i} style={[styles.objectiveRow, rtl && styles.rowReverse]}>
                  <Ionicons name="checkmark-circle-outline" size={18} color={colors.cyan} />
                  <Text style={[styles.objectiveText, rtl && styles.rtl]}>{obj}</Text>
                </View>
              ))}
            </View>
          )}

          {currentStep === "vocabulary" && (
            <View style={styles.stepBlock}>
              <Text style={[styles.stepHeading, rtl && styles.rtl]}>
                {rtl ? "المفردات" : "Vocabulaire"}
              </Text>
              {vocabItems.map((v) => (
                <GlassCard key={v.id} style={styles.vocabCard}>
                  <View style={[styles.vocabRow, rtl && styles.rowReverse]}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.vocabGerman}>
                        {v.article ? `${v.article} ` : ""}
                        {v.german}
                      </Text>
                      <Text style={styles.vocabPron}>[{v.pronunciation}]</Text>
                      <Text style={[styles.vocabTranslation, rtl && styles.rtl]}>
                        {rtl ? v.arabic : v.french}
                      </Text>
                      <Text style={[styles.vocabExample, rtl && styles.rtl]}>
                        {v.exampleSentence.de}
                      </Text>
                    </View>
                    <Pressable
                      onPress={() => Speech.speak(v.german, { language: "de-DE", rate: 0.85 })}
                      style={styles.speakBtn}
                    >
                      <Ionicons name="volume-medium" size={18} color={colors.cyan} />
                    </Pressable>
                  </View>
                </GlassCard>
              ))}
            </View>
          )}

          {currentStep === "listening" && (
            <View style={styles.stepBlock}>
              <Text style={[styles.stepHeading, rtl && styles.rtl]}>
                {rtl ? "الاستماع والنطق" : "Écoute et prononciation"}
              </Text>
              <GlassCard style={{ alignItems: "center", paddingVertical: spacing.xl }}>
                <Pressable
                  onPress={() => Speech.speak(lesson.listeningText, { language: "de-DE", rate: 0.85 })}
                  style={styles.bigPlayButton}
                >
                  <Ionicons name="volume-high" size={36} color={colors.cyan} />
                </Pressable>
                <Text style={styles.listeningText}>{lesson.listeningText}</Text>
                <Pressable
                  onPress={() => Speech.speak(lesson.listeningText, { language: "de-DE", rate: 0.5 })}
                  style={styles.slowBtn}
                >
                  <Text style={styles.slowBtnText}>
                    {rtl ? "تشغيل ببطء" : "Écouter lentement"}
                  </Text>
                </Pressable>
              </GlassCard>

              <Text style={[styles.sectionLabel, rtl && styles.rtl]}>
                {rtl ? "كرر بصوت عالٍ" : "Répète à voix haute"}
              </Text>
              {lesson.speakingPrompts.map((p, i) => (
                <GlassCard key={i} style={styles.speakingPromptCard}>
                  <View style={[styles.vocabRow, rtl && styles.rowReverse]}>
                    <Text style={styles.speakingPromptText}>{p}</Text>
                    <Pressable onPress={() => Speech.speak(p, { language: "de-DE", rate: 0.85 })}>
                      <Ionicons name="mic-outline" size={20} color={colors.violet} />
                    </Pressable>
                  </View>
                </GlassCard>
              ))}
            </View>
          )}

          {currentStep === "grammar" && (
            <View style={styles.stepBlock}>
              <Text style={[styles.stepHeading, rtl && styles.rtl]}>
                {rtl ? "القواعد" : "Grammaire"}
              </Text>
              {grammarTopics.map((g) => (
                <GlassCard key={g.id} style={{ marginBottom: spacing.sm }}>
                  <Text style={[styles.grammarTitle, rtl && styles.rtl]}>
                    {rtl ? g.title.ar : g.title.fr}
                  </Text>
                  <Text style={[styles.grammarExplanation, rtl && styles.rtl]}>
                    {rtl ? g.explanation.ar : g.explanation.fr}
                  </Text>
                  {g.examples.map((ex, i) => (
                    <View key={i} style={styles.grammarExample}>
                      <Text style={styles.grammarExampleDe}>{ex.de}</Text>
                      <Text style={[styles.grammarExampleTr, rtl && styles.rtl]}>
                        {rtl ? ex.ar : ex.fr}
                      </Text>
                    </View>
                  ))}
                </GlassCard>
              ))}
            </View>
          )}

          {currentStep === "exercises" && lesson.exercises[exerciseIndex] && (
            <View style={styles.stepBlock}>
              <View style={[styles.exerciseHeader, rtl && styles.rowReverse]}>
                <Text style={styles.stepHeading}>
                  {rtl ? "التمارين" : "Exercices"}
                </Text>
                <Text style={styles.exerciseCounter}>
                  {exerciseIndex + 1}/{lesson.exercises.length}
                </Text>
              </View>
              <ExerciseRenderer
                key={lesson.exercises[exerciseIndex].id}
                exercise={lesson.exercises[exerciseIndex]}
                lang={lang}
                onResult={handleExerciseResult}
              />
            </View>
          )}

          {currentStep === "mission" && (
            <View style={styles.stepBlock}>
              <Text style={[styles.stepHeading, rtl && styles.rtl]}>
                {rtl ? "مهمة عملية" : "Mission pratique"}
              </Text>
              <GlassCard>
                <Ionicons name="rocket-outline" size={28} color={colors.violet} />
                <Text style={[styles.missionText, rtl && styles.rtl]}>
                  {rtl ? lesson.practicalMission.ar : lesson.practicalMission.fr}
                </Text>
              </GlassCard>

              {lesson.conversationScenarioId && (
                <Pressable
                  onPress={() => router.push(`/conversation/${lesson.conversationScenarioId}`)}
                >
                  <GlassCard style={styles.convPromo}>
                    <Ionicons name="chatbubbles" size={22} color={colors.cyan} />
                    <Text style={[styles.convPromoText, rtl && styles.rtl]}>
                      {rtl ? "جرب المحادثة التفاعلية" : "Essaie la conversation interactive"}
                    </Text>
                  </GlassCard>
                </Pressable>
              )}
            </View>
          )}

          {currentStep === "result" && (
            <View style={[styles.stepBlock, { alignItems: "center", paddingTop: spacing.xxl }]}>
              <LinearGradient colors={colors.gradientPrimary} style={styles.resultCircle}>
                <Ionicons name="trophy" size={40} color="#0B0F1A" />
              </LinearGradient>
              <Text style={styles.resultTitle}>
                {rtl ? "أكملت الدرس!" : "Leçon terminée !"}
              </Text>
              <Text style={styles.resultXp}>+{lesson.xpReward} XP</Text>
              <GlassCard style={{ width: "100%", marginTop: spacing.lg }}>
                <Text style={[styles.reviewNoteText, rtl && styles.rtl]}>
                  {rtl ? lesson.reviewNote.ar : lesson.reviewNote.fr}
                </Text>
              </GlassCard>
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {currentStep === "result" ? (
            <GradientButton
              title={rtl ? "العودة للرئيسية" : "Retour à l'accueil"}
              onPress={() => router.replace("/(tabs)/home")}
            />
          ) : currentStep === "mission" ? (
            <GradientButton
              title={rtl ? "إنهاء الدرس" : "Terminer la leçon"}
              onPress={finishLesson}
            />
          ) : currentStep === "exercises" ? null : (
            <GradientButton title={rtl ? "التالي" : "Suivant"} onPress={goNext} />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row", alignItems: "center", gap: spacing.md,
    paddingHorizontal: spacing.lg, paddingTop: spacing.sm,
  },
  progressBarTrack: { flex: 1, height: 6, backgroundColor: colors.surface, borderRadius: 3, overflow: "hidden" },
  progressBarFill: { height: "100%", backgroundColor: colors.cyan, borderRadius: 3 },
  xpBadge: { color: colors.cyan, fontWeight: "700", fontSize: 12 },
  content: { padding: spacing.lg, paddingBottom: 40, gap: spacing.md },
  stepBlock: { gap: spacing.md },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  rowReverse: { flexDirection: "row-reverse" },
  title: { ...typography.h1, color: colors.textPrimary },
  situationTitle: { ...typography.h3, color: colors.cyan },
  situationDesc: { ...typography.body, color: colors.textSecondary, marginTop: 6, lineHeight: 22 },
  sectionLabel: { ...typography.bodyBold, color: colors.textPrimary, marginTop: spacing.sm },
  objectiveRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  objectiveText: { color: colors.textSecondary, flex: 1 },
  stepHeading: { ...typography.h2, color: colors.textPrimary },
  vocabCard: { marginBottom: spacing.sm },
  vocabRow: { flexDirection: "row", alignItems: "center" },
  vocabGerman: { ...typography.h3, color: colors.textPrimary },
  vocabPron: { ...typography.caption, color: colors.textMuted, marginTop: 2 },
  vocabTranslation: { ...typography.body, color: colors.cyan, marginTop: 4 },
  vocabExample: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
  speakBtn: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: "rgba(34,211,238,0.1)",
    alignItems: "center", justifyContent: "center",
  },
  bigPlayButton: {
    width: 88, height: 88, borderRadius: 44, backgroundColor: "rgba(34,211,238,0.1)",
    borderWidth: 1, borderColor: colors.cyan, alignItems: "center", justifyContent: "center",
    marginBottom: spacing.md,
  },
  listeningText: { color: colors.textPrimary, fontSize: 16, textAlign: "center", lineHeight: 24 },
  slowBtn: { marginTop: spacing.md },
  slowBtnText: { color: colors.violet, fontWeight: "600" },
  speakingPromptCard: { marginBottom: spacing.sm },
  speakingPromptText: { color: colors.textPrimary, fontSize: 16, flex: 1 },
  grammarTitle: { ...typography.h3, color: colors.violet },
  grammarExplanation: { color: colors.textSecondary, marginTop: 6, lineHeight: 22 },
  grammarExample: { marginTop: spacing.sm, borderLeftWidth: 2, borderLeftColor: colors.cyan, paddingLeft: spacing.sm },
  grammarExampleDe: { color: colors.textPrimary, fontWeight: "600" },
  grammarExampleTr: { color: colors.textMuted, fontSize: 13, marginTop: 2 },
  exerciseHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  exerciseCounter: { color: colors.textMuted, fontSize: 13, fontWeight: "600" },
  missionText: { color: colors.textPrimary, marginTop: spacing.sm, lineHeight: 22 },
  convPromo: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  convPromoText: { color: colors.textPrimary, fontWeight: "600", flex: 1 },
  resultCircle: {
    width: 96, height: 96, borderRadius: 48, alignItems: "center", justifyContent: "center",
    marginBottom: spacing.lg,
  },
  resultTitle: { ...typography.h1, color: colors.textPrimary },
  resultXp: { ...typography.h2, color: colors.cyan, marginTop: spacing.sm },
  reviewNoteText: { color: colors.textSecondary, lineHeight: 22 },
  footer: { padding: spacing.lg },
});
