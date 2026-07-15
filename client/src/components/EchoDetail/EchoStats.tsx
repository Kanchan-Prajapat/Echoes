import { motion } from "framer-motion";
import {
  CalendarDays,
  Heart,
  Images,
  Video,
} from "lucide-react";

import Card from "@/styles/Card";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
}

interface StatProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
}

function StatCard({
  icon,
  title,
  value,
  color,
}: StatProps) {
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
      <Card>

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl

            ${color}
          `}
        >
          {icon}
        </div>

        <p
          className="
            mt-5
            text-sm
            text-gray-500
          "
        >
          {title}
        </p>

        <h3
          className="
            mt-1
            text-2xl
            font-black
          "
        >
          {value}
        </h3>

      </Card>
    </motion.div>
  );
}

export default function EchoStats({
  echo,
}: Props) {

  const imageCount = echo.media.filter(
    (m) => m.type === "image"
  ).length;

  const videoCount = echo.media.filter(
    (m) => m.type === "video"
  ).length;

  return (

    <section className="mt-8">

      {/* Section Header */}

      <div className="mb-5">

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-violet-600
          "
        >
          Insights
        </p>

        <h2
          className="
            mt-2
            text-2xl
            font-black
          "
        >
          Memory Statistics
        </h2>

      </div>

      {/* Grid */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >

        <StatCard
          icon={<Images size={22} />}
          title="Images"
          value={imageCount}
          color="bg-violet-100 text-violet-600"
        />

        <StatCard
          icon={<Video size={22} />}
          title="Videos"
          value={videoCount}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          icon={<Heart size={22} fill={echo.favorite ? "currentColor" : "none"} />}
          title="Favorite"
          value={echo.favorite ? "Yes" : "No"}
          color="bg-pink-100 text-pink-600"
        />

        <StatCard
          icon={<CalendarDays size={22} />}
          title="Created"
          value= {new Date(echo.date).toLocaleDateString()}
            
          color="bg-emerald-100 text-emerald-600"
        />

      </div>

    </section>

  );
}