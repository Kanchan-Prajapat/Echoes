import { format } from "date-fns";

export default function PDFFooter() {

  return (

    <footer
      className="
      mt-20
      border-t
      pt-8
      text-center
      "
    >

      <h2
        className="
        text-xl
        font-black
        tracking-[0.35em]
        text-violet-600
        "
      >
        E C H O E S
      </h2>

      <p className="mt-2 text-gray-500">

        Every memory has an echo.

      </p>

      <p
        className="
        mt-4
        text-sm
        text-gray-400
        "
      >

        Generated on{" "}

        {format(
          new Date(),
          "dd MMM yyyy"
        )}

      </p>

    </footer>

  );

}