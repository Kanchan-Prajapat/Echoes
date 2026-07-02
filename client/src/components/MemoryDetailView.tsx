import {
  ArrowLeft,
  Heart,
  MapPin,
  CalendarDays,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";

import { Memory } from "@/types/memory";
import { useMemoryStore } from "@/store/memoryStore";

interface Props {
  memory: Memory;
  onBack: () => void;
}

export default function MemoryDetailView({
  memory,
  onBack,
}: Props) {
  const toggleFavorite = useMemoryStore(
    (state) => state.toggleFavorite
  );

  const deleteMemory = useMemoryStore(
    (state) => state.deleteMemory
  );

  return (
    <main className="min-h-screen bg-[#F8F9FD] pb-10">

      {/* Hero Image */}

      <div className="relative h-[45vh] w-full">

        <img
          src={memory.images[0]}
          alt={memory.title}
          className="h-full w-full object-cover"
        />

        <button
          onClick={onBack}
          className="absolute left-5 top-5 rounded-full bg-white/90 p-3 backdrop-blur"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={() => toggleFavorite(memory.id)}
          className="absolute right-5 top-5 rounded-full bg-white/90 p-3 backdrop-blur"
        >
          <Heart
            size={20}
            fill={memory.favorite ? "#ef4444" : "none"}
            className={
              memory.favorite
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
          {memory.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-4 text-gray-500">

          <div className="flex items-center gap-2">

            <CalendarDays size={18} />

            {memory.date}

          </div>

          <div className="flex items-center gap-2">

            <MapPin size={18} />

            {memory.location || "Unknown"}

          </div>

        </div>

        <div className="mt-6">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-lg">

            {memory.mood}

          </span>

        </div>

        <div className="mt-10">

          <h2 className="mb-4 text-2xl font-semibold">
            Journal
          </h2>

          <p className="leading-8 text-gray-600">

            {memory.description || "No journal written."}

          </p>

        </div>

        <button
          onClick={() => {
            deleteMemory(memory.id);
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