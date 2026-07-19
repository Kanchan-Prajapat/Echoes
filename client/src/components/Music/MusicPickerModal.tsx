import { useMemo, useState, useEffect } from "react";
import {
  X,
  Search,
  Music2,
  CheckCircle2,
  Play,
  Pause,
} from "lucide-react";

import useAudio from "@/hooks/useAudio";
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

const { current, playing, play, pause, stop } =
  useAudio();

  useEffect(() => {
  if (!open) {
    stop();
  }
}, [open]);

  const filteredMusic = useMemo(() => {
    if (!search.trim()) return music;

    const query = search.toLowerCase();


    return music.filter(
      (item) =>
        item.title
          .toLowerCase()
          .includes(query) ||
        item.artist
          .toLowerCase()
          .includes(query) ||
        item.category
          .toLowerCase()
          .includes(query)
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

        const isPlaying =
          playing &&
          current?.id === item._id;

        return (

          <div
            key={item._id}
            onClick={() => {
  stop();
  onSelect(item);
}}
            className={`
              flex
              cursor-pointer
              items-center
              justify-between
              rounded-2xl
              border
              p-4
              transition

              ${
                selected
                  ? "border-violet-500 bg-violet-50"
                  : "border-gray-200 hover:border-violet-400 hover:shadow-md"
              }
            `}
          >

            {/* Left */}

            <div className="flex items-center gap-4">

              {/* Cover */}

              <button
                type="button"
                onClick={(e) => {

                  e.stopPropagation();

                  const previewMusic = {
                    id: item._id,
                    title: item.title,
                    artist: item.artist,
                    cover: item.cover,
                    url: item.url,
                    duration: item.duration,
                    source: "echoes" as const,
                  };

                  if (isPlaying) {
                    pause();
                  } else {
                    play(previewMusic);
                  }

                }}
                className="group relative h-14 w-14 overflow-hidden rounded-xl"
              >

                {item.cover ? (

                  <img
                    src={item.cover}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                ) : (

                  <div className="flex h-full w-full items-center justify-center bg-violet-100">

                    <Music2
                      size={22}
                      className="text-violet-600"
                    />

                  </div>

                )}

              <div
  className={`
absolute
inset-0
flex
flex-col
items-center
justify-center
gap-1
transition

${
  isPlaying
    ? "bg-black/45 opacity-100"
    : "bg-black/30 opacity-0 group-hover:opacity-100"
}
`}
>
  {isPlaying ? (
    <>
      <Pause
        size={18}
        fill="white"
        className="text-white"
      />
      <span className="text-[10px] text-white">
        Playing
      </span>
    </>
  ) : (
    <>
      <Play
        size={18}
        fill="white"
        className="text-white"
      />
      <span className="text-[10px] text-white">
        Preview
      </span>
    </>
  )}
</div>

              </button>

              {/* Info */}

              <div>

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

            {/* Right */}

            {selected && (

              <div className="flex items-center gap-2 text-violet-600">

                <CheckCircle2 size={20} />

                <span className="text-sm font-medium">
                  Selected
                </span>

              </div>

            )}

          </div>

        );

      })}

    </div>

  )}

</div>

                    {/* Selected */}


        </div>

      </div>

  );
}