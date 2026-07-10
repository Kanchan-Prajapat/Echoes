import { motion } from "framer-motion";
import {
  CalendarDays,
  Sparkles,
  Smile,
  TrendingUp,
} from "lucide-react";

interface Props {
  firstMemory?: string;

  latestMemory?: string;

  favoriteMood?: string;

  activeMonth?: string;
}

export default function JourneyCard({
  firstMemory,
  latestMemory,
  favoriteMood,
  activeMonth,
}: Props) {
  const items = [
    {
      icon: CalendarDays,
      title: "First Memory",
      value: firstMemory ?? "--",
      color: "text-violet-500",
      bg: "bg-violet-50",
    },
    {
      icon: Sparkles,
      title: "Latest Memory",
      value: latestMemory ?? "--",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: Smile,
      title: "Favorite Mood",
      value: favoriteMood ?? "--",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    {
      icon: TrendingUp,
      title: "Most Active Month",
      value: activeMonth ?? "--",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="mt-10">

      <h2 className="mb-5 text-xl font-bold">
        Memory Journey
      </h2>

      <motion.div
        layout
        className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          border
          border-gray-100
        "
      >

        <div className="space-y-6">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}

                whileHover={{
                  x: 4,
                }}

                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div
                  className={`
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

                <div>

                  <h4 className="font-semibold">

                    {item.title}

                  </h4>

                  <p className="text-gray-500">

                    {item.value}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </motion.div>

    </section>
  );
}