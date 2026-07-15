import {
  User,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";

import ActionCard from "./ActionCard";

interface Props {

  onEdit: () => void;

  onFavorites: () => void;

  onSettings: () => void;

  onLogout: () => void;

}

export default function ProfileActions({

  onEdit,

  onFavorites,

  onSettings,

  onLogout,

}: Props) {

  return (

    <section className="mt-8 space-y-4">

      <ActionCard

        icon={User}

        title="Edit Profile"

        subtitle="Update your personal information"

        onClick={onEdit}

      />

      <ActionCard

        icon={Heart}

        title="Favorite Echoes"

        subtitle="View your saved memories"

        onClick={onFavorites}

      />

      <ActionCard

        icon={Settings}

        title="Settings"

        subtitle="Manage your preferences"

        onClick={onSettings}

      />

      <ActionCard

        icon={LogOut}

        title="Logout"

        subtitle="Sign out of Echoes"

        danger

        onClick={onLogout}

      />

    </section>

  );

}