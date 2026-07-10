import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import Calendar from "@/components/Calendar/Calendar";

interface Props {
  open: boolean;
  value?: Date;
  onClose: () => void;
  onSelect: (date: Date) => void;
}

export default function CalendarModal({
  open,
  value,
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
            className="fixed inset-0 z-[998] bg-black"
          />

          {/* Bottom Sheet */}

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
              stiffness: 280,
              damping: 28,
            }}
            className="
              fixed
              bottom-0
              left-0
              right-0
              z-[999]
              rounded-t-[36px]
              bg-[#F8F9FD]
              shadow-2xl
            "
          >

            {/* Handle */}

            <div className="flex justify-center pt-3">

              <div className="h-1.5 w-14 rounded-full bg-gray-300" />

            </div>

            {/* Header */}

            <div className="flex items-center justify-between px-6 py-5">

              <h2 className="text-2xl font-bold">

                Select Date

              </h2>

              <button
                onClick={onClose}
                className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
              >
                <X size={20} />
              </button>

            </div>

            {/* Calendar */}

            <div className="px-5 pb-8">

              <Calendar
                value={value}
                onChange={(date) => {
                  onSelect(date);
                  onClose();
                }}
              />

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}