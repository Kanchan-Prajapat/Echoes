import { create } from "zustand";

import {
  NavigationState,
  Screen,
} from "@/types/navigation";

interface NavigationHistoryItem {
  screen: Screen;
  selectedEchoId?: string;
  editingEchoId?: string;
}

interface NavigationStore extends NavigationState {
  history: NavigationHistoryItem[];

  navigate: (
    screen: Screen,
    options?: {
      selectedEchoId?: string;
      editingEchoId?: string;
    }
  ) => void;

  replace: (
    screen: Screen,
    options?: {
      selectedEchoId?: string;
      editingEchoId?: string;
    }
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
        {
          screen: state.current,
          selectedEchoId:
            state.selectedEchoId,
          editingEchoId:
            state.editingEchoId,
        },
      ],

      current: screen,

      selectedEchoId:
        options?.selectedEchoId,

      editingEchoId:
        options?.editingEchoId,

    })),

  replace: (
    screen,
    options
  ) =>
    set({

      current: screen,

      selectedEchoId:
        options?.selectedEchoId,

      editingEchoId:
        options?.editingEchoId,

    }),

  goBack: () => {

    const history = get().history;

    if (!history.length) {

      set({
        current: "home",
        selectedEchoId: undefined,
        editingEchoId: undefined,
      });

      return;

    }

    const previous =
      history[history.length - 1];

    set({

      current: previous.screen,

      selectedEchoId:
        previous.selectedEchoId,

      editingEchoId:
        previous.editingEchoId,

      history:
        history.slice(0, -1),

    });

  },

  reset: (
    screen
  ) =>
    set({

      current: screen,

      history: [],

      selectedEchoId: undefined,

      editingEchoId: undefined,

    }),

}));