// export async function toggleFavorite(
//   echoId: string
// ) {
//   const { data } = await api.patch(
//     `/echoes/${echoId}/favorite`
//   );

//   return data;
// }

import { create } from "zustand";

export type Screen =

  | "splash"

  | "welcome"

  | "login"

  | "signup"

  | "forgot-password"

  | "home"

  | "new-echo"

  | "echo-detail"

  | "profile"

  | "search"

  | "timeline"

  | "settings";

interface NavigationStore {

  current: Screen;

  history: Screen[];

  navigate: (
    screen: Screen
  ) => void;

  replace: (
    screen: Screen
  ) => void;

  goBack: () => void;

  reset: (
    screen: Screen
  ) => void;

}

export const useNavigationStore =
create<NavigationStore>((set, get) => ({

  current: "splash",

  history: [],

  navigate: (screen) =>

    set((state) => ({

      history: [

        ...state.history,

        state.current,

      ],

      current: screen,

    })),

  replace: (screen) =>

    set({

      current: screen,

    }),

  goBack: () => {

    const history = get().history;

    if (history.length === 0) return;

    const previous =

      history[history.length - 1];

    set({

      current: previous,

      history: history.slice(
        0,
        history.length - 1
      ),

    });

  },

  reset: (screen) =>

    set({

      current: screen,

      history: [],

    }),

}));