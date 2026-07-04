import { useState, useMemo } from "react";

import { useEchoStore } from "@/store/echoStore";

import TimelineYear from "./TimelineYear";

import { Echo } from "@/types/echo";

interface Props {
  onOpenEcho: (echo: Echo) => void;
}

export default function TimelineView({
  onOpenEcho,
}: Props) {

  const echoes = useEchoStore(
    (state) => state.echoes
  );

  const [filter, setFilter] = useState<
  "all" | "favorites" | "photos" | "videos"
>("all");

const filteredEchoes = useMemo(() => {
  switch (filter) {
    case "favorites":
      return echoes.filter((e) => e.favorite);

    case "photos":
      return echoes.filter((e) =>
        e.media.some((m) => m.type === "image")
      );

    case "videos":
      return echoes.filter((e) =>
        e.media.some((m) => m.type === "video")
      );

    default:
      return echoes;
  }
}, [echoes, filter]);

const grouped = useMemo(() => {

    const result: Record<
      string,
      Record<string, Echo[]>
    > = {};

    [...filteredEchoes]
      .sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      )
      .forEach((echo) => {

        const date = new Date(echo.date);

        const year = date.getFullYear().toString();

        const month = date.toLocaleString(
          "default",
          {
            month: "long",
          }
        );

     
        if (!result[year]) {

          result[year] = {};

        }


        if (!result[year][month]) {

          result[year][month] = [];

        }

        result[year][month].push(echo);

      });

    return result;

  }, [filteredEchoes]);

     if (filteredEchoes.length === 0) {
  return (
    <main className="flex min-h-screen items-center justify-center">

      <div className="text-center">

        <div className="text-6xl">
          📆
        </div>

        <h2 className="mt-5 text-2xl font-bold">
          No Memories Found
        </h2>

        <p className="mt-2 text-gray-500">
          Try changing your filter.
        </p>

      </div>

    </main>
  );
}


  return (

    <main className="min-h-screen bg-[#F8F9FD] px-6 py-8 pb-32">

      <div className="mb-14">

    <h1 className="text-5xl font-black tracking-tight">

        Timeline

    </h1>

    <p className="mt-3 text-lg text-gray-500">

        Your life's beautiful moments.

    </p>

    <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">

  {[
    { id: "all", label: "All" },
    { id: "favorites", label: "❤️ Favorites" },
    { id: "photos", label: "📸 Photos" },
    { id: "videos", label: "🎥 Videos" },
  ].map((item) => (

    <button
      key={item.id}
      
      onClick={() => { console.log(item.id); setFilter(item.id as any);}}
      className={`flex-shrink-0 rounded-full px-5 py-2 transition-all
      ${
        filter === item.id
          ? "bg-violet-600 text-white shadow-lg"
          : "bg-white text-gray-600 shadow"
      }`}
    >
      {item.label}
    </button>

  ))}

</div>

</div>

      {Object.entries(grouped).map(
        ([year, months]) => (

          <TimelineYear
            key={year}
            year={year}
            months={months}
            onOpen={onOpenEcho}
          />

        )
      )}

    </main>

  );

}