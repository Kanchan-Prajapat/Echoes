import { useMemo, useState } from "react";
import { motion } from "framer-motion";

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

    const q = query.trim().toLowerCase();

    if (!q) return echoes;

    return echoes.filter((echo) =>

      echo.title
        ?.toLowerCase()
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
        onBack={onClose}
      />

      {!query && (

       <motion.div
  initial={{
    opacity: 0,
    y: 10,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
>

  <div className="mx-auto w-full max-w-4xl px-6 pb-2">

   <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-violet-600">
  Suggested Searches
</p>

    <div className="mt-4 flex flex-wrap gap-3">

      {[
        "Trip",
        "Birthday",
        "College",
        "Family",
        "Wedding",
        "Jaipur",
      ].map((item) => (

        <button
          key={item}
          onClick={() => setQuery(item)}
          className="
            rounded-full
            bg-white
            px-4
            py-2
            text-sm
            shadow-md
            transition
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          {item}
        </button>

      ))}

    </div>

  </div>

</motion.div>

      )}

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