import { motion } from "framer-motion";

export default function LoginHeader() {

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
        duration: .45,
      }}

      className="
        text-center
      "

    >

      <div className="mb-5 text-5xl">
        ✨
      </div>

      <h1
        className="
          text-4xl
          font-bold
          text-white
        "
      >
        Welcome Back
      </h1>

      <p
        className="
          mt-4
          text-gray-400
        "
      >
        Login to continue your journey.
      </p>

    </motion.div>

  );

}