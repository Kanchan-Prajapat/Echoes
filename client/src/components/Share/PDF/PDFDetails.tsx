import {
  CalendarDays,
  MapPin,
  Heart,
  Image,
  Video,
} from "lucide-react";

import { Echo } from "@/types/echo";
import { format } from "date-fns";

interface Props {
  echo: Echo;
}

export default function PDFDetails({
  echo,
}: Props) {

  const photos =
    echo.media.filter(
      m => m.type === "image"
    ).length;

  const videos =
    echo.media.filter(
      m => m.type === "video"
    ).length;

  return (

    <section
      className="
      mt-20
      break-before-page
      "
    >

      <h2
        className="
        text-3xl
        font-black
        "
      >
        Memory Details
      </h2>

      <p
        className="
        mt-2
        text-gray-500
        "
      >
        Complete information about this memory.
      </p>

      <div
        className="
        mt-10
        rounded-[36px]
        border
        border-gray-200
        p-10
        space-y-8
        "
      >

        <InfoRow
          icon={<CalendarDays size={22} />}
          title="Date"
          value={format(
            new Date(echo.date),
            "dd MMMM yyyy"
          )}
        />

        {echo.location && (

          <InfoRow
            icon={<MapPin size={22} />}
            title="Location"
            value={echo.location}
          />

        )}

        <InfoRow
          icon={<Heart size={22} />}
          title="Mood"
          value={echo.mood}
        />

        <InfoRow
          icon={<Image size={22} />}
          title="Photos"
          value={`${photos}`}
        />

        <InfoRow
          icon={<Video size={22} />}
          title="Videos"
          value={`${videos}`}
        />

      </div>

      <div
        className="
        mt-20
        border-t
        pt-8
        text-center
        "
      >

        <h3
          className="
          text-xl
          font-black
          tracking-[0.35em]
          text-violet-600
          "
        >
          E C H O E S
        </h3>

        <p
          className="
          mt-3
          text-gray-500
          "
        >
          Every memory has an echo.
        </p>

      </div>

    </section>

  );

}

interface RowProps {

  icon: React.ReactNode;

  title: string;

  value: string;

}

function InfoRow({

  icon,

  title,

  value,

}: RowProps) {

  return (

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
        items-center
        gap-4
        "
      >

        <div
          className="
          rounded-2xl
          bg-violet-50
          p-3
          text-violet-600
          "
        >

          {icon}

        </div>

        <span
          className="
          text-lg
          font-semibold
          "
        >

          {title}

        </span>

      </div>

      <span
        className="
        text-lg
        text-gray-600
        "
      >

        {value}

      </span>

    </div>

  );

}