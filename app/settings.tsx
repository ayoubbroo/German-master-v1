import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Switch, Alert } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import { useAppStore } from "@/hooks/useAppStore";
import { GlassCard } from "@/components/GlassCard";
import { isRTL, InterfaceLanguage } from "@/lib/i18n";
import { colors, spacing, typography, radius } from "@/lib/theme";

export default function SettingsScreen() {
  const router = useRouter();
  const { state, updateSettings, resetProgress } = useAppStore();
  const lang = state.profile?.interfaceLanguage ?? "fr";
  const rtl = isRTL(lang);

  const handleToggleNotifications = async (value: boolean) => {
    if (value) {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          rtl ? "الإذن مرفوض" : "Permission refusée",
          rtl
            ? "يرجى تفعيل الإشعارات من إعدادات الجهاز."
            : "Merci d'activer les notifications depuis les réglages de l'appareil."
        );
        return;
      }
    }
    await updateSettings({ notificationsEnabled: value });
  };

  const handleReset = () => {
    Alert.alert(
      rtl ? "إعادة تعيين التقدم" : "Réinitialiser la progression",
      rtl
        ? "سيتم حذف جميع بياناتك المحفوظة. هذا الإجراء لا يمكن التراجع عنه."
        : "Toutes tes données seront effacées. Cette action est irréversible.",
      [
        { text: rtl ? "إلغاء" : "Annuler", style: "cancel" },
        {
          text: rtl ? "تأكيد" : "Confirmer",
          style: "destructive",
          onPress: async () => {
            await resetProgress();
            router.replace("/onboarding/welcome");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.header, rtl && styles.rowReverse]}>
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons name={rtl ? "chevron-forward" : "chevron-back"} size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>{rtl ? "الإعدادات" : "Paramètres"}</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.content}>
          <GlassCard style={styles.settingRow}>
            <View style={[styles.rowBetween, rtl && styles.rowReverse]}>
              <Text style={[styles.settingLabel, rtl && styles.rtl]}>
                {rtl ? "الإشعارات" : "Notifications"}
              </Text>
              <Switch
                value={state.settings.notificationsEnabled}
                onValueChange={handleToggleNotifications}
                trackColor={{ true: colors.cyan, false: colors.surfaceBorder }}
              />
            </View>
          </GlassCard>

          <GlassCard style={styles.settingRow}>
            <View style={[styles.rowBetween, rtl && styles.rowReverse]}>
              <Text style={[styles.settingLabel, rtl && styles.rtl]}>
                {rtl ? "الصوت" : "Sons"}
              </Text>
              <Switch
                value={state.settings.soundEnabled}
                onValueChange={(v) => updateSettings({ soundEnabled: v })}
                trackColor={{ true: colors.cyan, false: colors.surfaceBorder }}
              />
            </View>
          </GlassCard>

          <GlassCard style={styles.settingRow}>
            <Text style={[styles.settingLabel, rtl && styles.rtl]}>
              {rtl ? "هدف يومي" : "Objectif quotidien"}
            </Text>
            <Text style={styles.settingValue}>{state.profile?.dailyGoalMinutes} min</Text>
          </GlassCard>

          <Pressable onPress={handleReset}>
            <GlassCard style={[styles.settingRow, styles.dangerRow]}>
              <Text style={styles.dangerText}>
                {rtl ? "إعادة تعيين التقدم" : "Réinitialiser la progression"}
              </Text>
            </GlassCard>
          </Pressable>
        </View>
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
  content: { padding: spacing.lg, gap: spacing.sm },
  settingRow: {},
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  settingLabel: { ...typography.bodyBold, color: colors.textPrimary },
  settingValue: { color: colors.cyan, fontWeight: "700", marginTop: 4 },
  dangerRow: { borderColor: colors.danger, borderWidth: 1 },
  dangerText: { color: colors.danger, fontWeight: "700", textAlign: "center" },
});
