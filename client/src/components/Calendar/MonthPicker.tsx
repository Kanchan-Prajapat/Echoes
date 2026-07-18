import { AnimatePresence, motion } from "framer-motion";
import { format } from "date-fns";

interface Props {
  open: boolean;
  selected: number;
  onSelect: (month: number) => void;
  onClose: () => void;
}

const months = Array.from({ length: 12 }, (_, index) =>
  format(new Date(2025, index, 1), "MMMM")
);

export default function MonthPicker({
  open,
  selected,
  onSelect,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <div
            className="fixed inset-0 z-[90]"
            onClick={onClose}
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -8,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
              absolute
              left-1/2
              top-20
              z-[100]
              w-60
              -translate-x-1/2
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-2
              shadow-2xl
            "
          >
            {months.map((month, index) => (
              <button
                key={month}
                type="button"
                onClick={() => {
                  onSelect(index);
                  onClose();
                }}
                className={`
                  flex
                  w-full
                  items-center
                  rounded-2xl
                  px-4
                  py-3
                  text-left
                  transition

                  ${
                    selected === index
                      ? "bg-violet-600 text-white"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {month}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}