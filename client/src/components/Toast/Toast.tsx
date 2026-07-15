import {
  CheckCircle2,
  XCircle,
  Info,
  AlertTriangle,
  X,
} from "lucide-react";

import { useToastStore } from "@/store/toastStore";

export default function Toast() {

  const {

    toasts,

    removeToast,

  } = useToastStore();

  return (

    <div
      className="
        fixed
        top-6
        left-1/2
        z-[9999]
        flex
        w-full
        max-w-sm
        -translate-x-1/2
        flex-col
        gap-3
        px-4
        pointer-events-none
      "
    >

      {toasts.map((toast) => {

        const Icon =

          toast.type === "success"
            ? CheckCircle2
            : toast.type === "error"
            ? XCircle
            : toast.type === "warning"
            ? AlertTriangle
            : Info;

        const color =

          toast.type === "success"
            ? "border-green-200 bg-green-50 text-green-700"

            : toast.type === "error"
            ? "border-red-200 bg-red-50 text-red-700"

            : toast.type === "warning"
            ? "border-yellow-200 bg-yellow-50 text-yellow-700"

            : "border-violet-200 bg-violet-50 text-violet-700";

        return (

          <div
            key={toast.id}
            className={`
              pointer-events-auto
              flex
              items-start
              gap-3
              rounded-2xl
              border
              p-4
              shadow-xl
              backdrop-blur-md
              animate-in
              slide-in-from-top-2
              duration-300
              ${color}
            `}
          >

            <Icon
              size={22}
              className="mt-0.5 shrink-0"
            />

            <p
              className="
                flex-1
                text-sm
                font-medium
              "
            >
              {toast.message}
            </p>

            <button
              onClick={() =>
                removeToast(toast.id)
              }
            >
              <X size={18} />
            </button>

          </div>

        );

      })}

    </div>

  );

}