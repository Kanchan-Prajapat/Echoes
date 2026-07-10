import { motion } from "framer-motion";

interface Props {

  title: string;

  description: string;

}

export default function SlideContent({

  title,

  description,

}: Props) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      exit={{
        opacity: 0,
        y: -20,
      }}

      transition={{
        duration: .45,
      }}

      className="
        mx-auto

        max-w-md

        text-center
      "

    >

      {/* Title */}

      <motion.h2

        initial={{
          opacity: 0,
          y: 16,
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

        {title}

      </motion.h2>

      {/* Description */}

      <motion.p

        initial={{
          opacity: 0,
          y: 12,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: .3,
        }}

        className="
          mt-5

          text-lg

          leading-8

          text-gray-500

          dark:text-gray-400
        "

      >

        {description}

      </motion.p>

    </motion.div>

  );

}