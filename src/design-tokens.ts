// KodNest Premium Build System – Design Tokens
// All visual decisions are centralized here to enforce coherence.

export const colors = {
  background: "#F7F6F3", // off-white
  text: "#111111", // primary text
  accent: "#8B0000", // deep red
  success: "#4F6F52", // muted green
  warning: "#B08A3E" // muted amber
} as const;

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
  xl: 64
} as const;

export const radii = {
  sm: 4,
  md: 6,
  lg: 8
} as const;

export const durations = {
  standard: 180
} as const;

export const easing = {
  standard: "ease-in-out"
} as const;

