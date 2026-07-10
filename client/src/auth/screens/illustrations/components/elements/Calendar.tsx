import { motion } from "framer-motion";

export default function Calendar() {

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

      className="relative w-[270px] aspect-square"

    >

      {/* Rings */}

      <div className="absolute -top-5 left-0 right-0 flex justify-evenly z-30">

        {[1,2,3].map((i)=>(

          <div

            key={i}

            className="
              h-10
              w-5

              rounded-t-full

              border-4
              border-b-0

              border-violet-400

              bg-gradient-to-b

              from-violet-300

              to-violet-700
            "

          />

        ))}

      </div>

      {/* Body */}

      <div

        className="
          absolute

          inset-0

          overflow-hidden

          rounded-[34px]

          border

          border-white/10

          bg-gradient-to-b

          from-[#8B5CF6]

          via-[#5B21B6]

          to-[#2E1065]

          shadow-[0_35px_70px_rgba(0,0,0,.55)]
        "

      >

        {/* Header */}

        <div

          className="
            h-16

            bg-gradient-to-b

            from-[#4C1D95]

            to-[#2E1065]
          "

        />

        {/* Grid */}

        <div

          className="
            grid

            grid-cols-4

            gap-3

            p-5
          "

        >

          {Array.from({

            length: 12,

          }).map((_, index)=>(

            <motion.div

              key={index}

              whileHover={{
                scale:1.08
              }}

              className="
                aspect-square

                rounded-xl

                bg-white/10
              "

            />

          ))}

        </div>

      </div>

    </motion.div>

  );

}