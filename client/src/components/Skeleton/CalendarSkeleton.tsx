import AppContainer from "@/styles/AppContainer";

export default function CalendarSkeleton() {
  return (
    <main className="min-h-screen bg-[#F8F9FD] pb-32">

      <AppContainer className="space-y-8 py-8">

        {/* Header */}

        <div className="space-y-3">

          <div className="h-8 w-40 animate-pulse rounded-xl bg-gray-200" />

          <div className="h-4 w-28 animate-pulse rounded-xl bg-gray-200" />

        </div>

        {/* Calendar */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <div className="mb-6 h-8 w-40 animate-pulse rounded bg-gray-200" />

          <div className="grid grid-cols-7 gap-3">

            {Array.from({ length: 35 }).map((_, i) => (

              <div
                key={i}
                className="aspect-square animate-pulse rounded-xl bg-gray-200"
              />

            ))}

          </div>

        </div>

        {/* Selected Day */}

        <div className="space-y-4">

          <div className="h-6 w-36 animate-pulse rounded bg-gray-200" />

          {Array.from({ length: 2 }).map((_, i) => (

            <div
              key={i}
              className="h-28 animate-pulse rounded-3xl bg-gray-200"
            />

          ))}

        </div>

      </AppContainer>

    </main>
  );
}