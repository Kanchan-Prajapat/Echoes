interface Props {

  loading: boolean;

  disabled: boolean;

  onClick: () => void;

}

export default function SaveButton({

  loading,

  disabled,

  onClick,

}: Props) {

  return (

    <button

      type="button"

      onClick={onClick}

      disabled={loading || disabled}

      className={`
        mt-8
        flex
        w-full
        items-center
        justify-center
        rounded-2xl
        py-4
        font-semibold
        text-white
        transition-all
        duration-300

        ${
          loading || disabled

            ? "cursor-not-allowed bg-violet-300"

            : "bg-violet-600 hover:-translate-y-0.5 hover:bg-violet-700 active:translate-y-0"
        }
      `}
    >

      {loading ? (

        <div className="flex items-center gap-3">

          <div
            className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-white/30
              border-t-white
            "
          />

          <span>Updating...</span>

        </div>

      ) : (

        "Change Password"

      )}

    </button>

  );

}