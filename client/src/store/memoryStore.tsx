import { create } from "zustand";
import { Memory } from "@/types/memory";

interface MemoryStore {
  memories: Memory[];

  addMemory: (memory: Memory) => void;

  deleteMemory: (id: string) => void;

  toggleFavorite: (id: string) => void;

  updateMemory: (
    id: string,
    data: Partial<Memory>
  ) => void;
}

export const useMemoryStore =
  create<MemoryStore>((set) => ({

    memories: [],

    addMemory: (memory) =>
      set((state) => ({
        memories: [memory, ...state.memories],
      })),

    deleteMemory: (id) =>
      set((state) => ({
        memories: state.memories.filter(
          (m) => m.id !== id
        ),
      })),

    toggleFavorite: (id) =>
      set((state) => ({
        memories: state.memories.map((m) =>
          m.id === id
            ? {
                ...m,
                favorite: !m.favorite,
              }
            : m
        ),
      })),

    updateMemory: (id, data) =>
      set((state) => ({
        memories: state.memories.map((m) =>
          m.id === id
            ? {
                ...m,
                ...data,
              }
            : m
        ),
      })),

}));