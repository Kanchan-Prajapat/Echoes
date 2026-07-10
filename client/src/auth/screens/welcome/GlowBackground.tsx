import { motion } from "framer-motion";

export default function GlowBackground() {

  return (

    <>

      {/* Main Glow */}

      <motion.div

        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.35, 0.18],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          left-1/2
          top-1/2

          h-[420px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-violet-600/30

          blur-[150px]
        "

      />

      {/* Bottom Beam */}

      <motion.div

        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.9, 1, 0.9],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
        }}

        className="
        absolute

bottom-0

left-1/2

w-[500px]

h-[500px]

blur-[180px]

bg-violet-600/15

          blur-3xl
        "

      />

    </>

  );

}