import { motion } from "framer-motion";

import { useNavigationStore } from "@/store/navigationStore";

export default function LoginLink() {

  const navigate = useNavigationStore(
    (state) => state.navigate
  );

  return (

    <motion.div

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
        mt-8
        text-center
      "

    >

      <span className="text-gray-400">

        Already have an account?

      </span>

      <button

        onClick={() =>
          navigate("login")
        }

        className="
          ml-2

          font-semibold

          text-violet-400

          transition

          hover:text-violet-300
        "

      >

        Login

      </button>

    </motion.div>

  );

}