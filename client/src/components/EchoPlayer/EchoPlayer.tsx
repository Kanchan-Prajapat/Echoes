import {
  useEffect,
  useState,
} from "react";

import { Echo } from "@/types/echo";

import StoryPlayer from "./StoryPlayer";

interface Props {

  echoes: Echo[];

  currentEchoIndex: number;

  initialMediaIndex?: number;

  onClose: () => void;

}

export default function EchoPlayer({

  echoes,

  currentEchoIndex,

  initialMediaIndex = 0,

  onClose,

}: Props) {

  const [activeEchoIndex, setActiveEchoIndex] =
    useState(currentEchoIndex);

  useEffect(() => {

    setActiveEchoIndex(currentEchoIndex);

  }, [currentEchoIndex]);

  const echo =
    echoes[activeEchoIndex];

  if (!echo) return null;

  const handleNextEcho = () => {

    if (
      activeEchoIndex <
      echoes.length - 1
    ) {

      setActiveEchoIndex(
        (i) => i + 1
      );

      return;

    }

    onClose();

  };

  return (

    <StoryPlayer

      key={echo.id}

      echo={echo}

      initialMediaIndex={initialMediaIndex}

      onClose={onClose}

      onFinished={handleNextEcho}

    />

  );

}