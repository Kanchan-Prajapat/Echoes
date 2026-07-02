import {
  ArrowLeft,
  Heart,
  MapPin,
  CalendarDays,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";

import { Echo } from "@/types/echo";
import { useEchoStore } from "@/store/echoStore";
import MediaCarousel from "./MediaCarousel";

interface Props {
  echo: Echo;
  onBack: () => void;
}

export default function EchoDetailView({
  echo,
  onBack,
}: Props) {
  const toggleFavorite = useEchoStore(
    (state) => state.toggleFavorite
  );

  const deleteEcho = useEchoStore(
    (state) => state.deleteEcho
  );

  return (
    <main className="min-h-screen bg-[#F8F9FD] pb-10">

      {/* Hero Image */}

      <div className="relative h-[45vh] w-full">

 <MediaCarousel
    media={echo.media}
    height="h-[45vh]"
/>


        <button
          onClick={onBack}
          className="absolute left-5 top-5 rounded-full bg-white/90 p-3 backdrop-blur"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={() => toggleFavorite(echo.id)}
          className="absolute right-5 top-5 rounded-full bg-white/90 p-3 backdrop-blur"
        >
          <Heart
            size={20}
            fill={echo.favorite ? "#ef4444" : "none"}
            className={
              echo.favorite
                ? "text-red-500"
                : "text-gray-700"
            }
          />
        </button>

      </div>

      {/* Content */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="px-6"
      >

        <h1 className="mt-8 text-4xl font-bold">
          {echo.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-4 text-gray-500">

          <div className="flex items-center gap-2">

            <CalendarDays size={18} />

            {echo.date}

          </div>

          <div className="flex items-center gap-2">

            <MapPin size={18} />

            {echo.location || "Unknown"}

          </div>

        </div>

        <div className="mt-6">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-lg">

            {echo.mood}

          </span>

        </div>

        <div className="mt-10">

          <h2 className="mb-4 text-2xl font-semibold">
            Journal
          </h2>

          <p className="leading-8 text-gray-600">

            {echo.description || "No journal written."}

          </p>

        </div>

        <button
          onClick={() => {
            deleteEcho(echo.id);
            onBack();
          }}
          className="mt-12 flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-4 font-semibold text-white"
        >
          <Trash2 size={20} />

          Delete Memory
        </button>

      </motion.div>

    </main>
  );
}