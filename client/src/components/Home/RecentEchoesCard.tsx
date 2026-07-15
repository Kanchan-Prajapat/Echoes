import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Images,
  Video,
  Heart,
} from "lucide-react";
import MediaCarousel from "@/components/Shared/MediaCarousel";

import Card from "@/styles/Card";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
  onOpen: (echo: Echo) => void;
}

export default function RecentEchoCard({
  echo,
  onOpen,
}: Props) {
  if (echo.media.length === 0) return null;

 const coverIndex = echo.media.findIndex(
  (m) => m.publicId === echo.coverMediaId
);
  const imageCount = echo.media.filter(
    (m) => m.type === "image"
  ).length;

  const videoCount = echo.media.filter(
    (m) => m.type === "video"
  ).length;

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
    >
      <Card
        clickable
        padding="none"
        onClick={() => onOpen(echo)}
        className="overflow-hidden"
      >
        {/* Cover */}

     <div className="relative overflow-hidden">

<MediaCarousel
    media={echo.media}

    height="h-56"

    initialIndex={
      coverIndex === -1
        ? 0
        : coverIndex
    }

    showControls={false}

    onOpenPlayer={() => onOpen(echo)}
/>
  {/* Favorite */}

  {echo.favorite && (
    <div className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 shadow-md backdrop-blur">
      <Heart
        size={16}
        className="fill-red-500 text-red-500"
      />
    </div>
  )}

  {/* Mood */}

  {echo.mood && (
    <div className="absolute bottom-4 right-4 z-20 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur">
      {echo.mood}
    </div>
  )}

</div>
        {/* Content */}

        <div className="space-y-4 p-5">

          <div>

            <h2 className="truncate text-xl font-bold text-gray-900">
              {echo.title}
            </h2>

            {echo.description && (
              <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                {echo.description}
              </p>
            )}

          </div>

          {/* Location + Date */}

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">

            {echo.location && (
              <div className="flex items-center gap-2">
                <MapPin size={15} />
                <span>{echo.location}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <CalendarDays size={15} />
              <span>
                {new Date(echo.date).toLocaleDateString()}
              </span>
            </div>

          </div>

          {/* Footer */}

          <div className="flex items-center justify-between border-t pt-4">

            <div className="flex gap-5 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <Images size={16} />
                <span>{imageCount}</span>
              </div>

              <div className="flex items-center gap-2">
                <Video size={16} />
                <span>{videoCount}</span>
              </div>

            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">
              View →
            </span>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}