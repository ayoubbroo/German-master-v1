import React from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "@/lib/theme";

// This screen is only ever visible for a split second while the root
// layout (app/_layout.tsx) determines whether to send the user to
// onboarding or straight into the tabs, based on persisted state.
export default function IndexScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={colors.cyan} />
    </View>
  );
}
