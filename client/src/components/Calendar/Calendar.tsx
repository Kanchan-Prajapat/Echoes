import { useMemo, useState } from "react";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import { useEchoStore } from "@/store/echoStore";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

interface Props {
  value?: Date;
  onChange?: (date: Date) => void;
}

export default function Calendar({
  value,
  onChange,
}: Props) {
  const [currentMonth, setCurrentMonth] = useState(
    value ?? new Date()
  );

  const [selectedDate, setSelectedDate] = useState(
    value ?? new Date()
  );
const echoes = useEchoStore(
  (state) => state.echoes
);

  const monthDays = useMemo(() => {
    const start = startOfWeek(
      startOfMonth(currentMonth),
      {
        weekStartsOn: 0,
      }
    );

    const end = endOfWeek(
      endOfMonth(currentMonth),
      {
        weekStartsOn: 0,
      }
    );

    return eachDayOfInterval({
      start,
      end,
    });
  }, [currentMonth]);

  const previousMonth = () =>
    setCurrentMonth((m) => subMonths(m, 1));

  const nextMonth = () =>
    setCurrentMonth((m) => addMonths(m, 1));

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
  };

  return (
    <div className="rounded-3xl bg-white p-5 shadow-xl">

      <CalendarHeader
        month={currentMonth}
        onPrevious={previousMonth}
        onNext={nextMonth}
      />

    <CalendarGrid
  days={monthDays}
  currentMonth={currentMonth}
  selectedDate={selectedDate}
  echoes={echoes}
  onSelect={selectDate}
/>

    </div>
  );
}