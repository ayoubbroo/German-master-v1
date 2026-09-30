import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { getConversationById } from "@/data";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";

interface HistoryEntry {
  speaker: "npc" | "user";
  de: string;
  translation: string;
}

export default function ConversationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { state, completeConversation } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  const scenario = getConversationById(id);
  const [currentNodeId, setCurrentNodeId] = useState(scenario?.startNodeId ?? "");
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    if (!scenario) return [];
    const startNode = scenario.nodes.find((n) => n.id === scenario.startNodeId);
    if (startNode?.speaker === "npc" && startNode.npcLine) {
      return [
        {
          speaker: "npc",
          de: startNode.npcLine.de,
          translation: rtl ? startNode.npcLine.ar : startNode.npcLine.fr,
        },
      ];
    }
    return [];
  });
  const [finished, setFinished] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);

  if (!scenario) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: colors.textPrimary, padding: spacing.lg }}>
          Conversation introuvable.
        </Text>
      </SafeAreaView>
    );
  }

  const currentNode = scenario.nodes.find((n) => n.id === currentNodeId);

  const handleChoice = (choiceId: string) => {
    const choice = currentNode?.choices?.find((c) => c.id === choiceId);
    if (!choice) return;

    const newHistory: HistoryEntry[] = [
      ...history,
      { speaker: "user", de: choice.de, translation: rtl ? choice.ar : choice.fr },
    ];
    setEarnedXp((x) => x + (choice.xp ?? 0));

    if (choice.nextNodeId === null) {
      setHistory(newHistory);
      finishConversation();
      return;
    }

    const nextNode = scenario.nodes.find((n) => n.id === choice.nextNodeId);
    if (nextNode?.speaker === "npc" && nextNode.npcLine) {
      newHistory.push({
        speaker: "npc",
        de: nextNode.npcLine.de,
        translation: rtl ? nextNode.npcLine.ar : nextNode.npcLine.fr,
      });
      Speech.speak(nextNode.npcLine.de, { language: "de-DE", rate: 0.85 });

      // Find what follows the npc line (usually a user_choice node)
      const followUpId = scenario.nodes.find(
        (n) => n.id === `${nextNode.id}-choice`
      )?.id;
      setHistory(newHistory);
      setCurrentNodeId(followUpId ?? nextNode.id);
    } else {
      setHistory(newHistory);
      setCurrentNodeId(choice.nextNodeId);
    }
  };

  const finishConversation = async () => {
    setFinished(true);
    await completeConversation(scenario.id, scenario.xpReward);
  };

  const title = rtl ? scenario.title.ar : scenario.title.fr;

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0B0F1A", "#0F1424"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.header, rtl && styles.rowReverse]}>
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons name="close" size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={[styles.headerTitle, rtl && styles.rtl]}>{title}</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView contentContainerStyle={styles.chatArea} showsVerticalScrollIndicator={false}>
          {history.map((h, i) => (
            <View
              key={i}
              style={[
                styles.bubbleRow,
                h.speaker === "user" ? styles.bubbleRowUser : styles.bubbleRowNpc,
              ]}
            >
              <GlassCard
                style={[
                  styles.bubble,
                  h.speaker === "user" ? styles.bubbleUser : styles.bubbleNpc,
                ]}
              >
                <Text style={styles.bubbleDe}>{h.de}</Text>
                <Text style={[styles.bubbleTranslation, rtl && styles.rtl]}>
                  {h.translation}
                </Text>
              </GlassCard>
            </View>
          ))}

          {finished && (
            <View style={styles.finishedBox}>
              <LinearGradient colors={colors.gradientPrimary} style={styles.finishedCircle}>
                <Ionicons name="checkmark" size={32} color="#0B0F1A" />
              </LinearGradient>
              <Text style={styles.finishedTitle}>
                {rtl ? "أحسنت! أكملت المحادثة" : "Bravo ! Conversation terminée"}
              </Text>
              <Text style={styles.finishedXp}>+{scenario.xpReward} XP</Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {finished ? (
            <GradientButton
              title={rtl ? "العودة" : "Retour"}
              onPress={() => router.back()}
            />
          ) : (
            currentNode?.choices?.map((choice) => (
              <Pressable
                key={choice.id}
                onPress={() => handleChoice(choice.id)}
                style={styles.choiceButton}
              >
                <Text style={styles.choiceDe}>{choice.de}</Text>
                <Text style={[styles.choiceTranslation, rtl && styles.rtl]}>
                  {rtl ? choice.ar : choice.fr}
                </Text>
              </Pressable>
            ))
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: spacing.lg, paddingTop: spacing.sm, paddingBottom: spacing.sm,
  },
  rowReverse: { flexDirection: "row-reverse" },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  headerTitle: { ...typography.h3, color: colors.textPrimary },
  chatArea: { padding: spacing.lg, gap: spacing.sm, paddingBottom: spacing.xl },
  bubbleRow: { flexDirection: "row" },
  bubbleRowNpc: { justifyContent: "flex-start" },
  bubbleRowUser: { justifyContent: "flex-end" },
  bubble: { maxWidth: "80%" },
  bubbleNpc: { borderColor: colors.violet, borderWidth: 1 },
  bubbleUser: { borderColor: colors.cyan, borderWidth: 1 },
  bubbleDe: { color: colors.textPrimary, fontWeight: "600", fontSize: 15 },
  bubbleTranslation: { color: colors.textMuted, fontSize: 12, marginTop: 4 },
  finishedBox: { alignItems: "center", paddingTop: spacing.xl },
  finishedCircle: {
    width: 72, height: 72, borderRadius: 36, alignItems: "center", justifyContent: "center",
    marginBottom: spacing.md,
  },
  finishedTitle: { ...typography.h3, color: colors.textPrimary, textAlign: "center" },
  finishedXp: { color: colors.cyan, fontWeight: "700", marginTop: 4 },
  footer: { padding: spacing.lg, gap: spacing.sm },
  choiceButton: {
    borderWidth: 1, borderColor: colors.surfaceBorder, backgroundColor: colors.surface,
    borderRadius: radius.md, padding: spacing.md,
  },
  choiceDe: { color: colors.textPrimary, fontWeight: "600", fontSize: 15 },
  choiceTranslation: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
});
