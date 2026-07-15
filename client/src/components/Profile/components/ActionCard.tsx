import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {

  icon: LucideIcon;

  title: string;

  subtitle?: string;

  danger?: boolean;

  onClick?: () => void;

}

export default function ActionCard({

  icon: Icon,

  title,

  subtitle,

  danger = false,

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
        justify-between
        rounded-3xl
        bg-white
        px-6
        py-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        active:scale-[0.98]
      "

    >

      <div className="flex items-center gap-4">

        <div

          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl

            ${
              danger

                ? "bg-red-100 text-red-600"

                : "bg-violet-100 text-violet-600"

            }
          `}

        >

          <Icon size={24} />

        </div>

        <div className="text-left">

          <h3

            className={`
              text-lg
              font-semibold

              ${
                danger

                  ? "text-red-600"

                  : "text-gray-900"

              }
            `}

          >

            {title}

          </h3>

          {subtitle && (

            <p
              className="
                mt-1
                text-sm
                text-gray-500
              "
            >

              {subtitle}

            </p>

          )}

        </div>

      </div>

      <ChevronRight

        className="
          text-gray-400
          transition-transform
          duration-300
          group-hover:translate-x-1
        "

        size={22}

      />

    </button>

  );

}