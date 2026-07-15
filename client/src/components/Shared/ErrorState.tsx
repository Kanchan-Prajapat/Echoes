import { TriangleAlert } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  message: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message,
  onRetry,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="
        flex
        min-h-[60vh]
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >
      <TriangleAlert
        size={70}
        className="text-red-500"
      />

      <h2 className="mt-6 text-3xl font-black">
        Something went wrong
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="
            mt-8
            rounded-full
            bg-violet-600
            px-8
            py-3
            font-semibold
            text-white
          "
        >
          Try Again
        </button>
      )}
    </motion.div>
  );
}