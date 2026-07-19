import { ArrowLeft, ShieldCheck } from "lucide-react";

interface Props {
  onBack: () => void;
}

export default function PasswordHeader({
  onBack,
}: Props) {
  return (
    <header className="mb-8">
      <button
        onClick={onBack}
        className="
          mb-6
          flex
          items-center
          gap-2
          text-gray-500
          transition
          hover:text-violet-600
        "
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-violet-100
            text-violet-600
          "
        >
          <ShieldCheck size={28} />
        </div>

        <div>

          <h1 className="text-3xl font-bold">

            Change Password

          </h1>

          <p className="mt-1 text-gray-500">

            Keep your Echoes account secure.

          </p>

        </div>

      </div>

    </header>
  );
}