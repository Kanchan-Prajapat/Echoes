import { motion } from "framer-motion";

type WelcomeProps = {
  onStart: () => void;
};

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F8F9FD] px-8">

      {/* Background Glow */}
      <div className="absolute -top-20 h-[420px] w-[420px] rounded-full bg-violet-400/20 blur-3xl" />

      {/* Logo */}
      <motion.img
        src="/logo-light.png"
        alt="Echoes"
        className="z-10 h-24 w-24"
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      />

      {/* Heading */}
      <motion.h1
        className="z-10 mt-8 text-center text-5xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
      >
        Welcome to
        <br />
        Echoes
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="z-10 mt-6 max-w-md text-center text-lg leading-8 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4 }}
      >
        Preserve your life's most meaningful moments.
        <br />
        Create beautiful stories you'll cherish forever.
      </motion.p>

      {/* Illustration */}
      <motion.img
        src="/welcome-illustration.jpg"
        alt="Illustration"
        className="z-10 my-14 w-[320px]"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .6 }}
      />

      {/* Button */}
      <motion.button
        onClick={onStart}
        className="z-10 w-full max-w-sm rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.02]"
        whileTap={{ scale: .96 }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .8 }}
      >
        Get Started →
      </motion.button>

      {/* Footer */}
      <motion.p
        className="z-10 mt-8 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Every moment leaves an echo.
      </motion.p>

    </div>
  );
}
