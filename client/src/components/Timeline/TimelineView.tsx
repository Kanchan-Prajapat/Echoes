import { useMemo } from "react";
import { Clock3 } from "lucide-react";
import TimelineSkeleton from "@/components/Skeleton/TimelineSkeleton";
import { useEchoStore } from "@/store/echoStore";
import { Echo } from "@/types/echo";

import AppContainer from "@/styles/AppContainer";
import EmptyState from "../Shared/EmptyState";
import TimelineYear from "./TimelineYear";

interface Props {
  onOpenEcho: (echo: Echo) => void;
}

export default function TimelineView({
  onOpenEcho,
}: Props) {

  const echoes = useEchoStore(
    (state) => state.echoes
  );

const loading = useEchoStore(
    state => state.loading
);

if (loading) {

    return <TimelineSkeleton />;

}
  /* ---------- Group By Year ---------- */

  const groupedYears = useMemo(() => {

    const groups: Record<
      string,
      Record<string, Echo[]>
    > = {};

    echoes.forEach((echo) => {

      const date = new Date(echo.date);

      const year = date.getFullYear().toString();

      const month = date.toLocaleString(
        "default",
        {
          month: "long",
        }
      );

      if (!groups[year]) {
        groups[year] = {};
      }

      if (!groups[year][month]) {
        groups[year][month] = [];
      }

      groups[year][month].push(echo);

    });

    return groups;

  }, [echoes]);

  const orderedYears =
    Object.keys(groupedYears)
      .sort((a, b) => Number(b) - Number(a));

   <EmptyState

    emoji="🕰️"

    title="Nothing to Remember Yet"

    description="Your life's timeline is waiting for its first story."

/>

  return (

    <AppContainer className="py-8">

      {/* Header */}

      <header className="mb-10">

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.28em]
            text-violet-600
          "
        >
          Timeline
        </p>

        <h1 className="mt-2 text-4xl font-black text-gray-900">
          Your Journey
        </h1>

        <p className="mt-3 max-w-md text-gray-500">
          Every memory arranged in the order it happened.
        </p>

        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white
            px-5
            py-3
            shadow-md
          "
        >

          <Clock3
            size={18}
            className="text-violet-600"
          />

          <span className="font-semibold">

            {echoes.length}
            {" "}
            Memories

          </span>

        </div>

      </header>

      {/* Timeline */}

      <div className="space-y-14">

        {orderedYears.map((year) => (

          <TimelineYear
            key={year}
            year={year}
            months={groupedYears[year]}
            onOpen={onOpenEcho}
          />

        ))}

      </div>

    </AppContainer>

  );

}