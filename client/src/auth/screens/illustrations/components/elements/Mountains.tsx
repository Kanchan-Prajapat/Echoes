export default function Mountains() {

  return (

    <svg

      className="absolute bottom-0 left-0 h-2/3 w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >

      {/* Back */}

      <path
        d="M-10 100 L35 30 L70 70 L100 20 L130 100 Z"
        fill="#4C1D95"
      />

      {/* Front */}

      <path
        d="M-10 100 L25 60 L45 40 L70 80 L100 25 L130 100 Z"
        fill="#2E1065"
      />
    </svg>
  );
}