import { motion } from "framer-motion";

interface OrbitProps {
  size?: number;
  rotate?: number;
  duration?: number;
  stroke?: string;
  strokeWidth?: number;
  dashed?: boolean;
  opacity?: number;
  className?: string;
}

export default function Orbit({
  size = 320,
  rotate = 0,
  duration = 22,
  stroke = "#7C3AED",
  strokeWidth = 1.2,
  dashed = false,
  opacity = 0.16,
  className = "",
}: OrbitProps) {
  return (
    <motion.svg
      viewBox="0 0 300 300"
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        rotate: rotate + 360,
      }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
    >
  <ellipse
    cx="150"
    cy="150"
    rx="120"
    ry="52"
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeOpacity={opacity}
    strokeDasharray={dashed ? "8 8" : undefined}
/>
    </motion.svg>
  );
}