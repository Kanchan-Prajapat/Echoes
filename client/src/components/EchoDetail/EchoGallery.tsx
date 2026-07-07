import { motion } from "framer-motion";
import {
  Images,
  Play,
  Star,
  Trash2,
} from "lucide-react";

import Card from "@/styles/Card";

import { Media } from "@/types/media";

interface Props {
  media: Media[];

  coverMediaId?: string;

  onOpen: (index: number) => void;

  onDelete: (media: Media) => void;

  onSetCover: (media: Media) => void;
}

export default function EchoGallery({
  media,
  coverMediaId,
  onOpen,
  onDelete,
  onSetCover,
}: Props) {

  if (media.length === 0) return null;

  const cover =
    media.find(
      (m) =>
        m.publicId === coverMediaId
    ) ?? media[0];

  const others =
    media.filter(
      (m) =>
        m.publicId !== cover.publicId
    );

  return (

    <section className="mt-8">

      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <div>

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-violet-600
            "
          >
            Gallery
          </p>

          <h2 className="mt-2 text-2xl font-black">

            {media.length} Memories

          </h2>

        </div>

        <div
          className="
            rounded-full
            bg-violet-100
            px-4
            py-2
            text-sm
            font-semibold
            text-violet-700
          "
        >

          <Images size={16} className="inline mr-2"/>

          {media.length}

        </div>

      </div>

      {/* Cover */}

      <motion.div

        whileHover={{
          scale:1.01,
        }}

        whileTap={{
          scale:.99,
        }}

      >

        <Card
          padding="none"
          clickable
          onClick={() =>
            onOpen(
              media.findIndex(
                m =>
                  m.publicId === cover.publicId
              )
            )
          }
          className="overflow-hidden"
        >

          <div className="relative">

            {cover.type==="image" ? (

              <img

                src={cover.url}

                className="
                  h-[320px]
                  w-full
                  object-cover
                "

              />

            ) : (

              <video

                src={cover.url}

                className="
                  h-[320px]
                  w-full
                  object-cover
                "

              />

            )}

            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold">

              ⭐ Cover

            </div>

          </div>

        </Card>

      </motion.div>

      {/* Gallery */}

      <div className="mt-5 grid grid-cols-2 gap-4">

        {others.map((item)=>{

          const index=
            media.findIndex(
              m=>m.publicId===item.publicId
            );

          return(

            <motion.div

              key={item.publicId}

              whileHover={{
                y:-4,
              }}

              whileTap={{
                scale:.97,
              }}

            >

              <Card
                padding="none"
                className="overflow-hidden"
              >

                <div
                  className="
                    relative
                    aspect-square
                  "
                >

                  {item.type==="image" ? (

                    <img
                      src={item.url}
                      onClick={()=>onOpen(index)}
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
                        onClick={()=>onOpen(index)}
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
                        "
                      >

                        <Play
                          size={36}
                          fill="white"
                          color="white"
                        />

                      </div>

                    </>

                  )}

                  {/* Actions */}

                  <div
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      gap-2
                    "
                  >

                    <button
                      onClick={()=>onSetCover(item)}
                      className="
                        rounded-full
                        bg-white/90
                        p-2
                      "
                    >

                      <Star size={14}/>

                    </button>

                    <button
                      onClick={()=>onDelete(item)}
                      className="
                        rounded-full
                        bg-red-500
                        p-2
                        text-white
                      "
                    >

                      <Trash2 size={14}/>

                    </button>

                  </div>

                </div>

              </Card>

            </motion.div>

          );

        })}

      </div>

    </section>

  );

}