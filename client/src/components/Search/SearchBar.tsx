import {
  Search,
  X,
  ArrowLeft,
} from "lucide-react";

interface Props {
  query: string;
  setQuery: (value: string) => void;
  onBack: () => void;
}

export default function SearchBar({
  query,
  setQuery,
  onBack,
}: Props) {
  return (
    <div className="sticky top-0 z-30 bg-[#F8F9FD]/90 backdrop-blur-xl">

      <div className="mx-auto w-full max-w-4xl px-6 py-6">

        {/* Header */}

        <div className="mb-5 flex items-center gap-4">

        <button
  onClick={() => {
    onBack();
  }}
>
            <ArrowLeft size={20} />
          </button>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600">
              Echoes
            </p>

            <h1 className="text-3xl font-black text-gray-900">
              Find a Memory
            </h1>

          </div>

        </div>

        {/* Search */}

        <div
          className="
            flex
            items-center
            rounded-3xl
            border
            border-gray-200
            bg-white
            px-5
            py-2
            shadow-lg
          "
        >

          <Search
            size={20}
            className="text-gray-400"
          />

          <input
            autoFocus
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search title, place, mood..."
            className="
              w-full
              bg-transparent
              px-4
              py-3
              text-gray-800
              placeholder:text-gray-400
              outline-none
            "
          />

          {query && (

            <button
              onClick={() => setQuery("")}
              className="
                rounded-full
                bg-gray-100
                p-2
                transition
                hover:bg-gray-200
              "
            >
              <X size={18} />
            </button>

          )}

        </div>

      </div>

    </div>
  );
}