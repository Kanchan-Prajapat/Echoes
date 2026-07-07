import { useEffect, useRef, useState } from "react";

import { useEchoStore } from "@/store/echoStore";
import { Echo } from "@/types/echo";
import {
    uploadMedia,

    createEcho,
    updateEcho as updateEchoApi,
} from "@/services/echo.service";

import { refreshEchoes } from "@/services/echoSync";

import { Media } from "@/types/media";
interface Props {
    editingEchoId?: string;
    onSaved: () => void;
}

export default function useNewEcho({
    editingEchoId,
    onSaved,
}: Props) {

    const editingEcho = useEchoStore(
        (state) =>
            state.echoes.find(
                (e) => e.id === editingEchoId
            )
    );

    /* ---------------- Refs ---------------- */

    const fileInputRef =
        useRef<HTMLInputElement>(null);

    /* ---------------- Form ---------------- */

    const [title, setTitle] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [location, setLocation] =
        useState("");

    const [date, setDate] =
        useState("");

    const [selectedMood, setSelectedMood] =
        useState("😊");

    const [media, setMedia] =
        useState<Media[]>([]);

        const [coverMediaId, setCoverMediaId] =
    useState<string>();

    /* ---------------- UI ---------------- */

    const [saving, setSaving] =
        useState(false);

    const [showCalendar, setShowCalendar] =
        useState(false);

    const [showMoodPicker, setShowMoodPicker] =
        useState(false);

    useEffect(() => {

        if (!editingEcho) return;

        setTitle(
            editingEcho.title
        );

        setDescription(
            editingEcho.description
        );

        setLocation(
            editingEcho.location
        );

        setDate(
            editingEcho.date
        );

        setSelectedMood(
            editingEcho.mood
        );

        setMedia(
            editingEcho.media
        );

        setCoverMediaId(
    editingEcho.coverMediaId
);

    }, [editingEcho]);


  const removeMedia = (mediaId: string) => {

  setMedia((prev) => {

    const updated = prev.filter(
      (m) => m.id !== mediaId
    );

    if (coverMediaId === mediaId) {
      setCoverMediaId(updated[0]?.id);
    }

    return updated;
  });

};

const setCover = (mediaId: string) => {
    setCoverMediaId(mediaId);
};



    const handleFilesSelected = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (!e.target.files) return;

        const files = Array.from(
            e.target.files
        );

        const uploaded: Media[] =
            files.map((file) => ({

                id: crypto.randomUUID(),

                type:
                    file.type.startsWith("video")
                        ? "video"
                        : "image",

                url:
                    URL.createObjectURL(file),

                file,

            }));

        setMedia((prev) => [

            ...prev,

            ...uploaded,

        ]);
e.target.value = "";
    };


    /* ---------------- Save ---------------- */

    const handleSave = async () => {

        if (!title.trim()) return;

        if (media.length === 0) return;

        try {

            setSaving(true);

            /* ---------- Upload only new media ---------- */

            const uploadedMedia = await Promise.all(

                media.map(async (item) => {

                    // Already uploaded (editing)
                    if (!item.file) {
                        return item;
                    }

                    const uploaded = await uploadMedia(
                        item.file
                    );

                    return {
                        ...item,
                        ...uploaded,
                        file: undefined,
                    };

                })

            );

            /* ---------- Cover ---------- */


const finalCoverMediaId =

coverMediaId ??

editingEcho?.coverMediaId ??

uploadedMedia[0]?.id;


            /* ---------- Echo ---------- */

         const echo: Partial<Echo> = {

                title,

                description,

                location,

                mood: selectedMood,

                date,

                media: uploadedMedia,

                coverMediaId: finalCoverMediaId,

            };

            /* ---------- Update ---------- */

            if (
                editingEcho &&
                editingEcho.id
            ) {

                await updateEchoApi(
                    editingEcho.id,
                    echo
                );

            }

            /* ---------- Create ---------- */

            else {

                await createEcho(echo);

            }

            /* ---------- Refresh ---------- */

            await refreshEchoes();

            onSaved();

        }

        catch (error) {

            console.error(error);

            alert(
                "Unable to save memory."
            );

        }

        finally {

            setSaving(false);

        }

    };


    return {

        /* Form */

        title,
        setTitle,

        description,
        setDescription,

        location,
        setLocation,

        date,
        setDate,

        selectedMood,
        setSelectedMood,

        media,
        setMedia,

        /* UI */

        saving,

        showCalendar,
        setShowCalendar,

        showMoodPicker,
        setShowMoodPicker,

        /* Refs */

        fileInputRef,

        /* Actions */

        handleFilesSelected,

        removeMedia,

        handleSave,

        editingEcho,

        coverMediaId,
setCover,

    };
}