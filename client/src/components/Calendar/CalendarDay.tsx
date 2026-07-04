import {
  isSameDay,
  isSameMonth,
  isToday,
} from "date-fns";
import { Echo } from "@/types/echo";

interface Props {
  date: Date;
  currentMonth: Date;
  selectedDate: Date;
  echoes: Echo[];
  onSelect: (date: Date) => void;
}

export default function CalendarDay({
  date,
  currentMonth,
  selectedDate,
  echoes,
  onSelect,
}: Props) {
  const selected = isSameDay(
    date,
    selectedDate
  );

  const today = isToday(date);

  const current = isSameMonth(
    date,
    currentMonth
  );

  const memories = echoes.filter((echo) =>
  isSameDay(
    new Date(echo.date),
    date
  )
);

const count = memories.length;

const favorite = memories.some(
  (e) => e.favorite
);

  return (
    <button
      onClick={() => onSelect(date)}
      className={`
        relative
        flex
        aspect-square
        items-center
        justify-center
        rounded-2xl
        transition-all
        duration-200
        hover:scale-105
      `}
    >
      {/* Selected Background */}

      {selected && (
        <div
          className="
            absolute
            inset-1
            rounded-2xl
            bg-violet-600
            shadow-lg
          "
        />
      )}

      {/* Today Ring */}

      {today && !selected && (
        <div
          className="
            absolute
            inset-1
            rounded-2xl
            border-2
            border-violet-500
          "
        />
      )}

      {/* Date */}

      <span
        className={`
          relative
          z-10
          text-sm
          font-semibold

          ${
            selected
              ? "text-white"
              : current
              ? "text-gray-800"
              : "text-gray-300"
          }
        `}
      >
        {date.getDate()}
      </span>

      {/* Memory Dot (Coming Later) */}

     <div className="absolute bottom-1 flex items-center justify-center gap-0.5">

  {favorite && (
    <div
      className="
        h-1.5
        w-1.5
        rounded-full
        bg-yellow-400
      "
    />
  )}

  {Array.from({
    length: Math.min(count, 3),
  }).map((_, i) => (

    <div
      key={i}
      className="
        h-1.5
        w-1.5
        rounded-full
        bg-violet-500
      "
    />

  ))}

</div>

    </button>
  );
}