interface Props {
  password?: string;
}

export default function PasswordStrength({
  password = "",
}: Props) {

  const value = password;

  let strength = 0;

  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  const colors = [
    "bg-gray-200",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  const labels = [
    "Too Weak",
    "Weak",
    "Fair",
    "Good",
    "Strong",
  ];

  return (

    <div className="mb-8">

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm font-semibold text-gray-700">
          Password Strength
        </span>

        <span
          className={`text-sm font-semibold ${
            strength >= 4
              ? "text-green-600"
              : strength >= 3
              ? "text-yellow-600"
              : "text-red-500"
          }`}
        >
          {labels[strength]}
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-gray-200">

        <div
          className={`h-full transition-all duration-300 ${colors[strength]}`}
          style={{
            width: `${strength * 25}%`,
          }}
        />

      </div>

      <div className="mt-4 space-y-2 text-sm">

        <Requirement
          ok={value.length >= 8}
          text="Minimum 8 characters"
        />

        <Requirement
          ok={/[A-Z]/.test(value)}
          text="One uppercase letter"
        />

        <Requirement
          ok={/[0-9]/.test(value)}
          text="One number"
        />

        <Requirement
          ok={/[^A-Za-z0-9]/.test(value)}
          text="One special character"
        />

      </div>

    </div>

  );

}

interface Requirement {
  ok: boolean;
  text: string;
}

function Requirement({
  ok,
  text,
}: Requirement) {

  return (

    <div className="flex items-center gap-2">

      <div
        className={`h-2.5 w-2.5 rounded-full ${
          ok ? "bg-green-500" : "bg-gray-300"
        }`}
      />

      <span
        className={
          ok
            ? "text-green-600"
            : "text-gray-500"
        }
      >
        {text}
      </span>

    </div>

  );

}