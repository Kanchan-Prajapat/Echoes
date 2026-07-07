import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

export default function AddMoreButton({
  onClick,
}: Props) {

  return (

    <motion.button

      whileTap={{
        scale: .96,
      }}

      onClick={onClick}

      className="
        mt-5

        flex
        w-full
        items-center
        justify-center
        gap-3

        rounded-2xl

        bg-violet-600

        py-4

        font-semibold

        text-white

        shadow-lg
      "

    >

      <Plus size={20} />

      Add More Media

    </motion.button>

  );

}