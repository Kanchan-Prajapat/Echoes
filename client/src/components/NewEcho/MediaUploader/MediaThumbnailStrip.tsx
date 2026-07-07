import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Image, Video } from "lucide-react";

import { Media } from "@/types/media";

import MediaThumbnail from "./MediaThumbnail";

interface Props {
  media: Media[];

  currentIndex: number;

  coverMediaId?: string;

  onSelect: (index: number) => void;

  onSetCover: (id: string) => void;
}

export default function MediaThumbnailStrip({
  media,
  currentIndex,
  coverMediaId,
  onSelect,
  onSetCover,
}: Props) {

    const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const photos = media.filter(
    (m) => m.type === "image"
  ).length;

  const videos = media.filter(
    (m) => m.type === "video"
  ).length;

useEffect(() => {

  const selected =
    thumbnailRefs.current[currentIndex];

  selected?.scrollIntoView({

    behavior: "smooth",

    inline: "center",

    block: "nearest",

  });

}, [currentIndex]);


  return (
    <section className="mt-6">

      {/* Header */}

      <div className="mb-4 flex items-center justify-between">

        <div>

          <h3 className="text-base font-bold">

            Gallery

          </h3>

          <p className="text-sm text-gray-500">

            Tap a thumbnail to preview • Tap 👑 to set cover

          </p>

        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500">

          {photos > 0 && (

            <div className="flex items-center gap-1">

              <Image size={16} />

              <span>{photos}</span>

            </div>

          )}

          {videos > 0 && (

            <div className="flex items-center gap-1">

              <Video size={16} />

              <span>{videos}</span>

            </div>

          )}

        </div>

      </div>

      {/* Thumbnail Strip */}

      <motion.div
        layout
        className="
          flex
          gap-3
          overflow-x-auto
          pb-3

          scrollbar-thin
          scrollbar-thumb-gray-300
          scrollbar-track-transparent
        "
      >

        {media.map((item, index) => (

         <div
    ref={(el) => {
        thumbnailRefs.current[index] = el;
    }}
>

    <MediaThumbnail
        media={item}
        active={currentIndex === index}
        isCover={coverMediaId === item.id}
        onSelect={() => onSelect(index)}
        onSetCover={() => onSetCover(item.id)}
    />

</div>

        ))}

      </motion.div>

    </section>
  );
}