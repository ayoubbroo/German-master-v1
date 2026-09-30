export const colors = {
  background: "#0B0F1A",
  backgroundAlt: "#0F1424",
  surface: "rgba(255,255,255,0.06)",
  surfaceBorder: "rgba(255,255,255,0.12)",
  cyan: "#22D3EE",
  blue: "#3B82F6",
  violet: "#A855F7",
  gradientPrimary: ["#22D3EE", "#3B82F6", "#A855F7"] as const,
  textPrimary: "#F8FAFC",
  textSecondary: "#94A3B8",
  textMuted: "#64748B",
  success: "#34D399",
  warning: "#FBBF24",
  danger: "#F87171",
  cardShadow: "#000000",
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  full: 999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  h1: { fontSize: 28, fontWeight: "700" as const },
  h2: { fontSize: 22, fontWeight: "700" as const },
  h3: { fontSize: 18, fontWeight: "600" as const },
  body: { fontSize: 15, fontWeight: "400" as const },
  bodyBold: { fontSize: 15, fontWeight: "600" as const },
  caption: { fontSize: 13, fontWeight: "400" as const },
  small: { fontSize: 11, fontWeight: "500" as const },
};
