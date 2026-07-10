import { create } from "zustand";

export type AuthScreen =

    | "splash"

    | "welcome"

    | "login"

    | "signup"

    | "forgot-password";

interface AuthNavigationStore {

    current: AuthScreen;

    history: AuthScreen[];

    navigate: (

        screen: AuthScreen

    ) => void;

    replace: (

        screen: AuthScreen

    ) => void;

    goBack: () => void;

    reset: (

        screen: AuthScreen

    ) => void;

}

export const useAuthNavigationStore =

create<AuthNavigationStore>((set, get) => ({

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

        if (!history.length) return;

        const previous =

            history[history.length - 1];

        set({

            current: previous,

            history:

                history.slice(

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