import { motion, PanInfo } from "framer-motion";
import { ReactNode, useRef } from "react";

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

  const handleTap = (x: number, width: number) => {

  const now = Date.now();

  if (now - lastTap.current < 300) {

    onDoubleTap?.();

    lastTap.current = 0;

    return;

  }

  lastTap.current = now;

  setTimeout(() => {

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

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 150) {
      onClose();
    }
  };

  return (
    <motion.div
      className="absolute inset-0 z-20"

      drag="y"

      dragConstraints={{
        top: 0,
        bottom: 0,
      }}

      dragElastic={0.15}

      onDragEnd={handleDragEnd}

      onPointerDown={onPause}

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
      {children}
    </motion.div>
  );
}