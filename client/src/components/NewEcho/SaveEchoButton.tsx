import { motion } from "framer-motion";
import { Loader2, Save } from "lucide-react";

interface Props {
  loading: boolean;
  editing: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export default function SaveEchoButton({
  loading,
  editing,
  disabled = false,
  onClick,
}: Props) {

  return (

    <motion.button

      whileHover={
        !disabled && !loading
          ? { scale: 1.01 }
          : undefined
      }

      whileTap={
        !disabled && !loading
          ? { scale: .98 }
          : undefined
      }

      disabled={disabled || loading}

      onClick={onClick}

      className={`
        mt-8

        flex
        w-full
        items-center
        justify-center
        gap-3

        rounded-3xl

        py-5

        text-lg
        font-bold

        shadow-xl

        transition-all

        ${
          disabled
            ? "cursor-not-allowed bg-gray-300 text-gray-500"
            : "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:shadow-2xl"
        }
      `}
    >

      {loading ? (

        <>
          <Loader2
            size={22}
            className="animate-spin"
          />

          Saving Memory...

        </>

      ) : (

        <>
          <Save size={20} />

          {editing
            ? "Update Memory"
            : "Save Memory"}

        </>

      )}

    </motion.button>

  );

}