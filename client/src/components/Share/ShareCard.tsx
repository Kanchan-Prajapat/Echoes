import { MapPin, CalendarDays } from "lucide-react";
import { Echo } from "@/types/echo";
import { format } from "date-fns";
import ShareMediaGrid from "./ShareMediaGrid";
interface Props {

  echo: Echo;

}

export default function ShareCard({

  echo,

}: Props) {



  return (

    <div
      id="share-card"
      className="
        w-[420px]
        rounded-[40px]
        bg-white
        overflow-hidden
        shadow-2xl
      "
    >

      {/* Cover */}

     <ShareMediaGrid
    media={echo.media}
    coverMediaId={echo.coverMediaId}
/>

      {/* Content */}

      <div className="p-8">

        {/* Title */}

        <h1
          className="
mt-5
text-[34px]
font-black
leading-tight
tracking-tight
text-gray-900
"
        >

          {echo.title}

        </h1>

        {/* Meta */}

        <div className="mt-5 flex flex-wrap gap-3">

          {echo.location && (

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

              <MapPin size={16} />

              {echo.location}

            </div>

          )}
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
    text-gray-700
  "
>
  <CalendarDays size={16} />

  {format(
    new Date(echo.date),
    "dd MMM yyyy"
  )}
</div>

        </div>

        {/* Mood */}

      <div
className="
mt-6
inline-flex
items-center
gap-3
rounded-full
bg-amber-50
px-5
py-2.5
"
>

<span className="text-3xl">

{echo.mood}

</span>

<div>

<p className="text-xs text-gray-400">

Feeling

</p>

<p className="font-semibold">

Happy

</p>

</div>

</div>

        {/* Description */}

   {echo.description && (

<div
  className="
    mt-8
    rounded-3xl
    bg-gray-50
    p-5
  "
>

  <p
    className="
      text-lg
      leading-8
      italic
      text-gray-700
    "
  >

    {echo.description}

  </p>

</div>

)}

        <div
          className="
mt-8
grid
grid-cols-2
gap-4
"
        >

          <div
            className="
rounded-2xl
bg-violet-50
p-4
text-center
"
          >

            <div className="text-2xl font-bold">

              {echo.media.filter(
                m => m.type === "image"
              ).length}

            </div>

            <div className="text-sm">

              Photos

            </div>

          </div>

          <div
            className="
rounded-2xl
bg-blue-50
p-4
text-center
"
          >

            <div className="text-2xl font-bold">

              {echo.media.filter(
                m => m.type === "video"
              ).length}

            </div>

            <div className="text-sm">

              Videos

            </div>

          </div>

        </div>

        {/* Footer */}

        <div
          className="
          mt-10
          border-t
          pt-6
          text-center
          "
        >

            <div
              className="
text-xl
font-bold
tracking-[0.25em]
text-violet-600
"
            >

              E C H O E S

            </div>

            <p
              className="
mt-2
text-sm
text-gray-400
"
            >

              Every memory has an echo.

            </p>

          </div>

        </div>

      </div>

  );

}