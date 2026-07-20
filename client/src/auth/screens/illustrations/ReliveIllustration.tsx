import Glow from "./components/core/Glow";
import Orbit from "./components/core/Orbit";
import Sparkles from "./components/core/Sparkles";
import Floating from "./components/core/Floating";

import Calendar from "./components/elements/Calendar";
import Clock from "./components/elements/Clock";
import PhotoCard from "./components/elements/PhotoCard";

export default function ReliveIllustration() {

  return (

    <div
      className="
        relative
        flex
        h-200px]
         max-w-[450px]

        items-center

        justify-center

        overflow-visible

        mb-15
      "
    >

      {/* Background */}

           {/* Background */}
   <Glow
       color="#32037e"
       opacity={0.08}
       blur={180}
   />
   
         <Glow
       size={260}
       color="#120429"
       opacity={0.05}
       blur={120}
       className="bottom-8 right-10"
   />

      {/* Orbit */}

      <Orbit />

      <Orbit
        size={320}
        duration={24}
        opacity={0.22}
      />

      {/* Sparkles */}

      <Sparkles count={18} />

      {/* Floating Photo */}

      <Floating
        x={-145}
        y={-90}
        rotate={-14}
      >

        <PhotoCard
          width={100}
          height={120}
        />

      </Floating>

      {/* Floating Clock */}

      <Floating
        x={155}
        y={-70}
        rotate={12}
        duration={6}
      >

        <Clock />

      </Floating>

      {/* Floating Photo */}

      <Floating
        x={155}
        y={85}
        rotate={16}
        duration={5}
      >

        <PhotoCard
          width={80}
          height={110}
        />

      </Floating>

      {/* Main Calendar */}

      <Calendar />

    </div>

  );

}