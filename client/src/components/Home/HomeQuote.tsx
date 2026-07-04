const quotes = [
  "Collect moments, not things.",
  "Every Echo tells a story.",
  "Today's moments become tomorrow's memories.",
  "Life happens. Capture it.",
  "Some memories deserve to live forever.",
  "Every sunset deserves an Echo.",
  "Keep the moments that matter.",
  "An Echo is the heart’s way of keeping what the hands let go.",
  "Hold onto the moments that make the world go quiet.",
  "The best feelings are the ones that don’t ask for attention.",
  "In the silence between thoughts, an Echo of joy remains.",
  "Time moves on, but a perfect feeling stays perfectly still.",
  "Where peace resides, memories linger."
];

export default function HomeQuote() {
  const today = new Date().getDate();

  const quote = quotes[today % quotes.length];

  return (
    <div className="mb-10 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 p-6 text-white shadow-xl">

      <p className="text-sm opacity-80">
        Today's Thought
      </p>

      <h2 className="mt-3 text-2xl font-bold leading-9">
        {quote}
      </h2>

    </div>
  );
}