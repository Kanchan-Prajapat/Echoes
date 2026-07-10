import { create } from "zustand";

export type AppScreen =

    | "home"

    | "timeline"

    | "calendar"

    | "search"

    | "profile"

    | "new-echo"

    | "echo-detail"

    | "settings";

interface AppNavigationStore {

    current: AppScreen;

    history: AppScreen[];

    selectedEchoId?: string;

    navigate: (

        screen: AppScreen,

        echoId?: string

    ) => void;

    replace: (

        screen: AppScreen

    ) => void;

    goBack: () => void;

    reset: (

        screen: AppScreen

    ) => void;

}

export const useAppNavigationStore =

create<AppNavigationStore>((set, get) => ({

    current: "home",

    history: [],

    selectedEchoId: undefined,

    navigate: (

        screen,

        echoId

    ) =>

        set((state) => ({

            history: [

                ...state.history,

                state.current,

            ],

            current: screen,

            selectedEchoId: echoId,

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

            selectedEchoId: undefined,

        }),

}));