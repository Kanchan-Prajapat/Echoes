import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Images,
  Video,
  Play,
} from "lucide-react";

import Card from "@/styles/Card";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
  onOpen: (echo: Echo) => void;
}

export default function TimelineCard({
  echo,
  onOpen,
}: Props) {

  const cover =
    echo.media.find(
      (m) =>
        m.publicId === echo.coverMediaId
    ) ?? echo.media[0];

  const imageCount =
    echo.media.filter(
      (m) => m.type === "image"
    ).length;

  const videoCount =
    echo.media.filter(
      (m) => m.type === "video"
    ).length;

  return (

    <motion.div
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: .98,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
      }}
    >

      <Card
        padding="none"
        hover
        clickable
        onClick={() =>
          onOpen(echo)
        }
      >

        {/* Cover */}

        <div className="relative aspect-[16/9] overflow-hidden">

          {cover?.type === "image" ? (

            <img
              src={cover.url}
              alt={echo.title}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-500
                hover:scale-105
              "
            />

          ) : (

            <>
              <video
                src={cover?.url}
                muted
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/20
                "
              >

                <div
                  className="
                    rounded-full
                    bg-white/90
                    p-4
                  "
                >
                  <Play
                    size={22}
                    fill="currentColor"
                  />
                </div>

              </div>

            </>

          )}

          {/* Mood */}

          {echo.mood && (

            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                bg-black/40
                px-4
                py-2
                text-xs
                font-semibold
                text-white
                backdrop-blur-md
              "
            >

              {echo.mood}

            </div>

          )}

        </div>

        {/* Content */}

        <div className="p-6">

          <h2
            className="
              text-2xl
              font-bold
              text-gray-900
            "
          >

            {echo.title}

          </h2>

          {echo.description && (

            <p
              className="
                mt-3
                line-clamp-2
                text-gray-500
              "
            >

              {echo.description}

            </p>

          )}

          {/* Meta */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-5
              text-sm
              text-gray-500
            "
          >

            <div className="flex items-center gap-2">

              <CalendarDays size={15} />

              {new Date(
                echo.date
              ).toLocaleDateString()}

            </div>

            {echo.location && (

              <div className="flex items-center gap-2">

                <MapPin size={15} />

                {echo.location}

              </div>

            )}

          </div>

          {/* Stats */}

          <div
            className="
              mt-6
              flex
              items-center
              gap-6
              border-t
              pt-5
            "
          >

            <div className="flex items-center gap-2">

              <Images
                size={16}
                className="text-violet-600"
              />

              <span>

                {imageCount}

              </span>

            </div>

            <div className="flex items-center gap-2">

              <Video
                size={16}
                className="text-violet-600"
              />

              <span>

                {videoCount}

              </span>

            </div>

          </div>

        </div>

      </Card>

    </motion.div>

  );

}