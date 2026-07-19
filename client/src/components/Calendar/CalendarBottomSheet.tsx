import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  X,
} from "lucide-react";
import { format } from "date-fns";

import { Echo } from "@/types/echo";

import CalendarDayPreview from "./CalendarDayPreview";

interface Props {
  open: boolean;
  date: Date;
  echoes: Echo[];

  onClose: () => void;
  onOpenEcho: (echo: Echo) => void;
}

export default function CalendarBottomSheet({
  open,
  date,
  echoes,
  onClose,
  onOpenEcho,
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

            transition={{
              duration: .2,
            }}

            onClick={onClose}

            className="
              fixed
              inset-0
              z-[998]
              bg-black
              backdrop-blur-sm
            "

          />

          {/* Sheet */}

          <motion.div

            initial={{
              y: "100%",
            }}

            animate={{
              y: 0,
            }}

            exit={{
              y: "100%",
            }}

            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}

            className="
              fixed
              bottom-0
              left-0
              right-0
              z-[999]

              mx-auto

              w-full
              max-w-[560px]

              overflow-hidden

              rounded-t-[36px]

              bg-[#F8F9FD]

              shadow-2xl
            "

          >

            {/* Handle */}

            <div className="flex justify-center py-4">

              <div
                className="
                  h-1.5
                  w-16
                  rounded-full
                  bg-gray-300
                "
              />

            </div>

            {/* Header */}

            <div
              className="
                flex
                items-start
                justify-between

                px-7
                pb-5
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-violet-600
                  "
                >
                  Selected Date
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-black
                  "
                >
                  {format(
                    date,
                    "dd MMMM"
                  )}
                </h2>

                <p
                  className="
                    mt-2
                    text-gray-500
                  "
                >
                  {format(
                    date,
                    "EEEE, yyyy"
                  )}
                </p>

              </div>

              <motion.button

                whileTap={{
                  scale: .9,
                }}

                onClick={onClose}

                className="
                  rounded-2xl
                  bg-white
                  p-3
                  shadow-md
                "

              >

                <X size={20} />

              </motion.button>

            </div>

            {/* Count */}

            <div className="px-7">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-violet-100

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-violet-700
                "
              >

                <CalendarDays size={16} />

                {echoes.length}

                {echoes.length === 1
                  ? " Memory"
                  : " Memories"}

              </div>

            </div>

            {/* Content */}

            <div
              className="
                mt-6

                max-h-[58vh]

                overflow-y-auto

                px-6
                pb-8
              "
            >

              {echoes.length === 0 ? (

                <motion.div

                  initial={{
                    opacity: 0,
                  }}

                  animate={{
                    opacity: 1,
                  }}

                  className="
                    flex
                    flex-col
                    items-center

                    py-20
                  "

                >

                  <CalendarDays
                    size={60}
                    className="text-violet-500"
                  />

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                    "
                  >

                    No Memories

                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-xs
                      text-center
                      text-gray-500
                    "
                  >

                    This day doesn't have any
                    memories yet.

                  </p>

                </motion.div>

              ) : (

                <div className="space-y-5">

                  {echoes.map((echo) => (

                    <CalendarDayPreview
                      key={echo.id}
                      echo={echo}
                      onClick={() => {

                        onClose();

                        onOpenEcho(echo);

                      }}
                    />

                  ))}

                </div>

              )}

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );

}