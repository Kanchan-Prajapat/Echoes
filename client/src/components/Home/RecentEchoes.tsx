import { motion } from "framer-motion";
import { Echo } from "@/types/echo";
import { useEchoStore } from "@/store/echoStore";
import MediaCarousel from "@/components/MediaCarousel";

interface Props {
  onOpenEcho: (echo: Echo) => void;
}

export default function RecentEchoes({
  onOpenEcho,
}: Props) {
  const echoes = useEchoStore((state) => state.echoes);

  return (
    <section className="mt-10">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Recent Echoes
        </h2>

        <button className="font-medium text-violet-600">
          View all
        </button>

      </div>

      {echoes.length === 0 ? (

        <div className="rounded-3xl bg-white py-16 text-center shadow">

          <h3 className="text-2xl font-semibold text-gray-700">
            No Echoes Yet 🌙
          </h3>

          <p className="mt-3 text-gray-500">
            Your beautiful memories will appear here.
          </p>

        </div>

      ) : (

        <div className="space-y-6">

          {echoes.map((echo) => {

            const imageCount = echo.media.filter(
              (m) => m.type === "image"
            ).length;

            const videoCount = echo.media.filter(
              (m) => m.type === "video"
            ).length;

            return (

              <motion.div
                key={echo.id}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                }}
                onClick={() => onOpenEcho(echo)}
                className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg"
              >

            <MediaCarousel
  media={echo.media}
  height="h-60"
/>

                <div className="p-5">

                  <div className="flex items-center justify-between">

                    <h3 className="text-xl font-bold">
                      {echo.title}
                    </h3>

                    <span className="text-2xl">
                      {echo.mood}
                    </span>

                  </div>

                  <p className="mt-3 text-gray-500">
                    {echo.location || "Unknown Location"}
                  </p>

                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">

                    <span>
                      📷 {imageCount}
                    </span>

                    <span>
                      🎥 {videoCount}
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-gray-400">
                    {echo.date}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      )}

    </section>
  );
}