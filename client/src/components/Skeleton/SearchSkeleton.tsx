import AppContainer from "@/styles/AppContainer";

export default function SearchSkeleton() {
  return (
    <main className="min-h-screen bg-[#F8F9FD]">

      <AppContainer className="space-y-6 py-6">

        {/* Search Bar */}

        <div className="h-14 animate-pulse rounded-2xl bg-gray-200" />

        {/* Results */}

        {Array.from({ length: 5 }).map((_, i) => (

          <div
            key={i}
            className="h-28 animate-pulse rounded-3xl bg-gray-200"
          />

        ))}

      </AppContainer>

    </main>
  );
}