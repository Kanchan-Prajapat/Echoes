import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";

interface Props {
  month: Date;
  onPrevious: () => void;
  onNext: () => void;
}

export default function CalendarHeader({
  month,
  onPrevious,
  onNext,
}: Props) {
  return (
    <div className="mb-8">

      {/* Small Label */}

      <p
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.28em]
          text-violet-600
        "
      >
        Calendar
      </p>

      {/* Header */}

      <div className="mt-3 flex items-center justify-between">

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={onPrevious}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-white
            shadow-md
            transition
            hover:shadow-lg
          "
        >
          <ChevronLeft size={20} />
        </motion.button>

        <motion.div
          key={format(month, "MMMM yyyy")}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .25,
          }}
          className="text-center"
        >
          <h2 className="text-3xl font-black">
            {format(month, "MMMM")}
          </h2>

          <p className="mt-1 text-gray-500">
            {format(month, "yyyy")}
          </p>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={onNext}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-white
            shadow-md
            transition
            hover:shadow-lg
          "
        >
          <ChevronRight size={20} />
        </motion.button>

      </div>

    </div>
  );
}