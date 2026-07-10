import { motion } from "framer-motion";
import {
  Download,
  Upload,
  Moon,
  CalendarDays,
  Info,
  ChevronRight,
} from "lucide-react";

interface Action {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  onClick?: () => void;
}

interface Props {
  onExport?: () => void;
  onImport?: () => void;
  onAppearance?: () => void;
  onDateFormat?: () => void;
  onAbout?: () => void;
}

export default function QuickActions({
  onExport,
  onImport,
  onAppearance,
  onDateFormat,
  onAbout,
}: Props) {

  const actions: Action[] = [
    {
      title: "Export Memories",
      subtitle: "Download your Echoes",
      icon: Download,
      color: "bg-blue-100 text-blue-600",
      onClick: onExport,
    },
    {
      title: "Import Backup",
      subtitle: "Restore your memories",
      icon: Upload,
      color: "bg-green-100 text-green-600",
      onClick: onImport,
    },
    {
      title: "Appearance",
      subtitle: "Theme & colors",
      icon: Moon,
      color: "bg-violet-100 text-violet-600",
      onClick: onAppearance,
    },
    {
      title: "Date Format",
      subtitle: "dd/MM/yyyy",
      icon: CalendarDays,
      color: "bg-orange-100 text-orange-600",
      onClick: onDateFormat,
    },
    {
      title: "About Echoes",
      subtitle: "Version & information",
      icon: Info,
      color: "bg-gray-100 text-gray-700",
      onClick: onAbout,
    },
  ];

  return (
    <section className="mt-10">

      <h2 className="mb-5 text-xl font-bold">

        Quick Actions

      </h2>

      <div className="space-y-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <motion.button

              key={action.title}

              whileHover={{
                scale: 1.01,
              }}

              whileTap={{
                scale: .98,
              }}

              onClick={action.onClick}

              className="
                flex
                w-full
                items-center
                gap-4

                rounded-3xl

                border
                border-gray-100

                bg-white

                p-5

                text-left

                shadow-sm

                transition
              "

            >

              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  ${action.color}
                `}
              >

                <Icon size={24} />

              </div>

              <div className="flex-1">

                <h3 className="font-semibold">

                  {action.title}

                </h3>

                <p className="mt-1 text-sm text-gray-500">

                  {action.subtitle}

                </p>

              </div>

              <ChevronRight
                size={20}
                className="text-gray-400"
              />

            </motion.button>

          );

        })}

      </div>

    </section>
  );

}