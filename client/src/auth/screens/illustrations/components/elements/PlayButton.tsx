import { Play } from "lucide-react";

import GlassCard from "./GlassCard";

export default function PlayButton() {

  return (

    <GlassCard
      width={74}
      height={74}
      radius={22}
    >

      <Play

        size={30}

        fill="white"

        className="text-white ml-1"

      />

    </GlassCard>

  );

}