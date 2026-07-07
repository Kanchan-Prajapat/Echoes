import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";

import Card from "@/styles/Card";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function JournalEditor({
  value,
  onChange,
}: Props) {

  const words = value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const characters = value.length;

  return (

    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: .2,
      }}
    >

      <Card>

        {/* Header */}

        <div className="flex items-center gap-4">

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

            <BookOpenText size={22} />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              Memory Journal

            </h2>

            <p className="text-sm text-gray-500">

              Tell your story...

            </p>

          </div>

        </div>

        {/* Editor */}

        <textarea

          value={value}

          onChange={(e)=>
            onChange(e.target.value)
          }

          rows={8}

          placeholder={`What happened today?

What made this memory special?

How were you feeling?

Write anything you'd like to remember...`}

          className="
            mt-6
            w-full
            resize-none
            rounded-2xl
            bg-gray-50
            p-5
            text-base
            leading-8
            outline-none

            transition

            focus:bg-white
            focus:ring-2
            focus:ring-violet-500
          "

        />

        {/* Footer */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-between

            text-sm
            text-gray-400
          "
        >

          <span>

            {words} words

          </span>

          <span>

            {characters} characters

          </span>

        </div>

      </Card>

    </motion.div>

  );

}