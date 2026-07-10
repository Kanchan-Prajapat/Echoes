import { AnimatePresence, motion } from "framer-motion";

import { WelcomeSlideData } from "./types";

import SlideContent from "./components/SlideContent";

interface Props {

  slide: WelcomeSlideData;

}

export default function WelcomeSlide({

  slide,

}: Props) {

  const Illustration = slide.illustration;

  return (

    <AnimatePresence mode="wait">

      <motion.div

        key={slide.id}

        initial={{
          opacity: 0,
          x: 80,
        }}

        animate={{
          opacity: 1,
          x: 0,
        }}

        exit={{
          opacity: 0,
          x: -80,
        }}

        transition={{
          duration: .45,
        }}

        className="
          flex
          w-full
          flex-col
          items-center
        "

      >

        {/* Illustration */}

        <motion.div

          initial={{
            scale: .9,
            opacity: 0,
          }}

          animate={{
            scale: 1,
            opacity: 1,
          }}

          transition={{
            delay: .1,
            duration: .5,
          }}


        className="
flex
justify-center
w-full
scale-[0.82]
origin-center
"

        >

          <Illustration />

        </motion.div>

        {/* Text */}

       <div className="w-full -mt-6">

          <SlideContent

            title={slide.title}

            description={slide.description}

          />

        </div>

      </motion.div>

    </AnimatePresence>

  );

}