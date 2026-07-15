import AppContainer from "@/styles/AppContainer";

export default function HomeSkeleton() {
  return (
    <main className="min-h-screen bg-[#F8F9FD] pb-32">
      <AppContainer className="space-y-8 py-8">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div className="space-y-3">

            <div className="h-6 w-40 animate-pulse rounded-xl bg-gray-200" />

            <div className="h-4 w-28 animate-pulse rounded-xl bg-gray-200" />

          </div>

          <div className="flex gap-3">

            <div className="h-12 w-12 animate-pulse rounded-2xl bg-gray-200" />

            <div className="h-12 w-12 animate-pulse rounded-2xl bg-gray-200" />

          </div>

        </div>

        {/* Highlights */}

        <div className="flex gap-4 overflow-hidden">

          {Array.from({ length: 5 }).map((_, i) => (

            <div
              key={i}
              className="h-20 w-20 shrink-0 animate-pulse rounded-full bg-gray-200"
            />

          ))}

        </div>

        {/* Quote */}

        <div className="h-32 animate-pulse rounded-3xl bg-gray-200" />

        {/* Continue Watching */}

        <div className="h-56 animate-pulse rounded-3xl bg-gray-200" />

        {/* Recent */}

        {Array.from({ length: 3 }).map((_, i) => (

          <div
            key={i}
            className="h-32 animate-pulse rounded-3xl bg-gray-200"
          />

        ))}

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4">

          <div className="h-28 animate-pulse rounded-3xl bg-gray-200" />

          <div className="h-28 animate-pulse rounded-3xl bg-gray-200" />

        </div>

      </AppContainer>
    </main>
  );
}