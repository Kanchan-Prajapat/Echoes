import { CalendarDays, ImagePlus, MapPin, Save, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMemoryStore } from "@/store/memoryStore";
import { useRef } from "react";

const moods = [
    "😊",
    "😍",
    "😌",
    "🥹",
    "😎",
    "🌙",
];

interface Props {
    onSaved: () => void;
}

export default function NewMemoryView({
    onSaved,
}: Props) {
   const addMemory =
  useMemoryStore(
    (state) => state.addMemory
  );
    const [selectedMood, setSelectedMood] = useState("😊");
    const [title, setTitle] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

const [images, setImages] = useState<string[]>([]);

const [description, setDescription] = useState("");

const [date, setDate] = useState("");

const [location, setLocation] = useState("");


    return (
        <main className="min-h-screen bg-[#F8F9FD] pb-32">

            {/* Header */}

            <div className="px-6 pt-8">

                <h1 className="text-4xl font-bold">
                    New Memory
                </h1>

                <p className="mt-2 text-gray-500">
                    Capture today's beautiful moment.
                </p>

            </div>

            {/* Upload */}

            <div className="mt-8 px-6">

            <motion.button
    whileTap={{ scale: .98 }}
    onClick={() => fileInputRef.current?.click()}
    className="flex h-56 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-violet-300 bg-white overflow-hidden"
>

    {images.length === 0 ? (
        <>
            <ImagePlus
                size={42}
                className="text-violet-600"
            />

            <p className="mt-4 text-gray-500">
                Upload Photos
            </p>
        </>
    ) : (
        <img
            src={images[0]}
            className="h-full w-full object-cover"
        />
    )}

</motion.button>

<input
    ref={fileInputRef}
    hidden
    type="file"
    accept="image/*"
    multiple
    onChange={(e) => {

        if (!e.target.files) return;

        const urls = Array.from(e.target.files).map(file =>
            URL.createObjectURL(file)
        );

        setImages(urls);

    }}
/>

            </div>

            {/* Form */}

            <div className="mt-8 space-y-5 px-6">

                <input
                    placeholder="Memory Title"
                    className="w-full rounded-2xl bg-white p-4 outline-none shadow"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="flex items-center rounded-2xl bg-white px-4 shadow">

                    <CalendarDays
                        className="text-violet-600"
                        size={20}
                    />

                   <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="w-full p-4 outline-none"
/>

                </div>

                <div className="flex items-center rounded-2xl bg-white px-4 shadow">

                    <MapPin
                        className="text-violet-600"
                        size={20}
                    />

                   <input
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  placeholder="Location"
  className="w-full p-4 outline-none"
/>

                </div>

            </div>

            {/* Mood */}

            <div className="mt-10 px-6">

                <div className="mb-4 flex items-center gap-2">

                    <Smile
                        className="text-violet-600"
                        size={20}
                    />

                    <h2 className="text-xl font-semibold">
                        Mood
                    </h2>

                </div>

                <div className="flex gap-3">

                    {moods.map((mood) => (

                        <button
                            key={mood}
                            onClick={() => setSelectedMood(mood)}
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition ${selectedMood === mood
                                    ? "bg-violet-600 text-white"
                                    : "bg-white"
                                }`}
                        >
                            {mood}
                        </button>

                    ))}

                </div>

            </div>

            {/* Journal */}

            <div className="mt-10 px-6">

                <h2 className="mb-4 text-xl font-semibold">
                    Journal
                </h2>

               <textarea
    rows={8}
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Write your beautiful memory..."
                />

            </div>

            {/* Save */}

            <div className="mt-10 px-6">

                <motion.button
                    whileTap={{ scale: .97 }}
                 onClick={() => {

  if (!title.trim()) {
    alert("Please enter a title");
    return;
  }

  addMemory({
    id: crypto.randomUUID(),
    title,
    description,
    images,
    date,
    location,
    mood: selectedMood,
    favorite: false,
    createdAt: new Date().toISOString(),
  });
onSaved();
}}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white shadow-xl"
                >
                    <Save  size={20} />

                    Save Memory

                </motion.button>

            </div>

        </main>
    );
}