import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import Card from "@/styles/Card";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationInput({
  value,
  onChange,
}: Props) {
  return (

    <motion.div
      whileTap={{
        scale: 0.98,
      }}
    >

      <Card>

        <div className="flex items-center gap-4">

          {/* Icon */}

          <div
            className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600"
          >
            <MapPin size={22} />
          </div>

          {/* Input */}

          <div className="flex-1">

            <p
              className=" text-sm text-gray-500"
            >
              Location
            </p>

            <input
              value={value}
              onChange={(e) =>
                onChange(e.target.value)
              }
              placeholder="Jaipur, Rajasthan"
              className=" mt-1  w-full  bg-transparent  text-lg  font-semibold  outline-none  placeholder:text-gray-400 "
            />

          </div>

        </div>

      </Card>

    </motion.div>

  );
}