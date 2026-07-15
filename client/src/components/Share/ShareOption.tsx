import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {

  icon: ReactNode;

  title: string;

  subtitle: string;

  onClick: () => void;

}

export default function ShareOption({

  icon,

  title,

  subtitle,

  onClick,

}: Props) {

  return (

    <button

      onClick={onClick}

      className="
      group
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
      hover:border-violet-200
      hover:shadow-lg
      "

    >

      {/* Icon */}

      <div

        className="
        flex
        h-14
        w-14
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

        <p className="mt-1 text-sm text-gray-500">

          {subtitle}

        </p>

      </div>

      {/* Arrow */}

      <ChevronRight

        size={18}

        className="
        text-gray-300
        transition
        duration-300
        group-hover:translate-x-1
        group-hover:text-violet-600
        "

      />

    </button>

  );

}