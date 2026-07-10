import { motion } from "framer-motion";

interface Props {
  totalEchoes: number;
}

export default function ProfileHeader({
  totalEchoes,
}: Props) {

  return (

    <motion.section

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .45,
      }}

      className="text-center"

    >

      {/* Avatar */}

      <motion.div

        whileHover={{
          scale: 1.05,
        }}

        className="
          mx-auto

          flex
          h-28
          w-28

          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-violet-500
          to-purple-600

          text-6xl

          shadow-xl
        "

      >

        😊

      </motion.div>

      {/* Name */}

      <h1
        className="
          mt-6

          text-3xl

          font-black

          text-gray-900
        "
      >

        Kanchan

      </h1>

      {/* Subtitle */}

      <p
        className="
          mt-2

          text-violet-600

          font-semibold
        "
      >

        Digital Memory Shelf

      </p>

      {/* Quote */}

      <p
        className="
          mx-auto

          mt-6

          max-w-md

          leading-relaxed

          text-gray-500
        "
      >

        Life isn't measured by the number of breaths we take,
        but by the moments that take our breath away.

      </p>

      {/* Counter */}

      <motion.div

        whileHover={{
          scale: 1.02,
        }}

        className="
          mx-auto

          mt-8

          inline-flex

          items-center

          gap-3

          rounded-full

          bg-violet-50

          px-6
          py-3

          shadow-sm
        "

      >

        <span className="text-2xl">

          ❤️

        </span>

        <span
          className="
            text-lg

            font-bold
          "
        >

          {totalEchoes}

          Memories

        </span>

      </motion.div>

    </motion.section>

  );

}