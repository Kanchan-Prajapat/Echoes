import { Sparkles } from "lucide-react";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
}

export default function EchoAI({
  echo,
}: Props) {

  const generated =
    !!echo.aiCaption;

  return (

    <section
      className="
        rounded-3xl
        bg-white
        p-6
        mt-6
        shadow-sm
        border
      "
    >

      <div className="flex items-center gap-2">

        <Sparkles
          size={20}
          className="text-violet-600"
        />

        <h2 className="text-lg font-bold">

          AI Memory

        </h2>

      </div>

      {!generated ? (

        <div className="mt-6">

          <p className="text-gray-500">

            Generate a beautiful AI caption,
            memory insight and smart tags
            for this memory.

          </p>

          <button
            className="
              mt-5
              rounded-2xl
              bg-violet-600
              px-6
              py-3
              font-semibold
              text-white
            "
          >

            ✨ Generate AI Insight

          </button>

        </div>

      ) : (

        <>

          <div className="mt-6">

            <p className="text-xs text-violet-600">

              AI Caption

            </p>

            <p className="mt-2">

              {echo.aiCaption}

            </p>

          </div>

          <div className="mt-6">

            <p className="text-xs text-violet-600">

              Memory Insight

            </p>

            <p className="mt-2">

              {echo.aiInsight}

            </p>

          </div>

          {!!echo.aiTags?.length && (

            <div className="mt-6 flex flex-wrap gap-2">

              {echo.aiTags.map(tag => (

                <span
                  key={tag}
                  className="
                    rounded-full
                    bg-violet-100
                    px-3
                    py-1
                    text-sm
                  "
                >

                  {tag}

                </span>

              ))}

            </div>

          )}

        </>

      )}

    </section>

  );

}