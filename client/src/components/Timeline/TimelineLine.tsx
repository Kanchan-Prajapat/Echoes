interface Props {
  active?: boolean;
}

export default function TimelineLine({
  active = true,
}: Props) {

  return (

    <div
      className="
        flex
        flex-col
        items-center
      "
    >

      {/* Top Line */}

      <div
        className={`
          w-[2px]
          flex-1
          ${
            active
              ? "bg-violet-200"
              : "bg-gray-200"
          }
        `}
      />

      {/* Dot */}

      <div
        className="
          relative
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-violet-600
        "
      >

        <div
          className="
            absolute
            h-8
            w-8
            rounded-full
            bg-violet-500/20
            blur-md
          "
        />

        <div
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-white
          "
        />

      </div>

      {/* Bottom Line */}

      <div
        className={`
          w-[2px]
          flex-1
          ${
            active
              ? "bg-violet-200"
              : "bg-gray-200"
          }
        `}
      />

    </div>

  );

}