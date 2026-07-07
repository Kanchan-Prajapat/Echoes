import { motion } from "framer-motion";

import CalendarDay from "./CalendarDay";

import { Echo } from "@/types/echo";

interface Props {
  days: Date[];
  currentMonth: Date;
  selectedDate: Date;
  echoes: Echo[];

  onSelect: (date: Date) => void;
}

const weekDays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export default function CalendarGrid({
  days,
  currentMonth,
  selectedDate,
  echoes,
  onSelect,
}: Props) {
  return (

    <div>

      {/* Week Header */}

      <div
        className="
          mb-4
          grid
          grid-cols-7
          gap-2
        "
      >

        {weekDays.map((day) => (

          <div
            key={day}
            className="
              text-center
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-gray-400
            "
          >
            {day}
          </div>

        ))}

      </div>

      {/* Calendar */}

      <motion.div

        layout

        className="
          grid
          grid-cols-7
          gap-2
        "

      >

        {days.map((day) => (

          <motion.div

            key={day.toISOString()}

            layout

            initial={{
              opacity: 0,
              scale: .9,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: .22,
            }}

          >

            <CalendarDay
              date={day}
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              echoes={echoes}
              onSelect={onSelect}
            />

          </motion.div>

        ))}

      </motion.div>

    </div>

  );
}