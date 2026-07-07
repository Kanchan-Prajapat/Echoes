import { motion } from "framer-motion";

const quotes = [

  "Collect moments, not things.",
  "Every Echo tells a story.",
  "Today's moments become tomorrow's memories.",
  "Life happens. Capture it.",
  "Some memories deserve to live forever.",
  "Every sunset deserves an Echo.",
  "Keep the moments that matter.",
  "An Echo is the heart’s way of keeping what the hands let go.",
  "Hold onto the moments that make the world go quiet.",
  "The best feelings are the ones that don’t ask for attention.",
  "In the silence between thoughts, an Echo of joy remains.",
  "Time moves on, but a perfect feeling stays perfectly still.",
  "Where peace resides, memories linger."

];

export default function HomeQuote() {
  const quote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="mb-8 overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-white p-6 shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-500">
        Today's Thought
      </p>

      <h2 className="mt-4 text-xl font-semibold leading-relaxed text-gray-900">
        "{quote}"
      </h2>
    </motion.section>
  );
}