import { Search, Bell, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Memory } from "@/types/types";
import { useMemoryStore } from "@/store/memoryStore";

interface HomeViewProps {
    onOpenMemory: (memory: Memory) => void;
    onCreateMemory: () => void;
}

export default function HomeView({ onOpenMemory, onCreateMemory }: HomeViewProps) {
    const memories =
        useMemoryStore(
            (state) => state.memories
        );


    return (
        <main className="min-h-screen bg-[#F8F9FD] pb-32">
            {/* Header */}
            <div className="px-6 pt-8">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">
                            Good Evening ✨
                        </p>

                        <h1 className="mt-1 text-4xl font-bold text-gray-900">
                            Kanchan
                        </h1>
                    </div>

                    <div className="flex gap-3">
                        <button className="rounded-2xl bg-white p-3 shadow-md">
                            <Search size={20} />
                        </button>

                        <button className="rounded-2xl bg-white p-3 shadow-md">
                            <Bell size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Quote */}
            <div className="mt-8 px-6">
                <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-500 p-6 text-white shadow-xl">
                    <p className="text-sm opacity-80">
                        Today's Thought
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold leading-9">
                        Every memory has a story waiting to be remembered.
                    </h2>
                </div>
            </div>

            {/* Memories */}
            <div className="mt-10 px-6">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                        Recent Memories
                    </h2>

                    <button className="text-violet-600 font-medium">
                        View all
                    </button>
                </div>

                <div className="space-y-6">
                    {memories.length === 0 ? (
                        <div className="mt-20 text-center text-gray-500">
                            <h2 className="text-2xl font-semibold">
                                No Memories Yet 🌙
                            </h2>

                            <p className="mt-3">
                                Your beautiful moments will appear here.
                            </p>
                        </div>
                    ) : (
                        memories.map((memory) => (
                            <motion.div
                                key={memory.id}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onOpenMemory(memory)}
                                className="cursor-pointer rounded-3xl bg-white shadow-lg"
                            >
                                <img
                                    src={memory.images[0]}
                                    alt={memory.title}
                                    className="h-60 w-full object-cover"
                                />

                                <div className="p-5">

                                    <div className="flex items-center justify-between">

                                        <h3 className="text-xl font-bold">
                                            {memory.title}
                                        </h3>

                                        <span className="text-2xl">
                                            {memory.mood}
                                        </span>

                                    </div>

                                    <p className="mt-3 text-gray-500">

                                        {memory.location || "Unknown Location"}

                                    </p>

                                    <p className="mt-2 text-sm text-gray-400">

                                        {memory.date}

                                    </p>

                                </div>
                            </motion.div>
                        )))}

                </div>
            </div>

            {/* Floating Add Button */}
            <button
                onClick={onCreateMemory}
                className="fixed bottom-28 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-white shadow-2xl transition hover:scale-110"
            >
                <Plus size={30} />
            </button>
        </main>
    );
}