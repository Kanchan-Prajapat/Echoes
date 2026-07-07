import { useEffect, useMemo, useState } from "react";

import { Media } from "@/types/media";

import { useEchoStore } from "@/store/echoStore";
import EchoPlayer from "./EchoPlayer/EchoPlayer";
import AddMediaModal from "./Modals/AddMediaModal";

import {
  EchoHero,
  EchoGallery,
  EchoJournal,
  EchoActions,
  EchoStats,
} from "./EchoDetail";

import {
  uploadMedia,
  addMediaToEcho as addMediaApi,
  deleteEcho as deleteEchoApi,
  deleteMediaFromEcho as deleteMediaApi,
  setCoverMedia as setCoverMediaApi,
  toggleFavorite as toggleFavoriteApi,
} from "@/services/echo.service";

import { refreshEchoes } from "@/services/echoSync";

import AppContainer from "@/styles/AppContainer";

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
    state.echoes.find(
      (e) => e.id === echoId
    )
  );
  /* ---------------- State ---------------- */

  const [showPlayer, setShowPlayer] =
    useState(false);

  const [showAddMedia, setShowAddMedia] =
    useState(false);

  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);


  useEffect(() => {
    if (!echo) {
      onBack();
    }
  }, [echo, onBack]);

  if (!echo) {
    return null;
  }


  /* ---------------- Derived Data ---------------- */

  const imageCount = useMemo(() => {
    return echo.media.filter(
      (m) => m.type === "image"
    ).length;
  }, [echo.media]);

  const videoCount = useMemo(() => {
    return echo.media.filter(
      (m) => m.type === "video"
    ).length;
  }, [echo.media]);


  const handleFavorite = async () => {
    try {
      await toggleFavoriteApi(echo.id);
      await refreshEchoes();
      setShowAddMedia(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update favorite.");
    }
  };


  const handleDeleteEcho = async () => {
    const confirmed = confirm(
      "Are you sure you want to delete this Echo?"
    );

    if (!confirmed) return;
    try {
      await deleteEchoApi(echo.id);
      await refreshEchoes();
      onBack();
    } catch (error) {
      console.error(error);
      alert("Failed to delete Echo.");
    }
  };


  const handleDeleteMedia = async (
    media: Media
  ) => {
    const confirmed = confirm(
      "Delete this media?"
    );

    if (!confirmed) return;

    try {
      await deleteMediaApi(
        echo.id,
        media.publicId!
      );

      await refreshEchoes();
    } catch (error) {
      console.error(error);
      alert("Failed to delete media.");
    }
  };



  const handleSetCover = async (
    media: Media
  ) => {
    try {
      await setCoverMediaApi(
        echo.id,
        media.publicId!
      );
      await refreshEchoes();
    } catch (error) {
      console.error(error);
      alert("Failed to update cover.");
    }
  };


  const handleOpenMedia = (
    index: number
  ) => {
    setSelectedMediaIndex(index);
    setShowPlayer(true);
  };


  const handleAddMedia = async (
    media: Media[]
  ) => {
    try {
      const uploadedMedia = await Promise.all(
        media.map(async (item) => {
          if (!item.file) {
            return item;
          }

          const uploaded =
            await uploadMedia(item.file);
          return {
            ...item,
            url: uploaded.url,
            publicId: uploaded.publicId,
            type: uploaded.type,
            file: undefined,
          };
        })
      );

      await addMediaApi(
        echo.id,
        uploadedMedia.map(
          ({
            id,
            thumbnail,
            duration,
            file,
            ...rest
          }) => rest
        )
      );
      await refreshEchoes();
    } catch (error) {
      console.error(error);
      alert("Failed to add media.");
    }
  };



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
    <AppContainer className="space-y-8 py-6">

      <EchoHero
        echo={echo}
        selectedMediaIndex={selectedMediaIndex}
        setSelectedMediaIndex={setSelectedMediaIndex}
        imageCount={imageCount}
        videoCount={videoCount}
        onBack={onBack}
        onOpenPlayer={() =>
          setShowPlayer(true)
        }
        onFavorite={handleFavorite}
      />

      <EchoActions
        favorite={echo.favorite}
        onFavorite={handleFavorite}
        onEdit={() =>
          onEdit(echo.id)
        }
        onAddMedia={() =>
          setShowAddMedia(true)
        }
        onDelete={handleDeleteEcho}
      />

        <EchoGallery
        media={echo.media}
        coverMediaId={echo.coverMediaId}
        onOpen={handleOpenMedia}
        onDelete={handleDeleteMedia}
        onSetCover={handleSetCover}
      />

      <EchoJournal
        echo={echo}
      />

       <EchoStats
        echo={echo}
      />

      <AddMediaModal
        open={showAddMedia}
        onClose={() =>
          setShowAddMedia(false)
        }
        onSave={handleAddMedia}
      />

    </AppContainer>
  );

}