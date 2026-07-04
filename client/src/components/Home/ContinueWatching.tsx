import { motion } from "framer-motion";
import { Play } from "lucide-react";

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

  if (!continueEcho) return null;

  const cover =
    continueEcho.media[
      continueEcho.lastViewedIndex
    ] ?? continueEcho.media[0];

  const progress =
    (continueEcho.lastViewedIndex /
      continueEcho.media.length) *
    100;

  return (

    <section className="mt-10 px-6">

      <h2 className="mb-5 text-2xl font-bold">

        Continue Watching

      </h2>

      <motion.div

        whileHover={{
          y: -3,
        }}

        whileTap={{
          scale: .98,
        }}

        onClick={() =>
          onResume(continueEcho)
        }

        className="overflow-hidden rounded-3xl bg-white shadow-lg"

      >

        <div className="relative h-56">

          {cover.type === "image" ? (

            <img
              src={cover.url}
              className="h-full w-full object-cover"
            />

          ) : (

            <video
              src={cover.url}
              muted
              className="h-full w-full object-cover"
            />

          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <button className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/90">

            <Play
              fill="black"
              size={24}
            />

          </button>

        </div>

        <div className="p-5">

          <h3 className="text-2xl font-bold">

            {continueEcho.title}

          </h3>

          <p className="mt-2 text-gray-500">

            Resume from

            {" "}

            {continueEcho.lastViewedIndex + 1}

            {" / "}

            {continueEcho.media.length}

          </p>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-200">

            <motion.div

              initial={{
                width: 0,
              }}

              animate={{
                width: `${progress}%`,
              }}

              transition={{
                duration: .8,
              }}

              className="h-full rounded-full bg-violet-600"

            />

          </div>

        </div>

      </motion.div>

    </section>

  );

}