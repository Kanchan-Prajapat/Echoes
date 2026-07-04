import TimelineMonth from "./TimelineMonth";
import { useState } from "react";
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
  const orderedMonths = Object.keys(months);
const [expandedMonth, setExpandedMonth] = useState(
  orderedMonths[0]
);
  return (
    <section className="mb-16">

      {/* Year */}

     <div className="sticky top-0 z-20 bg-[#F8F9FD]/90 backdrop-blur-xl py-4">

    <h1 className="text-5xl font-black">

        {year}

    </h1>

</div>

      {orderedMonths.map((month) => (

     <TimelineMonth
    key={month}
    month={month}
    echoes={months[month]}
    onOpen={onOpen}

    expanded={expandedMonth === month}

    onToggle={() =>
        setExpandedMonth(
            expandedMonth === month
                ? ""
                : month
        )
    }
/>

      ))}

    </section>
  );
}