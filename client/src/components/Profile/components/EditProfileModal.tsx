import { Camera, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { format } from "date-fns";
import useAvatarUpload from "@/hooks/useAvatarUpload";
import { Profile } from "@/types/profile.types";
import { validateProfile,} from "@/utils/profileValidation";
interface Props {
  open: boolean;

  profile: Profile;
  username: string;
  bio: string;
  avatar: string;

  loading: boolean;

  onClose: () => void;
  onSave: () => void;

  onUsernameChange: (value: string) => void;
  onBioChange: (value: string) => void;
  onAvatarChange: (value: string) => void;

  dateOfBirth: string;
gender: string;
city: string;

onDateOfBirthClick: () => void;
onGenderClick: () => void;
onCityChange: (value: string) => void;
}

export default function EditProfileModal({
  open,
  profile,
  username,
  bio,
  avatar,
  loading,
  onClose,
  onSave,
  onUsernameChange,
  onBioChange,
  onAvatarChange,
  dateOfBirth,
gender,
city,

onDateOfBirthClick,
onGenderClick,
onCityChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { upload, uploading } = useAvatarUpload();

 const hasChanges =
  username !== profile.username ||
  bio !== (profile.bio ?? "") ||
  avatar !== (profile.avatar ?? "") ||
  dateOfBirth !== (profile.dateOfBirth ?? "") ||
  gender !== (profile.gender ?? "") ||
  city !== (profile.city ?? "");

const {
  errors,
  isValid,
} = validateProfile({
  username,
  bio,
  dateOfBirth,
  city,
});

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "Escape" &&
        !loading &&
        !uploading
      ) {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, loading, uploading, onClose]);

  async function handleAvatarChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const url = await upload(file);

      onAvatarChange(url);
    } catch (error) {
      console.error(error);
      alert("Avatar upload failed.");
    }
  }

  if (!open) return null;

  return (
  <div
  className="
    fixed inset-0 z-50
    flex justify-center
    bg-black/40
    backdrop-blur-sm
    overflow-y-auto
    py-6
  "
>
     <div
  className="
    my-auto
    w-[92%]
    max-w-md
    max-h-[calc(100vh-110px)]
    overflow-y-auto
    rounded-3xl
    bg-white
    p-6
    shadow-2xl
  "
>
        {/* Header */}

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Edit Profile
          </h2>

          <button
        disabled={loading || uploading}
            onClick={onClose}
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              text-gray-500
              transition
              hover:bg-gray-100
              hover:text-black
              disabled:opacity-50
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Avatar */}

        <div className="mb-8 flex justify-center rounded-3xl border border-gray-100 bg-white py-6">
          <div className="relative">
            <img
              src={
                avatar ||
                profile.avatar ||
                `https://ui-avatars.com/api/?background=7C3AED&color=fff&name=${username}`
              }
              onError={(e) => {
                e.currentTarget.src =
                  `https://ui-avatars.com/api/?background=7C3AED&color=fff&name=${username}`;
              }}
              className="
                h-32 w-32
                rounded-full
                border-4 border-violet-100
                object-cover
                shadow-xl
              "
            />

            {uploading && (
              <div
                className="
                  absolute inset-0
                  flex flex-col
                  items-center justify-center
                  rounded-full
                  bg-black/40
                  backdrop-blur-sm
                "
              >
                <div
                  className="
                    h-8 w-8
                    animate-spin
                    rounded-full
                    border-4
                    border-white/30
                    border-t-white
                  "
                />

                <p className="mt-2 text-xs text-white">
                  Uploading...
                </p>
              </div>
            )}

            <button
              type="button"
              disabled={uploading}
              onClick={() =>
                inputRef.current?.click()
              }
              className="
                absolute bottom-1 right-1
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-violet-600
                text-white
                shadow-lg
                transition
                hover:scale-110
                hover:bg-violet-700
                disabled:opacity-60
              "
            >
              <Camera size={16} />
            </button>

            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleAvatarChange}
            />
          </div>
        </div>

        {/* Username */}

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Username
        </label>

       <input
  value={username}
  maxLength={25}
  onChange={(e) =>
    onUsernameChange(e.target.value)
  }
  placeholder="Username"
  className={`
    mb-2
    w-full
    rounded-xl
    border
    px-4
    py-3
    text-sm
    outline-none
    transition

    ${
      errors.username
        ? "border-red-500 bg-red-50"
        : "border-gray-200 bg-gray-50 focus:border-violet-500 focus:bg-white"
    }
  `}
/>

{errors.username && (
  <p className="mb-4 text-sm text-red-500">
    {errors.username}
  </p>
)}

        {/* Bio */}

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Bio
        </label>

        <textarea
          value={bio}
          maxLength={250}
          rows={4}
          placeholder="Write something..."
          onChange={(e) =>
            onBioChange(e.target.value)
          }
          className="
            w-full
            resize-none
            rounded-xl
            border border-gray-200
            bg-gray-50
            px-4 py-3
            text-sm
            outline-none
            transition
            focus:border-violet-500
            focus:bg-white
          "
        />

        <div className={`
mt-2
text-right
text-xs

${
    bio.length >= 250
        ? "text-red-500"
        : bio.length >= 220
        ? "text-orange-500"
        : "text-gray-400"
}
`}>
          {bio.length}/250
        </div>

        {errors.bio && (
  <p className="mt-2 text-sm text-red-500">
    {errors.bio}
  </p>
)}

        <div className="mt-8 mb-4">
  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
    Personal Information
  </h3>
</div>

<button
  type="button"
  onClick={onDateOfBirthClick}
  className="
    mb-3
    flex
    w-full
    items-center
    justify-between
    rounded-2xl
    border
    border-gray-200
    bg-gray-50
    px-4
    py-3
    transition
    hover:border-violet-300
    hover:bg-white
  "
>
  <div>
    <p className="text-xs text-gray-500">
      Date of Birth
    </p>

   <p className="font-medium">
  {dateOfBirth
    ? format(new Date(dateOfBirth), "dd MMM yyyy")
    : "Select date of birth"}
</p>
  </div>

  <span className="text-xl text-gray-400">
    →
  </span>
</button>

{errors.dateOfBirth && (
  <p className="mb-3 text-sm text-red-500">
    {errors.dateOfBirth}
  </p>
)}

<button
  type="button"
  onClick={onGenderClick}
  className="
    mb-3
    flex
    w-full
    items-center
    justify-between
    rounded-2xl
    border
    border-gray-200
    bg-gray-50
    px-4
    py-3
    transition
    hover:border-violet-300
    hover:bg-white
  "
>
  <div>
    <p className="text-xs text-gray-500">
      Gender
    </p>

    <p className="font-medium">
      {gender || "Select gender"}
    </p>
  </div>

  <span className="text-xl text-gray-400">
    →
  </span>
</button>

<label className="mb-2 block text-sm font-medium text-gray-700">
  City
</label>

<input
  value={city}
  placeholder="Jaipur"
  onChange={(e) =>
    onCityChange(e.target.value)
  }
className={`
    rounded-xl
    border
    w-full
     items-center
    justify-between
    rounded-2xl
    px-4
    py-3
    text-sm
    outline-none
    transition

    ${
      errors.city
        ? "border-red-500 bg-red-50"
        : "border-gray-200 bg-gray-50 focus:border-violet-500 focus:bg-white"
    }
`}
/>


        {/* Save */}

        <button
          type="button"
          onClick={onSave}
         disabled={
  loading ||
  uploading ||
  !hasChanges ||
  !isValid
}
          className="
            mt-5 w-full
            mb-10
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            py-3.5
            font-semibold
            text-white
            shadow-lg
            transition
            hover:scale-[1.02]
            active:scale-95
            disabled:opacity-60
          "
        >
          {loading
            ? "Saving Profile..."
            : "Save Changes"}
        </button>
      </div>
    </div>
  );
}