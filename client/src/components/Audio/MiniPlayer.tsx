import { motion, AnimatePresence } from "framer-motion";
import {
  Music2,
  Play,
  Pause,
  X,
} from "lucide-react";

import Card from "@/styles/Card";
import useAudio from "@/hooks/useAudio";

export default function MiniPlayer() {

  const {
    current,
    playing,
    play,
    pause,
    stop,
  } = useAudio();

  if (!current) return null;

  return (

    <AnimatePresence>

      <motion.div
        initial={{
          y: 120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 120,
          opacity: 0,
        }}
        transition={{
          duration: .25,
        }}
        className="
          fixed
          bottom-24
          left-4
          right-4
          z-[100]
        "
      >

        <Card
          className="
            p-4
            shadow-2xl
            shadow-violet-200/40
          "
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              {current.cover ? (

                <img
                  src={current.cover}
                  alt={current.title}
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    object-cover
                  "
                />

              ) : (

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-violet-100
                    text-violet-600
                  "
                >

                  <Music2 size={24} />

                </div>

              )}

              <div>

                <h3 className="font-semibold">

                  {current.title}

                </h3>

                <p className="text-sm text-gray-500">

                  {current.artist}

                </p>

              </div>

            </div>

            <div className="flex items-center gap-2">

              <button
                onClick={() =>

                  playing
                    ? pause()
                    : play(current)

                }
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-600
                  text-white
                "
              >

                {playing ? (

                  <Pause
                    size={18}
                    fill="currentColor"
                  />

                ) : (

                  <Play
                    size={18}
                    fill="currentColor"
                  />

                )}

              </button>

              <button
                onClick={stop}
                className="
                  rounded-full
                  p-2
                  text-gray-500
                  transition
                  hover:bg-gray-100
                "
              >

                <X size={18} />

              </button>

            </div>

          </div>

        </Card>

      </motion.div>

    </AnimatePresence>

  );

}