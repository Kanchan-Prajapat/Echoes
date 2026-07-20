import Glow from "./components/core/Glow";
import Orbit from "./components/core/Orbit";
import Sparkles from "./components/core/Sparkles";
import Floating from "./components/core/Floating";

import Camera from "./components/elements/Camera";
import PhotoCard from "./components/elements/PhotoCard";
import PlayButton from "./components/elements/PlayButton";
import LocationPin from "./components/elements/LocationPin";

export default function CaptureIllustration() {

  return (

    <div

      className="

        relative

        flex

        h-[280px]

         max-w-[500px]

        items-center

        justify-center

        overflow-visible

      "

    >

  

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

      {/* Orbits */}

      <Orbit />

      <Orbit

        size={360}

        duration={24}

        opacity={0.18}

      />

      {/* Sparkles */}

      <Sparkles

        count={16}

      />

      {/* Floating Photo */}

      <Floating

        x={-120}

        y={-120}

        rotate={-14}

      >

        <PhotoCard

          width={100}

          height={120}

        />

      </Floating>

      {/* Floating Play */}

      <Floating

        x={-175}

        y={35}

        rotate={-18}

        duration={5}

      >

        <PlayButton />

      </Floating>

      {/* Floating Location */}

      <Floating

        x={165}

        y={40}

        rotate={15}

        duration={6}

      >

        <LocationPin />

      </Floating>

      {/* Camera */}

      <Camera />

    </div>

  );

}