import { motion } from "framer-motion";
import {
  Images,
  Video,
  MapPin,
  Play,
  Heart,
} from "lucide-react";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
  onClick: () => void;
}

export default function CalendarDayPreview({
  echo,
  onClick,
}: Props) {

  const cover =
    echo.media.find(
      (m) => m.id === echo.coverMediaId
    ) ?? echo.media[0];

  const imageCount = echo.media.filter(
    (m) => m.type === "image"
  ).length;

  const videoCount = echo.media.filter(
    (m) => m.type === "video"
  ).length;

  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className="
        flex
        w-full
        gap-4
        overflow-hidden
        rounded-3xl
        bg-white
        p-4
        text-left
        shadow-lg
      "
    >

      {/* Cover */}

      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">

        {cover?.type === "image" ? (

          <img
            src={cover.url}
            alt={echo.title}
            className="h-full w-full object-cover"
          />

        ) : (

          <>
            <video
              src={cover?.url}
              className="h-full w-full object-cover"
              muted
            />

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-black/30
              "
            >
              <Play
                size={24}
                fill="white"
                className="text-white"
              />
            </div>
          </>

        )}

        {echo.favorite && (

          <div
            className="
              absolute
              right-2
              top-2
              rounded-full
              bg-white/90
              p-1
              shadow
            "
          >
            <Heart
              size={14}
              className="fill-red-500 text-red-500"
            />
          </div>

        )}

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col justify-between">

        <div>

          <div className="flex items-center justify-between">

            <h3 className="text-lg font-bold">

              {echo.title}

            </h3>

            <span className="text-2xl">

              {echo.mood}

            </span>

          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">

            <MapPin size={15} />

            <span>

              {echo.location || "Unknown Location"}

            </span>

          </div>

        </div>

        <div className="mt-4 flex items-center gap-5 text-sm text-gray-500">

          <div className="flex items-center gap-1">

            <Images size={16} />

            {imageCount}

          </div>

          <div className="flex items-center gap-1">

            <Video size={16} />

            {videoCount}

          </div>

        </div>

      </div>

    </motion.button>
  );
}