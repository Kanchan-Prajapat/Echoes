import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {

  children: ReactNode;
  width?: number;
  height?: number;
  radius?: number;
  rotate?: number;
  className?: string;

}

export default function GlassCard({

  children,
  width = 180,
  height = 220,
  radius = 28,
  rotate = 0,
  className = "",

}: GlassCardProps) {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
        rotate: rotate + 2,
      }}

      transition={{
        duration: .25,
      }}

      className={`
        relative
        overflow-hidden
        border
        border-white/15
        bg-gradient-to-br
        from-[#A78BFA]
        via-[#6D28D9]
        to-[#2E1065]
        shadow-[0_25px_60px_rgba(0,0,0,.45)]

        ${className}
      `}

      style={{
        width,
        height,
        borderRadius: radius,
        rotate,
      }}
    >

      {/* Glass Highlight */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white/20
          via-transparent
          to-black/10
        "
      />

      {/* Shine */}

      <motion.div

        animate={{
          x: ["-120%", "140%"],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute
          inset-y-0
          w-12
          rotate-12
          bg-white/20
          blur-xl
        "
      />

      {/* Inner Shadow */}

      <div
        className="
          absolute
          inset-0
          rounded-[inherit]
          shadow-[inset_0_-10px_25px_rgba(0,0,0,.25)]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-center
          justify-center
        "
      >
        {children}
      </div>
    </motion.div>
  );
}