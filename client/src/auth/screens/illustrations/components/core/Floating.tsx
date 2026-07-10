import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingProps {

  children: ReactNode;
  x?: number;
  y?: number;
  rotate?: number;
  duration?: number;
  delay?: number;
  hover?: boolean;
  className?: string;

}

export default function Floating({

  children,
  x = 0,
  y = 0,
  rotate = 0,
  duration = 4,
  delay = 0,
  hover = true,
  className = "",

}: FloatingProps) {

  return (

    <motion.div

      initial={{
        x,
        y,
        rotate,
      }}

      animate={{
        x,

        y: [
          y,
          y - 12,
          y,
        ],

        rotate: [
          rotate,
          rotate + 2,
          rotate,
        ],
      }}

      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      whileHover={
        hover
          ? {
              scale: 1.05,
              y: y - 4,
            }
          : undefined
      }

      className={`
        absolute
        pointer-events-auto
        ${className}
      `}
    >
      {children}
    </motion.div>
  );

}