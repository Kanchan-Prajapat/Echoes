import { motion } from "framer-motion";

import Logo from "@/assets/logos/logo-dark.svg"; // Change this to your logo path

export default function SignupHeader() {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: -20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
      }}

      className="
        mb-12
        flex
        flex-col
        items-center
        text-center
      "

    >

      {/* Logo */}

      <motion.img

        src={Logo}

        alt="Echoes"

        initial={{
          scale: 0.8,
        }}

        animate={{
          scale: 1,
        }}

        transition={{
          duration: .5,
        }}

        className="
          mb-6
          h-20
          w-20
        "

      />

      {/* App Name */}

      <h1
        className="
          text-4xl
          font-bold
          text-white
        "
      >
        Echoes
      </h1>

      {/* Subtitle */}

      <p
        className="
          mt-4
          max-w-xs
          text-sm
          leading-6
          text-gray-400
        "
      >
        Create your account and start preserving your
        most beautiful memories.
      </p>

    </motion.div>

  );

}