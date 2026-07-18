import { X } from "lucide-react";

interface BaseModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose(): void;
}

export default function BaseModal({
  open,
  title,
  children,
  onClose,
}: BaseModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-md
          rounded-3xl
          bg-white
          shadow-xl
          p-6
        "
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}