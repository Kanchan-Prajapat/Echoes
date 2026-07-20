import { useEffect, useRef, useState } from "react";
import { useEchoStore } from "@/store/echoStore";
import { Echo } from "@/types/echo";
import {
    uploadMedia,

    createEcho,
    updateEcho as updateEchoApi,
} from "@/services/echo.service";

import { refreshEchoes } from "@/services/echoSync";
import useToast from "@/hooks/useToast";
import useConfirm from "@/hooks/useConfirm";
import { Media } from "@/types/media";
import { Music } from "@/types/music";
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

const [date, setDate] = useState<Date | undefined>(undefined);

    const [selectedMood, setSelectedMood] =
        useState("😊");

    const [media, setMedia] =
        useState<Media[]>([]);

    const [coverMediaId, setCoverMediaId] =
        useState<string>();
    const [selectedMusic, setSelectedMusic] =
        useState<Music | undefined>();

    /* ---------------- UI ---------------- */

    const [saving, setSaving] =
        useState(false);

    const [showCalendar, setShowCalendar] =
        useState(false);

    const toast = useToast();

    const { confirm } = useConfirm();

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
  editingEcho?.date
    ? new Date(editingEcho.date)
    : undefined
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
      if (editingEcho.music) {
    setSelectedMusic({
        id: editingEcho.music.id,
        title: editingEcho.music.title,
        artist: editingEcho.music.artist,
        image: editingEcho.music.cover,
        audio: editingEcho.music.url,
        duration: editingEcho.music.duration,
    });
}


    }, [editingEcho]);


    const removeMedia = (mediaId: string) => {

        confirm({

            title: "Remove Media",

            message:
                "This media will be removed from your memory.",

            confirmText: "Remove",

            cancelText: "Cancel",

            danger: true,

            onConfirm: () => {

                setMedia((prev) =>
                    prev.filter(
                        (item) => item.id !== mediaId
                    )
                );

                if (coverMediaId === mediaId) {

                    setCoverMediaId(undefined);

                }

                toast.success(
                    "Media removed."
                );

            },

        });

    };

    const setCover = (mediaId: string) => {
        setCoverMediaId(mediaId);
        toast.success(
            "Cover photo updated."
        );
    };



    const handleFilesSelected = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {



        if (!e.target.files) return;

        const files = Array.from(
            e.target.files
        );

        const MAX_SIZE = 50 * 1024 * 1024;

        for (const file of files) {
            if (file.size > MAX_SIZE) {
                toast.error(
                    `${file.name} is larger than 50 MB.`
                );
                return;
            }
        }

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

        if (!coverMediaId && uploaded.length > 0) {

            setCoverMediaId(uploaded[0].id);

        }

        e.target.value = "";
    };


    /* ---------------- Save ---------------- */

    const handleSave = async () => {

        if (!title.trim()) return;

        if (media.length === 0) return;

        try {

            setSaving(true);

            /* ---------- Upload only new media ---------- */

            const uploadedMedia: Media[] = [];

            for (const item of media) {
                if (!item.file) {
                    uploadedMedia.push(item);
                    continue;
                }

                const uploaded = await uploadMedia(item.file);

                uploadedMedia.push({
                    ...item,
                    ...uploaded,
                    file: undefined,
                });
            }
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
                music: selectedMusic
                    ? {
                        id: selectedMusic.id,
                        title: selectedMusic.title,
                        artist: selectedMusic.artist,
                        cover: selectedMusic.image??"",
                        url: selectedMusic.audio,
                        duration: selectedMusic.duration,
                        source: "echoes",
                    }
                    : undefined,


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

            toast.success(

                editingEchoId
                    ? "Memory updated successfully."
                    : "Memory created successfully."

            );

            onSaved();

        }

        catch (error: any) {
            console.error("========== ERROR ==========");
            console.error(error);

            if (error.response) {
                console.log("STATUS:", error.response.status);
                console.log("DATA:", error.response.data);
            }

            toast.error("Failed to save memory.");
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

        selectedMusic,
        setSelectedMusic,

    };
}