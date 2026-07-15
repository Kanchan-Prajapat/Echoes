import {Camera,  X } from "lucide-react";
import { useRef } from "react";
import useAvatarUpload from "@/hooks/useAvatarUpload";
import { Profile } from "@/types/profile.types";


interface Props {

  open: boolean;

  profile: Profile;

  username: string;

  bio: string;

  loading: boolean;

  onClose: () => void;

  onUsernameChange: (
    value: string
  ) => void;

  onBioChange: (
    value: string
  ) => void;

  onSave: () => void;

  avatar: string;

onAvatarChange: (
  value: string
) => void;

}

export default function EditProfileModal({

  open,

  profile,

  username,

  bio,

  loading,

  onClose,

  onUsernameChange,

  onBioChange,

  onSave,

  avatar,

onAvatarChange,

}: Props) {

  if (!open) {

    return null;

  }

  const inputRef =
  useRef<HTMLInputElement>(null);

const {
  upload,
  uploading,
} = useAvatarUpload();

async function handleAvatarChange(

  e: React.ChangeEvent<HTMLInputElement>

) {

  const file =
    e.target.files?.[0];

  if (!file) return;

 try {

  const url = await upload(file);

  onAvatarChange(url);

} catch (error) {

  console.error(error);

  alert("Avatar upload failed.");

}

}

const hasChanges =
  username !== profile.username ||
  bio !== (profile.bio ?? "") ||
  avatar !== (profile.avatar ?? "");

  return (

    <div
 className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/40
backdrop-blur-sm
pointer-events-auto
"
    >

      <div
        className="
        w-[92%]
        max-w-md
        rounded-3xl
        bg-white
        p-6
        shadow-2xl
      "
      >

        {/* Header */}

        <div
          className="
          mb-6
          flex
          items-center
          justify-between
        "
        >

          <h2
            className="
            text-2xl
            font-bold
          "
          >

            Edit Profile

          </h2>

      <button
  onClick={onClose}
  className="
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-full
    text-gray-500
    transition
    hover:bg-gray-100
    hover:text-black
  "
>
  <X size={20} />
</button>

        </div>

        {/* Avatar */}

<div className="mb-8 flex rounded-[28px] bg-white border border-gray-100 rounded-3xl justify-center">

  <div className="relative">

    <img
      src={
        avatar ||
        profile.avatar ||
        `https://ui-avatars.com/api/?background=7C3AED&color=fff&name=${username}`
      }
      className="
        h-32
        w-32
        rounded-full
        object-cover
        border-4
        border-violet-100
        shadow-xl
        transition-all
        duration-300
      "
    />

    {uploading && (
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          rounded-full
          bg-black/40
          backdrop-blur-[2px]
        "
      >
        <div
          className="
            h-8
            w-8
            animate-spin
            rounded-full
            border-4
            border-white/30
            border-t-white
          "
        />
      </div>
    )}

    <button
      type="button"
      disabled={uploading}
      onClick={() => inputRef.current?.click()}
      className="
        absolute
        bottom-1
        right-1
        z-20
        flex
        h-9
        w-9
        items-center
        justify-center
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
      style={{ display: "none" }}
      onChange={handleAvatarChange}
    />

  </div>

</div>
        {/* Username */}

       <p className="mb-2 text-sm font-medium text-gray-700">
Username
</p>
        <input

          value={username}

          onChange={(e) =>

            onUsernameChange(
              e.target.value
            )

          }

          placeholder="Username"

         className="
w-full
rounded-xl
border
border-gray-200
bg-gray-50
px-4
py-3
text-sm
mb-2
outline-none
transition
focus:border-violet-500
focus:bg-white
        "

        />

        {/* Bio */}
        <p className="mb-2 text-sm font-medium text-gray-700">
Bio
</p>

        <textarea

          value={bio}

          onChange={(e) =>

            onBioChange(
              e.target.value
            )

          }

          rows={4}

          placeholder="Write something..."

         className="
w-full
rounded-xl
border
border-gray-200
bg-gray-50
px-4
py-3
text-sm
mb-2
resize-none
outline-none
transition
focus:border-violet-500
focus:bg-white
"

        />

     <button
  type="button"
  onClick={onSave}
 disabled={
  loading ||
  uploading ||
  !hasChanges
}
  className="
    w-full
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
  {loading ? "Saving..." : "Save Changes"}
</button>

      </div>

    </div>

  );

}