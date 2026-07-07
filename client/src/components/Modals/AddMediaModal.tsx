import { ImagePlus, Save } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { Media } from "@/types/media";

interface Props {

    open: boolean;
    onClose: () => void;
    onSave: (media: Media[]) => void;
}

export default function AddMediaModal({

    open,
    onClose,
    onSave,

}: Props) {

    const inputRef =
        useRef<HTMLInputElement>(null);

    const [media, setMedia] =
        useState<Media[]>([]);


    if (!open) return null;

    return (

        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur">

            <motion.div

                initial={{
                    scale: .9,
                    opacity: 0,
                }}

                animate={{
                    scale: 1,
                    opacity: 1,
                }}

                className="w-[92%] rounded-3xl bg-white p-6"

            >

                <h2 className="text-2xl font-bold">

                    Add Media

                </h2>

                <p className="mt-2 text-gray-500">

                    Add more memories to this Echo.

                </p>

                <button

                    onClick={() =>
                        inputRef.current?.click()
                    }

                    className="mt-8 flex h-48 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-violet-300"

                >

                    <ImagePlus
                        size={40}
                    />

                    <p className="mt-4">

                        Select Photos & Videos

                    </p>

                </button>

                <input

                    hidden

                    multiple

                    ref={inputRef}

                    type="file"

                    accept="image/*,video/*"

                    onChange={(e) => {

                        if (!e.target.files) return;

                        const uploaded = Array.from(e.target.files).map((file) => ({
                            id: crypto.randomUUID(),
                            file,
                            url: URL.createObjectURL(file),
                            type: file.type.startsWith("video")
                                ? "video"
                                : "image",
                        }));

                        setMedia(uploaded);

                    }}

                />

                {media.length > 0 && (

                    <div className="mt-6">

                        <p className="mb-3 font-medium">

                            Selected Media ({media.length})

                        </p>

                        <div className="grid grid-cols-3 gap-3">

                            {media.map((item) => (

                                <div
                                    key={item.id}
                                    className="relative aspect-square overflow-hidden rounded-2xl"
                                >

                                    {item.type === "image" ? (

                                        <img
                                            src={item.url}
                                            className="h-full w-full object-cover"
                                        />

                                    ) : (

                                        <video
                                            src={item.url}
                                            className="h-full w-full object-cover"
                                        />

                                    )}

                                </div>

                            ))}

                        </div>

                    </div>

                )}

                <div className="mt-8 flex gap-3">

                    <button
                        onClick={onClose}
                        className="flex-1 rounded-2xl border border-gray-200 bg-white py-4 font-medium shadow-sm transition hover:bg-gray-50"
                    >
                        Cancel
                    </button>

                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        disabled={media.length === 0}
                        onClick={() => {
                            onSave(media);
                            setMedia([]);
                            onClose();
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-violet-600 py-4 font-semibold text-white shadow-lg disabled:cursor-not-allowed disabled:bg-violet-300"
                    >
                        <Save size={18} />
                        Add to Echo
                    </motion.button>

                </div>

            </motion.div>

        </div>

    );

}