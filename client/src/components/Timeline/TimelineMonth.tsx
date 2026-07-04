import TimelineCard from "./TimelineCard";
import TimelineLine from "./TimelineLine";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { Echo } from "@/types/echo";
import { AnimatePresence, motion } from "framer-motion";

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
    <section className="mb-12">

      {/* Month Heading */}
      <button
        onClick={onToggle}
        className="mb-6 flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 shadow"
      >

        <div className="flex items-center gap-3">

          {expanded ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          )}

          <h2 className="font-bold text-violet-700">
            {month}
          </h2>

        </div>

        <span className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700">

          {echoes.length}

        </span>

      </button>
      {/* Timeline */}

      <AnimatePresence>

        {expanded && (

          <motion.div

            initial={{
              height: 0,
              opacity: 0
            }}

            animate={{
              height: "auto",
              opacity: 1
            }}

            exit={{
              height: 0,
              opacity: 0
            }}

            transition={{
              duration: .35
            }}

            className="overflow-hidden space-y-8"
          >

            {echoes.map((echo, index) => (

              <div
                key={echo.id}
            className="flex items-start gap-6"
              >

              
  <TimelineLine
    last={index === echoes.length - 1}
  />

                <div className="flex-1">

                  <TimelineCard
                    echo={echo}
                    onOpen={onOpen}
                  />

                </div>

              </div>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}