import { useEffect } from "react";
import { motion } from "framer-motion";

type SplashProps = {
  onFinish: () => void;
};

export default function Splash({ onFinish }: SplashProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#F8F9FD]">
      {/* Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl" />

      {/* Logo */}
      <motion.img
        src="/logo-light.png"
        alt="Echoes"
        className="z-10 h-36 w-36"
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      />

      {/* Title */}
      <motion.h1
        className="z-10 mt-8 text-5xl font-bold tracking-tight text-gray-900"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        Echoes
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="z-10 mt-3 text-gray-500"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
        }}
      >
        Every moment leaves an echo.
      </motion.p>

      {/* Loading */}
      <motion.div
        className="z-10 mt-12 flex gap-2"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
      >
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="h-3 w-3 rounded-full bg-violet-600"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: dot * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}