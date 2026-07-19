import { Sparkles } from "lucide-react";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
  loading: boolean;
  onGenerate: () => Promise<void>;
}

export default function EchoAI({
  echo,
  loading,
  onGenerate,
}: Props)  {

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
  onClick={onGenerate}
  disabled={loading}
  className="
    mt-5
    rounded-2xl
    bg-violet-600
    px-6
    py-3
    font-semibold
    text-white
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  {loading
    ? "Generating AI Insight..."
    : "✨ Generate AI Insight"}
</button>

        </div>

      ) : (

      <>
  <div className="mt-6">
    <p className="text-xs text-violet-600">
      AI Caption
    </p>

    <p className="mt-2 text-gray-800 leading-7">
      {echo.aiCaption}
    </p>
  </div>

  <div className="mt-6">
    <p className="text-xs text-violet-600">
      Memory Insight
    </p>

    <p className="mt-2 text-gray-700 leading-7 whitespace-pre-line">
      {echo.aiInsight}
    </p>
  </div>

  {!!echo.aiTags?.length && (
    <div className="mt-6">
      <p className="text-xs text-violet-600 mb-3">
        Smart Tags
      </p>

      <div className="flex flex-wrap gap-2">
        {echo.aiTags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              bg-violet-100
              text-violet-700
              px-3
              py-1
              text-sm
              font-medium
            "
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )}
</>
      )}

    </section>

  );

}