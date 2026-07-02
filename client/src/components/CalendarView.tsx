import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const echoDays = [2, 5, 8, 12, 18, 22, 27];

export default function CalendarView() {
  return (
    <main className="min-h-screen bg-[#F8F9FD] pb-28">
      {/* Header */}

      <div className="px-6 pt-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Calendar
        </h1>

        <p className="mt-2 text-gray-500">
          Every highlighted day has a memory.
        </p>
      </div>

      {/* Month */}

      <div className="mt-8 flex items-center justify-between px-6">

        <button className="rounded-xl bg-white p-3 shadow-md">
          <ChevronLeft />
        </button>

        <h2 className="text-2xl font-bold">
          July 2026
        </h2>

        <button className="rounded-xl bg-white p-3 shadow-md">
          <ChevronRight />
        </button>

      </div>

      {/* Week */}

      <div className="mt-8 grid grid-cols-7 px-6 text-center text-sm font-semibold text-gray-400">

        {week.map(day => (
          <div key={day}>{day}</div>
        ))}

      </div>

      {/* Calendar */}

      <div className="mt-4 grid grid-cols-7 gap-3 px-6">

        {days.map(day => {

          const active = echoDays.includes(day);

          return (
            <motion.button
              whileTap={{ scale: .9 }}
              whileHover={{ scale: 1.05 }}
              key={day}
              className={`aspect-square rounded-2xl font-semibold transition ${
                active
                  ? "bg-violet-600 text-white shadow-lg"
                  : "bg-white"
              }`}
            >
              {day}
            </motion.button>
          );
        })}

      </div>

      {/* Bottom Card */}

      <div className="mt-10 px-6">

        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-500 p-6 text-white shadow-xl">

          <p className="text-sm opacity-80">
            Selected Day
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Sunset at Udaipur
          </h2>

          <p className="mt-3 leading-7 opacity-90">
            One of the most peaceful evenings.
            Watching the sunset over Lake Pichola
            felt unforgettable.
          </p>

        </div>

      </div>

    </main>
  );
}