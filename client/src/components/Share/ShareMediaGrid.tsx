import { Play } from "lucide-react";
import { Media } from "@/types/media";

interface Props {
  media: Media[];
  coverMediaId?: string;
}

export default function ShareMediaGrid({
  media,
  coverMediaId,
}: Props) {

  if (media.length === 0) return null;

 const cover =
  media.find(
    (m) => m.publicId === coverMediaId
  ) ?? media[0];

const others = media.filter(
  (m) => m.publicId !== cover.publicId
);

  function Image({
    item,
    className = "",
  }: {
    item?: Media;
    className?: string;
  }) {
if (!item) return null;
    return (
      <div
        className={`relative overflow-hidden ${className}`}
      >

        {item.type === "image" ? (

          <img
            src={item.url}
            className="h-full w-full object-cover"
          />

        ) : (

          <>
            <video
              src={item.url}
              className="h-full w-full object-cover"
            />

            <div
              className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-black/30
              "
            >

              <Play
                fill="white"
                size={34}
                className="text-white"
              />

            </div>

          </>

        )}

      </div>
    );

  }

  /* ---------------- ONE ---------------- */

  if (media.length === 1) {

    return (

      <div className="h-72">

        <Image
          item={cover}
          className="h-full rounded-t-[40px]"
        />

      </div>

    );

  }

  /* ---------------- TWO ---------------- */

  if (media.length === 2) {

    return (

      <div className="grid h-72 grid-cols-2 gap-2">

        <Image
          item={cover}
          className="rounded-tl-[40px]"
        />

        <Image
          item={others[0]}
          className="rounded-tr-[40px]"
        />

      </div>

    );

  }

  /* ---------------- THREE ---------------- */

  if (media.length === 3) {

    return (

   <div className="overflow-hidden rounded-t-[40px]">

<div className="h-56">
<Image item={cover} className="h-full w-full"/>
</div>

<div className="mt-2 grid grid-cols-2 gap-2">

<Image item={others[0]} className="aspect-square rounded-bl-[20px]"/>

<Image item={others[1]} className="aspect-square rounded-br-[20px]"/>

</div>

</div>

    );

  }

  /* ---------------- FOUR+ ---------------- */

 /* ---------------- FOUR+ ---------------- */

return (

<div className="overflow-hidden rounded-t-[40px]">

  {/* Hero */}

  <div className="h-56">

    <Image
      item={cover}
      className="h-full w-full"
    />

  </div>

  {/* Gallery */}

  <div className="mt-2 grid grid-cols-2 gap-2">

    <Image
      item={others[0]}
      className="aspect-square rounded-bl-[20px]"
    />

    <Image
      item={others[1]}
      className="aspect-square"
    />

    <Image
      item={others[2]}
      className="aspect-square"
    />

    <div
      className="
      relative
      aspect-square
      rounded-br-[20px]
      overflow-hidden
      bg-gradient-to-br
      from-violet-600
      to-indigo-700
      flex
      flex-col
      items-center
      justify-center
      text-white
      "
    >

      {others[3] ? (

        <Image
          item={others[3]}
          className="absolute inset-0"
        />

      ) : null}

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative text-center">

        <p className="text-4xl font-black">

          +{media.length - 4}

        </p>

        <p className="mt-1 text-sm font-medium">

          More Memories

        </p>

      </div>

    </div>

  </div>

</div>

);

}