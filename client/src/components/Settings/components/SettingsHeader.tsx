import { ArrowLeft } from "lucide-react";

interface Props {

  onBack: () => void;

}

export default function SettingsHeader({

  onBack,

}: Props) {

  return (

    <header
      className="
        mb-8
        flex
        items-center
        gap-4
      "
    >

      <button

        onClick={onBack}

        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white
          shadow
          hover:bg-gray-100
          transition
        "

      >

        <ArrowLeft size={20} />

      </button>

      <div>

        <h1 className="text-3xl font-bold">

          Settings

        </h1>

        <p className="text-gray-500">

          Customize your Echoes experience

        </p>

      </div>

    </header>

  );

}