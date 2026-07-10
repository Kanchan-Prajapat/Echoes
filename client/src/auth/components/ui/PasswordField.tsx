import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

import {
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const PasswordField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error,
      className = "",
      ...props
    },
    ref
  ) => {

    const [visible, setVisible] =
      useState(false);

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

          <Lock
            size={18}
            className="text-gray-400"
          />

          <input

            ref={ref}

            type={
              visible
                ? "text"
                : "password"
            }

            {...props}

            className={`
              ml-3

              flex-1

              bg-transparent

              text-white

              outline-none

              placeholder:text-gray-500

              ${className}
            `}
          />

          <button

            type="button"

            onClick={() =>
              setVisible(!visible)
            }

            className="
              text-gray-400
              transition
              hover:text-white
            "

          >

            {visible
              ? <EyeOff size={18} />
              : <Eye size={18} />}

          </button>

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

PasswordField.displayName =
  "PasswordField";

export default PasswordField;