import {
  isSameDay,
  isSameMonth,
  isToday,
} from "date-fns";

import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";

import { Echo } from "@/types/echo";

interface Props {
  date: Date;
  currentMonth: Date;
  selectedDate: Date;
  echoes: Echo[];
  onSelect: (date: Date) => void;
}

export default function CalendarDay({
  date,
  currentMonth,
  selectedDate,
  echoes,
  onSelect,
}: Props) {

  const selected = isSameDay(
    date,
    selectedDate
  );

  const today = isToday(date);

  const current = isSameMonth(
    date,
    currentMonth
  );

  const memories = echoes.filter((echo) =>
    isSameDay(
      new Date(echo.date),
      date
    )
  );

  const favorite = memories.some(
    (e) => e.favorite
  );

  const previews = memories
    .slice(0, 3)
    .map((echo) =>

      echo.media.find(
        (m) =>
          m.publicId ===
          echo.coverMediaId
      ) ?? echo.media[0]

    );

  return (

    <motion.button

      whileHover={{
        scale: 1.05,
      }}

      whileTap={{
        scale: .92,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}

      onClick={() =>
        onSelect(date)
      }

     className="
  relative
  w-full
  aspect-square
  overflow-hidden
  rounded-2xl
"
    >

      {/* Background */}

      <div

        className={`
          absolute
          inset-0
          rounded-2xl
          transition-all
          duration-300

          ${
            selected
              ? "bg-violet-600 shadow-xl"
              : "bg-white hover:bg-violet-50"
          }
        `}

      />

      {/* Today Ring */}

      {today && !selected && (

        <div

          className="
            absolute
            inset-0
            rounded-2xl
            border-2
            border-violet-500
          "

        />

      )}

      {/* Day */}

      <span

        className={`
          absolute
          top-2
          left-1/2
          -translate-x-1/2
          text-sm
          font-bold

          ${
            selected
              ? "text-white"
              : current
              ? "text-gray-800"
              : "text-gray-300"
          }
        `}

      >

        {date.getDate()}

      </span>

      {/* Preview Bubbles */}

      {previews.length > 0 && (

        <div

          className="
            absolute
            bottom-2
            left-1/2
            flex
            -translate-x-1/2
          "

        >

          {previews.map(
            (media, index) => (

              <motion.div

                key={index}

                initial={{
                  scale: 0,
                }}

                animate={{
                  scale: 1,
                }}

                transition={{
                  delay:
                    index * .05,
                }}

                className="
                  -ml-2
                  first:ml-0
                "

              >

                {media?.type ===
                "image" ? (

                  <img

                    src={media.url}

                    className="
                      h-5
                      w-5
                      rounded-full
                      border-2
                      border-white
                      object-cover
                      shadow
                    "

                  />

                ) : (

                  <div

                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-white
                      bg-violet-600
                      text-white
                    "

                  >

                    <Play
                      size={8}
                      fill="white"
                    />

                  </div>

                )}

              </motion.div>

            )
          )}

        </div>

      )}

      {/* Favorite */}

      {favorite && (

        <motion.div

          initial={{
            scale: 0,
          }}

          animate={{
            scale: 1,
          }}

          className="
            absolute
            right-1
            top-1
            rounded-full
            bg-yellow-400
            p-1
            shadow-md
          "

        >

          <Heart
            size={8}
            fill="white"
            color="white"
          />

        </motion.div>

      )}

    </motion.button>

  );

}