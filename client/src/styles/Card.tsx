import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;

  className?: string;

  hover?: boolean;

  clickable?: boolean;

  onClick?: () => void;

  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  hover = false,
  clickable = false,
  onClick,
  padding = "md",
}: Props) {

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        "overflow-hidden",
        "rounded-3xl",
        "border border-gray-100",
        "bg-white",
        "shadow-lg",
        paddings[padding],

        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",

        clickable &&
          "cursor-pointer",

        className
      )}
    >
      {children}
    </div>
  );
}