import { motion } from "framer-motion";

import DarkLogo from "@/assets/logos/logo-dark.svg";
import LightLogo from "@/assets/logos/logo-light.svg";

interface Props {

  size?: number;

  glow?: boolean;

  animated?: boolean;

  dark?: boolean;

  className?: string;

}

export default function Logo({

  size = 72,
  glow = true,
  animated = false,
  dark = true,
  className = "",

}: Props) {

  return (

    <motion.div
      animate={
        animated
          ? {
              rotate: [0, 6, -6, 0],
              scale: [1, 1.04, 1],
            }
          : undefined
      }

      transition={{
        duration: 6,
        repeat: Infinity,
      }}

      className={`
        relative
        flex
        items-center
        justify-center
        ${className}
      `}

      style={{

        width: size,
        height: size,
      }}

    >

      {/* Glow */}

      {glow && (

        <motion.div

          animate={{
            scale: [1, 1.15, 1],
            opacity: [.25, .45, .25],
          }}

          transition={{

            duration: 3,
            repeat: Infinity,

          }}

          className="

            absolute
            inset-0
            rounded-full
            bg-violet-500
            blur-2xl  "
        />
      )}

      {/* Logo */}

      <img

        src={
          dark
            ? DarkLogo
            : LightLogo
        }

        alt="Echoes"
        draggable={false}
        className="
          relative
          z-10
          select-none
          object-contain "

        style={{
          width: size,
          height: size,
        }}
      />

    </motion.div>
  );
}