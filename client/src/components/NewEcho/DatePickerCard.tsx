import { motion } from "framer-motion";
import { CalendarDays, ChevronRight } from "lucide-react";
import { format } from "date-fns";

import Card from "@/styles/Card";

interface Props {
  date: string;
  onClick: () => void;
}

export default function DatePickerCard({
  date,
  onClick,
}: Props) {

  return (

    <motion.div
      whileTap={{
        scale: .98,
      }}
    >

      <Card
        clickable
        onClick={onClick}
      >

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div
              className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">

              <CalendarDays size={22} />

            </div>

            <div>

              <p
                className=" text-sm text-gray-500">
                Date
              </p>

              <h3
                className=" mt-1 font-bold">

                {date
                  ? format(
                      new Date(date),
                      "dd/MM/yyyy"
                    )
                  : "Select Date"}

              </h3>

            </div>

          </div>

          <ChevronRight
            size={20}  className="text-gray-400"
          />

        </div>

      </Card>

    </motion.div>

  );

}