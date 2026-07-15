import { create } from "zustand";

import {

  NavigationState,

  Screen,

} from "@/types/navigation";

interface NavigationStore
  extends NavigationState {

  navigate: (

    screen: Screen,

    options?: {

      selectedEchoId?: string;

      editingEchoId?: string;

    }

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

  current: "home",

  history: [],

  selectedEchoId: undefined,

  editingEchoId: undefined,

  navigate: (

    screen,

    options

  ) =>

    set((state) => ({

      history: [

        ...state.history,

        state.current,

      ],

      current: screen,

      selectedEchoId:
        options?.selectedEchoId,

      editingEchoId:
        options?.editingEchoId,

    })),

  replace: (

    screen

  ) =>

    set({

      current: screen,

    }),

  goBack: () => {

    const history =

      get().history;

    if (!history.length)

      return;

    const previous =

      history[
        history.length - 1
      ];

    set({

      current: previous,

      history:

        history.slice(

          0,

          history.length - 1

        ),

      selectedEchoId:

        undefined,

      editingEchoId:

        undefined,

    });

  },

  reset: (

    screen

  ) =>

    set({

      current: screen,

      history: [],

      selectedEchoId:

        undefined,

      editingEchoId:

        undefined,

    }),

}));