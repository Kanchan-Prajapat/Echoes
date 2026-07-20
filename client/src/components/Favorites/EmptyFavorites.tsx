import { Heart } from "lucide-react";

export default function EmptyFavorites() {

  return (
    <div className="flex flex-col items-center justify-center py-28">

      <div className="rounded-full bg-pink-100 p-5">
        <Heart
          className="text-pink-500"
          size={42}
        />
      </div>

      <h2 className="mt-6 text-xl font-semibold">
        No Favorite Echoes
      </h2>

      <p className="mt-2 max-w-xs text-center text-gray-500">
        Tap the heart icon on any Echo to
        keep your most cherished memories
        here.
      </p>

    </div>
  );
}