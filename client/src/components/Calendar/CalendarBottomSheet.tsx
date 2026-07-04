import { AnimatePresence, motion } from "framer-motion";
import { X, CalendarDays } from "lucide-react";
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
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[998] bg-black"
          />

          {/* Bottom Sheet */}

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
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
              max-h-[82vh]
              overflow-hidden
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

            <div className="flex items-center justify-between px-6 pt-5 pb-4">

              <div>

                <h2 className="text-2xl font-bold">

                  {format(date, "dd MMMM yyyy")}

                </h2>

                <p className="mt-1 text-gray-500">

                  {echoes.length} Memory
                  {echoes.length !== 1 && "ies"}

                </p>

              </div>

              <button
                onClick={onClose}
                className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
              >
                <X size={20} />
              </button>

            </div>

            {/* Content */}

            <div className="max-h-[60vh] overflow-y-auto px-5 pb-8">

              {echoes.length === 0 ? (

                <div className="flex flex-col items-center py-16">

                  <CalendarDays
                    size={52}
                    className="text-violet-500"
                  />

                  <h3 className="mt-5 text-xl font-bold">

                    No Memories

                  </h3>

                  <p className="mt-2 text-center text-gray-500">

                    Create your first memory for this day.

                  </p>

                </div>

              ) : (

                <div className="space-y-4">

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