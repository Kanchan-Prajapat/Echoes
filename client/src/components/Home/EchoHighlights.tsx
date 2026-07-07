import Section from "@/styles/Section";

import { Echo } from "@/types/echo";

import EchoBubble from "./EchoBubble";

interface Props {
  echoes: Echo[];

  onOpenEcho: (echo: Echo) => void;
}

export default function EchoHighlights({
  echoes,
  onOpenEcho,
}: Props) {

  if (echoes.length === 0) {
    return null;
  }

  return (

    <Section
      title="Highlights"
      subtitle="Your favourite memories"
    >

      <div
        className="flex gap-5 overflow-x-auto pb-2 hide-scrollbar snap-x "
      >
        {echoes.map((echo) => (

          <EchoBubble
            key={echo.id}
            echo={echo}
            onOpenEcho={onOpenEcho}
          />

        ))}

      </div>

    </Section>

  );

}