import Glow from "./components/core/Glow";
import Orbit from "./components/core/Orbit";
import Sparkles from "./components/core/Sparkles";
import Floating from "./components/core/Floating";

import Journal from "./components/elements/Journal";
import PhotoCard from "./components/elements/PhotoCard";
import HeartBubble from "./components/elements/HeartBubble";

export default function StoryIllustration() {

  return (

    <div
      className="
        relative
        flex
        h-[350px]
             max-w-[520px]

        items-center

        justify-center

        overflow-visible

         mb-5
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
      {/* Orbit */}

      <Orbit />

      <Orbit
        size={370}
        duration={26}
        opacity={0.22}
      />

      {/* Sparkles */}

      <Sparkles count={20} />

      {/* Left Photo */}

      <Floating
        x={-150}
        y={-70}
        rotate={-15}
      >

        <PhotoCard
          width={110}
          height={145}
        />

      </Floating>

      {/* Right Photo */}

      <Floating
        x={145}
        y={-50}
        rotate={14}
        duration={5}
      >

        <PhotoCard
          width={95}
          height={125}
        />

      </Floating>

      {/* Heart */}

      <Floating
        x={170}
        y={90}
        rotate={18}
        duration={6}
      >

        <HeartBubble />

      </Floating>

      {/* Journal */}

      <Journal />

    </div>

  );

}