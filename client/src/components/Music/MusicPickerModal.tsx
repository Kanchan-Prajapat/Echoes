import { useMemo, useState } from "react";
import {
  X,
  Search,
  Music2,
  CheckCircle2,
} from "lucide-react";

import { Music } from "@/types/music";

interface Props {
  open: boolean;
  music: Music[];
  selectedMusicId?: string;
  onClose: () => void;
  onSelect: (music: Music) => void;
}

export default function MusicPickerModal({
  open,
  music,
  selectedMusicId,
  onClose,
  onSelect,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredMusic = useMemo(() => {
    if (!search.trim()) return music;

    const query = search.toLowerCase();

    return music.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.artist.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [music, search]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm">

      <div className="
flex
h-[92vh]
w-full
max-w-xl
flex-col
rounded-t-[32px]
bg-white
shadow-2xl
">

        {/* Drag Handle */}

        <div className="flex justify-center py-3">
          <div className="h-1.5 w-12 rounded-full bg-gray-300" />
        </div>

        {/* Header */}

        <div className="flex items-center justify-between border-b border-violet-100 px-6 pb-5">

          <div>

            <h2 className="text-xl font-semibold">
              🎵 Soundtrack
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Every memory deserves a soundtrack.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Search */}

        <div className="p-5">

          <div className="flex items-center rounded-full border px-4 transition focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search soundtrack..."
              className="w-full bg-transparent px-3 py-3 outline-none"
            />

          </div>

        </div>

        {/* Music List */}

        <div className="flex-1 overflow-y-auto px-5 pb-6">

          {filteredMusic.length === 0 ? (

            <div className="mt-20 text-center">

              <Music2
                size={48}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-4 font-semibold text-gray-700">
                No soundtrack found
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Try another keyword.
              </p>

            </div>

          ) : (

            <div className="space-y-3">

              {filteredMusic.map((item) => {

                const selected =
                  selectedMusicId === item._id;

                return (

                  <button
                    key={item._id}
                    onClick={() => onSelect(item)}
                    className={`
                      flex w-full items-center justify-between rounded-2xl border p-4 transition
                      ${
                        selected
                          ? "border-violet-500 bg-violet-50"
                          : "border-gray-200 hover:border-violet-400 hover:shadow-md"
                      }
                    `}
                  >

                    <div className="flex items-center gap-4">

                      {/* Cover */}

                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100">

                        {item.cover ? (

                          <img
                            src={item.cover}
                            alt={item.title}
                            className="h-full w-full rounded-xl object-cover"
                          />

                        ) : (

                          <Music2
                            size={24}
                            className="text-violet-600"
                          />

                        )}

                      </div>

                      {/* Info */}

                      <div className="text-left">

                        <p className="font-medium">
                          {item.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          {item.artist}
                        </p>

                        <span className="mt-2 inline-flex rounded-full bg-violet-100 px-2 py-1 text-[10px] font-medium text-violet-700">
                          {item.category}
                        </span>

                      </div>

                    </div>

                    {/* Selected */}

                    {selected && (

                      <div className="flex items-center gap-1 text-violet-600">

                        <CheckCircle2 size={20} />

                        <span className="text-sm font-medium">
                          Selected
                        </span>

                      </div>

                    )}

                  </button>

                );

              })}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}