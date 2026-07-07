import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  CalendarDays,
  MapPin,
  Images,
  Video,
} from "lucide-react";

import { Echo } from "@/types/echo";
import MediaCarousel from "@/components/Shared/MediaCarousel";

interface Props {
  echo: Echo;

  selectedMediaIndex: number;
  setSelectedMediaIndex: (index: number) => void;

  imageCount: number;
  videoCount: number;

  onBack: () => void;
  onOpenPlayer: () => void;
  onFavorite: () => void;
}

export default function EchoHero({
  echo,
  selectedMediaIndex,
  setSelectedMediaIndex,
  imageCount,
  videoCount,
  onBack,
  onOpenPlayer,
  onFavorite,
}: Props) {


  return (
    <section
      className=" relative h-[65vh] min-h-[520px] overflow-hidden rounded-b-[40px]">

      {/* Carousel */}

      <MediaCarousel
        media={echo.media}
        currentIndex={selectedMediaIndex}
        onChange={setSelectedMediaIndex}
        onOpenPlayer={onOpenPlayer}
      />

      {/* Gradient */}

      <div className="  pointer-events-none  absolute  inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80" />

      {/* Top Bar */}

      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-5">

        <motion.button whileTap={{ scale: 0.92 }}
          onClick={onBack}
          className="h-12 w-12 flex items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl
 shadow-xl" >
          <ArrowLeft size={20} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={onFavorite}
          animate={{ scale: echo.favorite ? 1.2 : 1,}}

          transition={{ type: "spring", stiffness: 300}}
          className="rounded-full bg-white/20 p-3 text-white backdrop-blur-md" >
          <Heart
            size={20}
            fill={echo.favorite ? "currentColor" : "none"}
          />
        </motion.button>

      </div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: .45 }}

        className="absolute bottom-0 left-0 right-0 z-20 p-6">

        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">

          <h1 className="text-4xl font-black leading-tight tracking-tight font-bold">
            {echo.title}
          </h1>

          <div className="flex flex-wrap gap-3 mt-5">

            <div
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl"            >

              <CalendarDays size={15} />

              <span>{echo.date}</span>

            </div>


            <div
              className="flex items-centergap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl"            >

              <MapPin size={15} />

              <span>{echo.location}</span>

            </div>

          </div>

          <div className="mt-5 flex items-center gap-5">

            <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
              <Images size={16} />
              <span>{imageCount}</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
              <Video size={16} />
              <span>{videoCount}</span>
            </div>

            <div className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
              {echo.mood}
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}