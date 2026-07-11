import { LogOut } from "lucide-react";

import { useAuthStore } from "@/auth/stores/authStore";

export default function LogoutButton() {

  const logout = useAuthStore(
    (state) => state.logout
  );

  function handleLogout() {

    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmed) return;

    logout();

  }

  return (

    <button

      onClick={handleLogout}

      className="
        mt-6
        flex
        w-full
        items-center
        justify-between
        rounded-2xl
        bg-red-500
        px-5
        py-4
        text-white
        shadow-md
        transition-all
        hover:bg-red-600
        active:scale-[0.98]
      "

    >

      <div className="flex items-center gap-4">

        <LogOut size={22} />

        <span className="font-semibold">

          Logout

        </span>

      </div>

    </button>

  );

}