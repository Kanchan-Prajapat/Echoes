import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  title?: string;

  subtitle?: string;

  action?: ReactNode;

  children: ReactNode;

  className?: string;

  spacing?: "sm" | "md" | "lg";
}

export default function Section({
  title,
  subtitle,
  action,
  children,
  className,
  spacing = "lg",
}: Props) {

  const spacingClass = {
    sm: "mt-6",
    md: "mt-8",
    lg: "mt-10",
  };

  return (
    <section
      className={clsx(
        spacingClass[spacing],
        className
      )}
    >

      {(title || action) && (

        <div className="mb-5 flex items-center justify-between">

          <div>

            {title && (
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">
                {subtitle}
              </p>
            )}

          </div>

          {action && action}

        </div>

      )}

      {children}

    </section>
  );
}