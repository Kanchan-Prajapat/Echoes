import { motion } from "framer-motion";

interface SparklesProps {
  count?: number;
  size?: number;
  color?: string;
  className?: string;

}

export default function Sparkles({

  count = 8,
  size = 8,
  color = "#C084FC",
  className = "",

}: SparklesProps) {
  const sparkles = Array.from(
    { length: count },
    (_, index) => ({

      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: .6 + Math.random() * .8,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,

    })

  );

  return (

    <div

      className={`
        absolute
        inset-0
        pointer-events-none
        ${className}

      `}

    >

      {sparkles.map((sparkle) => (

        <motion.div

          key={sparkle.id}

          initial={{

            opacity: 0,
            scale: .5,

          }}

          animate={{

           opacity: [0.15, 0.55, 0.15],
            scale: [
    sparkle.scale,
    sparkle.scale * 1.15,
    sparkle.scale,
],

           y: [0, -6, 0],

          }}

          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="absolute"

          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        >

          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
          >

            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2Z" />
      </svg>
        </motion.div>
      ))}
    </div>
  );
}