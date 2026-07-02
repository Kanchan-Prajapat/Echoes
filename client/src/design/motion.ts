export const motion = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
  },

  ease: [0.22, 1, 0.36, 1] as const,

  spring: {
    type: "spring",
    stiffness: 280,
    damping: 24,
  },
};