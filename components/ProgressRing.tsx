import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Defs, LinearGradient as SvgGradient, Stop } from "react-native-svg";
import { colors } from "@/lib/theme";

interface Props {
  progress: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
  label?: string;
  centerText?: string;
}

export function ProgressRing({
  progress,
  size = 90,
  strokeWidth = 8,
  label,
  centerText,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(1, progress));
  const strokeDashoffset = circumference * (1 - clamped);

  return (
    <View style={styles.container}>
      <View style={{ width: size, height: size }}>
        <Svg width={size} height={size}>
          <Defs>
            <SvgGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor={colors.cyan} />
              <Stop offset="0.5" stopColor={colors.blue} />
              <Stop offset="1" stopColor={colors.violet} />
            </SvgGradient>
          </Defs>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#ringGradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation={-90}
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
        <View style={[StyleSheet.absoluteFillObject, styles.centerContent]}>
          <Text style={styles.centerText}>
            {centerText ?? `${Math.round(clamped * 100)}%`}
          </Text>
        </View>
      </View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  centerContent: { alignItems: "center", justifyContent: "center" },
  centerText: { color: colors.textPrimary, fontWeight: "700", fontSize: 16 },
  label: { color: colors.textSecondary, fontSize: 12, marginTop: 6 },
});
