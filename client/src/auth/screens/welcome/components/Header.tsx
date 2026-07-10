import { motion } from "framer-motion";

import Logo from "@/components/Shared/Logo";

export default function Header() {

  return (

    <motion.header

      initial={{
        opacity: 0,
        y: -25,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .6,
      }}

      className="
        flex
        flex-col
        items-center
        gap-0
      "

    >

      {/* Logo */}

      <motion.div

        whileHover={{
          rotate: -8,
          scale: 1.05,
        }}

        transition={{
          type: "spring",
          stiffness: 250,
        }}

      >

        <Logo size={80} />

      </motion.div>

      {/* App Name */}

      <div className="text-center">

        <motion.h1

          initial={{
            opacity: 0,
            y: 12,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: .15,
          }}

          className="
            text-4xl
            font-black
            tracking-tight

            text-gray-900

            dark:text-white
          "

        >

          Echoes

        </motion.h1>

        <motion.p

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: .3,
          }}

          className="
            mt-4

            max-w-xs

            text-sm

            leading-relaxed

            text-gray-500

            dark:text-gray-400
          "

        >

          Your personal place for memories,

          stories and moments.

        </motion.p>

      </div>

    </motion.header>

  );

}