import { Media } from "@/types/media";

import UploadPlaceholder from "./UploadPlaceholder";
import UploadedMediaPreview from "./UploadedMediaPreview";

interface Props {
    media: Media[];

    coverMediaId?: string;

   fileInputRef: React.RefObject<HTMLInputElement | null>; 

    onBrowse: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;

    onRemove?: (id: string) => void;

    onSetCover?: (id: string) => void;
}


export default function MediaUploader({
  media,
  coverMediaId,
  fileInputRef,
  onBrowse,
  onRemove,
  onSetCover,
}: Props){

  return (

    <section>

      {/* Hidden File Input */}

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*"
        hidden
        onChange={onBrowse}
      />

      {/* Empty State */}

      {media.length === 0 ? (

        <UploadPlaceholder
          onClick={() =>
            fileInputRef.current?.click()
          }
        />

      ) : (

     <UploadedMediaPreview
    media={media}
    coverMediaId={coverMediaId}
    onAddMore={() =>
        fileInputRef.current?.click()
    }
    onRemove={onRemove}
    onSetCover={onSetCover}
/>

      )}

    </section>

  );

}