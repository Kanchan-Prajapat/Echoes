export const colors = {
  light: {
    primary: "#5B4BFF",
    primaryHover: "#4B3CF0",

    background: "#F8F9FC",
    surface: "#FFFFFF",
    surfaceSecondary: "#F4F5FA",

    textPrimary: "#1F2937",
    textSecondary: "#6B7280",

    border: "#E5E7EB",

    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",

    shadow: "rgba(15,23,42,0.08)",
  },

  dark: {
    primary: "#7C6CFF",
    primaryHover: "#8A7BFF",

    background: "#0F172A",
    surface: "#1E293B",
    surfaceSecondary: "#273449",

    textPrimary: "#F8FAFC",
    textSecondary: "#CBD5E1",

    border: "#334155",

    success: "#4ADE80",
    warning: "#FBBF24",
    error: "#F87171",

    shadow: "rgba(0,0,0,0.35)",
  },
};

export type ThemeMode = keyof typeof colors;