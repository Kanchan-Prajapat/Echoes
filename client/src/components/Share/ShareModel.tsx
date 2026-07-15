import {
  Download,
  FileText,
  MessageCircle,
  X,
} from "lucide-react";

import ShareOption from "./ShareOption";

interface Props {

  open: boolean;

  onClose: () => void;

  onSaveImage: () => void;

  onExportPdf: () => void;

  onWhatsapp: () => void;

  onInstagram: () => void;

}

export default function ShareModal({

  open,

  onClose,

  onSaveImage,

  onExportPdf,

  onWhatsapp,


}: Props) {

  if (!open) return null;

  return (

    <div

      onClick={onClose}

      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-end
      bg-black/40
      backdrop-blur-sm
      animate-in
      fade-in
      "

    >

      <div

        onClick={(e) =>
          e.stopPropagation()
        }

        className="
        w-full
        rounded-t-[32px]
        bg-white
        p-6
        shadow-2xl
        animate-in
        slide-in-from-bottom
        duration-300
        "

      >

        {/* Drag Handle */}

        <div
          className="
          mx-auto
          mb-5
          h-1.5
          w-14
          rounded-full
          bg-gray-300
          "
        />

        {/* Header */}

        <div
          className="
          mb-6
          flex
          items-center
          justify-between
          "
        >

          <div>

            <h2
              className="
              text-2xl
              font-bold
              "
            >

              Share Memory

            </h2>

            <p
              className="
              mt-1
              text-sm
              text-gray-500
              "
            >

              Share or export this memory beautifully.

            </p>

          </div>

          <button

            onClick={onClose}

            className="
            rounded-full
            p-2
            text-gray-400
            transition
            hover:bg-gray-100
            hover:text-gray-700
            "

          >

            <X size={20} />

          </button>

        </div>

        {/* Options */}

        <div className="space-y-4">

          <ShareOption

            icon={<Download size={24} />}

            title="Save as Image"

            subtitle="Generate a beautiful memory card"

            onClick={onSaveImage}

          />

          <ShareOption

            icon={<FileText size={24} />}

            title="Export PDF"

            subtitle="Download this memory as PDF"

            onClick={onExportPdf}

          />

          <ShareOption

            icon={<MessageCircle size={24} />}

            title="WhatsApp"

            subtitle="Share with friends"

            onClick={onWhatsapp}

          />

      

        </div>

      </div>

    </div>

  );

}