import { useEffect, useMemo, useState } from "react";

import { Media } from "@/types/media";

import { useEchoStore } from "@/store/echoStore";
import EchoPlayer from "./EchoPlayer/EchoPlayer";
import AddMediaModal from "./Modals/AddMediaModal";
import ShareModal from "./Share/ShareModel";
import ShareCard from "@/components/Share/ShareCard";
import useToast from "@/hooks/useToast";
import useConfirm from "@/hooks/useConfirm";
import PDFCover from "@/components/Share/PDF/PDFCover";
import PDFGallery from "@/components/Share/PDF/PDFGallery";
import PDFDetails from "@/components/Share/PDF/PDFDetails";
import PDFFooter from "@/components/Share/PDF/PDFFooter";
import {
  createShareLink,
} from "@/services/share.service";
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
import useShareMemory from "@/hooks/useShareMemory";
import { refreshEchoes } from "@/services/echoSync";

import AppContainer from "@/styles/AppContainer";
import useExportPdf from "@/hooks/useExportPDF";

interface Props {

  echoId?: string;

  echo?: Echo;

  publicMode?: boolean;

  onBack: () => void;

  onEdit: (id: string) => void;

}

export default function EchoDetailView({

  echoId,

  echo: propEcho,

  publicMode = false,

  onBack,

  onEdit,

}: Props) {

  /* ---------------- Store ---------------- */

  const storeEcho = useEchoStore((state) =>
    state.echoes.find(
      (e) => e.id === echoId
    )
  );

  const echo = propEcho ?? storeEcho;

  const { saveAsImage, } = useShareMemory();
  /* ---------------- State ---------------- */

  const [showPlayer, setShowPlayer] =
    useState(false);

  const [showAddMedia, setShowAddMedia] =
    useState(false);

  const [showShare, setShowShare] =
    useState(false);

  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const toast = useToast();


  const { exportPdf } = useExportPdf();

  const { confirm } = useConfirm();
  useEffect(() => {

    if (!echo && !publicMode) {

      onBack();

    }

  }, [echo, onBack, publicMode]);

  if (!echo) {

    return null;

  }

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


  const handleFavorite = async () => {

    try {

      await toggleFavoriteApi(echo.id);

      await refreshEchoes();

      toast.success(

        echo.favorite

          ? "Removed from favorites."

          : "Added to favorites."

      );

    }

    catch (error) {

      console.error(error);

      toast.error(

        "Failed to update favorite."

      );

    }

  };


  const handleDeleteEcho = () => {

    confirm({

      title: "Delete Memory",

      message:
        "This memory will be permanently deleted. This action cannot be undone.",

      confirmText: "Delete",

      cancelText: "Cancel",

      danger: true,

      onConfirm: async () => {

        try {

          await deleteEchoApi(echo.id);

          await refreshEchoes();

          toast.success(
            "Memory deleted successfully."
          );

          onBack();

        }

        catch (error) {

          console.error(error);

          toast.error(
            "Failed to delete memory."
          );

        }

      },

    });

  };


  const handleDeleteMedia = (

    media: Media

  ) => {

    confirm({

      title: "Delete Media",

      message:
        "This photo or video will be permanently removed from this memory.",

      confirmText: "Delete",

      cancelText: "Cancel",

      danger: true,

      onConfirm: async () => {

        try {

          await deleteMediaApi(

            echo.id,

            media.publicId!

          );

          await refreshEchoes();

          toast.success(

            "Media deleted successfully."

          );

        }

        catch (error) {

          console.error(error);

          toast.error(

            "Failed to delete media."

          );

        }

      },

    });

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

      toast.success(

        "Cover photo updated."

      );

    }

    catch (error) {

      console.error(error);

      toast.error(

        "Failed to update cover."

      );

    }

  };

  const handleOpenMedia = (
    index: number
  ) => {
    setSelectedMediaIndex(index);
    setShowPlayer(true);
  };


  const handleWhatsappShare = async () => {
    try {
      const share = await createShareLink(echo.id);

      console.log("========== SHARE ==========");
      console.log(share);
      console.table(share);

      const text = `✨ Check out one of my memories on Echoes!

${share.url}`;

      console.log(text);

      window.open(
        `https://wa.me/?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddMedia = async (

    media: Media[]

  ) => {

    try {

      const uploadedMedia =

        await Promise.all(

          media.map(async (item) => {

            if (!item.file) {

              return item;

            }

            const uploaded =

              await uploadMedia(

                item.file

              );

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

      toast.success(

        "Media added successfully."

      );

    }

    catch (error) {

      console.error(error);

      toast.error(

        "Failed to add media."

      );

    }

  };


  if (showPlayer) {
    return (
     <EchoPlayer
  echoes={[echo]}
  currentEchoIndex={0}
  initialMediaIndex={selectedMediaIndex}
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
        publicMode={publicMode}
        onBack={onBack}
        onOpenPlayer={() =>
          setShowPlayer(true)
        }
        onFavorite={handleFavorite}
      />

      {!publicMode && (

        <EchoActions
          favorite={echo.favorite}
          onFavorite={handleFavorite}
          onEdit={() => onEdit(echo.id)}
          onAddMedia={() => setShowAddMedia(true)}
          onShare={() => setShowShare(true)}
          onDelete={handleDeleteEcho}
        />

      )}

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

      {!publicMode && (
        <AddMediaModal
          open={showAddMedia}
          onClose={() =>
            setShowAddMedia(false)
          }
          onSave={handleAddMedia}
        />
      )}


      <div
        className="
fixed
top-0
left-0
opacity-0
pointer-events-none
-z-50
"
      >
        <ShareCard
          echo={echo}
        />
      </div>


      {!publicMode && (
        <ShareModal

          open={showShare}

          onClose={() =>
            setShowShare(false)
          }

          onSaveImage={() => {

            saveAsImage(echo.title);
          }}

          onExportPdf={() =>
            exportPdf(echo.title)
          }
          onWhatsapp={handleWhatsappShare}

          onInstagram={() => {
            console.log("Instagram");
          }}
        />

      )}


      {!publicMode && (
        <div
          className="fixed left-[-9999px] top-0"
        >

          <div id="pdf-cover">

            <PDFCover
              echo={echo}
            />

          </div>

          <div id="pdf-gallery">

            <PDFGallery
              media={echo.media}
            />

          </div>

          <div id="pdf-details">

            <PDFDetails
              echo={echo}
            />

            <PDFFooter />

          </div>

        </div>
      )}

    </AppContainer>
  );

}