import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

import { Media } from "@/types/media";

interface Props {
  media: Media[];
  height?: string;

  currentIndex?: number;
  onChange?: (index: number) => void;

  onOpenPlayer?: () => void;
}

export default function MediaCarousel({
  media,
  height = "h-72",
  currentIndex,
  onChange,
  onOpenPlayer,
}: Props) {


  if (media.length === 0) {
    return (
      <div
        className={`${height} flex items-center justify-center bg-gray-100 text-gray-400`}
      >
        No Media
      </div>
    );
  }
  const [internalIndex, setInternalIndex] = useState(0);

  const activeIndex =
    currentIndex ?? internalIndex;

  const safeIndex = Math.min(
    Math.max(activeIndex, 0),
    media.length - 1);

  console.log("media:", media);
  console.log("currentIndex:", currentIndex);
  console.log("safeIndex:", safeIndex);
  console.log("media length:", media.length);


  const item = media[safeIndex];

  if (!item) {
    return (
      <div
        className={`${height} flex items-center justify-center bg-gray-100`}
      >
        Invalid Media
      </div>
    );
  }

  
const previous = () => {
  const newIndex =
    safeIndex === 0
      ? media.length - 1
      : safeIndex - 1;

  if (onChange) {
    onChange(newIndex);
  } else {
    setInternalIndex(newIndex);
  }
};

const next = () => {
  const newIndex =
    safeIndex === media.length - 1
      ? 0
      : safeIndex + 1;

  if (onChange) {
    onChange(newIndex);
  } else {
    setInternalIndex(newIndex);
  }
};

  console.log({
    media,
    currentIndex,
    safeIndex,
    item,
  });

  return (
    <div className={`relative w-full overflow-hidden ${height}`}>

      <AnimatePresence mode="wait">

        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .15 }}
          className="h-full w-full"
        >



          {item.type === "image" ? (

            <img
              src={item.url}
              onClick={onOpenPlayer}

              className="h-full w-full object-cover"
              alt=""
            />

          ) : (

            <div className="relative h-full w-full">

              <video
                src={item.url}
                onClick={onOpenPlayer}
                controls
                className="h-full w-full object-cover"
              />

              <div className="absolute left-4 top-4 rounded-full bg-black/50 p-2 text-white">
                <Play size={16} fill="white" />
              </div>

            </div>

          )}

        </motion.div>

      </AnimatePresence>

      {media.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              previous();

            }}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {media.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${safeIndex === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}