import { motion } from "framer-motion";

const memories = [
  {
    id: 1,
    year: "2026",
    title: "WeForShe Hackathon",
    description: "The beginning of Echoes.",
    image: "/demo1.jpg",
  },
  {
    id: 2,
    year: "2026",
    title: "Moonlight Night",
    description: "One peaceful evening under the full moon.",
    image: "/demo2.jpg",
  },
  {
    id: 3,
    year: "2025",
    title: "RHCSA Journey",
    description: "Completed my Linux certification.",
    image: "/demo3.jpg",
  },
];

export default function TimelineView() {
  return (
    <main className="min-h-screen bg-[#F8F9FD] px-6 py-8 pb-28">
      <h1 className="mb-2 text-4xl font-bold text-gray-900">
        Timeline
      </h1>

      <p className="mb-10 text-gray-500">
        Revisit your life's beautiful journey.
      </p>

      <div className="relative border-l-2 border-violet-200 pl-8">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            className="relative mb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[42px] top-3 h-5 w-5 rounded-full border-4 border-white bg-violet-600 shadow-lg" />

            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
              {memory.year}
            </p>

            <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <img
                src={memory.image}
                alt={memory.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold">
                  {memory.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  {memory.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}