import { motion } from "framer-motion";

interface GlowProps {
  size?: number;
  color?: string;
  opacity?: number;
  blur?: number;
  className?: string;
}

export default function Glow({
size = 520,
opacity = 0.07,
blur = 220,
  color = "#8B5CF6",
  className = "",
}: GlowProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [opacity, opacity * 1.5, opacity],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}