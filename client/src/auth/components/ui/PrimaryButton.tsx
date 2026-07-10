import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  children: React.ReactNode;

  onClick?: () => void;

  type?: "button" | "submit";

  loading?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;

  icon?: boolean;

  className?: string;
}

export default function PrimaryButton({

  children,

  onClick,

  type = "button",

  loading = false,

  disabled = false,

  fullWidth = true,

  icon = true,

  className = "",

}: Props) {

  return (

    <motion.button

      type={type}

      onClick={onClick}

      disabled={disabled || loading}

      whileHover={{
        scale: disabled ? 1 : 1.02,
      }}

      whileTap={{
        scale: disabled ? 1 : .98,
      }}

      className={`
        relative
        overflow-hidden
        rounded-2xl

        bg-gradient-to-r
        from-violet-700
        via-violet-600
        to-fuchsia-600

        px-6
        py-4

        font-semibold
        text-white

        shadow-[0_20px_45px_rgba(124,58,237,.35)]

        transition-all

        disabled:cursor-not-allowed
        disabled:opacity-60

        ${fullWidth ? "w-full" : ""}

        ${className}
      `}
    >

      {/* Shine */}

      <motion.div

        animate={{
          x: ["-120%", "150%"],
        }}

        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}

        className="
          absolute
          inset-y-0
          w-16
          rotate-12
          bg-white/20
          blur-lg
        "

      />

      {/* Content */}

      <div

        className="
          relative
          z-10

          flex
          items-center
          justify-center
          gap-3
        "

      >

        {loading ? (

          <>

            <motion.div

              animate={{
                rotate: 360,
              }}

              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}

              className="
                h-5
                w-5
                rounded-full
                border-2
                border-white
                border-t-transparent
              "

            />

            <span>Loading...</span>

          </>

        ) : (

          <>

            <span>{children}</span>

            {icon && (

              <motion.div

                animate={{
                  x: [0, 5, 0],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}

              >

                <ArrowRight size={18} />

              </motion.div>

            )}

          </>

        )}

      </div>

    </motion.button>

  );

}