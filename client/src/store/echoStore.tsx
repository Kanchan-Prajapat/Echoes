import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Echo } from "@/types/echo";
import { Media } from "@/types/media";

interface EchoStore {
  echoes: Echo[];

  addEcho: (echo: Echo) => void;
  deleteEcho: (id: string) => void;
  addMediaToEcho: (echoId: string, media: Media[]) => void;
  toggleFavorite: (id: string) => void;
  deleteMediaFromEcho: (
  echoId: string,
  mediaId: string
) => void;

setCoverMedia: (
  echoId: string,
  mediaId: string
) => void;
  updateEcho: (
    id: string,
    data: Partial<Echo>
  ) => void;

  updateLastViewed: (
    id: string,
    index: number,
  ) => void;

  markViewed: (id: string) => void;

  setEchoes: (echoes: Echo[]) => void;
}



export const useEchoStore = create<EchoStore>()(
  persist(
    (set) => ({
      echoes: [],
      setEchoes: (echoes) =>
  set({
    echoes,
  }),

      addEcho: (echo) =>
        set((state) => ({
          echoes: [echo, ...state.echoes],
        })),

    
  addMediaToEcho: (echoId, media) =>
  set((state) => {

    const updated = state.echoes.map((echo) =>
      echo.id === echoId
        ? {
            ...echo,
            media: [...echo.media, ...media],
            updatedAt: new Date().toISOString(),
            viewed: false,
          }
        : echo
    );

    updated.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
    );

    return {
      echoes: updated,
    };
  }),

  deleteMediaFromEcho: (echoId, mediaId) =>
  set((state) => ({
    echoes: state.echoes.map((echo) => {

      if (echo.id !== echoId) return echo;

      const remainingMedia = echo.media.filter(
        (m) => m.id !== mediaId
      );

      return {

        ...echo,

        media: remainingMedia,

        coverMediaId:
          echo.coverMediaId === mediaId
            ? remainingMedia[0]?.id
            : echo.coverMediaId,

        updatedAt: new Date().toISOString(),

      };

    }),
  })),


  setCoverMedia: (echoId, mediaId) =>
  set((state) => ({
    echoes: state.echoes.map((echo) =>
      echo.id === echoId
        ? {
            ...echo,
            coverMediaId: mediaId,
            updatedAt: new Date().toISOString(),
          }
        : echo
    ),
  })),

      deleteEcho: (id) =>
        set((state) => ({
          echoes: state.echoes.filter(
            (e) => e.id !== id
          ),
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          echoes: state.echoes.map((e) =>
            e.id === id
              ? {
                ...e,
                favorite: !e.favorite,
              }
              : e
          ),
        })),

        updateEcho: (id, data) =>
  set((state) => ({
    echoes: state.echoes.map((e) =>
      e.id === id
        ? {
            ...e,
            ...data,
            updatedAt: new Date().toISOString(),
          }
        : e
    ),
  })),


      updateLastViewed: (id, index) =>

        set(state => ({

          echoes: state.echoes.map(e =>

            e.id === id

              ? {

                ...e,

                lastViewedIndex: index,

              }

              : e

          ),

        })),


      markViewed: (id) =>

        set(state => ({

          echoes: state.echoes.map(e =>

            e.id === id

              ? {

                ...e,

                viewed: true,

              }

              : e

          ),

        })),



    }),
    {
      name: "echoes-memories",
    }
  )
);