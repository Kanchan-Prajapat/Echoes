import { useEffect, useRef, useState } from "react";

interface Props {
  onRefresh: () => Promise<void>;
}

export default function usePullToRefresh({
  onRefresh,
}: Props) {

  const startY = useRef(0);

  const [pull, setPull] = useState(0);

  const [refreshing, setRefreshing] =
    useState(false);

  useEffect(() => {

    const touchStart = (e: TouchEvent) => {

      if (window.scrollY === 0) {

        startY.current =
          e.touches[0].clientY;

      }

    };

    const touchMove = (e: TouchEvent) => {

      if (refreshing) return;

      const distance =
        e.touches[0].clientY -
        startY.current;

      if (
        distance > 0 &&
        window.scrollY === 0
      ) {

        setPull(
          Math.min(distance, 120)
        );

      }

    };

    const touchEnd = async () => {

      if (pull > 80) {

        setRefreshing(true);

        await onRefresh();

        setRefreshing(false);

      }

      setPull(0);

    };

    window.addEventListener(
      "touchstart",
      touchStart
    );

    window.addEventListener(
      "touchmove",
      touchMove
    );

    window.addEventListener(
      "touchend",
      touchEnd
    );

    return () => {

      window.removeEventListener(
        "touchstart",
        touchStart
      );

      window.removeEventListener(
        "touchmove",
        touchMove
      );

      window.removeEventListener(
        "touchend",
        touchEnd
      );

    };

  }, [pull, refreshing]);

  return {

    pull,

    refreshing,

  };

}