import { useEffect } from "react";

import {
  AlertTriangle,
  Trash2,
  X,
} from "lucide-react";

import { useConfirmStore } from "@/store/confirmStore";

export default function ConfirmModal() {

  const {

    open,

    options,

    hideConfirm,

  } = useConfirmStore();

  useEffect(() => {

    function handleKeyDown(
      event: KeyboardEvent
    ) {

      if (event.key === "Escape") {

        hideConfirm();

      }

    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, [hideConfirm]);

  if (!open || !options) {

    return null;

  }

  const Icon =

    options.danger

      ? Trash2

      : AlertTriangle;

  return (

    <div

      onClick={hideConfirm}

      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
        animate-in
        fade-in
      "

    >

      <div

        onClick={(e) =>
          e.stopPropagation()
        }

        className="
          w-[92%]
          max-w-md
          rounded-3xl
          bg-white
          p-8
          shadow-2xl
          animate-in
          zoom-in-95
          duration-200
        "

      >

        {/* Close */}

        <button

          onClick={hideConfirm}

          className="
            absolute
            right-5
            top-5
            text-gray-400
            hover:text-gray-600
          "

        >

          <X size={20} />

        </button>

        {/* Icon */}

        <div
          className="
            mx-auto
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
          "
        >

          <div
            className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full

              ${
                options.danger

                  ? "bg-red-100 text-red-600"

                  : "bg-violet-100 text-violet-600"

              }
            `}
          >

            <Icon size={30} />

          </div>

        </div>

        {/* Title */}

        <h2
          className="
            text-center
            text-2xl
            font-bold
          "
        >

          {options.title}

        </h2>

        {/* Message */}

        <p
          className="
            mt-3
            text-center
            text-gray-500
          "
        >

          {options.message}

        </p>

        {/* Buttons */}

        <div
          className="
            mt-8
            flex
            gap-4
          "
        >

          <button

            onClick={hideConfirm}

            className="
              flex-1
              rounded-2xl
              border
              py-3
              font-semibold
              transition
              hover:bg-gray-50
            "

          >

            {options.cancelText ??

              "Cancel"}

          </button>

          <button

            onClick={() => {

              options.onConfirm();

              hideConfirm();

            }}

            className={`
              flex-1
              rounded-2xl
              py-3
              font-semibold
              text-white
              transition

              ${
                options.danger

                  ? "bg-red-600 hover:bg-red-700"

                  : "bg-violet-600 hover:bg-violet-700"

              }
            `}
          >

            {options.confirmText ??

              "Confirm"}

          </button>

        </div>

      </div>

    </div>

  );

}