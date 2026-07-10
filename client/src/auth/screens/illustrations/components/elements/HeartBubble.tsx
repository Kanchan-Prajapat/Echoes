import { Heart } from "lucide-react";

import GlassCard from "./GlassCard";

export default function HeartBubble() {

  return (

    <GlassCard

      width={80}

      height={80}

      radius={24}

    >

      <Heart

        size={34}

        fill="white"

        className="text-white"

      />

    </GlassCard>

  );

}