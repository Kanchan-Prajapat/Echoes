import {
  useEffect,
} from "react";

import {
  ArrowLeft,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Echo } from "@/types/echo";

import { EchoPlayerContext } from "@/context/EchoPlayerContext";

import useEchoPlayer from "@/hooks/useEchoPlayer";

import { useEchoStore } from "@/store/echoStore";

import StoryMedia from "./StoryMedia";
import StoryProgress from "./StoryProgress";
import StoryControls from "./StoryControls";
import StoryGestures from "./StoryGestures";

interface Props {

  echo: Echo;

  onClose: () => void;

  onFinished: () => void;

  initialMediaIndex?: number;

}

export default function StoryPlayer({

  echo,

  onClose,

  onFinished,

  initialMediaIndex = 0,

}: Props) {

  const player = useEchoPlayer(

    echo.media,

    initialMediaIndex,

    onFinished

  );

  const updateLastViewed =
    useEchoStore(
      state => state.updateLastViewed
    );

  const markViewed =
    useEchoStore(
      state => state.markViewed
    );

  useEffect(() => {

    updateLastViewed(

      echo.id,

      player.currentIndex

    );

    markViewed(echo.id);

  }, [

    echo.id,

    player.currentIndex,

    updateLastViewed,

    markViewed,

  ]);

  if (!player.currentMedia) return null;

  const formattedDate = new Date(
    echo.date
  ).toLocaleDateString("en-IN", {

    day: "numeric",

    month: "short",

    year: "numeric",

  });

  return (

    <EchoPlayerContext.Provider
      value={{

        currentIndex: player.currentIndex,

        currentMedia: player.currentMedia,

        paused: player.paused,

        muted: player.muted,

      }}
    >

      <main className="fixed inset-0 z-[999] bg-black">

        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            max-w-[520px]
            flex-col
            overflow-hidden
            bg-black
            shadow-2xl
          "
        >

          <StoryProgress
            total={echo.media.length}
            current={player.currentIndex}
            duration={4}
            paused={player.paused}
            isVideo={
              player.currentMedia.type === "video"
            }
            videoProgress={player.videoProgress}
          />

          <div
            className="
              absolute
              left-0
              right-0
              top-8
              z-40
              flex
              items-start
              justify-between
              px-5
              text-white
              pointer-events-none
            "
          >

            <div className="max-w-[75%]">

              <div className="flex items-center gap-2">

                <ArrowLeft
                  size={18}
                  className="opacity-70"
                />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.28em]
                    text-violet-300
                  "
                >
                  Echo
                </span>

              </div>

              <h2
                className="
                  mt-2
                  truncate
                  text-2xl
                  font-bold
                "
              >
                {echo.title}
              </h2>

              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  gap-4
                  text-sm
                  text-white/75
                "
              >

                <div className="flex items-center gap-1">

                  <CalendarDays size={14} />

                  {formattedDate}

                </div>

                {echo.location && (

                  <div className="flex items-center gap-1">

                    <MapPin size={14} />

                    {echo.location}

                  </div>

                )}

              </div>

            </div>

          </div>

          <StoryControls
            visible={player.controlsVisible}
            paused={player.paused}
            muted={player.muted}
            isVideo={
              player.currentMedia.type === "video"
            }
            onClose={onClose}
            onPauseToggle={player.togglePause}
            onMuteToggle={player.toggleMute}
          />

          <StoryGestures
            onPrevious={() => {

              player.previous();

              player.showControls();

            }}

         onNext={() => {

    if (
      player.currentIndex <
      echo.media.length - 1
    ) {

      player.next();

    } else {

      onFinished();

    }

    player.showControls();

}}

            onPause={player.pause}

            onResume={player.resume}

            onClose={onClose}

            onDoubleTap={() => {

              console.log("❤️ Double Tap");

            }}

          >

            <StoryMedia

              media={player.currentMedia}

              paused={player.paused}

              muted={player.muted}

             onNext={() => {

      if (
        player.currentIndex <
        echo.media.length - 1
      ) {

        player.next();

      } else {

        onFinished();

      }

    }}

              onVideoProgress={
                player.setVideoProgress
              }

            />

          </StoryGestures>

        </div>

      </main>

    </EchoPlayerContext.Provider>

  );

}