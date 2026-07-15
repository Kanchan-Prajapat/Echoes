import useProfile from "@/hooks/useProfile";
import useProfileStats from "@/hooks/useProfileStats";
import { useState } from "react";

import EditProfileModal from "./components/EditProfileModal";

import useEditProfile from "@/hooks/useEditProfile";
import ProfileHeader from "./components/ProfileHeader";
import ProfileStats from "./components/ProfileStats";
import ProfileActions from "./components/ProfileActions";
import { useNavigationStore } from "@/store/navigationStore";
import { useAuthStore } from "@/auth/stores/authStore";
import useToast from "@/hooks/useToast";
import useConfirm from "@/hooks/useConfirm";
import ErrorState from "../Shared/ErrorState";
export default function ProfileView() {

 const {

  profile,

  loading,

  error,

  refreshProfile,

} = useProfile();

  const {

    totalEchoes,

    favoriteEchoes,

    totalPhotos,

    totalVideos,

  } = useProfileStats();

  
const [openEdit, setOpenEdit] =
  useState(false);

const [username, setUsername] =
  useState("");

const [bio, setBio] =
  useState("");

const [avatar, setAvatar] =
  useState("");

const {

  saveProfile,

  loading: saving,

} = useEditProfile();


const toast = useToast();
const {confirm} = useConfirm();

const navigate = useNavigationStore(
    state => state.navigate
);

async function handleSave() {

  try {

    await saveProfile({

      username,

      bio,

      avatar,

    });

    await refreshProfile();

    toast.success(

      "Profile updated successfully."

    );

    setOpenEdit(false);

  }

  catch (error) {

    console.error(error);

    toast.error(

      "Failed to update profile."

    );

  }

}

  const logout = useAuthStore(
    (state) => state.logout
  );

  if (loading) {

    return (

      <div className="p-8">

        Loading profile...

      </div>

    );

  }

  if (error) {

    return (

      <div className="p-8 text-red-500">

        {error}

      </div>

    );

  }

 if (!profile) {

  return (

 <ErrorState
    message="Unable to load profile."
/>

  );

}

  return (

    <main
      className="
        mx-auto
        max-w-5xl
        px-6
        py-8
        pb-32
      "
    >

      <ProfileHeader

        profile={profile}

      />

      <ProfileStats

        totalEchoes={totalEchoes}

        favoriteEchoes={favoriteEchoes}

        totalPhotos={totalPhotos}

        totalVideos={totalVideos}

      />

      <ProfileActions

      onEdit={() => {

  if (!profile) return;

  setUsername(profile.username);

  setBio(profile.bio ?? "");

  setAvatar(profile.avatar ?? "");

  setOpenEdit(true);

}}

        onFavorites={() => {}}

        onSettings={() =>
        navigate("settings")
    }
       onLogout={() =>

  confirm({

    title: "Logout",

    message:
      "Are you sure you want to logout from Echoes?",

    confirmText: "Logout",

    cancelText: "Cancel",

    danger: false,

    onConfirm: () => {

      logout();

      toast.success(

        "Logged out successfully."

      );

    },

  })

}

      />

<EditProfileModal

  open={openEdit}

  profile={profile}

  username={username}

  bio={bio}

  avatar={avatar}

  loading={saving}

  onClose={() =>
    setOpenEdit(false)
  }

  onUsernameChange={setUsername}

  onBioChange={setBio}

  onAvatarChange={setAvatar}

  onSave={handleSave}

/>

    </main>

  );

}