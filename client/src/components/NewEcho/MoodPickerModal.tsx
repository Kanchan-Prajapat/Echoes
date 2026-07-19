import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Mood } from "@/types/moods";
import MoodCard from "./MoodCard";

interface Props {
  open: boolean;

  moods: Mood[];

  selectedMood: string;

  onClose: () => void;

  onSelect: (mood: Mood) => void;
}

export default function MoodPickerModal({
  open,
  moods,
  selectedMood,
  onClose,
  onSelect,
}: Props) {

  return (

    <AnimatePresence>

      {open && (

        <>

          {/* Backdrop */}

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: .45 }}

            exit={{ opacity: 0 }}

            onClick={onClose}

            className=" fixed inset-0 z-[998] bg-black backdrop-blur-sm"/>

          {/* Bottom Sheet */}

          <motion.div

            initial={{ y: "100%",}}

            animate={{ y: 0,}}

            exit={{ y: "100%", }}

            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}

            className=" fixed bottom-0 left-0 right-0 z-[999] mx-auto w-full
              max-w-[520px] overflow-hidden rounded-t-[36px] bg-[#F8F9FD] shadow-2xl">

            {/* Handle */}

            <div className="flex justify-center py-4">

              <div className="h-1.5 w-14 rounded-full bg-gray-300" />

            </div>

            {/* Header */}

            <div className="flex items-center justify-between px-6">

              <div>

                <p
                  className=" text-xs font-bold uppercase tracking-[0.25em] text-violet-600">
                  Mood
                </p>

                <h2 className="mt-2 text-3xl font-black">

                  Select Mood

                </h2>

                <p className="mt-2 text-gray-500">

                  How were you feeling?

                </p>

              </div>

              <button

                onClick={onClose}

                className=" rounded-2xl bg-white p-3 shadow-md ">

                <X size={20} />

              </button>

            </div>

            {/* Grid */}

            <div

              className=" mt-8 max-h-[60vh] overflow-y-auto px-6 pb-8 grid grid-cols-3 gap-4">

              {moods.map((mood) => (

                <MoodCard

                  key={mood.label}

                  mood={mood}

                  selected={
                    selectedMood === mood.emoji
                  }

                  onClick={() => {

                    onSelect(mood);

                    onClose();

                  }}

                />

              ))}

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );

}