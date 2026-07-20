import { Profile } from "@/types/profile.types";

interface Props {
  profile: Profile;
  onClick: () => void;
}

export default function AccountCard({
  profile,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      mb-8
      w-full
      rounded-3xl
      border
      border-violet-100
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      <div className="flex flex-col items-center">

        <img
          src={
            profile.avatar ||
            `https://ui-avatars.com/api/?background=7C3AED&color=fff&name=${profile.username}`
          }
          className="
          h-20
          w-20
          rounded-full
          object-cover
          border-4
          border-violet-100
          shadow
          "
        />

        <h3 className="mt-4 text-xl font-bold">
          {profile.username}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {profile.email}
        </p>


      </div>
    </button>
  );
}