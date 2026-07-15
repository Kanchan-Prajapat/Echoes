import { motion } from "framer-motion";

interface Props {
  emoji: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function EmptyState({
  emoji,
  title,
  description,
  action,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
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
      <div className="text-7xl">
        {emoji}
      </div>

      <h2 className="mt-6 text-3xl font-black">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-gray-500 leading-7">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </motion.div>
  );
}