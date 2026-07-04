import { format } from "date-fns";
import { Echo } from "@/types/echo";
import CalendarDay from "./CalendarDay";

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
    <>
      {/* Week Days */}

      <div className="mb-3 grid grid-cols-7">
        {weekDays.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-semibold text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7 gap-2">

        {days.map((date) => (

          <CalendarDay
            key={date.toISOString()}
            date={date}
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            echoes={echoes}
            onSelect={onSelect}
          />

        ))}

      </div>
    </>
  );
}