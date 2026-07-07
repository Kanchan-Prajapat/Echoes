import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CalendarDays,
} from "lucide-react";

import { Echo } from "@/types/echo";

import TimelineLine from "./TimelineLine";
import TimelineCard from "./TimelineCard";

interface Props {
  month: string;
  echoes: Echo[];

  expanded: boolean;
  onToggle: () => void;

  onOpen: (echo: Echo) => void;
}

export default function TimelineMonth({
  month,
  echoes,
  expanded,
  onToggle,
  onOpen,
}: Props) {

  return (

    <section className="relative">

      <div className="flex gap-6">

        {/* Timeline Line */}

        <TimelineLine />

        <div className="flex-1">

          {/* Month Header */}

          <motion.button
            whileTap={{
              scale: .98,
            }}
            onClick={onToggle}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-3xl
              bg-white
              px-6
              py-5
              shadow-md
              transition
              hover:shadow-lg
            "
          >

            <div>

              <div className="flex items-center gap-2">

                <CalendarDays
                  size={18}
                  className="text-violet-600"
                />

                <h2 className="text-2xl font-bold">

                  {month}

                </h2>

              </div>

              <p className="mt-2 text-sm text-gray-500">

                {echoes.length}
                {" "}
                {echoes.length === 1
                  ? "memory"
                  : "memories"}

              </p>

            </div>

            <motion.div
              animate={{
                rotate: expanded
                  ? 180
                  : 0,
              }}
              transition={{
                duration: .25,
              }}
            >

              <ChevronDown
                size={22}
              />

            </motion.div>

          </motion.button>

          {/* Cards */}

          <AnimatePresence>

            {expanded && (

              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: .3,
                }}
                className="
                  mt-6
                  space-y-6
                  overflow-hidden
                "
              >

                {echoes.map((echo) => (

                  <TimelineCard
                    key={echo.id}
                    echo={echo}
                    onOpen={onOpen}
                  />

                ))}

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </section>

  );

}