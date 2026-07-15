import { useMemo, useState } from "react";
import { format, isSameDay } from "date-fns";
import { CalendarDays } from "lucide-react";
import CalendarSkeleton from "@/components/Skeleton/CalendarSkeleton";

import { Echo } from "@/types/echo";
import { useEchoStore } from "@/store/echoStore";

import AppContainer from "@/styles/AppContainer";

import Calendar from "./Calendar";
import CalendarBottomSheet from "./CalendarBottomSheet";
import EmptyState from "@/components/Shared/EmptyState";
import ErrorState from "@/components/Shared/ErrorState";
interface Props {
  onOpenEcho: (echo: Echo) => void;
}

export default function CalendarView({
  onOpenEcho,
}: Props) {

  const echoes = useEchoStore(
    (state) => state.echoes
  );

const loading = useEchoStore(
  state => state.loading
);

  const [selectedDate, setSelectedDate] =
    useState(new Date());

  const [showSheet, setShowSheet] =
    useState(false);

  /* ---------- Selected Day Echoes ---------- */

  const selectedEchoes = useMemo(() => {

    return echoes.filter((echo) =>
      isSameDay(
        new Date(echo.date),
        selectedDate
      )
    );

  }, [echoes, selectedDate]);

if (loading) {

  return <CalendarSkeleton />;

}

<EmptyState
    emoji="📅"
    title="No Memories Yet"
    description="Once you create memories they'll appear here."
/>
  return (

    <AppContainer className="py-8">

      {/* Header */}

      <header className="mb-8">

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

        <h1
          className="
            mt-2
            text-4xl
            font-black
            text-gray-900
          "
        >
          Your Memories
        </h1>

        <p
          className="
            mt-3
            max-w-md
            text-gray-500
          "
        >
          Browse your memories day by day.
        </p>

      </header>

      {/* Calendar Card */}

      <Calendar
        value={selectedDate}
        onChange={(date) => {

          setSelectedDate(date);

          setShowSheet(true);

        }}
      />

      {/* Quick Summary */}

      <div
        className="
          mt-8
          rounded-3xl
          bg-white
          p-6
          shadow-lg
        "
      >

        <div className="flex items-center gap-3">

          <CalendarDays
            className="text-violet-600"
          />

          <div>

            <h3 className="font-bold">

              {format(
                selectedDate,
                "dd MMMM yyyy"
              )}

            </h3>

            <p className="text-sm text-gray-500">

              {selectedEchoes.length}

              {selectedEchoes.length === 1
                ? " memory"
                : " memories"}

            </p>

          </div>

        </div>

      </div>

      {/* Bottom Sheet */}

      <CalendarBottomSheet

        open={showSheet}

        date={selectedDate}

        echoes={selectedEchoes}

        onClose={() =>
          setShowSheet(false)
        }

        onOpenEcho={onOpenEcho}

      />

    </AppContainer>

  );

}