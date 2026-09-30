import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import { Exercise } from "@/types";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { colors, spacing, typography, radius } from "@/lib/theme";
import { isRTL, InterfaceLanguage } from "@/lib/i18n";

interface Props {
  exercise: Exercise;
  lang: InterfaceLanguage;
  onResult: (correct: boolean) => void;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function ExerciseRenderer({ exercise, lang, onResult }: Props) {
  const rtl = lang === "ar";
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  switch (exercise.type) {
    case "multiple_choice":
      return (
        <MultipleChoiceEx exercise={exercise} rtl={rtl} onResult={onResult} />
      );
    case "fill_blank":
      return <FillBlankEx exercise={exercise} rtl={rtl} onResult={onResult} />;
    case "matching":
      return <MatchingEx exercise={exercise} onResult={onResult} />;
    case "translation":
      return <TranslationEx exercise={exercise} rtl={rtl} onResult={onResult} />;
    case "sentence_order":
      return <SentenceOrderEx exercise={exercise} onResult={onResult} />;
    case "choose_response":
      return <ChooseResponseEx exercise={exercise} rtl={rtl} onResult={onResult} />;
    case "listen_choose":
      return <ListenChooseEx exercise={exercise} onResult={onResult} />;
    default:
      return null;
  }
}

function OptionButton({
  label,
  state,
  onPress,
}: {
  label: string;
  state: "idle" | "selected" | "correct" | "wrong";
  onPress: () => void;
}) {
  const bg =
    state === "correct" ? "rgba(52,211,153,0.15)" : state === "wrong" ? "rgba(248,113,113,0.15)" : colors.surface;
  const border =
    state === "correct" ? colors.success : state === "wrong" ? colors.danger : colors.surfaceBorder;
  return (
    <Pressable onPress={onPress} style={[styles.option, { backgroundColor: bg, borderColor: border }]}>
      <Text style={styles.optionText}>{label}</Text>
    </Pressable>
  );
}

function MultipleChoiceEx({
  exercise,
  rtl,
  onResult,
}: {
  exercise: Extract<Exercise, { type: "multiple_choice" }>;
  rtl: boolean;
  onResult: (c: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const handleSelect = (idx: number) => {
    if (done) return;
    setSelected(idx);
    setDone(true);
    onResult(idx === exercise.correctIndex);
  };

  return (
    <View style={styles.exerciseContainer}>
      <Text style={[styles.prompt, rtl && styles.rtl]}>
        {rtl ? exercise.prompt.ar : exercise.prompt.fr}
      </Text>
      <View style={styles.optionsList}>
        {exercise.options.map((opt, idx) => (
          <OptionButton
            key={idx}
            label={opt}
            state={
              !done
                ? "idle"
                : idx === exercise.correctIndex
                ? "correct"
                : idx === selected
                ? "wrong"
                : "idle"
            }
            onPress={() => handleSelect(idx)}
          />
        ))}
      </View>
    </View>
  );
}

function FillBlankEx({
  exercise,
  rtl,
  onResult,
}: {
  exercise: Extract<Exercise, { type: "fill_blank" }>;
  rtl: boolean;
  onResult: (c: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);
  const [correct, setCorrect] = useState(false);

  const parts = exercise.sentenceWithBlank.split("___");

  const check = () => {
    const c = value.trim().toLowerCase() === exercise.correctAnswer.toLowerCase();
    setCorrect(c);
    setDone(true);
    onResult(c);
  };

  return (
    <View style={styles.exerciseContainer}>
      <View style={styles.fillSentence}>
        <Text style={styles.sentenceText}>
          {parts[0]}
          <Text style={styles.blankUnderline}>
            {done ? exercise.correctAnswer : "____"}
          </Text>
          {parts[1]}
        </Text>
      </View>
      {!done && (
        <>
          <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.textInput}
            placeholder="..."
            placeholderTextColor={colors.textMuted}
            autoCapitalize="none"
          />
          {exercise.hint && (
            <Text style={[styles.hint, rtl && styles.rtl]}>
              💡 {rtl ? exercise.hint.ar : exercise.hint.fr}
            </Text>
          )}
          <GradientButton title="Vérifier" onPress={check} disabled={!value.trim()} />
        </>
      )}
      {done && (
        <Text style={[styles.feedback, { color: correct ? colors.success : colors.danger }]}>
          {correct ? "✓ Correct !" : `✗ Réponse : ${exercise.correctAnswer}`}
        </Text>
      )}
    </View>
  );
}

function MatchingEx({
  exercise,
  onResult,
}: {
  exercise: Extract<Exercise, { type: "matching" }>;
  onResult: (c: boolean) => void;
}) {
  const shuffledTranslations = useMemo(
    () => shuffle(exercise.pairs.map((p) => p.translation)),
    [exercise]
  );
  const [selectedGerman, setSelectedGerman] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, string>>({});
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  const allMatched = Object.keys(matched).length === exercise.pairs.length;

  React.useEffect(() => {
    if (allMatched) onResult(true);
  }, [allMatched]);

  const handleTranslationPress = (translation: string) => {
    if (!selectedGerman) return;
    const pair = exercise.pairs.find((p) => p.german === selectedGerman);
    if (pair && pair.translation === translation) {
      setMatched((m) => ({ ...m, [selectedGerman]: translation }));
      setSelectedGerman(null);
    } else {
      setWrongFlash(translation);
      setTimeout(() => setWrongFlash(null), 500);
    }
  };

  return (
    <View style={styles.exerciseContainer}>
      <View style={styles.matchingRow}>
        <View style={styles.matchingCol}>
          {exercise.pairs.map((p) => (
            <Pressable
              key={p.german}
              disabled={Boolean(matched[p.german])}
              onPress={() => setSelectedGerman(p.german)}
              style={[
                styles.matchChip,
                selectedGerman === p.german && styles.matchChipSelected,
                matched[p.german] && styles.matchChipDone,
              ]}
            >
              <Text style={styles.matchChipText}>{p.german}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.matchingCol}>
          {shuffledTranslations.map((tr) => {
            const isUsed = Object.values(matched).includes(tr);
            return (
              <Pressable
                key={tr}
                disabled={isUsed}
                onPress={() => handleTranslationPress(tr)}
                style={[
                  styles.matchChip,
                  isUsed && styles.matchChipDone,
                  wrongFlash === tr && styles.matchChipWrong,
                ]}
              >
                <Text style={styles.matchChipText}>{tr}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      {allMatched && <Text style={styles.feedbackSuccess}>✓ Parfait !</Text>}
    </View>
  );
}

function TranslationEx({
  exercise,
  rtl,
  onResult,
}: {
  exercise: Extract<Exercise, { type: "translation" }>;
  rtl: boolean;
  onResult: (c: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);
  const [correct, setCorrect] = useState(false);

  const check = () => {
    const normalized = value.trim().toLowerCase().replace(/[.!?]/g, "");
    const c = exercise.acceptedAnswers.some(
      (a) => a.toLowerCase().replace(/[.!?]/g, "") === normalized
    );
    setCorrect(c);
    setDone(true);
    onResult(c);
  };

  return (
    <View style={styles.exerciseContainer}>
      <Text style={[styles.prompt, rtl && styles.rtl]}>{exercise.sourceText}</Text>
      {!done ? (
        <>
          <TextInput
            value={value}
            onChangeText={setValue}
            style={[styles.textInput, { minHeight: 60 }]}
            placeholder="..."
            placeholderTextColor={colors.textMuted}
            multiline
          />
          <GradientButton title="Vérifier" onPress={check} disabled={!value.trim()} />
        </>
      ) : (
        <Text style={[styles.feedback, { color: correct ? colors.success : colors.danger }]}>
          {correct ? "✓ Correct !" : `✗ Réponse : ${exercise.acceptedAnswers[0]}`}
        </Text>
      )}
    </View>
  );
}

function SentenceOrderEx({
  exercise,
  onResult,
}: {
  exercise: Extract<Exercise, { type: "sentence_order" }>;
  onResult: (c: boolean) => void;
}) {
  const [available, setAvailable] = useState<string[]>(() => shuffle(exercise.words));
  const [chosen, setChosen] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [correct, setCorrect] = useState(false);

  const pick = (word: string, idx: number) => {
    if (done) return;
    setChosen((c) => [...c, word]);
    setAvailable((a) => a.filter((_, i) => i !== idx));
  };

  const undo = () => {
    if (done || chosen.length === 0) return;
    const last = chosen[chosen.length - 1];
    setChosen((c) => c.slice(0, -1));
    setAvailable((a) => [...a, last]);
  };

  const check = () => {
    const c = chosen.join(" ") === exercise.correctOrder.join(" ");
    setCorrect(c);
    setDone(true);
    onResult(c);
  };

  return (
    <View style={styles.exerciseContainer}>
      <Pressable onPress={undo} style={styles.sentenceBuildArea}>
        <Text style={styles.sentenceBuildText}>
          {chosen.length > 0 ? chosen.join(" ") : "Appuie sur les mots ci-dessous..."}
        </Text>
      </Pressable>
      <View style={styles.wordBank}>
        {available.map((w, idx) => (
          <Pressable key={`${w}-${idx}`} onPress={() => pick(w, idx)} style={styles.wordChip}>
            <Text style={styles.wordChipText}>{w}</Text>
          </Pressable>
        ))}
      </View>
      {!done ? (
        <GradientButton
          title="Vérifier"
          onPress={check}
          disabled={available.length > 0}
        />
      ) : (
        <Text style={[styles.feedback, { color: correct ? colors.success : colors.danger }]}>
          {correct ? "✓ Correct !" : `✗ Ordre correct : ${exercise.correctOrder.join(" ")}`}
        </Text>
      )}
    </View>
  );
}

function ChooseResponseEx({
  exercise,
  rtl,
  onResult,
}: {
  exercise: Extract<Exercise, { type: "choose_response" }>;
  rtl: boolean;
  onResult: (c: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const handleSelect = (idx: number) => {
    if (done) return;
    setSelected(idx);
    setDone(true);
    onResult(exercise.options[idx].correct);
  };

  return (
    <View style={styles.exerciseContainer}>
      <GlassCard style={styles.situationCard}>
        <Text style={[styles.situationText, rtl && styles.rtl]}>
          {rtl ? exercise.situation.ar : exercise.situation.fr}
        </Text>
      </GlassCard>
      <View style={styles.optionsList}>
        {exercise.options.map((opt, idx) => (
          <OptionButton
            key={idx}
            label={opt.text}
            state={
              !done
                ? "idle"
                : opt.correct
                ? "correct"
                : idx === selected
                ? "wrong"
                : "idle"
            }
            onPress={() => handleSelect(idx)}
          />
        ))}
      </View>
    </View>
  );
}

function ListenChooseEx({
  exercise,
  onResult,
}: {
  exercise: Extract<Exercise, { type: "listen_choose" }>;
  onResult: (c: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const play = () => {
    Speech.speak(exercise.audioText, { language: "de-DE", rate: 0.9 });
  };

  const handleSelect = (idx: number) => {
    if (done) return;
    setSelected(idx);
    setDone(true);
    onResult(idx === exercise.correctIndex);
  };

  return (
    <View style={styles.exerciseContainer}>
      <Pressable onPress={play} style={styles.playButton}>
        <Ionicons name="volume-high" size={28} color={colors.cyan} />
        <Text style={styles.playButtonText}>Écouter</Text>
      </Pressable>
      <View style={styles.optionsList}>
        {exercise.options.map((opt, idx) => (
          <OptionButton
            key={idx}
            label={opt}
            state={
              !done
                ? "idle"
                : idx === exercise.correctIndex
                ? "correct"
                : idx === selected
                ? "wrong"
                : "idle"
            }
            onPress={() => handleSelect(idx)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: { gap: spacing.md },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  prompt: { ...typography.h3, color: colors.textPrimary },
  optionsList: { gap: spacing.sm },
  option: { borderWidth: 1.5, borderRadius: radius.md, padding: spacing.md },
  optionText: { ...typography.bodyBold, color: colors.textPrimary },
  fillSentence: { paddingVertical: spacing.sm },
  sentenceText: { ...typography.h3, color: colors.textPrimary, lineHeight: 28 },
  blankUnderline: { color: colors.cyan, textDecorationLine: "underline" },
  textInput: {
    backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.surfaceBorder,
    borderRadius: radius.md, padding: spacing.md, color: colors.textPrimary, fontSize: 16,
  },
  hint: { color: colors.textMuted, fontSize: 13 },
  feedback: { fontWeight: "700", fontSize: 15 },
  feedbackSuccess: { color: colors.success, fontWeight: "700", fontSize: 15 },
  matchingRow: { flexDirection: "row", gap: spacing.md },
  matchingCol: { flex: 1, gap: spacing.sm },
  matchChip: {
    borderWidth: 1, borderColor: colors.surfaceBorder, backgroundColor: colors.surface,
    borderRadius: radius.md, padding: spacing.sm, alignItems: "center",
  },
  matchChipSelected: { borderColor: colors.cyan },
  matchChipDone: { backgroundColor: "rgba(52,211,153,0.15)", borderColor: colors.success, opacity: 0.6 },
  matchChipWrong: { borderColor: colors.danger },
  matchChipText: { color: colors.textPrimary, fontSize: 13, textAlign: "center" },
  sentenceBuildArea: {
    minHeight: 60, borderWidth: 1, borderColor: colors.surfaceBorder, borderRadius: radius.md,
    padding: spacing.md, justifyContent: "center",
  },
  sentenceBuildText: { color: colors.textPrimary, fontSize: 16 },
  wordBank: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  wordChip: {
    backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.surfaceBorder,
    borderRadius: radius.sm, paddingHorizontal: 12, paddingVertical: 8,
  },
  wordChipText: { color: colors.textPrimary, fontSize: 14 },
  situationCard: {},
  situationText: { color: colors.textSecondary, fontStyle: "italic" },
  playButton: {
    alignSelf: "center", alignItems: "center", justifyContent: "center",
    width: 100, height: 100, borderRadius: 50, backgroundColor: "rgba(34,211,238,0.1)",
    borderWidth: 1, borderColor: colors.cyan,
  },
  playButtonText: { color: colors.cyan, marginTop: 4, fontSize: 12, fontWeight: "600" },
});
