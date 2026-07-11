import useProfile from "@/hooks/useProfile";
import useProfileStats from "@/hooks/useProfileStats";

import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileActions from "./ProfileActions";

import { useAuthStore } from "@/auth/stores/authStore";

export default function ProfileView() {

  const {

    profile,

    loading,

    error,

  } = useProfile();

  const {

    totalEchoes,

    favoriteEchoes,

    totalPhotos,

    totalVideos,

  } = useProfileStats();

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

    <div className="p-6">

      No profile found

    </div>

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

        onEdit={() => {}}

        onFavorites={() => {}}

        onSettings={() => {}}

        onLogout={logout}

      />

    </main>

  );

}