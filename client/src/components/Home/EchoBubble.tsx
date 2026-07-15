import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
  onOpenEcho: (echo: Echo) => void;
}

export default function EchoBubble({
  echo,
  onOpenEcho,
}: Props) {
  if (echo.media.length === 0) return null;

  const cover =
    echo.media.find(
      (m) => m.publicId === echo.coverMediaId
    ) ?? echo.media[0];

  return (
    <motion.button
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 20,
      }}
      onClick={() => onOpenEcho(echo)}
      className=" flex flex-col items-center flex-shrink-0 snap-start" >
      {/* Ring */}

     <div
  className={`relative overflow-visible rounded-full p-[3px]
  ${
    echo.viewed
      ? "bg-gray-300"
      : "bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-pink-500"
  }`}
>
        {/* Glow */}

        {!echo.viewed && (
  <div
className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-pink-500 opacity-35 blur-xl -z-10"
  />
)}

        {/* Image */}

        <div className="relative overflow-hidden rounded-full bg-white p-[2px]">

          {cover.type === "image" ? (
            <img
              src={cover.url}
              loading="lazy"
              alt={echo.title}
              className="h-20 w-20 rounded-full object-cover"
            />
          ) : (
            <>
              <video
                src={cover.url}
                muted
                className="h-20 w-20 rounded-full object-cover"
              />

              {/* Video Badge */}

              <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm">
                <Play
                  size={12}
                  fill="white"
                />
              </div>
            </>
          )}

          {/* New Dot */}

          {!echo.viewed && (
            <div className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-violet-500" />
          )}
        </div>
      </div>

      {/* Title */}

      <p className="mt-2 max-w-[82px] truncate text-center text-sm font-semibold text-gray-800">
        {echo.title}
      </p>
    </motion.button>
  );
}