import { Plus } from "lucide-react";
import { useEchoStore } from "@/store/echoStore";
import { Echo } from "@/types/echo";
import EchoBubble from "./EchoBubble";

interface Props {
  onOpenEcho: (echo: Echo) => void;
  onCreateEcho?: () => void;
}

export default function EchoHighlights({
  onOpenEcho,
  onCreateEcho,
}: Props) {
  const echoes = useEchoStore(
    (state) => state.echoes
  );

  const sorted = [...echoes].sort((a, b) => {
    if (a.favorite && !b.favorite) return -1;
    if (!a.favorite && b.favorite) return 1;

    return (
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
    );
  });

  return (
    <section className="mb-10">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Your Echoes

        </h2>

        <button
          onClick={onCreateEcho}
          className="rounded-full bg-violet-600 p-2 text-white shadow-lg"
        >

          <Plus size={18} />

        </button>

      </div>

      <div
  className=" flex  gap-5  overflow-x-auto  snap-x  snap-mandatory  no-scrollbar  pb-3  pr-6 ">

        {sorted.map((echo) => (

        <EchoBubble
  key={echo.id}
  echo={echo}
  onOpenEcho={onOpenEcho}
/>

        ))}

      </div>

    </section>
  );
}