import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Media } from "@/types/media";

interface StoryMediaProps {
  media: Media;
  paused: boolean;
  muted: boolean;
  onNext: () => void;
  onVideoProgress: (progress: number) => void;
}

export default function StoryMedia({
  media,
  paused,
  muted,
  onNext,
  onVideoProgress,
}: StoryMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [showHeart, setShowHeart] = useState(false);



  /* ---------------- Pause / Resume Video ---------------- */

  useEffect(() => {
    if (!videoRef.current) return;

    if (paused) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => { });
    }
  }, [paused]);

  /* ---------------- Mute ---------------- */

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.muted = muted;
  }, [muted]);

  /* ---------------- Reset Progress ---------------- */

 useEffect(() => {
  setLoaded(false);
  onVideoProgress(0);

  if (videoRef.current) {
    videoRef.current.currentTime = 0;
  }
}, [media.id]);

  const handleDoubleClick = () => {

    setShowHeart(true);

    setTimeout(() => {

      setShowHeart(false);

    }, 900);

  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">

      {/* Beautiful Background */}

      {media.type === "image" && (
        <img
          src={media.url}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl brightness-50"
        />
      )}

      {media.type === "video" && (
        <video
          src={media.url}
          muted
          playsInline
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl brightness-50"
        />
      )}

      <div
        className="
    absolute
    inset-0
    bg-gradient-to-b
    from-black/25
    via-black/40
    to-black/75
  "
      />

      <div className="absolute inset-0 backdrop-blur-sm" />
      {!loaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">

          <motion.div
            onDoubleClick={handleDoubleClick}
            key={media.id}
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="
  h-14
  w-14
  rounded-full
  border-[5px]
  border-violet-500
  border-t-transparent
  shadow-[0_0_35px_rgba(139,92,246,.6)]
"
          />

        </div>
      )}

      {/* Main Media */}

      <motion.div
        key={media.id}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        exit={{
          opacity: 0,
          scale: 1.03,
        }}

        transition={{
          duration: .45,
          ease: "easeOut",
        }}
        className="
relative
flex
h-full
w-full
items-center
justify-center
px-6
py-10
"
      >
        {media.type === "image" ? (
          <img
            src={media.url}
            onLoad={() => setLoaded(true)}
            alt=""
            draggable={false}
            className="
  max-h-[92vh]
  max-w-full
  rounded-2xl
  object-contain
  shadow-2xl
  select-none
"
          />
        ) : (
          <video
            ref={videoRef}
            src={media.url}
           onLoadedData={() => {
  setLoaded(true);

  if (!paused) {
    videoRef.current?.play().catch(() => {});
  }
}}
            preload="metadata"
            playsInline
            controls={false}
            muted
            className="
  max-h-[92vh]
  max-w-full
  rounded-2xl
  object-contain
  shadow-2xl
"

            onEnded={onNext}

            onTimeUpdate={(e) => {

              const video = e.currentTarget;

              if (!video.duration) return;

              onVideoProgress(
                (video.currentTime / video.duration) * 100
              );

            }}
          />
        )}
      </motion.div>

      <AnimatePresence>

        {showHeart && (

          <motion.div

            initial={{
              scale: 0,
              opacity: 0,
            }}

            animate={{
              scale: 1,
              opacity: 1,
            }}

            exit={{
              scale: 1.8,
              opacity: 0,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}

            className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center"

          >

            <motion.div

              animate={{
                y: [-5, -30],
                scale: [1, 1.2, 1],
              }}

              transition={{
                duration: .8,
              }}
              className="
  text-[90px]
  drop-shadow-[0_0_25px_rgba(255,0,90,.6)]
"

            >

              ❤️

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      
    </div>
  );
}