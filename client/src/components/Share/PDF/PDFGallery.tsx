import { Play } from "lucide-react";
import { Media } from "@/types/media";

interface Props {
  media: Media[];
}

export default function PDFGallery({
  media,
}: Props) {

  return (

    <section
      className="
      w-[794px]
      bg-white
      px-12
      py-10
      "
    >

      {/* Header */}

      <h1
        className="
        text-4xl
        font-black
        "
      >
        Memory Gallery
      </h1>

      <p
        className="
        mt-2
        text-lg
        text-gray-500
        "
      >
        Every photo and video from this memory.
      </p>

      {/* Grid */}

      <div
        className="
        mt-10
        grid
        grid-cols-3
        gap-6
        "
      >

        {media.map((item, index) => (

          <div
            key={index}
            className="
            relative
            aspect-square
            overflow-hidden
            rounded-[28px]
            bg-gray-100
            shadow-lg
            "
          >

            {item.type === "image" ? (

              <img
                src={item.url}
                className="
                h-full
                w-full
                object-cover
                "
              />

            ) : (

              <>
                <video
                  src={item.url}
                  className="
                  h-full
                  w-full
                  object-cover
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/35
                  "
                >

                  <div
                    className="
                    rounded-full
                    bg-white/90
                    p-5
                    "
                  >

                    <Play
                      size={34}
                      fill="black"
                    />

                  </div>

                </div>

              </>

            )}

          </div>

        ))}

      </div>

    </section>

  );

}