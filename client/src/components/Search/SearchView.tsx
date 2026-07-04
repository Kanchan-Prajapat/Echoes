import { useMemo, useState } from "react";

import { useEchoStore } from "@/store/echoStore";
import { Echo } from "@/types/echo";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

interface Props {
  onClose: () => void;
  onOpenEcho: (echo: Echo) => void;
}

export default function SearchView({
  onClose,
  onOpenEcho,
}: Props) {

  const echoes = useEchoStore(
    (state) => state.echoes
  );

  const [query, setQuery] =
    useState("");

  const results = useMemo(() => {

    const q =
      query.toLowerCase();

    if (!q) return echoes;

    return echoes.filter((echo) =>

      echo.title
        .toLowerCase()
        .includes(q)

      ||

      echo.location
        ?.toLowerCase()
        .includes(q)

      ||

      echo.description
        ?.toLowerCase()
        .includes(q)

      ||

      echo.mood
        ?.toLowerCase()
        .includes(q)

    );

  }, [echoes, query]);

  return (

    <main className="min-h-screen bg-[#F8F9FD]">

      <SearchBar
        query={query}
        setQuery={setQuery}
      />

      <SearchResults
        results={results}
        onOpenEcho={(echo) => {

          onOpenEcho(echo);

          onClose();

        }}
      />

    </main>

  );

}