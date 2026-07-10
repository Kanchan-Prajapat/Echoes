import { motion } from "framer-motion";

export default function Clock() {

  return (

    <motion.div

      animate={{
        y: [0, -6, 0],
      }}

      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className="relative w-36 h-36"

    >

      {/* Glow */}

      <div className="
        absolute
        inset-0
        rounded-full
        bg-violet-500/20
        blur-xl
      " />

      {/* Outer Ring */}

      <div className="
        absolute
        inset-0

        rounded-full

        bg-gradient-to-b

        from-violet-300

        via-violet-600

        to-violet-900

        p-[3px]

        shadow-[0_20px_40px_rgba(0,0,0,.45)]
      ">

        {/* Inner Ring */}

        <div className="
          relative

          h-full
          w-full

          rounded-full

          bg-gradient-to-b

          from-[#26114f]

          to-[#0f071f]

          overflow-hidden
        ">

          {/* Glass Reflection */}

          <div className="
            absolute

            top-3
            left-5

            h-8
            w-12

            rounded-full

            bg-white/15

            blur-sm

            rotate-[-20deg]
          " />

          {/* Hour Marks */}

          {Array.from({ length: 12 }).map((_, i) => (

            <div

              key={i}

              style={{
                transform: `rotate(${i * 30}deg)`
              }}

              className="
                absolute

                inset-0
              "

            >

              <div
                className="
                  absolute

                  top-2
                  left-1/2

                  h-3
                  w-[2px]

                  -translate-x-1/2

                  rounded-full

                  bg-violet-300
                "
              />

            </div>

          ))}

          {/* Hour Hand */}

          <motion.div

            animate={{
              rotate: 35,
            }}

            className="
              absolute

              left-1/2
              top-1/2

              h-10
              w-1.5

              -translate-x-1/2
              -translate-y-full

              origin-bottom

              rounded-full

              bg-white
            "

          />

          {/* Minute Hand */}

          <motion.div

            animate={{
              rotate: 120,
            }}

            className="
              absolute

              left-1/2
              top-1/2

              h-14
              w-[2px]

              -translate-x-1/2
              -translate-y-full

              origin-bottom

              rounded-full

              bg-violet-200
            "

          />

          {/* Second Hand */}

          <motion.div

            animate={{
              rotate: 360,
            }}

            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}

            className="
              absolute

              left-1/2
              top-1/2

              h-[54px]
              w-[1px]

              -translate-x-1/2
              -translate-y-full

              origin-bottom

              bg-fuchsia-300
            "

          />

          {/* Center */}

          <div
            className="
              absolute

              left-1/2
              top-1/2

              h-4
              w-4

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-white

              shadow-[0_0_12px_rgba(255,255,255,.8)]
            "
          />

        </div>

      </div>

    </motion.div>

  );

}