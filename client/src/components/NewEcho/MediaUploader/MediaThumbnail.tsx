import { motion } from "framer-motion";
import { Crown, Play } from "lucide-react";

import { Media } from "@/types/media";

interface Props {
  media: Media;

  active: boolean;

  isCover: boolean;

  onSelect: () => void;

  onSetCover: () => void;
}

export default function MediaThumbnail({
  media,
  active,
  isCover,
  onSelect,
  onSetCover,
}: Props) {
  return (
    <motion.div
      className="relative shrink-0"
      animate={{
        scale: active ? 1 : 0.95,
        opacity: active ? 1 : 0.8,
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Thumbnail */}

      <button
        onClick={onSelect}
        className={`
          relative

          h-20
          w-20

          overflow-hidden

          rounded-2xl

          border-2

          transition-all
          duration-300

          ${
            active
              ? "border-violet-600 shadow-lg"
              : "border-gray-200"
          }
        `}
      >
        {media.type === "image" ? (
          <img
            src={media.url}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative h-full w-full">
            <video
              src={media.url}
              className="h-full w-full object-cover"
            />

            {/* Video Icon */}

            <div
              className="
                absolute
                inset-0

                flex
                items-center
                justify-center

                bg-black/25
              "
            >
              <div
                className="
                  rounded-full

                  bg-white/90

                  p-2

                  shadow-lg
                "
              >
                <Play
                  size={14}
                  fill="black"
                  color="black"
                />
              </div>
            </div>
          </div>
        )}
      </button>

      {/* Cover Highlight */}

      {isCover && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="
            absolute
            inset-0

            rounded-2xl

            ring-4
            ring-yellow-400

            pointer-events-none
          "
        />
      )}

      {/* Set Cover */}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={(e) => {
          e.stopPropagation();

          navigator.vibrate?.(20);

          onSetCover();
        }}
        className="
          absolute

          bottom-2
          right-2

          flex
          h-8
          w-8

          items-center
          justify-center

          rounded-full

          bg-white/90

          shadow-lg

          backdrop-blur
        "
      >
        <Crown
          size={16}
          className={
            isCover
              ? "text-yellow-500"
              : "text-gray-600"
          }
        />
      </motion.button>
    </motion.div>
  );
}