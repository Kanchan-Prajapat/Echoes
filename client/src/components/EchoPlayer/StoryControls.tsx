import {
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

interface StoryControlsProps {
  visible: boolean;
  paused: boolean;
  muted: boolean;
  isVideo: boolean;

  onClose: () => void;
  onPauseToggle: () => void;
  onMuteToggle: () => void;
}

export default function StoryControls({
  visible,
  paused,
  muted,
  isVideo,
  onClose,
  onPauseToggle,
  onMuteToggle,
}: StoryControlsProps) {
  return (
    <AnimatePresence>

      {visible && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* Top Gradient */}

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-40" />

          {/* Close */}

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onClose}
            className="absolute right-5 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl"
          >
            <X size={22} />
          </motion.button>

          {/* Play / Pause */}

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onPauseToggle}
            className="absolute bottom-8 left-1/2 z-50 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl"
          >
            {paused ? (
              <Play size={28} fill="white" />
            ) : (
              <Pause size={28} fill="white" />
            )}
          </motion.button>

          {/* Mute */}

          {isVideo && (

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={onMuteToggle}
              className="absolute bottom-9 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl"
            >
              {muted ? (
                <VolumeX size={22} />
              ) : (
                <Volume2 size={22} />
              )}
            </motion.button>

          )}

        </motion.div>

      )}

    </AnimatePresence>
  );
}