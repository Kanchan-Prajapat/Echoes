import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function UploadPlaceholder({
  onClick,
}: Props) {

  return (

    <motion.button

      whileHover={{
        scale: 1.01,
      }}

      whileTap={{
        scale: .98,
      }}

      onClick={onClick}

      className="
        flex
        w-full
        flex-col
        items-center
        justify-center

        rounded-[32px]

        border-2
        border-dashed
        border-violet-300

        bg-violet-50/60

        px-8
        py-16

        transition-all
      "

    >

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-full

          bg-violet-100
        "
      >

        <ImagePlus
          size={40}
          className="text-violet-600"
        />

      </div>

      <h2
        className="
          mt-6
          text-2xl
          font-bold
        "
      >

        Add Photos & Videos

      </h2>

      <p
        className="
          mt-3
          max-w-xs
          text-center
          text-gray-500
        "
      >

        Capture your beautiful memories.

      </p>

      <div
        className="
          mt-8

          rounded-full

          bg-violet-600

          px-6
          py-3

          font-semibold

          text-white
        "
      >

        Browse Files

      </div>

    </motion.button>

  );

}