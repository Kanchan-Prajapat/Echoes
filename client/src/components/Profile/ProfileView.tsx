import {
  Camera,
  Heart,
  MapPin,
  Moon,
  Settings,
  Shield,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Memories",
    value: "142",
    icon: Camera,
  },
  {
    label: "Places",
    value: "34",
    icon: MapPin,
  },
  {
    label: "Favorites",
    value: "56",
    icon: Heart,
  },
];

const menus = [
  {
    title: "Appearance",
    subtitle: "Dark Mode",
    icon: Moon,
  },
  {
    title: "Privacy",
    subtitle: "Your memories stay private",
    icon: Shield,
  },
  {
    title: "Settings",
    subtitle: "Manage your preferences",
    icon: Settings,
  },
];

export default function ProfileView() {
  return (
    <main className="min-h-screen bg-[#F8F9FD] pb-28">

      {/* Cover */}

      <div className="h-52 bg-gradient-to-br from-violet-600 via-indigo-500 to-purple-500" />

      {/* Avatar */}

      <div className="-mt-20 flex flex-col items-center">

        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/profile.jpg"
          className="h-36 w-36 rounded-full border-8 border-white object-cover shadow-xl"
        />

        <h1 className="mt-5 text-3xl font-bold">
          Kanchan Prajapat
        </h1>

        <p className="mt-2 text-gray-500">
          Echo Keeper ✨
        </p>

      </div>

      {/* Stats */}

      <div className="mx-6 mt-10 grid grid-cols-3 gap-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              whileHover={{ y: -5 }}
              key={item.label}
              className="rounded-3xl bg-white p-5 text-center shadow-lg"
            >
              <Icon
                className="mx-auto mb-3 text-violet-600"
                size={24}
              />

              <h2 className="text-2xl font-bold">
                {item.value}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {item.label}
              </p>
            </motion.div>
          );
        })}

      </div>

      {/* Menu */}

      <div className="mx-6 mt-10 rounded-3xl bg-white shadow-lg">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex w-full items-center justify-between border-b px-6 py-5 last:border-none"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-violet-100 p-3">
                  <Icon
                    className="text-violet-600"
                    size={22}
                  />
                </div>

                <div className="text-left">

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.subtitle}
                  </p>

                </div>

              </div>

              <ChevronRight
                size={20}
                className="text-gray-400"
              />

            </button>
          );
        })}

      </div>

    </main>
  );
}