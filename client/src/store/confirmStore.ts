import { create } from "zustand";

import {

  ConfirmState,

  ConfirmOptions,

} from "@/types/confirm";

export const useConfirmStore =

create<ConfirmState>((set) => ({

  open: false,

  options: undefined,

  showConfirm: (

    options: ConfirmOptions

  ) =>

    set({

      open: true,

      options,

    }),

  hideConfirm: () =>

    set({

      open: false,

      options: undefined,

    }),

}));