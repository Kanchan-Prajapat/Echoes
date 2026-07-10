import { motion } from "framer-motion";

import GlassCard from "./GlassCard";
import Mountains from "./Mountains";

interface Props {

  width?: number;
  height?: number;

}

export default function PhotoCard({

  width = 180,
  height = 220,

}: Props) {

  return (

    <GlassCard
      width={width}
      height={height}
      rotate={-12}
    >

      {/* Background */}

      <div className="absolute inset-3 overflow-hidden rounded-2xl">

        {/* Sky */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#B794F6] via-[#7C3AED] to-[#3B0764]" />

        {/* Sun */}

        <motion.div

          animate={{

            scale: [1, 1.15, 1],

          }}

          transition={{

            duration: 4,
            repeat: Infinity,

          }}

          className="
            absolute
            left-5
            top-5
            h-5
            w-5
            rounded-full
            bg-white
            shadow-[0_0_15px_rgba(255,255,255,.9)]  "

        />

        {/* Moon */}

        <div

          className="
            absolute
            right-6
            top-5
            h-7
            w-7
            rounded-full
            shadow-[-4px_4px_0_0_white]
            opacity-80 "

        />

        {/* Mountains */}

        <Mountains />

      </div>
    </GlassCard>

  );

}