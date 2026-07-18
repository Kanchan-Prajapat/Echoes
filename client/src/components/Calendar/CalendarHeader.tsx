import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { format } from "date-fns";

import CalendarDropdown from "./CalendarDropdown";

interface Props {
  month: Date;

  onPrevious: () => void;
  onNext: () => void;

  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
}

export default function CalendarHeader({
  month,
  onPrevious,
  onNext,
  onMonthChange,
  onYearChange,
}: Props){
const monthButtonRef =
  useRef<HTMLButtonElement>(null);

const yearButtonRef =
  useRef<HTMLButtonElement>(null);

const [anchor, setAnchor] =
  useState<DOMRect | null>(null);

const [dropdownType, setDropdownType] =
  useState<"month" | "year" | null>(null);

const months = useMemo(
  () => [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  []
);

const years = useMemo(() => {
  const currentYear = new Date().getFullYear();

  return Array.from(
    { length: 100 },
    (_, i) => currentYear - i
  );
}, []);


  return (
    <div className="mb-8">

      {/* Small Label */}

      <p
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.28em]
          text-violet-600
        "
      >
        Calendar
      </p>

      {/* Header */}

      <div className="mt-3 flex items-center justify-between">

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={onPrevious}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-white
            shadow-md
            transition
            hover:shadow-lg
          "
        >
          <ChevronLeft size={20} />
        </motion.button>

        <motion.div
          key={format(month, "MMMM yyyy")}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .25,
          }}
          className="text-center"
        >
        <div className="flex items-center justify-center gap-2">
<button
  ref={monthButtonRef}
  type="button"
  onClick={() => {
    setAnchor(
      monthButtonRef.current?.getBoundingClientRect() ??
        null
    );

    setDropdownType("month");
  }}
  className="
    flex
    items-center
    gap-1
    rounded-xl
    px-3
    py-1.5
    transition
    hover:bg-violet-50
  "
>
  <span className="text-3xl font-black">
    {format(month, "MMMM")}
  </span>

  <ChevronDown size={18} />
</button>
<button
  ref={yearButtonRef}
  type="button"
  onClick={() => {
    setAnchor(
      yearButtonRef.current?.getBoundingClientRect() ??
        null
    );

    setDropdownType("year");
  }}
  className="
    flex
    items-center
    gap-1
    rounded-xl
    px-3
    py-1.5
    transition
    hover:bg-violet-50
  "
>
  <span className="text-lg font-semibold text-gray-500">
    {format(month, "yyyy")}
  </span>

  <ChevronDown size={16} />
</button>

</div>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={onNext}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-white
            shadow-md
            transition
            hover:shadow-lg
          "
        >
          <ChevronRight size={20} />
        </motion.button>

      </div>
<CalendarDropdown
  open={dropdownType !== null}
  anchor={anchor}
  items={
    dropdownType === "month"
      ? months
      : years.map(String)
  }
  selected={
    dropdownType === "month"
      ? month.getMonth()
      : years.findIndex(
          (y) => y === month.getFullYear()
        )
  }
  onSelect={(index) => {
    if (dropdownType === "month") {
      onMonthChange(index);
    } else {
      onYearChange(years[index]);
    }

    setDropdownType(null);
  }}
  onClose={() =>
    setDropdownType(null)
  }
/>
    </div>
  );
}