import { useState } from "react";

import { slides } from "@/auth/utils/slides";
import { useNavigationStore } from "@/store/navigationStore";

export default function useWelcome() {

  const [current, setCurrent] = useState(0);

  const navigate = useNavigationStore(
    (state) => state.navigate
  );

  const last = current === slides.length - 1;

  const next = () => {

    if (last) {

      navigate("signup");

      return;

    }

    setCurrent((prev) => prev + 1);

  };

  const previous = () => {

    setCurrent((prev) => Math.max(prev - 1, 0));

  };

  const skip = () => {

    navigate("signup");

  };

  return {

    current,

    last,

    next,

    previous,

    skip,

  };

}