import { ReactNode, useRef, useState } from "react";
import {
  motion,
  PanInfo,
  AnimatePresence,
} from "framer-motion";

interface StoryGesturesProps {
  children: ReactNode;

  onPrevious: () => void;
  onNext: () => void;

  onClose: () => void;

  onPause: () => void;
  onResume: () => void;

  onDoubleTap?: () => void;
}

export default function StoryGestures({
  children,
  onPrevious,
  onNext,
  onClose,
  onPause,
  onResume,
  onDoubleTap,
}: StoryGesturesProps) {

  const lastTap = useRef(0);

  const [tapX, setTapX] =
    useState<number | null>(null);

  /* ---------------- Tap ---------------- */

  const handleTap = (
    x: number,
    width: number
  ) => {

    setTapX(x);

    window.setTimeout(() => {
      setTapX(null);
    }, 180);

    const now = Date.now();

    if (now - lastTap.current < 300) {

      navigator.vibrate?.(20);

      onDoubleTap?.();

      lastTap.current = 0;

      return;
    }

    lastTap.current = now;

    window.setTimeout(() => {

      if (lastTap.current !== 0) {

        if (x < width / 2) {

          onPrevious();

        } else {

          onNext();

        }

        lastTap.current = 0;

      }

    }, 300);

  };

  /* ---------------- Swipe Down ---------------- */

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {

    const shouldClose =
      info.offset.y > 140 ||
      info.velocity.y > 700;

    if (shouldClose) {

      onClose();

    }

  };

  return (

    <motion.div

      className="
        absolute
        inset-0
        z-20
        cursor-pointer
        select-none
        touch-none
      "

      drag="y"

      dragConstraints={{
        top: 0,
        bottom: 0,
      }}

      dragElastic={0.08}

      dragMomentum={false}

      whileTap={{
        scale: 0.995,
      }}

      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
      }}

      onDragEnd={handleDragEnd}

      onPointerDown={(e) => {

        e.preventDefault();

        onPause();

      }}

      onPointerUp={onResume}

      onPointerLeave={onResume}

      onClick={(e) => {

        const rect =
          e.currentTarget.getBoundingClientRect();

        handleTap(
          e.clientX - rect.left,
          rect.width
        );

      }}

    >

      {/* Tap Ripple */}

      <AnimatePresence>

        {tapX !== null && (

          <motion.div

            initial={{
              scale: 0,
              opacity: .35,
            }}

            animate={{
              scale: 2.2,
              opacity: 0,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: .35,
            }}

            className="
              pointer-events-none
              absolute
              top-1/2
              h-24
              w-24
              -translate-y-1/2
              rounded-full
              bg-white/20
            "

            style={{
              left: tapX - 48,
            }}

          />

        )}

      </AnimatePresence>

      {children}

    </motion.div>

  );

}