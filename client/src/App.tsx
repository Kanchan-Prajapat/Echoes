import { useState } from "react";

import Splash from "./components/Splash";
import Welcome from "./components/Welcome";
import BottomNav from "./components/BottomNav";

import AppNavigator from "./AppNavigator";

import { Echo } from "./types/echo";
import { NavigationState } from "./types/navigation";

export type Tab =
  | "home"
  | "timeline"
  | "calendar"
  | "profile"
  | "new-echo";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  const [navigation, setNavigation] = useState<NavigationState>({
    screen: "home",
  });

  if (loading) {
    return (
      <Splash
        onFinish={() =>
          setLoading(false)
        }
      />
    );
  }

  if (!started) {
    return (
      <Welcome
        onStart={() =>
          setStarted(true)
        }
      />
    );
  }

  return (
    <>
      <AppNavigator
        navigation={navigation}
        setNavigation={setNavigation}
      />

      {!navigation.selectedEcho && (
        <BottomNav
          active={navigation.screen}
         onChange={(screen) =>
    setNavigation({
        screen,
        previousScreen: screen,
    })
}
        />
      )}
    </>
  );
}