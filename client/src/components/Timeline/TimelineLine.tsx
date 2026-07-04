import { motion } from "framer-motion";

interface TimelineLineProps {
  last?: boolean;
}

export default function TimelineLine({
  last = false,
}: TimelineLineProps) {
  return (
    <div className="flex flex-col items-center">

      {/* Animated Dot */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-500 blur-md opacity-40" />

        {/* Dot */}
        <div className="relative h-4 w-4 rounded-full border-4 border-violet-500 bg-white" />
      </motion.div>

      {/* Line */}
     {!last && (
  <motion.div
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    style={{ transformOrigin: "top" }}
    className="mt-1 h-72 w-[3px] rounded-full bg-gradient-to-b
               from-violet-600
               via-violet-400
               to-violet-200"
  />
)}
    </div>
  );
}