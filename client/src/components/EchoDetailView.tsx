import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowLeft, Heart, CalendarDays, MapPin, Pencil, Trash2, ImagePlus, Play, Images, Video, Star, Trash,
} from "lucide-react";

import { Echo } from "@/types/echo";
import { Media } from "@/types/media";

import { useEchoStore } from "@/store/echoStore";

import MediaCarousel from "./MediaCarousel";
import EchoPlayer from "./EchoPlayer/EchoPlayer";
import AddMediaModal from "./AddMediaModal";

import {
  deleteEcho as deleteEchoApi,
  toggleFavorite as toggleFavoriteApi,
  addMediaToEcho as addMediaToEchoApi,
  deleteMediaFromEcho as deleteMediaApi,
  setCoverMedia as setCoverMediaApi,
  uploadMedia,
} from "@/services/echo.service";

import { refreshEchoes } from "@/services/echoSync";

interface Props {
  echoId: string;
  onBack: () => void;
  onEdit: (echoId: string) => void;
}

export default function EchoDetailView({
  echoId,
  onBack,
  onEdit,
}: Props) {

  /* ---------------- Store ---------------- */


  const echo = useEchoStore((state) =>
    state.echoes.find((e) => e.id === echoId)
  );



  /* ---------------- State ---------------- */

  const [showPlayer, setShowPlayer] =
    useState(false);


  const [showAddMedia, setShowAddMedia] =
    useState(false);

  const [selectedMediaIndex, setSelectedMediaIndex] =
    useState(0);

  useEffect(() => {
    if (!echo) {
      onBack();
    }
  }, [echo]);

  useEffect(() => {
    console.log(selectedMediaIndex);
  }, [selectedMediaIndex]);



  /* ---------------- Derived Data ---------------- */

  const imageCount = useMemo(() => {
    if (!echo) return 0;

    return echo.media.filter(
      (m) => m.type === "image"
    ).length;
  }, [echo]);

  const videoCount = useMemo(() => {
    if (!echo) return 0;

    return echo.media.filter(
      (m) => m.type === "video"
    ).length;
  }, [echo]);

  if (!echo) {
    return (
      <div>
        Echo not found
      </div>
    );
  }

 const coverMedia =
  echo.media.find(
    (m) => m.publicId === echo.coverMediaId
  ) ?? echo.media[0];


  const coverIndex = echo.media.findIndex(
  m => m.publicId === echo.coverMediaId
);

  /* ---------------- Player ---------------- */

  if (showPlayer) {
    return (
      <EchoPlayer
        echo={echo}
        initialIndex={selectedMediaIndex}
        onClose={() =>
          setShowPlayer(false)
        }
      />
    );
  }


  return (
    <main className="min-h-screen bg-[#F8F9FD] pb-10">

      {/* Hero */}

      <section className="relative">


    <MediaCarousel
    media={echo.media}
    coverMediaId={echo.coverMediaId}
          height="h-[38vh]"
          currentIndex={selectedMediaIndex}
          onChange={setSelectedMediaIndex}
          onOpenPlayer={() => setShowPlayer(true)}
        />


        {/* Gradient */}

        <div className="absolute inset-x-0 bottom-0 h-38 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Back */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="absolute left-5 top-5 rounded-full bg-white/90 p-3 backdrop-blur"
        >
          <ArrowLeft size={20} />
        </motion.button>

        {/* Favorite */}

        <motion.button
          whileTap={{
            scale: 1.2,
            rotate: -15,
          }}
          onClick={async () => {
            try {

              await toggleFavoriteApi(echo.id);

              await refreshEchoes();

            } catch (error) {

              console.error(error);

              alert("Failed to update favorite.");

            }
          }}
          className="absolute right-5 top-5 rounded-full bg-white/70 backdrop-blur-xl border border-white/20 text-white p-3 backdrop-blur"
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
        </motion.button>

        {/* Counters */}

        <div className="absolute bottom-5 left-5 flex gap-3">

          <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-xl">

            <Images size={16} />

            {imageCount}

          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-xl">

            <Video size={16} />

            {videoCount}

          </div>

        </div>

      </section>

      {/* Floating Info Card */}

      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="-mt-2 relative z-20 mx-5 rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      >

        {/* Title */}

        <h1 className="text-4xl font-bold text-gray-900">

          {echo.title}

        </h1>

        {/* Date & Location */}

        <div className="mt-6 flex flex-wrap gap-5 text-gray-500">

          <div className="flex items-center gap-2">

            <CalendarDays size={18} />

            <span>{echo.date}</span>

          </div>

          <div className="flex items-center gap-2">

            <MapPin size={18} />

            <span>

              {echo.location || "Unknown"}

            </span>

          </div>

        </div>

        {/* Mood */}

        <div className="mt-6">

          <span className="rounded-full bg-violet-100 px-5 py-2 text-base font-medium text-violet-700">

            {echo.mood}

          </span>

        </div>

        {/* ---------- MEDIA ---------- */}

        <div className="mt-10">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-2xl font-bold">

              Media

            </h2>

            <button
              onClick={() => {

                setShowPlayer(true);


              }}
              className="flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-violet-700 font-medium"            >

              <Play
                size={16}
                fill="currentColor"
              />

              View Story

            </button>

          </div>

          {/* Gallery */}

          <div className="grid grid-cols-3 gap-3">

            {echo.media.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: .95 }}
                  onClick={() => {
                    setSelectedMediaIndex(index);
                    setShowPlayer(true);
                  }}
                className="h-full cursor-pointer"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      className="h-full w-full object-cover"
                    />

                  ) : (

                    <video
                      src={item.url}
                      muted
                      className="h-full w-full object-cover"
                    />

                  )}

                </motion.div>

                {/* Delete */}

                <button

                  onClick={async (e) => {

                    e.stopPropagation();
                    if (!confirm("Delete this media?")) {
                      return;
                    }

                    try {
                      await deleteMediaApi(
                        echo.id,
                        item.publicId!
                      );
                      await refreshEchoes();
                    } catch (error) {
                      console.error(error);

                      alert("Failed to delete media.");

                    }

                  }}


                  className="absolute right-2 top-2 z-30 rounded-full bg-red-500 p-1 text-white"
                >
                  <Trash2 size={14} />
                </button>

                {/* Cover */}

                {echo.coverMediaId !== item.publicId && (

                  <button
                    onClick={async (e) => {
                      e.stopPropagation();

                      console.log("⭐ STAR CLICKED");
                      console.log("Echo ID:", echo.id);
                      console.log("Item:", item);
                      console.log("PublicId:", item.publicId);
                      try {
                        await setCoverMediaApi(
                          echo.id,
                          item.publicId!
                        );

                        console.log("PATCH SUCCESS");

                        await refreshEchoes();

                      } catch (err) {

                        console.log("PATCH FAILED");

                        console.error(err);

                      }
                    }}

                    className="absolute bottom-2 right-2 z-30 rounded-full bg-white/80 p-1 backdrop-blur"
                  >
                    <Star size={14} />
                  </button>

                )}

                {echo.coverMediaId === item.publicId && (

                  <div className="absolute bottom-2 right-2 rounded-full bg-yellow-400 p-1">

                    <Star
                      size={14}
                      fill="white"
                    />

                  </div>

                )}

              </motion.div>

            ))}

          </div>

        </div>

        {/* ---------------- Journal ---------------- */}

        <div className="mt-10">

          <h2 className="mb-4 text-2xl font-bold">
            Journal
          </h2>

          <div className="rounded-3xl bg-white leading-8 p-6 shadow-md ring-1 ring-gray-100">

            <p className="whitespace-pre-wrap leading-8 text-gray-600">

              {echo.description || "No journal written yet."}

            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* ---------------- Actions ---------------- */}

        <div className="mb-10 flex gap-3 ">

          {/* Edit */}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onEdit(echo.id)}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-violet-600 py-4 text-base font-semibold text-white shadow-lg"

          >
            <Pencil size={20} />
            Edit
          </motion.button>

          {/* Add Media */}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddMedia(true)}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-indigo-500 py-4 text-base font-semibold text-white shadow-lg"
          >
            <ImagePlus size={20} />
            Add
          </motion.button>

          {/* Delete */}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={async () => {

              const confirmDelete = window.confirm(
                "Delete this memory permanently?"
              );

              if (!confirmDelete) return;

              try {

                await deleteEchoApi(echo.id);

                await refreshEchoes();

                onBack();

              } catch (error) {

                console.error(error);

                alert("Failed to delete Echo.");

              }

            }}

            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-red-500 py-4 text-base font-semibold text-white shadow-lg"
          >
            <Trash2 size={20} />
            Delete
          </motion.button>

        </div>

      </motion.section>

      {/* ---------------- Add Media Modal ---------------- */}

      <AddMediaModal
        open={showAddMedia}
        onClose={() => setShowAddMedia(false)}
        onSave={async (media) => {

          if (media.length === 0) return;

          try {

            const uploadedMedia = await Promise.all(

              media.map(async (item) => {

                if (!item.file) {
                  return item;
                }
                const uploaded = await uploadMedia(item.file);

                return {
                  url: uploaded.url,
                  publicId: uploaded.publicId,
                  type: uploaded.type,
                };
              })
            );

            console.log("UPLOADED MEDIA");
            console.log(uploadedMedia);

            await addMediaToEchoApi(
              echo.id,
              uploadedMedia
            );

            await refreshEchoes();
            setShowAddMedia(false);

          } catch (error: any) {
            console.log("ADD MEDIA ERROR");
            console.log(error);

            console.log(error.response);

            console.log(error.response?.data);

            alert("Failed to add media.");
          }

        }}
      />

    </main>
  );
}