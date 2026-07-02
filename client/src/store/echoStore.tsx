import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Echo } from "@/types/echo";

interface EchoStore {
  echoes: Echo[];

  addEcho: (echo: Echo) => void;
  deleteEcho: (id: string) => void;
  toggleFavorite: (id: string) => void;
  updateEcho: (
    id: string,
    data: Partial<Echo>
  ) => void;
}

export const useEchoStore = create<EchoStore>()(
  persist(
    (set) => ({
      echoes: [],

      addEcho: (echo) =>
        set((state) => ({
          echoes: [echo, ...state.echoes],
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