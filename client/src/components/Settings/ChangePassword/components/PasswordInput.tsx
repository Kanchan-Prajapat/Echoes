import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface Props {

  label: string;

  value: string;

  placeholder: string;

  onChange: (
    value: string
  ) => void;

}

export default function PasswordInput({

  label,

  value,

  placeholder,

  onChange,

}: Props) {

  const [show, setShow] =
    useState(false);

  return (

    <div className="mb-6">

      <label
        className="
          mb-2
          block
          text-sm
          font-semibold
          text-gray-700
        "
      >
        {label}
      </label>

      <div
        className="
          flex
          items-center
          rounded-2xl
          border
          border-gray-200
          bg-white
          px-4
          py-4
          shadow-sm
          transition
          focus-within:border-violet-500
          focus-within:ring-2
          focus-within:ring-violet-100
        "
      >

        <input

          type={
            show
              ? "text"
              : "password"
          }

          value={value}

          onChange={(e) =>
            onChange(
              e.target.value
            )
          }

          placeholder={placeholder}

          className="
            flex-1
            bg-transparent
            outline-none
          "

        />

        <button

          type="button"

          onClick={() =>
            setShow(!show)
          }

          className="
            text-gray-400
            transition
            hover:text-violet-600
          "

        >

          {show

            ? <EyeOff size={20} />

            : <Eye size={20} />

          }

        </button>

      </div>

    </div>

  );

}