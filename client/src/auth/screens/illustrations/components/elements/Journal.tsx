import { motion } from "framer-motion";

export default function Journal() {

  return (

    <motion.div

      animate={{
        y: [0, -8, 0],
        rotate: [-2, 2, -2],
      }}

      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className="relative w-[290px] aspect-[1.15/1]"

    >

      {/* Cover */}

      <div

        className="

          absolute

          inset-0

          overflow-hidden

          rounded-[34px]

          border

          border-white/10

          bg-gradient-to-b

          from-[#A78BFA]

          via-[#6D28D9]

          to-[#2E1065]

          shadow-[0_35px_70px_rgba(0,0,0,.55)]

        "

      >

        {/* Glass Highlight */}

        <div

          className="

            absolute

            inset-0

            bg-gradient-to-b

            from-white/20

            via-transparent

            to-black/20

          "

        />

        {/* Spine */}

        <div

          className="

            absolute

            left-1/2

            top-0

            h-full

            w-[6px]

            -translate-x-1/2

            bg-black/20

          "

        />

        {/* Left Page */}

        <div

          className="

            absolute

            left-0

            top-0

            h-full

            w-1/2

            p-8

          "

        >

          <div className="space-y-4">

            {Array.from({

              length: 6,

            }).map((_, index)=>(

              <div

                key={index}

                className="

                  h-2

                  rounded-full

                  bg-white/25

                "

              />

            ))}

          </div>

        </div>

        {/* Right Page */}

        <div

          className="

            absolute

            right-0

            top-0

            flex

            h-full

            w-1/2

            items-center

            justify-center

          "

        >

          {/* Heart */}

          <motion.svg

            animate={{
              scale: [1, 1.08, 1],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
            }}

            viewBox="0 0 24 24"

            className="w-24 h-24"

          >

            <defs>

              <linearGradient

                id="journalHeart"

                x1="0%"

                y1="0%"

                x2="100%"

                y2="100%"

              >

                <stop

                  offset="0%"

                  stopColor="#C084FC"

                />

                <stop

                  offset="100%"

                  stopColor="#4C1D95"

                />

              </linearGradient>

            </defs>

            <path

              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"

              fill="none"

              stroke="url(#journalHeart)"

              strokeWidth="1.6"

            />

          </motion.svg>

        </div>

        {/* Bookmark */}

        <motion.div

          animate={{
            y: [0, 4, 0],
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
          }}

          className="

            absolute

            right-16

            top-0

            h-16

            w-8

            rounded-b-xl

            bg-gradient-to-b

            from-violet-300

            to-violet-700

          "

        />

      </div>

    </motion.div>

  );

}