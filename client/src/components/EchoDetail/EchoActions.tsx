import { motion } from "framer-motion";
import {
  Heart,
  Pencil,
  Plus,
  Trash2,
  Share2,
} from "lucide-react";


interface Props {
  favorite: boolean;

  onFavorite: () => void;
  onEdit: () => void;
  onAddMedia: () => void;
  onDelete: () => void;
  onShare: ()=> void;
}

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  danger?: boolean;
  active?: boolean;
  onClick: () => void;
}

function ActionCard({
  icon,
  title,
  subtitle,
  danger = false,
  active = false,
  onClick,
}: ActionCardProps) {

  return (

    <motion.button

      whileHover={{  y: -3,  }}

      whileTap={{  scale: .97,}}

      transition={{
        type: "spring",
        stiffness: 300,
      }}

      onClick={onClick}

      className={`  rounded-3xl  p-5  text-left  shadow-lg  transition-all

        ${
          danger
            ? "bg-red-50 hover:bg-red-100"
            : active
            ? "bg-violet-50"
            : "bg-white"
        }
      `}
    >

      <div
        className={` flex h-12 w-12 items-center justify-center rounded-2xl

          ${
            danger
              ? "bg-red-100 text-red-600"
              : active
              ? "bg-violet-100 text-violet-600"
              : "bg-gray-100 text-gray-700"
          }
        `}
      >
        {icon}
      </div>

      <h3 className="mt-5 font-bold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {subtitle}
      </p>

    </motion.button>

  );

}

export default function EchoActions({
  favorite,
  onFavorite,
  onEdit,
  onAddMedia,
  onDelete,
  onShare,
}: Props) {

  return (

    <section
      className=" mt-8 grid grid-cols-2 gap-4">

      <ActionCard
        icon={
          <Heart
            size={20}
            fill={
              favorite
                ? "currentColor"
                : "none"
            }
          />
        }
        title="Favorite"
        subtitle={
          favorite
            ? "Saved"
            : "Mark memory"
        }
        active={favorite}
        onClick={onFavorite}
      />

      <ActionCard
        icon={<Pencil size={20} />}
        title="Edit"
        subtitle="Update memory"
        onClick={onEdit}
      />

      <ActionCard
        icon={<Plus size={20} />}
        title="Add Media"
        subtitle="Photos & videos"
        onClick={onAddMedia}
      />

      <ActionCard
        icon={<Trash2 size={20} />}
        title="Delete"
        subtitle="Remove memory"
        danger
        onClick={onDelete}
      />

   <ActionCard
  icon={<Share2 size={20} />}
  title="Share"
  subtitle="Share memory"
  onClick={onShare}
/>

    </section>

  );

}