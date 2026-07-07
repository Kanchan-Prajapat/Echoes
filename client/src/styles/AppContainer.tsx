import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function AppContainer({
  children,
  className = "",
}: Props) {
  return (
    <main
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
        ${className}
      `}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[460px]
          lg:max-w-[520px]
        "
      >
        {children}
      </div>
    </main>
  );
}