import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  selected: number;
  onSelect: (year: number) => void;
  onClose: () => void;
}

const currentYear = new Date().getFullYear();

const years = Array.from(
  { length: 100 },
  (_, index) => currentYear - index
);

export default function YearPicker({
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
              right-0
              top-20
              z-[100]
              h-80
              w-36
              overflow-y-auto
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-2
              shadow-2xl
            "
          >
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => {
                  onSelect(year);
                  onClose();
                }}
                className={`
                  flex
                  w-full
                  items-center
                  rounded-2xl
                  px-4
                  py-3
                  transition

                  ${
                    selected === year
                      ? "bg-violet-600 text-white"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {year}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}