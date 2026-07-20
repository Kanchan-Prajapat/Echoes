import { motion } from "framer-motion";
import {
  CalendarDays,
  Images,
  MapPin,
  Video,
  Heart,
} from "lucide-react";
import { format } from "date-fns";

import Card from "@/styles/Card";

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
      (m) =>
        m.publicId ===
        echo.coverMediaId
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
        y: -3,
      }}

      whileTap={{
        scale: .98,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
      }}

    >

      <Card
        clickable
        padding="none"
        onClick={onClick}
        className="overflow-hidden"
      >

        <div className="flex">

          {/* Cover */}

          <div className="relative">

            <img
              src={cover?.url}
              className="
                h-32
                w-32
                object-cover
              "
            />

            {echo.favorite && (

              <div
                className="
                  absolute
                  right-2
                  top-2
                  rounded-full
                  bg-yellow-400
                  p-1.5
                "
              >

                <Heart
                  size={12}
                  fill="white"
                  color="white"
                />

              </div>

            )}

          </div>

          {/* Content */}

          <div className="flex-1 p-5">

            <h3
              className="
                line-clamp-1
                text-lg
                font-bold
              "
            >
              {echo.title}
            </h3>

            {echo.description && (

              <p
                className="
                  mt-2
                  line-clamp-2
                  text-sm
                  text-gray-500
                "
              >
                {echo.description}
              </p>

            )}

            <div
              className="
                mt-4
                flex
                flex-wrap
                gap-4
                text-xs
                text-gray-500
              "
            >

              <div className="flex items-center gap-1">

                <MapPin size={13} />

                {echo.location || "Unknown"}

              </div>

              <div className="flex items-center gap-1">

                <CalendarDays size={13} />

                {format(new Date(echo.date), "dd MMM yyyy")}

              </div>

            </div>

            <div
              className="
                mt-4
                flex
                gap-5
                text-xs
                font-semibold
              "
            >

              <div className="flex items-center gap-1">

                <Images size={14} />

                {imageCount}

              </div>

              <div className="flex items-center gap-1">

                <Video size={14} />

                {videoCount}

              </div>

            </div>

          </div>

        </div>

      </Card>

    </motion.div>

  );

}