import { CalendarDays, ImagePlus, MapPin, Save, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useEchoStore } from "@/store/echoStore";
import { useRef } from "react";
import { Media } from "@/types/media";
import MediaCarousel from "./MediaCarousel";
import { Echo } from "@/types/echo";
import { refreshEchoes } from "@/services/echoSync";
import { format } from "date-fns";
import CalendarModal from "@/components/Calendar/CalendarModal";
import {
    uploadMedia,
    createEcho,
    updateEcho as updateEchoApi,
} from "@/services/echo.service";

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
    editingEchoId?: string;
}

export default function NewEchoView({
    onSaved,
    editingEchoId,
}: Props) {

    const editingEcho = useEchoStore((state) =>
        state.echoes.find((e) => e.id === editingEchoId)
    );

    const [selectedMood, setSelectedMood] = useState(
        editingEcho?.mood ?? "😊"
    );

    const [title, setTitle] = useState(
        editingEcho?.title ?? ""
    );

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [media, setMedia] = useState(
        editingEcho?.media ?? []
    );

    const [showCalendar, setShowCalendar] =
        useState(false);

    const [description, setDescription] = useState(
        editingEcho?.description ?? ""
    );

    const [date, setDate] = useState(
        editingEcho?.date ?? ""
    );

    const [location, setLocation] = useState(
        editingEcho?.location ?? ""
    );

    const [saving, setSaving] = useState(false);


    useEffect(() => {
        if (!editingEcho) return;

        setTitle(editingEcho.title);
        setDescription(editingEcho.description);
        setMedia(editingEcho.media);
        setDate(editingEcho.date);
        setLocation(editingEcho.location);
        setSelectedMood(editingEcho.mood);
    }, [editingEcho]);


    return (
        <main className="min-h-screen bg-[#F8F9FD] pb-32">

            {/* Header */}

            <div className="px-6 pt-8">

                <h1 className="text-4xl font-bold">
                    New Echo
                </h1>

                <p className="mt-2 text-gray-500">
                    Capture today's beautiful moment.
                </p>

            </div>

            {/* Upload */}

            <div className="mt-8 px-6">

                <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer ..."
                >

                    {media.length === 0 ? (
                        <>
                            <ImagePlus
                                size={42}
                                className="text-violet-600"
                            />

                            <p className="mt-4 text-gray-500">
                                Add Photos & Videos
                            </p>
                        </>
                    ) : (<MediaCarousel
                        media={media}
                        height="h-56"
                    />)}
                </motion.div>
                <input
                    ref={fileInputRef}
                    hidden
                    multiple
                    accept="image/*,video/*"
                    type="file"
                    onChange={(e) => {
                        if (!e.target.files) return;
                        const files = Array.from(e.target.files);
                        console.log(media);
                        media.forEach((m) => {
                            console.log(m.file);
                        });
                        const uploadedMedia: Media[] = files.map((file) => ({
                            id: crypto.randomUUID(),
                            type: file.type.startsWith("video")
                                ? "video"
                                : "image",
                            url: URL.createObjectURL(file),
                            file,
                        }));

                        console.log("NEW MEDIA");

                        console.log(uploadedMedia);

                        setMedia(uploadedMedia);
                    }}
                />

            </div>

            {/* Form */}

            <div className="mt-8 space-y-5 px-6">

                <input
                    placeholder="Echo Title"
                    className="w-full rounded-2xl bg-white p-4 outline-none shadow"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="flex items-center rounded-2xl bg-white px-4 shadow">

                    <button
                        type="button"
                        onClick={() => setShowCalendar(true)}
                        className="flex h-14 w-full items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 shadow-sm"
                    >
                        <div className="flex items-center gap-3">

                            <CalendarDays
                                size={20}
                                className="text-violet-600"
                            />

                            <span>
                                {date
                                    ? format(new Date(date), "dd MMMM yyyy")
                                    : "Select date"}
                            </span>

                        </div>

                    </button>

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
                    placeholder="Write the story behind this Echo..."
                />

            </div>

            {/* Save */}

            <div className="mt-10 px-6">

                <motion.button
                    disabled={saving}
                    whileTap={{ scale: .97 }}
                    onClick={async () => {
                        console.log("===== SAVE CLICKED =====");
                        if (!title.trim()) {
                            alert("Please enter a title");
                            return;
                        }

                        try {

                            setSaving(true);
                            console.log("Saving started...");
                            console.log("Media State:", media);
                            media.forEach((m, i) => {
                                console.log(
                                    i,
                                    m.file,
                                    m.file?.name,
                                    m.file instanceof File
                                );
                            });

                            // Upload only new files
                            console.log("Before upload");
                            const uploadedMedia = await Promise.all(

                                media.map(async (item) => {
                                    console.log("Current Item:", item);
                                    console.log("File:", item.file);
                                    if (!item.file) {
                                        return item;
                                    }
                                    console.log("Calling uploadMedia...");
                                    const uploaded = await uploadMedia(item.file);

                                    console.log("Uploaded =", uploaded);
                                    console.log("UPLOADED RESPONSE");

                                    if (!uploaded) {
                                        throw new Error("uploadMedia returned undefined");
                                    }

                                    return {

                                        ...item,

                                        url: uploaded.url,
                                        publicId: uploaded.publicId,
                                        file: undefined,
                                    };
                                    console.log("Cloudinary Response:", uploaded);
                                })

                            );


                            const payload = {

                                title,

                                description,

                                date,

                                location,

                                mood: selectedMood,

                                favorite: editingEcho?.favorite ?? false,

                                coverMediaId:
                                    uploadedMedia[0]?.id ?? "",

                                media: uploadedMedia.map(
                                    ({
                                        id,
                                        file,
                                        thumbnail,
                                        duration,
                                        ...rest
                                    }) => rest
                                ),

                            };


                            console.log("========== Uploaded Media ==========");
                            console.log(uploadedMedia);

                            console.log("========== Payload ==========");
                            console.log(payload);

                            if (editingEcho) {

                                await updateEchoApi(
                                    editingEcho.id,
                                    payload
                                );
                            } else {

                                await createEcho(payload);
                            }
                            await refreshEchoes();
                            onSaved();
                        } catch (error) {

                            console.error(error);
                            alert("Failed to save Echo.");

                        } finally {

                            setSaving(false);

                        }

                    }}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white shadow-xl"
                >
                    <Save size={20} />

                    {saving ? "Saving..." : editingEcho ? "Update Echo" : "Save Echo"}

                </motion.button>

            </div>
            <CalendarModal
                open={showCalendar}
                value={date ? new Date(date) : new Date()}
                onClose={() => setShowCalendar(false)}
                onSelect={(date) => {
                    setDate(format(date, "yyyy-MM-dd"));
                }}
            />


        </main>

    );
}