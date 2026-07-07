import { useState } from "react";

import MediaCarousel from "@/components/Shared/MediaCarousel";
import MediaThumbnailStrip from "./MediaThumbnailStrip";
import AddMoreButton from "./AddMoreButton";

import {Media} from "@/types/media"
interface Props {
    media: Media[];

    coverMediaId?: string;

    onAddMore: () => void;

    onRemove?: (id: string) => void;

    onSetCover?: (id: string) => void;
}

export default function UploadedMediaPreview({
  media,
  coverMediaId,
  onAddMore,
  onRemove,
  onSetCover,
}: Props)  {
    const [currentIndex, setCurrentIndex] =
    useState(0);

  return (

    <>

<MediaCarousel
    media={media}
    currentIndex={currentIndex}
    onChange={setCurrentIndex}
/>

<MediaThumbnailStrip
    media={media}
    currentIndex={currentIndex}
    coverMediaId={coverMediaId}
    onSelect={setCurrentIndex}
    onSetCover={(id) => onSetCover?.(id)}
/>

<AddMoreButton
    onClick={onAddMore}
/>
    

    </>

  );

}