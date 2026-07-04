import { EchoPlayerContext } from "@/context/EchoPlayerContext";
import useEchoPlayer from "@/hooks/useEchoPlayer";

import StoryMedia from "./StoryMedia";
import StoryProgress from "./StoryProgress";
import StoryControls from "./StoryControls";
import StoryGestures from "./StoryGestures";
import { useEffect } from "react";
import { useEchoStore } from "@/store/echoStore";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
  onClose: () => void;
  initialIndex?: number;
}

export default function EchoPlayer({
  echo,
  onClose,
  initialIndex = 0,
}: Props) {

 const player = useEchoPlayer(
  echo.media,
  initialIndex,
  onClose
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

  markViewed(
    echo.id
  );

}, [
  echo.id,
  player.currentIndex,
  updateLastViewed,
  markViewed,
]);

  if (!player.currentMedia) return null;

  return (
    <EchoPlayerContext.Provider
      value={{
       currentIndex: player.safeIndex,
        currentMedia: player.currentMedia,
        paused: player.paused,
        muted: player.muted,
      }}
    >
      <main className="fixed inset-0 z-[999] overflow-hidden bg-black">

        {/* Progress */}
        <StoryProgress
          total={echo.media.length}
          current={player.currentIndex}
          duration={4}
          paused={player.paused}
          isVideo={player.currentMedia.type === "video"}
          videoProgress={player.videoProgress}
        />

        {/* Controls */}
        <StoryControls
          visible={player.controlsVisible}
          paused={player.paused}
          muted={player.muted}
          isVideo={player.currentMedia.type === "video"}
          onClose={onClose}
          onPauseToggle={player.togglePause}
          onMuteToggle={player.toggleMute}
        />

        {/* Story Area */}
        <StoryGestures
          onPrevious={() => {
            player.previous();
            player.showControls();
          }}
          onNext={() => {
            player.next();
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
            onNext={player.next}
            onVideoProgress={player.setVideoProgress}
          />
        </StoryGestures>

      </main>
    </EchoPlayerContext.Provider>
  );
}