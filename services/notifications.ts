import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function requestNotificationPermission(): Promise<boolean> {
  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === "granted") return true;
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
}

export async function scheduleDailyReminder(hour: number, minute: number) {
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "German Master",
      body: "C'est l'heure de ta leçon d'allemand du jour ! 🇩🇪",
    },
    trigger: { hour, minute, repeats: true },
  });
}

export async function scheduleReviewReminder() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "German Master",
      body: "Des mots t'attendent pour la révision intelligente ! 🔁",
    },
    trigger: { seconds: 60 * 60 * 24, repeats: true }, // daily
  });
}

export async function scheduleStreakReminder() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "German Master",
      body: "Ne casse pas ta série ! Une leçon rapide suffit aujourd'hui. 🔥",
    },
    trigger: { hour: 20, minute: 0, repeats: true },
  });
}

export async function cancelAllReminders() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
