import { Play, Pause, Music2 } from "lucide-react";
import useAudio from "@/hooks/useAudio";
import Card from "@/styles/Card";
import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
}

export default function EchoMusic({
  echo,
}: Props) {
    const {
  current,
  playing,
  play,
  pause,
} = useAudio();
const isPlaying =
  playing &&
  current?.id === echo.music?.id;

  if (!echo.music?.id) return null;




  return (
    <Card>

      <p className="mb-4 text-sm font-medium text-gray-500">
        Soundtrack
      </p>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          {echo.music.cover ? (

            <img
              src={echo.music.cover}
              alt={echo.music.title}
              className="h-16 w-16 rounded-2xl object-cover"
            />

          ) : (

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-violet-100
                text-violet-600
              "
            >
              <Music2 size={28} />
            </div>

          )}

          <div>

            <h3 className="font-semibold">
              {echo.music.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {echo.music.artist}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              {Math.floor(echo.music.duration / 60)}:
              {(echo.music.duration % 60)
                .toString()
                .padStart(2, "0")}
            </p>

          </div>

        </div>

 <button
  onClick={(e) => {
    e.stopPropagation();

    if (!echo.music) return;

    if (isPlaying) {
      pause();
    } else {
      play(echo.music);
    }
  }}
  className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-violet-600
    text-white
    transition
    hover:bg-violet-700
  "
>
  {isPlaying ? (
    <Pause
      size={18}
      fill="currentColor"
    />
  ) : (
    <Play
      size={18}
      fill="currentColor"
    />
  )}
</button>

      </div>

    </Card>
  );
}