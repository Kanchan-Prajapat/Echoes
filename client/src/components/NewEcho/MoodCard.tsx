import { motion } from "framer-motion";

import Card from "@/styles/Card";

import { Mood } from "@/types/moods";

interface Props {
  mood: Mood;

  selected: boolean;

  onClick: () => void;
}

export default function MoodCard({
  mood,
  selected,
  onClick,
}: Props) {

  return (

    <motion.button

      whileHover={{ y: -3,}}

      whileTap={{ scale: .94, }}

      transition={{ type: "spring", stiffness: 300, }}

      onClick={onClick}

      className="w-full"

    >

      <Card

        className={`
          text-center

          transition-all

          ${
            selected
              ? "border-violet-500 bg-violet-50 shadow-lg"
              : ""
          }
        `}

      >

        <motion.div

          animate={{
            scale: selected
              ? 1.2
              : 1,
          }}

          className="text-4xl"

        >

          {mood.emoji}

        </motion.div>

        <p

          className={`
            mt-3 text-sm font-semibold

            ${
              selected
                ? "text-violet-700"
                : "text-gray-700"
            }
          `}

        >

          {mood.label}

        </p>

      </Card>

    </motion.button>

  );

}