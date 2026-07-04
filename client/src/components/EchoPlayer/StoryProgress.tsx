import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  total: number;
  current: number;

  duration: number; // seconds

  paused: boolean;

  isVideo: boolean;

  videoProgress: number;
}

export default function StoryProgress({
  total,
  current,
  duration,
  paused,
  isVideo,
  videoProgress,
}: Props) {
  const [imageProgress, setImageProgress] =
    useState(0);

  /* ---------------- IMAGE PROGRESS ---------------- */

  useEffect(() => {

    if (isVideo) return;

    setImageProgress(0);

    let progress = 0;

    const interval = window.setInterval(() => {

      if (paused) return;

      progress += 100 / (duration * 20);

      setImageProgress(
        Math.min(progress, 100)
      );

    }, 50);

    return () =>
      clearInterval(interval);

  }, [
    current,
    paused,
    duration,
    isVideo,
  ]);

  return (

    <div className="absolute left-4 right-4 top-5 z-50 flex gap-2">

      {Array.from({
        length: total,
      }).map((_, index) => {

        let progress = 0;

        if (index < current) {

          progress = 100;

        }

        else if (index === current) {

          progress = isVideo
            ? videoProgress
            : imageProgress;

        }

        return (

          <div
            key={index}
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/25"
          >

            <motion.div

              animate={{
                width: `${progress}%`,
              }}

              transition={{
                ease: "linear",
                duration: .05,
              }}

              className="h-full rounded-full bg-white"

            />

          </div>

        );

      })}

    </div>

  );

}