import { motion } from "framer-motion";
import { Music2, ChevronRight } from "lucide-react";

import Card from "@/styles/Card";
import { Music } from "@/types/music";

interface Props {
  music?: Music;
  onClick: () => void;
}

export default function MusicSelector({
  music,
  onClick,
}: Props) {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Card
        clickable
        onClick={onClick}
      >
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            {/* Icon */}

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-violet-100
                text-violet-600
              "
            >
              <Music2 size={22} />
            </div>

            {/* Content */}

            <div>

              <p className="text-sm text-gray-500">
                Soundtrack
              </p>

              <p className="mt-1 font-bold">
                {music
                  ? music.title
                  : "Choose soundtrack"}
              </p>

              {music && (
                <p className="mt-0.5 text-sm text-gray-500">
                  {music.artist}
                </p>
              )}

            </div>

          </div>

          <ChevronRight
            size={20}
            className="text-gray-400"
          />

        </div>
      </Card>
    </motion.div>
  );
}