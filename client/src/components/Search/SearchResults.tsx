import { Echo } from "@/types/echo";

interface Props {
  results: Echo[];
  onOpenEcho: (echo: Echo) => void;
}

export default function SearchResults({
  results,
  onOpenEcho,
}: Props) {

  if (results.length === 0) {

    return (

      <div className="mt-24 text-center">

        <h2 className="text-2xl font-bold">

          No memories found

        </h2>

        <p className="mt-2 text-gray-500">

          Try another keyword.

        </p>

      </div>

    );

  }

  return (

    <div className="space-y-4 p-6">

      {results.map((echo) => {

        const cover =
          echo.media.find(
            (m) => m.id === echo.coverMediaId
          ) ?? echo.media[0];

        return (

          <button
            key={echo.id}
            onClick={() => onOpenEcho(echo)}
            className="flex w-full gap-4 rounded-3xl bg-white p-4 text-left shadow transition hover:shadow-lg"
          >

            {cover && (

              <img
                src={cover.url}
                className="h-20 w-20 rounded-2xl object-cover"
              />

            )}

            <div className="flex-1">

              <h2 className="text-lg font-bold">

                {echo.title}

              </h2>

              <p className="mt-1 text-gray-500">

                {echo.location}

              </p>

              <p className="text-sm text-gray-400">

                {echo.date}

              </p>

            </div>

          </button>

        );

      })}

    </div>

  );

}