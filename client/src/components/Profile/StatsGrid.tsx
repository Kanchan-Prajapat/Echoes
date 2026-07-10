import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Heart,
  MapPin,
} from "lucide-react";

interface Props {
  photos: number;
  videos: number;
  favorites: number;
  locations: number;
}

const stats = (
  photos: number,
  videos: number,
  favorites: number,
  locations: number
) => [
  {
    icon: Camera,
    label: "Photos",
    value: photos,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Video,
    label: "Videos",
    value: videos,
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Heart,
    label: "Favorites",
    value: favorites,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: MapPin,
    label: "Locations",
    value: locations,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export default function StatsGrid({
  photos,
  videos,
  favorites,
  locations,
}: Props) {
  return (
    <section className="mt-10">

      <h2 className="mb-5 text-xl font-bold">
        Your Library
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {stats(
          photos,
          videos,
          favorites,
          locations
        ).map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.label}

              whileHover={{
                y: -4,
                scale: 1.02,
              }}

              whileTap={{
                scale: .98,
              }}

              className="
                rounded-3xl
                bg-white
                p-5
                shadow-sm
                border
                border-gray-100
              "
            >

              <div
                className={`
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  ${item.bg}
                `}
              >

                <Icon
                  size={22}
                  className={item.color}
                />

              </div>

              <h3 className="text-3xl font-black">

                {item.value}

              </h3>

              <p className="mt-1 text-gray-500">

                {item.label}

              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}