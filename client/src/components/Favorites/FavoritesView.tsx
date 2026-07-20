import { Heart } from "lucide-react";
import { useMemo } from "react";

import AppContainer from "@/styles/AppContainer";
import { useEchoStore } from "@/store/echoStore";
import { Echo } from "@/types/echo";

import TimelineCard from "../Timeline/TimelineCard";
import EmptyState from "../Shared/EmptyState";

interface Props {
  onBack: () => void;
  onOpenEcho: (echo: Echo) => void;
}

export default function FavoritesView({
  onBack,
  onOpenEcho,
}: Props) {

  const echoes = useEchoStore(
    (state) => state.echoes
  );

  const loading = useEchoStore(
    (state) => state.loading
  );

  const favorites = useMemo(
    () =>
      echoes.filter((echo) => echo.favorite),
    [echoes]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!favorites.length) {
    return (
      <AppContainer className="py-8">
        <EmptyState
          emoji="❤️"
          title="No Favorite Echoes Yet"
          description="Tap the heart icon on any Echo to save your favorite memories."
        />
      </AppContainer>
    );
  }

  return (
    <AppContainer className="py-8 pb-32">

      {/* Header */}

      <header className="mb-10">

        <button
          onClick={onBack}
          className="text-violet-600 font-semibold"
        >
          ← Back
        </button>

        <div className="mt-5 flex items-center gap-3">

          <Heart
            size={28}
            className="fill-red-500 text-red-500"
          />

          <h1 className="text-4xl font-black">
            Favorite Echoes
          </h1>

        </div>

        <p className="mt-3 text-gray-500">
          Your most cherished memories.
        </p>

        <div className="mt-5 inline-flex rounded-full bg-white px-5 py-3 shadow">

          {favorites.length} Favorite
          {favorites.length > 1 && "s"}

        </div>

      </header>

      <div className="space-y-8">

        {favorites.map((echo) => (

          <TimelineCard
            key={echo.id}
            echo={echo}
            onOpen={onOpenEcho}
          />

        ))}

      </div>

    </AppContainer>
  );
}