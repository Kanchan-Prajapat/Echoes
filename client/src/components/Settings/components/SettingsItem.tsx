import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {

  icon: ReactNode;

  title: string;

  subtitle?: string;

  right?: ReactNode;

  onClick?: () => void;

}

export default function SettingsItem({
  icon,
  title,
  subtitle,
  right,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="
      group
      mb-4
      flex
      w-full
      items-center
      rounded-2xl
      border
      border-gray-100
      bg-white
      p-4
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-violet-100
      hover:shadow-lg
      "
    >
      {/* Icon */}

      <div
  className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-2xl
    bg-violet-50
    text-violet-600
  "
>
  {icon}
</div>

      {/* Text */}

      <div className="ml-4 flex-1 text-left">

        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-500">
            {subtitle}
          </p>
        )}

      </div>

      {/* Right */}

      {right ?? (
        <ChevronRight
          size={18}
          className="
          text-gray-300
          transition
          group-hover:translate-x-1
          group-hover:text-violet-500
          "
        />
      )}
    </div>
  );
}