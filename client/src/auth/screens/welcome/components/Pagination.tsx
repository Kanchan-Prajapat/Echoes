import { motion } from "framer-motion";

interface Props {
  current: number;
  total: number;

}

export default function Pagination({
  current,
  total,
}: Props) {
  return (

    <div
      className="
        flex
        items-center
        justify-center
        gap-3"
    >

      {Array.from({
        length: total,
      }).map((_, index) => {
        const active =
          current === index;

        return (
          <motion.div
            key={index}

            animate={{
              width: active ? 42 : 10,
              opacity: active ? 1 : .35,
              background: active
                ? "linear-gradient(90deg,#8B5CF6,#A855F7)"
                : "#DDD6FE",
            }}

            transition={{
              duration: .35,
              ease: "easeInOut",
            }}
            className="
h-2.5
rounded-full
shadow-[0_0_12px_rgba(139,92,246,.35)]"
          />
        );
      })}
    </div>
  );
}