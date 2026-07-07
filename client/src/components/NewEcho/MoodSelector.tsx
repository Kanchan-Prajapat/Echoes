import { Smile, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import Card from "@/styles/Card";

import { Mood } from "@/types/moods";

interface Props {
  mood?: Mood;

  onClick: () => void;
}

export default function MoodSelector({
  mood,
  onClick,
}: Props) {

  return (

    <motion.div whileTap={{scale: .98,}}>

      <Card

        clickable

        onClick={onClick}

      >

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div
              className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">

              <Smile size={22} />

            </div>

            <div>

              <p className="text-sm text-gray-500">

                Mood

              </p>

              <div className="mt-1 flex items-center gap-2">

                <span className="text-2xl">

                  {mood?.emoji ?? "😊"}

                </span>

                <span className="font-bold">

                  {mood?.label ?? "Happy"}

                </span>

              </div>

            </div>

          </div>

          <ChevronRight
            className="text-gray-400"
            size={20}
          />

        </div>

      </Card>

    </motion.div>

  );

}