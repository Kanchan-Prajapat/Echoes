interface Props {

  checked: boolean;

  onChange: (
    value: boolean
  ) => void;

}

export default function Toggle({

  checked,

  onChange,

}: Props) {

  return (

    <button

      type="button"

      onClick={() =>
        onChange(!checked)
      }

      className={`
        relative
        h-7
        w-12
        rounded-full
        transition-all
        duration-300

        ${
          checked

            ? "bg-violet-600"

            : "bg-gray-300"

        }
      `}
    >

      <span

        className={`
          absolute
          top-1
          h-5
          w-5
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300

          ${
            checked

              ? "left-6"

              : "left-1"

          }
        `}
      />

    </button>

  );

}