import { useToastStore } from "@/store/toastStore";

export default function useToast() {

  const showToast = useToastStore(
    (state) => state.showToast
  );

  return {

    success: (
      message: string,
      duration?: number
    ) =>
      showToast({

        type: "success",

        message,

        duration,

      }),

    error: (
      message: string,
      duration?: number
    ) =>
      showToast({

        type: "error",

        message,

        duration,

      }),

    warning: (
      message: string,
      duration?: number
    ) =>
      showToast({

        type: "warning",

        message,

        duration,

      }),

    info: (
      message: string,
      duration?: number
    ) =>
      showToast({

        type: "info",

        message,

        duration,

      }),

  };

}