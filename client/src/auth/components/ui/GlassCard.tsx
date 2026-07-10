import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.45,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-2xl

        shadow-[0_20px_60px_rgba(0,0,0,.35)]

        ${className}
      `}
    >

      {/* Top Glow */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px

          bg-gradient-to-r

          from-transparent
          via-violet-400/70
          to-transparent
        "
      />

      {/* Soft Background Glow */}

      <div
        className="
          absolute

          -right-20
          -top-20

          h-48
          w-48

          rounded-full

          bg-violet-500/10

          blur-3xl
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          p-8
        "
      >
        {children}
      </div>

    </motion.div>
  );
}