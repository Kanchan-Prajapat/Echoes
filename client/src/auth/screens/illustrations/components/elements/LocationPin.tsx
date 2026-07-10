import { MapPin } from "lucide-react";

import GlassCard from "./GlassCard";

export default function LocationPin() {

  return (

    <GlassCard
      width={68}
      height={68}
      radius={20}
    >

      <MapPin

        size={28}

        strokeWidth={2.5}

        className="text-white"

      />

    </GlassCard>

  );

}