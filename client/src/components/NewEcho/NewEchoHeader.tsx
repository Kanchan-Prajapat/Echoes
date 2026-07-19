import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Props {
  editing: boolean;
  onBack:()=>  void;
}

export default function NewEchoHeader({
  editing,
  onBack,
}: Props) {

  return (

    <motion.header

      initial={{ opacity: 0, y: -20, }}

      animate={{ opacity: 1, y: 0,}}

      transition={{ duration: .35,}}

      className="mb-8"  >
      <ArrowLeft
  onClick={onBack}
  className="cursor-pointer"
/>

      <p
        className="  text-xs  font-bold  uppercase  tracking-[0.25em]  text-violet-600">

        {editing
          ? "Edit Memory"
          : "New Memory"}

      </p>

      <h1
        className=" mt-2 text-4xl font-black">

        {editing
          ? "Update your story"
          : "Capture a moment"}

      </h1>

      <p
        className=" mt-3 max-w-sm text-gray-500">

        Every memory deserves
        a beautiful story.

      </p>

    </motion.header>

  );

}