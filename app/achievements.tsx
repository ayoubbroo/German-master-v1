import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { ACHIEVEMENTS } from "@/data/achievements";
import { isRTL } from "@/lib/i18n";
import { colors, spacing, typography } from "@/lib/theme";

export default function AchievementsScreen() {
  const router = useRouter();
  const { state } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.header, rtl && styles.rowReverse]}>
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons name={rtl ? "chevron-forward" : "chevron-back"} size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>{rtl ? "الإنجازات" : "Succès"}</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
          {ACHIEVEMENTS.map((a) => {
            const unlocked = state.achievements[a.id]?.unlocked;
            return (
              <GlassCard
                key={a.id}
                style={[styles.card, !unlocked && styles.cardLocked] as any}
              >
                <View style={[styles.row, rtl && styles.rowReverse]}>
                  <View style={[styles.iconCircle, unlocked && styles.iconCircleUnlocked]}>
                    <Ionicons
                      name={a.icon as any}
                      size={22}
                      color={unlocked ? colors.background : colors.textMuted}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.title, rtl && styles.rtl, !unlocked && styles.dimmed]}>
                      {rtl ? a.title.ar : a.title.fr}
                    </Text>
                    <Text style={[styles.desc, rtl && styles.rtl]}>
                      {rtl ? a.description.ar : a.description.fr}
                    </Text>
                  </View>
                  {unlocked && <Ionicons name="checkmark-circle" size={20} color={colors.success} />}
                </View>
              </GlassCard>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    padding: spacing.lg,
  },
  rowReverse: { flexDirection: "row-reverse" },
  rtl: { writingDirection: "rtl", textAlign: "right" },
  headerTitle: { ...typography.h2, color: colors.textPrimary },
  list: { padding: spacing.lg, paddingTop: 0, gap: spacing.sm, paddingBottom: 60 },
  card: {},
  cardLocked: { opacity: 0.55 },
  row: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  iconCircle: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center", justifyContent: "center",
  },
  iconCircleUnlocked: { backgroundColor: colors.warning },
  title: { ...typography.bodyBold, color: colors.textPrimary },
  dimmed: { color: colors.textMuted },
  desc: { ...typography.caption, color: colors.textSecondary, marginTop: 2 },
});
