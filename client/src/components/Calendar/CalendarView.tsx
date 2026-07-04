import { useMemo, useState } from "react";
import { format, isSameDay } from "date-fns";

import Calendar from "./Calendar";

import { Echo } from "@/types/echo";
import { useEchoStore } from "@/store/echoStore";

interface Props {
  onOpenEcho: (echo: Echo) => void;
}

export default function CalendarView({
  onOpenEcho,
}: Props) {

  const echoes = useEchoStore(
    (state) => state.echoes
  );

  const [selectedDate, setSelectedDate] =
    useState(new Date());

  const todaysEchoes = useMemo(() => {

    return echoes.filter((echo) =>
      isSameDay(
        new Date(echo.date),
        selectedDate
      )
    );

  }, [echoes, selectedDate]);

  return (

    <main className="min-h-screen bg-[#F8F9FD] pb-32">

      {/* Header */}

      <div className="px-6 pt-8">

        <h1 className="text-5xl font-black">

          Calendar

        </h1>

        <p className="mt-3 text-lg text-gray-500">

          Browse your memories by date.

        </p>

      </div>

      {/* Calendar */}

      <div className="mt-8 px-5">

        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
        />

      </div>

      {/* Selected Date */}

      <div className="mt-10 px-6">

        <h2 className="mb-5 text-2xl font-bold">

          {format(
            selectedDate,
            "dd MMMM yyyy"
          )}

        </h2>

        {todaysEchoes.length === 0 ? (

          <div className="rounded-3xl bg-white py-12 text-center shadow">

            <div className="text-5xl">

              📅

            </div>

            <h3 className="mt-4 text-xl font-bold">

              No Memories

            </h3>

            <p className="mt-2 text-gray-500">

              No Echo found for this day.

            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {todaysEchoes.map((echo) => {

              const cover =
                echo.media.find(
                  (m) =>
                    m.id ===
                    echo.coverMediaId
                ) ?? echo.media[0];

              return (

                <button
                  key={echo.id}
                  onClick={() =>
                    onOpenEcho(echo)
                  }
                  className="flex w-full gap-4 rounded-3xl bg-white p-4 text-left shadow transition hover:shadow-lg"
                >

                  {cover?.type ===
                  "image" ? (

                    <img
                      src={cover.url}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />

                  ) : (

                    <video
                      src={cover?.url}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />

                  )}

                  <div className="flex-1">

                    <h3 className="text-lg font-bold">

                      {echo.title}

                    </h3>

                    <p className="mt-2 text-gray-500">

                      {echo.location}

                    </p>

                    <p className="mt-1 text-sm">

                      {echo.mood}

                    </p>

                  </div>

                </button>

              );

            })}

          </div>

        )}

      </div>

    </main>

  );

}