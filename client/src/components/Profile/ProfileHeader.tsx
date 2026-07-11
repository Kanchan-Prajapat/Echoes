import { Camera } from "lucide-react";

import { Profile } from "@/types/profile.types";

interface Props {

  profile: Profile;

  onChangePhoto?: () => void;

}

export default function ProfileHeader({

  profile,

  onChangePhoto,

}: Props) {

  return (

    <section
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-sm
      "
    >

      <div className="flex flex-col items-center">

        {/* Avatar */}

        <div className="relative">

          <img

            src={
              profile.avatar ||

              `https://ui-avatars.com/api/?background=7C3AED&color=fff&name=${profile.username}`
            }

            alt={profile.username}

            className="
              h-32
              w-32
              rounded-full
              border-4
              border-violet-500
              object-cover
            "

          />

          <button

            onClick={onChangePhoto}

            className="
              absolute
              bottom-1
              right-1
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-violet-600
              text-white
              shadow-lg
              transition
              hover:bg-violet-700
            "

          >

            <Camera size={18} />

          </button>

        </div>

        {/* Greeting */}

        <p
          className="
            mt-6
            text-sm
            font-medium
            text-violet-500
          "
        >

          Good to see you 👋

        </p>

        {/* Name */}

        <h1
          className="
            mt-2
            text-3xl
            font-bold
            text-gray-900
          "
        >

          {profile.username}

        </h1>

        {/* Email */}

        <p
          className="
            mt-2
            text-gray-500
          "
        >

          {profile.email}

        </p>

        {/* Bio */}

        {profile.bio && (

          <p
            className="
              mt-5
              max-w-lg
              text-center
              leading-7
              text-gray-600
            "
          >

            {profile.bio}

          </p>

        )}

      </div>

    </section>

  );

}