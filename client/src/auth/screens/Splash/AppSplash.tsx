import { motion } from "framer-motion";

import AppContainer from "@/styles/AppContainer";

export default function AppSplash() {

  return (

    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#090611]
    "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,#7C3AED22,transparent_45%)]
      "
      />

      <div
        className="
        absolute
        left-1/2
        top-[-120px]
        h-[650px]
        w-[650px]
        -translate-x-1/2
        rounded-full
        bg-violet-500/10
        blur-[220px]
      "
      />

      <div
        className="
        absolute
        bottom-[-180px]
        left-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-fuchsia-600/10
        blur-[220px]
      "
      />

   

      <AppContainer
        className="
        relative
        flex
        min-h-screen
        flex-col
      "
      >
   <div className="mt-50">

        <div
          className="
          flex
          flex-1
          flex-col
          items-center
          justify-center
          text-center
        "
        >

          {/* Logo */}

          <motion.img
            src="/logo-dark.svg"
            alt="Echoes"
            className="h-28 w-28"
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Title */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .2,
            }}
            className="
            mt-8
            text-5xl
            font-black
            tracking-tight
            text-white
          "
          >
            Echoes
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .4,
            }}
            className="
            mt-3
            max-w-xs
            text-sm
            leading-7
            text-violet-200
          "
          >
            Relive your best moments.
          </motion.p>

          {/* Loading Dots */}

          <motion.div
            className="
            mt-12
            flex
            gap-2
          "
          >
            {[0,1,2].map((i) => (

              <motion.div
                key={i}
                className="
                h-2
                w-2
                rounded-full
                bg-violet-400
              "
                animate={{
                  opacity: [.3,1,.3],
                  scale: [.8,1.2,.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * .2,
                }}
              />

            ))}
          </motion.div>

          {/* Status */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .6,
            }}
            className="
            mt-6
            text-sm
            text-gray-400
          "
          >
            Preparing your memories...
          </motion.p>

        </div>

        {/* Version */}

        <p
          className="
          pb-8
          text-center
          text-xs
          tracking-widest
          text-gray-500
        "
        >
          Echoes v1.0
        </p>
   </div>
      </AppContainer>

   

    </main>

  );

}