import { Star } from "lucide-react";

interface Props {
  isCover: boolean;
}

export default function CoverBadge({
  isCover,
}: Props) {
  if (!isCover) return null;

  return (
    <div
      className="
        absolute
        left-3
        top-3
        z-20
        flex
        items-center
        gap-2
        rounded-full
        bg-yellow-400
        px-3
        py-1
        text-xs
        font-semibold
        text-white
        shadow-lg
      "
    >
      <Star
        size={14}
        fill="white"
      />

      Cover
    </div>
  );
}