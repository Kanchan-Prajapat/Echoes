import {
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

interface StoryControlsProps {
  visible: boolean;
  paused: boolean;
  muted: boolean;
  isVideo: boolean;

  onClose: () => void;
  onPauseToggle: () => void;
  onMuteToggle: () => void;
}

function GlassButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: .92,
      }}
      onClick={onClick}
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/10
        text-white
        shadow-xl
        backdrop-blur-xl
      "
    >
      {children}
    </motion.button>
  );
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

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          className="absolute inset-0 z-50 pointer-events-none"

        >

          {/* Top Gradient */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-36
              bg-gradient-to-b
              from-black/80
              via-black/20
              to-transparent
            "
          />

          {/* Bottom Gradient */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-44
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
            "
          />

          {/* Close */}

          <div className="pointer-events-auto">

            <div className="absolute right-6 top-7">

              <GlassButton onClick={onClose}>

                <X size={22} />

              </GlassButton>

            </div>

          </div>

          {/* Bottom Controls */}

          <div
            className="
              pointer-events-auto
              absolute
              bottom-8
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-5
            "
          >

            <GlassButton
              onClick={onPauseToggle}
            >

              {paused ? (

                <Play
                  size={24}
                  fill="white"
                />

              ) : (

                <Pause
                  size={24}
                  fill="white"
                />

              )}

            </GlassButton>

            {isVideo && (

              <GlassButton
                onClick={onMuteToggle}
              >

                {muted ? (

                  <VolumeX size={22} />

                ) : (

                  <Volume2 size={22} />

                )}

              </GlassButton>

            )}

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}