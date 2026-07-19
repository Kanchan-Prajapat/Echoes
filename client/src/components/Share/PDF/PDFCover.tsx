  import {
  CalendarDays,
  MapPin,
  Heart,
} from "lucide-react";
import { Echo } from "@/types/echo";
import { format } from "date-fns";
import ShareMediaGrid from "../ShareMediaGrid";

interface Props {
  echo: Echo;
}

export default function PDFCover({
  echo,
}: Props) {
 const totalPhotos =
    echo.media.filter(
      (m) => m.type === "image"
    ).length;

  const totalVideos =
    echo.media.filter(
      (m) => m.type === "video"
    ).length;

  return (

    <section
      className="
      w-[794px]
      bg-white
      px-12
      py-10
      "
    >
 

    <div
      className="
      w-[794px]
      bg-white
      px-12
      py-10
      text-gray-900
      "
    >

      {/* Header */}

      <div className="mb-10 text-center">

        <h1
          className="
          text-2xl
          font-black
          tracking-[0.35em]
          text-violet-600
          "
        >
          E C H O E S
        </h1>

        <p
          className="
          mt-2
          text-gray-500
          "
        >
          Every memory has an echo.
        </p>

      </div>

      {/* Media */}

      <ShareMediaGrid
        media={echo.media}
        coverMediaId={echo.coverMediaId}
      />

      {/* Title */}

      <h1
        className="
        mt-10
        text-5xl
        font-black
        leading-tight
        tracking-tight
        "
      >
        {echo.title}
      </h1>

      {/* Meta */}

      <div
        className="
        mt-6
        flex
        flex-wrap
        gap-4
        "
      >

        <div
          className="
          flex
          items-center
          gap-2
          rounded-full
          bg-gray-100
          px-5
          py-3
          "
        >

          <CalendarDays size={18} />

          {format(
            new Date(echo.date),
            "dd MMM yyyy"
          )}

        </div>

        {echo.location && (

          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-violet-50
            px-5
            py-3
            text-violet-700
            "
          >

            <MapPin size={18} />

            {echo.location}

          </div>

        )}

        <div
          className="
          flex
          items-center
          gap-2
          rounded-full
          bg-amber-50
          px-5
          py-3
          "
        >

          <Heart
            size={18}
            className="text-amber-500"
          />

          {echo.mood}

        </div>

      </div>

      {/* Journal */}

      {echo.description && (

        <div
          className="
          mt-10
          rounded-[32px]
          bg-gray-50
          p-8
          "
        >

          <h2
            className="
            mb-5
            text-2xl
            font-bold
            "
          >
            Memory Journal
          </h2>

          <p
            className="
            whitespace-pre-wrap
            text-[18px]
            italic
            leading-9
            text-gray-700
            "
          >
            {echo.description}
          </p>

        </div>

      )}

      {/* Stats */}

      <div
        className="
        mt-10
        grid
        grid-cols-3
        gap-5
        "
      >

        <div
          className="
          rounded-3xl
          bg-violet-50
          p-8
          text-center
          "
        >

          <div className="text-5xl font-black">
            {echo.media.length}
          </div>

          <div
            className="
            mt-2
            text-xs
            uppercase
            tracking-[0.25em]
            text-gray-500
            "
          >
            Total
          </div>

        </div>

        <div
          className="
          rounded-3xl
          bg-blue-50
          p-8
          text-center
          "
        >

          <div className="text-5xl font-black">
            {totalPhotos}
          </div>

          <div
            className="
            mt-2
            text-xs
            uppercase
            tracking-[0.25em]
            text-gray-500
            "
          >
            Photos
          </div>

        </div>

        <div
          className="
          rounded-3xl
          bg-emerald-50
          p-8
          text-center
          "
        >

          <div className="text-5xl font-black">
            {totalVideos}
          </div>

          <div
            className="
            mt-2
            text-xs
            uppercase
            tracking-[0.25em]
            text-gray-500
            "
          >
            Videos
          </div>

        </div>

      </div>

     

      {/* Footer */}

      <div
        className="
        mt-16
        border-t
        pt-8
        text-center
        "
      >

        <div
          className="
          text-xl
          font-black
          tracking-[0.35em]
          text-violet-600
          "
        >
          E C H O E S
        </div>

        <p
          className="
          mt-2
          text-gray-500
          "
        >
          Captured on{" "}
          {format(
            new Date(),
            "dd MMM yyyy"
          )}
        </p>

        <p
          className="
          mt-1
          text-gray-400
          "
        >
          Every memory has an echo.
        </p>

      </div>

    </div>

    </section>

  );

}