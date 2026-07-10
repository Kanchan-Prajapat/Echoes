import { motion, AnimatePresence } from "framer-motion";

interface Props {

  visible: boolean;

  onClick: () => void;

}

export default function SkipButton({

  visible,

  onClick,

}: Props) {

  return (

    <AnimatePresence>

      {visible && (

        <motion.button

          initial={{
            opacity: 0,
            y: 10,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            y: 10,
          }}

          transition={{
            duration: .25,
          }}

          whileHover={{
            scale: 1.03,
          }}

          whileTap={{
            scale: .96,
          }}

          onClick={onClick}

          className="

            mx-auto

            flex

            items-center

            justify-center

            rounded-full

            border

            border-violet-200/40

            bg-white/60

            px-4

            py-2

            text-sm

            font-medium

            text-violet-700

            backdrop-blur-md

            transition

            hover:bg-white/80

            dark:border-violet-500/20

            dark:bg-white/5

            dark:text-violet-300

          "

        >

          Skip

        </motion.button>

      )}

    </AnimatePresence>

  );

}