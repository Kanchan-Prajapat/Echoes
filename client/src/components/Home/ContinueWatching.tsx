import { motion } from "framer-motion";
import {
  Play,
  RotateCcw,
  Images,
} from "lucide-react";

import { Echo } from "@/types/echo";

interface Props {
  echoes: Echo[];
  onResume: (echo: Echo) => void;
}

export default function ContinueWatching({
  echoes,
  onResume,
}: Props) {
  const continueEcho = echoes.find(
    (echo) =>
      echo.lastViewedIndex > 0 &&
      echo.lastViewedIndex < echo.media.length
  );

  if (!continueEcho) {
    return null;
  }

  const cover =
    continueEcho.media.find(
      (m) =>
        m.publicId === continueEcho.coverMediaId
    ) ?? continueEcho.media[0];

  const progress =
    (continueEcho.lastViewedIndex /
      continueEcho.media.length) *
    100;

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
      className="mb-8 overflow-hidden rounded-3xl shadow-lg"
    >
      <div className="relative aspect-[16/9]">

        <img
          src={cover.url}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

          <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-violet-200">
            <RotateCcw size={14} />
            Continue Watching
          </p>

          <h2 className="text-2xl font-bold">
            {continueEcho.title}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-200">
            <Images size={16} />

            <span>
              {continueEcho.lastViewedIndex} /{" "}
              {continueEcho.media.length}
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-full rounded-full bg-violet-400"
            />
          </div>

          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              onResume(continueEcho)
            }
            className="mt-6 flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black"
          >
            <Play
              size={18}
              fill="currentColor"
            />
            Resume Echo
          </motion.button>

        </div>

      </div>
    </motion.section>
  );
}