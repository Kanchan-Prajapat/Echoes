import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  open: boolean;
  items: string[];
  selected: number;
  anchor: DOMRect | null;
  onSelect: (index: number) => void;
  onClose: () => void;
}

export default function CalendarDropdown({
  open,
  items,
  selected,
  anchor,
  onSelect,
  onClose,
}: Props) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const selectedItem =
      listRef.current?.children[
        selected
      ] as HTMLElement | null;

    selectedItem?.scrollIntoView({
      block: "center",
    });
  }, [open, selected]);

  return (
    <AnimatePresence>
      {open && anchor && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          <motion.div
            ref={listRef}
            initial={{
              opacity: 0,
              scale: .95,
              y: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .95,
              y: -8,
            }}
            transition={{
              duration: .18,
            }}
            style={{
              position: "fixed",
              top: anchor.bottom + 8,
              left: anchor.left,
             width: Math.max(anchor.width + 60, 180),
            }}
            className="
              z-50
              max-h-80
              overflow-y-auto
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-2
              shadow-2xl
            "
          >
            {items.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  onSelect(index);
                  onClose();
                }}
                className={`
                  flex
                  w-full
                  rounded-2xl
                  px-4
                  py-3
                  text-left
                  transition

                  ${
                    selected === index
                      ? "bg-violet-600 text-white"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}