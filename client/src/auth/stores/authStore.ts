import { create } from "zustand";
import { persist } from "zustand/middleware";

import { User } from "../types/user";

interface AuthState {

  user: User | null;

  token: string | null;

  loading: boolean;

  isAuthenticated: boolean;

  login: (
    user: User,
    token: string
  ) => void;

  logout: () => void;

  setLoading: (
    value: boolean
  ) => void;

}

export const useAuthStore = create<AuthState>()(

  persist(

    (set) => ({

      user: null,

      token: null,

      loading: false,

      isAuthenticated: false,

      login: (user, token) =>

        set({

          user,

          token,

          isAuthenticated: true,

        }),

      logout: () =>

        set({

          user: null,

          token: null,

          isAuthenticated: false,

        }),

      setLoading: (loading) =>

        set({

          loading,

        }),

    }),

    {

      name: "echoes-auth",

    }

  )

);