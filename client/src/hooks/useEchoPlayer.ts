import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Media } from "@/types/media";

const IMAGE_DURATION = 4000;

export default function useEchoPlayer(
  media: Media[],
  initialIndex: number,
  onFinished: () => void
){
const [safeIndex, setSafeIndex] = useState(initialIndex);

  const [paused, setPaused] = useState(false);

  const [muted, setMuted] = useState(false);

  const [controlsVisible, setControlsVisible] = useState(true);

  const [videoProgress, setVideoProgress] = useState(0);
const imageTimer = useRef<number | null>(null);
const controlsTimer = useRef<number | null>(null);

  const currentMedia = useMemo(
    () => media[safeIndex],
    [media, safeIndex]
  );

  const isLastMedia =
safeIndex === media.length - 1;

  /* ---------------- NEXT ---------------- */

  const next = useCallback(() => {
   if (safeIndex === media.length - 1) {

  setVideoProgress(100);

  setTimeout(() => {

    onFinished();

  }, 250);

  return;

}

    setSafeIndex((i) => i + 1);

    setVideoProgress(0);

  }, [safeIndex, media.length, onFinished]);

  /* ---------------- PREVIOUS ---------------- */

  const previous = useCallback(() => {

    if (safeIndex === 0) return;

    setSafeIndex((i) => i - 1);

    setVideoProgress(0);

  }, [safeIndex]);

useEffect(() => {

  setSafeIndex(0);

  setVideoProgress(0);

  setPaused(false);

}, [media]);

  /* ---------------- IMAGE TIMER ---------------- */

  useEffect(() => {

if (imageTimer.current !== null) {
  window.clearTimeout(imageTimer.current);
}

    if (!currentMedia) return;

    if (paused) return;

    if (currentMedia.type !== "image") return;

    imageTimer.current = window.setTimeout(() => {

      next();

    }, IMAGE_DURATION);

    return () => {

   if (imageTimer.current !== null) {
  window.clearTimeout(imageTimer.current);
}

    };

  }, [currentMedia, paused, next]);

  /* ---------------- CONTROLS ---------------- */

  useEffect(() => {

   if (controlsTimer.current !== null) {
  window.clearTimeout(controlsTimer.current);
}

    if (paused) {

      setControlsVisible(true);

      return;

    }

    setControlsVisible(true);

    controlsTimer.current = window.setTimeout(() => {

      setControlsVisible(false);

    }, 2500);

    return () => {

if (controlsTimer.current !== null) {
  window.clearTimeout(controlsTimer.current);
}

    };

  }, [paused, safeIndex]);

  /* ---------------- PRELOAD NEXT IMAGE ---------------- */

 useEffect(() => {

  const preload = media.slice(
    safeIndex + 1,
    safeIndex + 3
  );

  preload.forEach((item) => {

    if (item.type === "image") {

      const img = new Image();

      img.src = item.url;

    } else {

      const video = document.createElement("video");

      video.preload = "metadata";

      video.src = item.url;

    }

  });

}, [safeIndex, media]);

  /* ---------------- ACTIONS ---------------- */

  const pause = () => setPaused(true);

  const resume = () => setPaused(false);

  const togglePause = () => setPaused((p) => !p);

  const toggleMute = () => setMuted((m) => !m);

  const showControls = () => {

    setControlsVisible(true);

   if (controlsTimer.current !== null) {
  window.clearTimeout(controlsTimer.current);
}

    controlsTimer.current = window.setTimeout(() => {

      setControlsVisible(false);

    }, 2500);

  };

 return {
    currentIndex: safeIndex,

    currentMedia,

    paused,

    muted,

    controlsVisible,

    videoProgress,

    setVideoProgress,

    next,

    previous,

    pause,

    resume,

    togglePause,

    toggleMute,

    showControls,

    isLastMedia,
};
}