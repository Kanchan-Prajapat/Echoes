import { create } from "zustand";

import { ToastState } from "@/types/toast";

export const useToastStore =
create<ToastState>((set) => ({

  toasts: [],

  showToast: (toast) => {

    const id = crypto.randomUUID();

    const duration =
      toast.duration ?? 3000;

    set((state) => ({

      toasts: [

        ...state.toasts,

        {

          ...toast,

          id,

          duration,

        },

      ],

    }));

    setTimeout(() => {

      set((state) => ({

        toasts: state.toasts.filter(

          (t) => t.id !== id

        ),

      }));

    }, duration);

  },

  removeToast: (id) =>

    set((state) => ({

      toasts: state.toasts.filter(

        (t) => t.id !== id

      ),

    })),

  clearToasts: () =>

    set({

      toasts: [],

    }),

}));