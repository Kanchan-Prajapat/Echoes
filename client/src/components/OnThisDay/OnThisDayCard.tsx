import { motion } from "framer-motion";
import {
  CalendarDays,
  Heart,
  Images,
  MapPin,
  Video,
} from "lucide-react";

import { format } from "date-fns";

import Card from "@/styles/Card";

import { Echo } from "@/types/echo";

interface Props {

  echo: Echo;

  onOpen: (echo: Echo) => void;

}

export default function OnThisDayCard({

  echo,

  onOpen,

}: Props) {

  if (echo.media.length === 0) return null;

  const cover =

    echo.media.find(

      m =>

        m.publicId === echo.coverMediaId ||

        m.id === echo.coverMediaId

    ) ??

    echo.media[0];

  const yearsAgo =

    new Date().getFullYear()

    -

    new Date(echo.date).getFullYear();

  const imageCount =

    echo.media.filter(

      m => m.type === "image"

    ).length;

  const videoCount =

    echo.media.filter(

      m => m.type === "video"

    ).length;

  return (

    <motion.div

      whileHover={{
        y: -5,
      }}

      whileTap={{
        scale: .985,
      }}

    >

    <Card
    clickable
    padding="none"
    onClick={() => onOpen(echo)}
    className="
overflow-hidden
rounded-[30px]
group
cursor-pointer
"
>

        {/* Cover */}

        <div className="relative aspect-[16/10]">

          {cover.type === "image" ? (

            <img

              src={cover.url}

              alt={echo.title}

              className="
h-full
w-full
object-cover
"

            />

          ) : (

            <video

              src={cover.url}

              muted

              className="
h-full
w-full
object-cover
"

            />

          )}

          {/* Overlay */}

          <div
            className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
"
          />

          {/* Year Badge */}

          <div
            className="
absolute
left-5
top-5
rounded-full
bg-white/90
px-4
py-2
backdrop-blur-xl
"
          >

            <p
              className="
text-[11px]
font-bold
uppercase
tracking-[0.25em]
text-violet-700
"
            >

              {yearsAgo}

              {yearsAgo === 1

                ? " Year Ago"

                : " Years Ago"}

            </p>

          </div>

          {/* Favorite */}

          {echo.favorite && (

            <div
              className="
absolute
right-5
top-5
rounded-full
bg-white/90
p-2
"
            >

              <Heart

                size={16}

                className="
fill-red-500
text-red-500
"

              />

            </div>

          )}

          {/* Bottom */}

          <div
            className="
absolute
bottom-0
left-0
right-0
p-6
text-white
"
          >

            <h2
              className="
text-3xl
font-black
leading-tight
"
            >

              {echo.title}

            </h2>

            {echo.description && (

              <p
                className="
mt-2
line-clamp-2
text-white/85
"
              >

                {echo.description}

              </p>

            )}

          </div>

        </div>

        {/* Bottom */}

        <div className="space-y-5 p-6">

          {/* Chips */}

          <div className="flex flex-wrap gap-3">

            <div
              className="
flex
items-center
gap-2
rounded-full
bg-violet-50
px-4
py-2
text-sm
text-violet-700
"
            >

              <CalendarDays size={15} />

              {format(

                new Date(echo.date),

                "dd MMMM yyyy"

              )}

            </div>

            {echo.location && (

              <div
                className="
flex
items-center
gap-2
rounded-full
bg-gray-100
px-4
py-2
text-sm
"
              >

                <MapPin size={15} />

                {echo.location}

              </div>

            )}

            {echo.mood && (

              <div
                className="
rounded-full
bg-amber-100
px-4
py-2
text-sm
font-medium
"
              >

                {echo.mood}

              </div>

            )}

          </div>

          {/* Stats */}

          <div
            className="
flex
items-center
justify-between
"
          >

            <div
              className="
flex
gap-5
text-sm
text-gray-500
"
            >

              <div className="flex items-center gap-2">

                <Images size={16} />

                {imageCount}

              </div>

              <div className="flex items-center gap-2">

                <Video size={16} />

                {videoCount}

              </div>

            </div>

         <div
  className="
flex
items-center
gap-2
font-semibold
text-violet-600
transition-all
group-hover:translate-x-1
"
>

    <span>

        Relive Memory

    </span>

    <span>

        →

    </span>

</div>

          </div>

        </div>

      </Card>

    </motion.div>

  );

}