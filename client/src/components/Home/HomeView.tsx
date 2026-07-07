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

import { Echo } from "@/types/echo";
import { useEchoStore } from "@/store/echoStore";

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

  return (

    <main className="min-h-screen bg-[#F8F9FD] pb-32">

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
          onOpen={onOpenEcho}
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

      </AppContainer>




    </main>

  );
}