import AppContainer from "@/styles/AppContainer";

export default function TimelineSkeleton() {
  return (
    <main className="min-h-screen bg-[#F8F9FD] pb-32">

      <AppContainer className="space-y-8 py-8">

        {/* Header */}

        <div className="space-y-3">

        <div className="h-8 w-48 animate-pulse rounded-xl bg-gray-200" />

          <div className="h-4 w-32 animate-pulse rounded-xl bg-gray-200" />

        </div>

        {/* Timeline */}

        {Array.from({ length: 5 }).map((_, index) => (

          <div
            key={index}
            className="flex gap-5"
          >

            <div className="w-16 flex justify-center">

              <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse" />

            </div>

            <div className="flex-1">

              <div className="h-36 rounded-3xl bg-gray-200 animate-pulse" />

            </div>

          </div>

        ))}

      </AppContainer>

    </main>
  );
}