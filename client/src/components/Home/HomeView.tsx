import { Search, Bell } from "lucide-react";
import AppContainer from "@/styles/AppContainer";

import {
  Greeting,
  EchoHighlights,
  HomeQuote,
  QuickStats,
  RecentEchoes,
  ContinueWatching
} from ".";
import HomeSkeleton from "../Skeleton/HomeSkeleton";
import { Echo } from "@/types/echo";
import { useEchoStore } from "@/store/echoStore";
import EmptyState from "../Shared/EmptyState";
import { useState } from "react";
import EchoPlayer from "@/components/EchoPlayer";
import usePullToRefresh
from "@/hooks/usePullToRefresh";

import PullToRefresh
from "@/components/Shared/PullToRefresh";

import { refreshEchoes }
from "@/services/echoSync";

interface Props {
  onOpenEcho: (echo: Echo) => void;
  onCreateEcho: () => void;
  onSearch: () => void;
}

export default function HomeView({
  onOpenEcho,
  onCreateEcho,
  onSearch,
}: Props) {
  const echoes = useEchoStore(
    (state) => state.echoes
  );

const loading = useEchoStore(
    state => state.loading
);

const [showPlayer, setShowPlayer] =
    useState(false);

const [selectedEchoIndex, setSelectedEchoIndex] =
    useState(0);

const {

  pull,

  refreshing,

} = usePullToRefresh({

  onRefresh:
    refreshEchoes,

});

if (loading) {
    return <HomeSkeleton />;
}

if (!loading && echoes.length === 0) {

  return (

    <EmptyState

      emoji="✨"

      title="No Echoes Yet"

      description="Every unforgettable journey starts with a single memory."

      action={

        <button

          onClick={onCreateEcho}

          className="rounded-full bg-violet-600 px-8 py-4 font-semibold text-white"

        >

          Create Your First Echo

        </button>

      }

    />

  );

}

  return (

    <main className="min-h-screen bg-[#F8F9FD] pb-32">

    <PullToRefresh

pull={pull}

refreshing={refreshing}

/>

      <AppContainer className="space-y-8 py-8">

        {/* Header */}

        <div className="mb-8 flex items-start justify-between">

          <Greeting />

          <div className="flex gap-3">

            <button
              onClick={onSearch}
              className="rounded-2xl bg-white p-3 shadow-md"
            >
              <Search size={20} />
            </button>

            <button
              className="rounded-2xl bg-white p-3 shadow-md"
            >
              <Bell size={20} />
            </button>

          </div>

        </div>

        {/* Highlights */}

        <EchoHighlights
          echoes={echoes}
          onOpenEcho={(echo) => {

    const index =
       echoes.findIndex(
  e => e.id === echo.id
)

    setSelectedEchoIndex(index);

    setShowPlayer(true);

}}
        />

        {/* Quote */}

        <HomeQuote />


        <ContinueWatching
          echoes={echoes}
          onResume={onOpenEcho}
        />



        {/* Recent */}

        <RecentEchoes
          echoes={echoes}
          onOpen={onOpenEcho}
        />

        {/* Stats */}

        <QuickStats
          echoes={echoes} />

          {showPlayer && (

<EchoPlayer
    echoes={echoes}
    currentEchoIndex={selectedEchoIndex}
    initialMediaIndex={selectedEchoIndex}
    onClose={() => setShowPlayer(false)}
/>

)}

      </AppContainer>




    </main>

  );
}