import { forwardRef } from "react";
import { motion } from "framer-motion";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error,
      icon,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">

        {label && (
          <label
            className="
              block
              text-sm
              font-medium
              text-gray-300
            "
          >
            {label}
          </label>
        )}

        <motion.div
          whileFocus={{
            scale: 1.01,
          }}
          className="
            flex
            items-center
            gap-3

            rounded-2xl

            border
            border-white/10

            bg-white/5

            px-5
            py-4

            transition-all

            focus-within:border-violet-500
            focus-within:ring-4
            focus-within:ring-violet-500/20
          "
        >

          {icon && (
            <div className="text-gray-400">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            {...props}
            className={`
              flex-1

              bg-transparent

              text-white

              outline-none

              placeholder:text-gray-500

              ${className}
            `}
          />

        </motion.div>

        {error && (
          <p
            className="
              text-xs
              text-red-400
            "
          >
            {error}
          </p>
        )}

      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;