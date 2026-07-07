import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;

  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;

  className?: string;

  variant?:
    | "glass"
    | "white"
    | "danger"
    | "primary";

  size?: "sm" | "md" | "lg";

  active?: boolean;

  disabled?: boolean;

  type?: "button" | "submit";
}

export default function IconButton({
  children,
  onClick,
  className,
  variant = "glass",
  size = "md",
  active = false,
  disabled = false,
  type = "button",
}: Props) {

  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  const variants = {
    glass:
      "bg-white/20 backdrop-blur-md text-white",

    white:
      "bg-white shadow-lg text-gray-800",

    danger:
      "bg-red-500 text-white",

    primary:
      "bg-violet-600 text-white",
  };

  return (
    <motion.button
      type={type}
      whileHover={{
        scale: disabled ? 1 : 1.05,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.94,
      }}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center",
        "rounded-full",
        "transition-all duration-200",
        sizes[size],
        variants[variant],
        active &&
          "ring-2 ring-violet-300",
        disabled &&
          "cursor-not-allowed opacity-60",
        className
      )}
    >
      {children}
    </motion.button>
  );
}