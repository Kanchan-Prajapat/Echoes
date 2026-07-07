import { motion } from "framer-motion";

export default function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 21 || hour < 5) {
    greeting = "Good Night";
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: -12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="mb-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-600">
        {greeting}
      </p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Kanchiii
      </h1>

      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
        Every memory has a story. Continue where you left off or relive your
        favorite moments.
      </p>
    </motion.section>
  );
}