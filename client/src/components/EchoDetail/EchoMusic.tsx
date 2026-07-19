import { Play, Pause, Music2 } from "lucide-react";
import useAudio from "@/hooks/useAudio";
import Card from "@/styles/Card";
import { Echo } from "@/types/echo";
import { motion } from "framer-motion";

interface Props {
  echo: Echo;
}

export default function EchoMusic({
  echo,
}: Props) {
  const {
  current,
  playing,
  currentTime,
  duration,
  seek,
  play,
  pause,
} = useAudio();

const isPlaying =
  playing &&
  current?.id === echo.music?.id;

  if (!echo.music?.id) return null;

function formatTime(time: number) {
  if (!Number.isFinite(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}


  return (
    <Card>

      <p className="mb-4 text-sm font-medium text-gray-500">
        Soundtrack
      </p>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          {echo.music.cover ? (

       <motion.img
  src={echo.music.cover}
  alt={echo.music.title}
  className="h-16 w-16 rounded-2xl object-cover"
  animate={{
    rotate: isPlaying ? 360 : 0,
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  }}
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

         <div className="flex-1">

            <h3 className="font-semibold">
              {echo.music.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {echo.music.artist}
            </p>

        <div className="mt-3">

  <input
    type="range"
    min={0}
    max={duration || echo.music.duration}
    value={
      current?.id === echo.music.id
        ? currentTime
        : 0
    }
    onChange={(e) =>
      seek(Number(e.target.value))
    }
    className="
      h-1
      w-full
      cursor-pointer
      accent-violet-600
    "
  />

  <div className="mt-1 flex justify-between text-xs text-gray-400">

    <span>
      {current?.id === echo.music.id
        ? formatTime(currentTime)
        : "0:00"}
    </span>

    <span>
      {formatTime(
        duration || echo.music.duration
      )}
    </span>

  </div>

</div>
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
className={`
  flex
  h-12
  w-12
  items-center
  justify-center
  rounded-full
  text-white
  transition
  hover:bg-violet-700

  ${
    isPlaying
      ? "bg-violet-700 scale-105"
      : "bg-violet-600"
  }
`}
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