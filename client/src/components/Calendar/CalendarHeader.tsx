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
    <div className="mb-6 flex items-center justify-between">

      <button
        onClick={onPrevious}
        className="rounded-full bg-gray-100 p-2 transition hover:bg-violet-100"
      >
        <ChevronLeft size={20} />
      </button>

      <motion.h2
        key={month.toISOString()}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold"
      >
        {format(month, "MMMM yyyy")}
      </motion.h2>

      <button
        onClick={onNext}
        className="rounded-full bg-gray-100 p-2 transition hover:bg-violet-100"
      >
        <ChevronRight size={20} />
      </button>

    </div>
  );
}