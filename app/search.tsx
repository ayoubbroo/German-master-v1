import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { searchContent } from "@/data";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";

export default function SearchScreen() {
  const router = useRouter();
  const { state } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchContent(query), [query]);
  const hasResults = results.vocab.length + results.grammar.length + results.lessons.length > 0;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.header, rtl && styles.rowReverse]}>
          <View style={styles.inputWrapper}>
            <Ionicons name="search" size={18} color={colors.textMuted} />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder={rtl ? "ابحث عن كلمة، قاعدة، أو درس..." : "Chercher un mot, une règle, une leçon..."}
              placeholderTextColor={colors.textMuted}
              style={[styles.input, rtl && styles.rtlInput]}
              autoFocus
            />
          </View>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.cancelText}>{rtl ? "إلغاء" : "Annuler"}</Text>
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.results} keyboardShouldPersistTaps="handled">
          {query.length > 0 && !hasResults && (
            <Text style={styles.emptyText}>
              {rtl ? "لا توجد نتائج" : "Aucun résultat"}
            </Text>
          )}

          {results.vocab.length > 0 && (
            <>
              <Text style={[styles.sectionTitle, rtl && styles.rtl]}>
                {rtl ? "المفردات" : "Vocabulaire"}
              </Text>
              {results.vocab.map((v) => (
                <GlassCard key={v.id} style={{ marginBottom: spacing.sm }}>
                  <Text style={styles.resultDe}>{v.german}</Text>
                  <Text style={[styles.resultTr, rtl && styles.rtl]}>
                    {rtl ? v.arabic : v.french}
                  </Text>
                </GlassCard>
              ))}
            </>
          )}

          {results.grammar.length > 0 && (
            <>
              <Text style={[styles.sectionTitle, rtl && styles.rtl]}>
                {rtl ? "القواعد" : "Grammaire"}
              </Text>
              {results.grammar.map((g) => (
                <GlassCard key={g.id} style={{ marginBottom: spacing.sm }}>
                  <Text style={styles.resultDe}>{g.title.de}</Text>
                  <Text style={[styles.resultTr, rtl && styles.rtl]}>
                    {rtl ? g.title.ar : g.title.fr}
                  </Text>
                </GlassCard>
              ))}
            </>
          )}

          {results.lessons.length > 0 && (
            <>
              <Text style={[styles.sectionTitle, rtl && styles.rtl]}>
                {rtl ? "الدروس" : "Leçons"}
              </Text>
              {results.lessons.map((l) => (
                <Pressable key={l.id} onPress={() => router.push(`/lesson/${l.id}`)}>
                  <GlassCard style={{ marginBottom: spacing.sm }}>
                    <Text style={styles.resultDe}>{l.title.de}</Text>
                    <Text style={[styles.resultTr, rtl && styles.rtl]}>
                      {rtl ? l.title.ar : l.title.fr} · {l.level}
                    </Text>
                  </GlassCard>
                </Pressable>
              ))}
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { flexDirection: "row", alignItems: "center", gap: spacing.sm, padding: spacing.lg },
  rowReverse: { flexDirection: "row-reverse" },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  inputWrapper: {
    flex: 1, flexDirection: "row", alignItems: "center", gap: spacing.sm,
    backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.surfaceBorder,
    borderRadius: radius.md, paddingHorizontal: spacing.md, height: 44,
  },
  input: { flex: 1, color: colors.textPrimary, fontSize: 15 },
  rtlInput: { textAlign: "right", writingDirection: "rtl" },
  cancelText: { color: colors.cyan, fontWeight: "600" },
  results: { padding: spacing.lg, paddingTop: 0, gap: spacing.sm },
  emptyText: { color: colors.textMuted, textAlign: "center", marginTop: spacing.xl },
  sectionTitle: { ...typography.bodyBold, color: colors.textPrimary, marginTop: spacing.md, marginBottom: spacing.xs },
  resultDe: { ...typography.bodyBold, color: colors.textPrimary },
  resultTr: { ...typography.caption, color: colors.textSecondary, marginTop: 2 },
});
