import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

import { EchoMusic } from "@/types/music";

interface AudioContextType {
  current?: EchoMusic;

  playing: boolean;

  currentTime: number;

  duration: number;

  progress: number;

  play: (music: EchoMusic) => void;

  pause: () => void;

  stop: () => void;

  toggle: () => void;

  seek: (time: number) => void;
}

const AudioContext =
  createContext<AudioContextType | null>(null);

interface Props {
  children: ReactNode;
}

export function AudioProvider({
  children,
}: Props) {
  const audioRef =
    useRef(new Audio());

  const [current, setCurrent] =
    useState<EchoMusic>();

  const [playing, setPlaying] =
    useState(false);

    const [currentTime, setCurrentTime] =
  useState(0);

const [duration, setDuration] =
  useState(0);

const play = async (music: EchoMusic) => {
  const audio = audioRef.current;

  const nextUrl = new URL(
    music.url,
    window.location.origin
  ).href;

  // Change source only if different
  if (audio.src !== nextUrl) {
    audio.pause();
    audio.src = nextUrl;
    audio.currentTime = 0;

    setCurrent(music);
  }

  // Already playing same song
  if (
    !audio.paused &&
    current?.id === music.id
  ) {
    return;
  }

  try {
    await audio.play();
    setPlaying(true);
  } catch (error) {
    console.error(error);
    setPlaying(false);
  }
};

const pause = () => {
  audioRef.current.pause();
  setPlaying(false);
};

const stop = () => {
  const audio = audioRef.current;

  audio.pause();

  audio.currentTime = 0;

  setCurrentTime(0);

  setPlaying(false);
};

const progress =
  duration === 0
    ? 0
    : (currentTime / duration) * 100;

  const toggle = () => {
    if (playing) {
      pause();
    } else {
      audioRef.current.play();

      setPlaying(true);
    }
  };

  const seek = (time: number) => {
  audioRef.current.currentTime = time;
  setCurrentTime(time);
};

 useEffect(() => {
  const audio = audioRef.current;

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audio.duration);
  };

  const handleEnded = () => {
    setPlaying(false);
    setCurrentTime(0);
  };

  audio.addEventListener(
    "timeupdate",
    handleTimeUpdate
  );

  audio.addEventListener(
    "loadedmetadata",
    handleLoadedMetadata
  );

  audio.addEventListener(
    "ended",
    handleEnded
  );

  return () => {
    audio.removeEventListener(
      "timeupdate",
      handleTimeUpdate
    );

    audio.removeEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    audio.removeEventListener(
      "ended",
      handleEnded
    );
  };
}, []);



  return (
    <AudioContext.Provider
     value={{
  current,
  playing,

  currentTime,
  duration,
  progress,

  play,
  pause,
  stop,
  toggle,
  seek,
}}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudioContext() {
  const context =
    useContext(AudioContext);

  if (!context) {
    throw new Error(
      "useAudioContext must be used inside AudioProvider."
    );
  }

  return context;
}