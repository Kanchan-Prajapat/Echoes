import {
  CalendarDays,
  MapPin,
  UserRound,
} from "lucide-react";

import { Profile } from "@/types/profile.types";

interface Props {

  profile: Profile;

  onChangePhoto?: () => void;

}

export default function ProfileHeader({

  profile,

  onChangePhoto,

}: Props) {

const formattedDate = profile.dateOfBirth
  ? new Date(profile.dateOfBirth).toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    )
  : null;

const genderLabel = profile.gender
  ? {
      male: "Male",
      female: "Female",
      other: "Other",
      prefer_not_to_say: "Prefer not to say",
    }[profile.gender]
  : null;

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

        {(formattedDate || genderLabel || profile.city) && (
  <div
    className="
      mt-6
      flex
      flex-wrap
      justify-center
      gap-3
    "
  >
    {formattedDate && (
      <div
        className="
          flex
          items-center
          gap-2
          rounded-full
          bg-violet-50
          px-4
          py-2
          text-sm
          text-violet-700
        "
      >
        <CalendarDays size={16} />
        <span>{formattedDate}</span>
      </div>
    )}

    {genderLabel && (
      <div
        className="
          flex
          items-center
          gap-2
          rounded-full
          bg-violet-50
          px-4
          py-2
          text-sm
          text-violet-700
        "
      >
        <UserRound size={16} />
        <span>{genderLabel}</span>
      </div>
    )}

    {profile.city && (
      <div
        className="
          flex
          items-center
          gap-2
          rounded-full
          bg-violet-50
          px-4
          py-2
          text-sm
          text-violet-700
        "
      >
        <MapPin size={16} />
        <span>{profile.city}</span>
      </div>
    )}
  </div>
)}

      </div>

    </section>

  );

}