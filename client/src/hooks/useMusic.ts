import { useEffect, useState } from "react";

import { getAllMusic } from "@/auth/api/music.api.ts";

import { Music } from "@/types/music";

export default function useMusic() {

  const [music, setMusic] =
    useState<Music[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadMusic() {

      try {

        const data =
          await getAllMusic();

        setMusic(data);

      }

      finally {

        setLoading(false);

      }

    }

    loadMusic();

  }, []);

  return {

    music,

    loading,

  };

}