import Section from "@/styles/Section";

import { Echo } from "@/types/echo";

import RecentEchoesCard from "./RecentEchoesCard";

interface Props {
  echoes: Echo[];
  onOpen: (echo: Echo) => void;
}

export default function RecentEchoes({
  echoes,
  onOpen,
}: Props) {

  if (!echoes.length) return null;

  return (

    <Section title="Recent Echoes">

      <div className="space-y-6">

        {echoes.map((echo) => (

          <RecentEchoesCard
            key={echo.id}
            echo={echo}
            onOpen={onOpen}
          />

        ))}

      </div>

    </Section>

  );

}