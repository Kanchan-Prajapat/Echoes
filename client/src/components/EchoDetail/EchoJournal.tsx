import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  MapPin,
  Smile,
} from "lucide-react";

import Card from "@/styles/Card";

import { Echo } from "@/types/echo";

interface Props {
  echo: Echo;
}

export default function EchoJournal({
  echo,
}: Props) {

  return (

    <motion.section

      initial={{ opacity: 0, y: 30,}}

      whileInView={{ opacity: 1, y: 0,}}

      viewport={{ once: true,}}

      transition={{  duration: .35,}}

      className="mt-8" >

      <Card>

        {/* Header */}

        <div className="flex items-center gap-3">

          <div
            className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">

            <BookOpen size={22} />

          </div>

          <div>

            <h2
              className=" text-xl  font-bold">

              Memory Journal

            </h2>

            <p className=" text-sm text-gray-500">

              Every memory tells a story

            </p>

          </div>

        </div>

        {/* Description */}

        {echo.description ? (

          <blockquote
            className=" mt-7 border-l-4 border-violet-500 pl-5 text-lg leading-8 italic text-gray-700">

            "{echo.description}"

          </blockquote>

        ) : (

          <div
            className=" mt-8 rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-400">

            No journal entry yet.

          </div>

        )}

        {/* Footer */}

        <div
          className=" mt-8 flex flex-wrap gap-4">

          {echo.location && (

            <div
              className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">

              <MapPin size={16} />

              <span>

                {echo.location}

              </span>

            </div>

          )}

          {echo.mood && (

            <div
              className=" flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-violet-700">

              <Smile size={16} />

              <span>

                {echo.mood}

              </span>

            </div>

          )}

          <div
            className=" flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">

            <CalendarDays size={16} />

           <span>
                {new Date(echo.date).toLocaleDateString()}
              </span>

          </div>

        </div>

      </Card>

    </motion.section>

  );

}