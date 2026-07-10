import { motion } from "framer-motion";

export default function Camera() {

  return (

    <motion.div

      animate={{
        y: [0, -8, 0],
      }}

      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className="relative w-[320px] aspect-[1.45/1]"

    >

      {/* Top Buttons */}

      <div className="absolute left-10 -top-3 h-3 w-14 rounded-t-lg bg-[#4C1D95]" />

      <div className="absolute right-12 -top-2 h-3 w-10 rounded-t-lg bg-[#7C3AED]" />

      {/* Camera Body */}

      <div

        className="

          absolute

          inset-0

          rounded-[36px]

          border

          border-white/10

          bg-gradient-to-b

          from-[#A78BFA]

          via-[#6D28D9]

          to-[#2E1065]

          shadow-[0_35px_80px_rgba(0,0,0,.55)]

        "

      >

        {/* Highlight */}

        <div

          className="

            absolute

            inset-0

            rounded-[36px]

            bg-gradient-to-b

            from-white/20

            via-transparent

            to-black/20

          "

        />

        {/* Top Panel */}

        <div

          className="

            absolute

            left-0

            right-0

            top-0

            h-[34%]

            rounded-t-[36px]

            bg-gradient-to-b

            from-[#C4B5FD]

            to-[#7C3AED]

          "

        />

        {/* Fake Sensors */}

        <div className="absolute left-8 top-8 h-5 w-10 rounded-md bg-[#2E1065]" />

        <div className="absolute right-8 top-8 h-5 w-10 rounded-md bg-[#2E1065]" />

      </div>

      {/* Lens */}

      <motion.div

        animate={{

          scale: [1, 1.03, 1],

        }}

        transition={{

          duration: 3,

          repeat: Infinity,

        }}

        className="

          absolute

          left-1/2

          top-[56%]

          flex

          aspect-square

          w-[150px]

          -translate-x-1/2

          -translate-y-1/2

          items-center

          justify-center

          rounded-full

          bg-gradient-to-b

          from-[#B794F6]

          to-[#1E1B4B]

          shadow-[0_20px_45px_rgba(0,0,0,.55)]

        "

      >

        {/* Ring */}

        <div

          className="

            flex

            h-[122px]

            w-[122px]

            items-center

            justify-center

            rounded-full

            bg-gradient-to-b

            from-[#7C3AED]

            to-[#2E1065]

          "

        >

          {/* Inner Ring */}

          <div

            className="

              flex

              h-[92px]

              w-[92px]

              items-center

              justify-center

              rounded-full

              bg-gradient-to-b

              from-[#312E81]

              to-black

            "

          >

            {/* Lens */}

            <div

              className="

                relative

                h-[58px]

                w-[58px]

                rounded-full

                bg-gradient-to-br

                from-[#8B5CF6]

                via-[#1E1B4B]

                to-black

              "

            >

              {/* Reflection */}

              <motion.div

                animate={{

                  opacity: [.25, .6, .25],

                }}

                transition={{

                  duration: 2,

                  repeat: Infinity,

                }}

                className="

                  absolute

                  left-2

                  top-2

                  h-4

                  w-8

                  rounded-full

                  bg-white/30

                  blur-sm

                "

              />

            </div>

          </div>

        </div>

      </motion.div>

    </motion.div>

  );

}