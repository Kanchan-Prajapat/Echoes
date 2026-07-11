import { useMemo } from "react";

import { useEchoStore } from "@/store/echoStore";

export default function useProfileStats() {

  const echoes = useEchoStore(
    (state) => state.echoes
  );

  return useMemo(() => {

    const totalEchoes = echoes.length;

    const favoriteEchoes = echoes.filter(
      (echo) => echo.favorite
    ).length;

  const totalPhotos = echoes.reduce(

  (count, echo) =>

    count +

    (echo.media ?? []).filter(

      m => m.type === "image"

    ).length,

  0

);

    const totalVideos = echoes.reduce(
      (count, echo) =>

        count +

    (echo.media ?? []).filter(
          (m) => m.type === "video"
        ).length,

      0
    );

    return {

      totalEchoes,

      favoriteEchoes,

      totalPhotos,

      totalVideos,

    };

  }, [echoes]);

}