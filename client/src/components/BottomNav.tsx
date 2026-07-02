import {
  House,
  Clock3,
  CalendarDays,
  User,
  Plus,
} from "lucide-react";

import { Tab } from "../App";

type BottomNavProps = {
  active: Tab;
  onChange: (tab: Tab) => void;
};

const items: {
  id: Tab;
  icon: React.ElementType;
  label: string;
}[] = [
  {
    id: "home",
    icon: House,
    label: "Home",
  },
  {
    id: "timeline",
    icon: Clock3,
    label: "Timeline",
  },
  {
    id: "new-memory",
    icon: Plus,
    label: "New",
  },
  {
    id: "calendar",
    icon: CalendarDays,
    label: "Calendar",
  },
  {
    id: "profile",
    icon: User,
    label: "Profile",
  },
];

export default function BottomNav({
  active,
  onChange,
}: BottomNavProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/80 px-4 py-3 shadow-2xl backdrop-blur-xl">
      {items.map((item) => {
        const Icon = item.icon;

        const isActive = active === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
              isActive
                ? "bg-violet-600 text-white scale-110"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Icon size={22} />
          </button>
        );
      })}
    </nav>
  );
}