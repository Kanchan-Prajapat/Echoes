import { Search, X } from "lucide-react";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

export default function SearchBar({
  query,
  setQuery,
}: Props) {
  return (
    <div className="sticky top-0 z-20 bg-white p-6 shadow-sm">

      <div className="flex gap-3">

        <div className="flex flex-1 items-center rounded-2xl bg-gray-100 px-4">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            autoFocus
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search memories..."
            className="w-full bg-transparent p-4 outline-none"
          />

        </div>

        {query && (

          <button
            onClick={() => setQuery("")}
          >

            <X />

          </button>

        )}

      </div>

    </div>
  );
}