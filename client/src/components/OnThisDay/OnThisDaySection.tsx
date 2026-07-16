import { motion } from "framer-motion";

import { Echo } from "@/types/echo";

import useOnThisDay from "@/hooks/useOnThisDay";
import OnThisDayCard from "./OnThisDayCard";

interface Props {

  echoes: Echo[];

  onOpenEcho: (echo: Echo) => void;

}

export default function OnThisDaySection({

  echoes,

  onOpenEcho,

}: Props) {

  const memories = useOnThisDay(echoes);

  if (memories.length === 0) return null;

  return (

    <motion.section

      initial={{
        opacity: 0,
        y: 25,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .45,
      }}

      className="space-y-5"

    >

      <div>

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.35em]
            text-violet-600
          "
        >

          ON THIS DAY

        </p>

        <h2
          className="
            mt-2
            text-3xl
            font-black
            text-gray-900
          "
        >

          Relive Your Memories

        </h2>

        <p
          className="
            mt-2
            text-gray-500
          "
        >

          Beautiful moments captured on this very day.

        </p>

      </div>

      <div
        className="
          flex
          gap-6
          overflow-x-auto
          pb-2
          snap-x
          hide-scrollbar
        "
      >

        {memories.map((echo) => (

          <div
            key={echo.id}
            className="
              min-w-[340px]
              snap-start
            "
          >

            <OnThisDayCard

              echo={echo}

              onOpen={onOpenEcho}

            />

          </div>

        ))}

      </div>

    </motion.section>

  );

}