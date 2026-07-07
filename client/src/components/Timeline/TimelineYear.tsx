import { useMemo, useState } from "react";
import { CalendarRange } from "lucide-react";

import TimelineMonth from "./TimelineMonth";

import { Echo } from "@/types/echo";

interface Props {
  year: string;
  months: Record<string, Echo[]>;
  onOpen: (echo: Echo) => void;
}

export default function TimelineYear({
  year,
  months,
  onOpen,
}: Props) {

  const orderedMonths =
    Object.keys(months);

  const [expandedMonth, setExpandedMonth] =
    useState(
      orderedMonths[0]
    );

  const totalMemories = useMemo(() => {

    return Object.values(months)
      .reduce(
        (sum, echoes) =>
          sum + echoes.length,
        0
      );

  }, [months]);

  return (

    <section className="relative">

      {/* Sticky Year */}

      <div
        className="
          sticky
          top-0
          z-20
          mb-8
          bg-[#F8F9FD]/90
          py-5
          backdrop-blur-xl
        "
      >

        <div className="flex items-center gap-4">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-300" />

          <div className="text-center">

            <p
              className="
                text-5xl
                font-black
                tracking-tight
                text-gray-900
              "
            >
              {year}
            </p>

            <div
              className="
                mt-2
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-gray-600
                shadow-md
              "
            >

              <CalendarRange
                size={15}
                className="text-violet-600"
              />

              {totalMemories} memories

            </div>

          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-300" />

        </div>

      </div>

      {/* Months */}

      <div className="space-y-8">

        {orderedMonths.map((month) => (

          <TimelineMonth
            key={month}
            month={month}
            echoes={months[month]}
            onOpen={onOpen}
            expanded={
              expandedMonth === month
            }
            onToggle={() =>
              setExpandedMonth(
                expandedMonth === month
                  ? ""
                  : month
              )
            }
          />

        ))}

      </div>

    </section>

  );

}