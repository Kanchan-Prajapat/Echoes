import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Images,
  Video,
} from "lucide-react";

import { Echo } from "@/types/echo";

import AppContainer from "@/styles/AppContainer";

interface Props {
  results: Echo[];
  onOpenEcho: (echo: Echo) => void;
}

export default function SearchResults({
  results,
  onOpenEcho,
}: Props) {

  if (results.length === 0) {
    return (

      <AppContainer className="py-24">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center"
        >

          <div className="mb-6 text-6xl">
            🔍
          </div>

          <h2 className="text-3xl font-bold">
            No memories found
          </h2>

          <p className="mt-3 text-gray-500">
            Try another title, location or mood.
          </p>

        </motion.div>

      </AppContainer>

    );
  }

  return (

    <AppContainer className="space-y-5 py-6">

      {results.map((echo, index) => {

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

          <motion.button
            key={echo.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.04,
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: .98,
            }}
           onClick={() => {
  onOpenEcho(echo);
}}
            className="
              flex
              w-full
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-lg
              transition
              hover:shadow-xl
            "
          >

            {/* Cover */}

            <div className="h-28 w-28 flex-shrink-0">

              <img
                src={cover.url}
                className="h-full w-full object-cover"
              />

            </div>

            {/* Content */}

            <div className="flex flex-1 flex-col justify-between p-5">

              <div>

                <h2 className="text-lg font-bold text-gray-900">
                  {echo.title}
                </h2>

                {echo.description && (

                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {echo.description}
                  </p>

                )}

              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">

                {echo.location && (

                  <div className="flex items-center gap-1">

                    <MapPin size={14} />

                    {echo.location}

                  </div>

                )}

                <div className="flex items-center gap-1">

                  <CalendarDays size={14} />

                  {new Date(
                    echo.date
                  ).toLocaleDateString()}

                </div>

              </div>

              <div className="mt-3 flex gap-5 text-sm text-gray-600">

                <div className="flex items-center gap-1">

                  <Images size={15} />

                  {imageCount}

                </div>

                <div className="flex items-center gap-1">

                  <Video size={15} />

                  {videoCount}

                </div>

              </div>

            </div>

          </motion.button>

        );

      })}

    </AppContainer>

  );
}