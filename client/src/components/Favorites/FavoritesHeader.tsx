import { ArrowLeft } from "lucide-react";

interface Props {
  onBack: () => void;
  count: number;
}

export default function FavoritesHeader({
  onBack,
  count,
}: Props) {

  return (
    <div className="sticky top-0 z-20 bg-white px-5 py-5">

      <button onClick={onBack}>
        <ArrowLeft />
      </button>

      <h1 className="mt-4 text-3xl font-bold">
        Favorite Echoes
      </h1>

      <p className="text-gray-500 mt-1">
        {count} favorites saved
      </p>

    </div>
  );
}