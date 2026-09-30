import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { ALL_VOCABULARY } from "@/data";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";
import { VocabCategory } from "@/types";

const CATEGORIES: (VocabCategory | "all" | "favorites")[] = [
  "all", "favorites", "daily_life", "food", "family", "travel", "shopping",
  "health", "transport", "work", "home", "communication", "weather",
];

const CATEGORY_LABELS_FR: Record<string, string> = {
  all: "Tous", favorites: "Favoris", daily_life: "Quotidien", food: "Nourriture",
  family: "Famille", travel: "Voyage", shopping: "Achats", health: "Santé",
  transport: "Transport", work: "Travail", home: "Maison", communication: "Communication",
  weather: "Météo",
};
const CATEGORY_LABELS_AR: Record<string, string> = {
  all: "الكل", favorites: "المفضلة", daily_life: "يومي", food: "طعام",
  family: "عائلة", travel: "سفر", shopping: "تسوق", health: "صحة",
  transport: "نقل", work: "عمل", home: "منزل", communication: "تواصل",
  weather: "طقس",
};

export default function VocabularyScreen() {
  const { state, toggleFavoriteWord } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return ALL_VOCABULARY;
    if (filter === "favorites") {
      return ALL_VOCABULARY.filter((v) => state.vocabProgress[v.id]?.isFavorite);
    }
    return ALL_VOCABULARY.filter((v) => v.category === filter);
  }, [filter, state.vocabProgress]);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <Text style={[styles.header, rtl && styles.rtl]}>
          {rtl ? "المفردات" : "Vocabulaire"}
        </Text>

        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(c) => c}
          contentContainerStyle={styles.chipRow}
          renderItem={({ item }) => {
            const active = filter === item;
            const label = rtl ? CATEGORY_LABELS_AR[item] : CATEGORY_LABELS_FR[item];
            return (
              <Pressable onPress={() => setFilter(item)} style={[styles.chip, active && styles.chipActive]}>
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
              </Pressable>
            );
          }}
        />

        <FlatList
          data={filtered}
          keyExtractor={(v) => v.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => {
            const progress = state.vocabProgress[item.id];
            const isFav = progress?.isFavorite;
            return (
              <GlassCard style={styles.wordCard}>
                <View style={[styles.wordRow, rtl && styles.rowReverse]}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.germanWord}>
                      {item.article ? `${item.article} ` : ""}
                      {item.german}
                    </Text>
                    <Text style={styles.pronunciation}>[{item.pronunciation}]</Text>
                    <Text style={[styles.translation, rtl && styles.rtl]}>
                      {rtl ? item.arabic : item.french}
                    </Text>
                    <Text style={[styles.example, rtl && styles.rtl]} numberOfLines={1}>
                      {item.exampleSentence.de}
                    </Text>
                  </View>
                  <Pressable onPress={() => toggleFavoriteWord(item.id)} hitSlop={10}>
                    <Ionicons
                      name={isFav ? "heart" : "heart-outline"}
                      size={20}
                      color={isFav ? colors.danger : colors.textMuted}
                    />
                  </Pressable>
                </View>
                {progress?.status ? (
                  <View style={styles.statusPill}>
                    <Text style={styles.statusPillText}>{progress.status}</Text>
                  </View>
                ) : null}
              </GlassCard>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { ...typography.h2, color: colors.textPrimary, paddingHorizontal: spacing.lg, paddingTop: spacing.sm },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  chipRow: { paddingHorizontal: spacing.lg, gap: spacing.sm, paddingVertical: spacing.md },
  chip: {
    paddingHorizontal: 14, paddingVertical: 8, borderRadius: radius.full,
    backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.surfaceBorder,
  },
  chipActive: { backgroundColor: "rgba(34,211,238,0.15)", borderColor: colors.cyan },
  chipText: { color: colors.textSecondary, fontSize: 13, fontWeight: "600" },
  chipTextActive: { color: colors.cyan },
  list: { padding: spacing.lg, paddingTop: 0, gap: spacing.sm, paddingBottom: 100 },
  wordCard: {},
  wordRow: { flexDirection: "row", alignItems: "flex-start" },
  rowReverse: { flexDirection: "row-reverse" },
  germanWord: { ...typography.h3, color: colors.textPrimary },
  pronunciation: { ...typography.caption, color: colors.textMuted, marginTop: 2 },
  translation: { ...typography.body, color: colors.cyan, marginTop: 4 },
  example: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
  statusPill: {
    alignSelf: "flex-start", marginTop: spacing.sm, backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: radius.full, paddingHorizontal: 10, paddingVertical: 3,
  },
  statusPillText: { color: colors.textMuted, fontSize: 10, fontWeight: "700" },
});
