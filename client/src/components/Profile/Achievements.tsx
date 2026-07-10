import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  Image,
  MapPin,
  Sparkles,
  Video,
} from "lucide-react";

interface Props {
  totalEchoes: number;

  photos: number;

  videos: number;

  favorites: number;

  locations: number;
}

export default function Achievements({
  totalEchoes,
  photos,
  videos,
  favorites,
  locations,
}: Props) {

  const achievements = [

    {
      title: "First Memory",
      description: "Created your first Echo.",
      unlocked: totalEchoes >= 1,
      icon: Sparkles,
      color: "bg-violet-100 text-violet-600",
    },

    {
      title: "Photographer",
      description: "Saved 100 photos.",
      unlocked: photos >= 100,
      icon: Image,
      color: "bg-blue-100 text-blue-600",
    },

    {
      title: "Videographer",
      description: "Saved your first video.",
      unlocked: videos >= 1,
      icon: Video,
      color: "bg-red-100 text-red-600",
    },

    {
      title: "Favorite Collector",
      description: "Marked 25 memories as favorite.",
      unlocked: favorites >= 25,
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
    },

    {
      title: "Explorer",
      description: "Visited 20 locations.",
      unlocked: locations >= 20,
      icon: MapPin,
      color: "bg-green-100 text-green-600",
    },

    {
      title: "Memory Keeper",
      description: "Created 100 memories.",
      unlocked: totalEchoes >= 100,
      icon: Camera,
      color: "bg-yellow-100 text-yellow-600",
    },

  ];

  return (

    <section className="mt-10">

      <h2 className="mb-5 text-xl font-bold">

        Achievements

      </h2>

      <div className="space-y-4">

        {achievements.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div

              key={item.title}

              whileHover={{
                scale: 1.02,
              }}

              className={`
                flex
                items-center
                gap-4

                rounded-3xl

                border

                p-5

                transition

                ${
                  item.unlocked
                    ? "border-violet-100 bg-white shadow-sm"
                    : "border-gray-200 bg-gray-50 opacity-60"
                }
              `}

            >

              <div
                className={`
                  flex

                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  ${item.color}
                `}
              >

                <Icon size={26} />

              </div>

              <div className="flex-1">

                <h3 className="font-bold">

                  {item.title}

                </h3>

                <p className="mt-1 text-sm text-gray-500">

                  {item.description}

                </p>

              </div>

              {item.unlocked ? (

                <span className="text-xl">

                  🏆

                </span>

              ) : (

                <span className="text-xl opacity-40">

                  🔒

                </span>

              )}

            </motion.div>

          );

        })}

      </div>

    </section>

  );

}