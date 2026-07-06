import { useState } from "react";
import { useEffect } from "react";
import { getEchoes } from "./services/echo.service";
import { useEchoStore } from "./store/echoStore";

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
  const setEchoes = useEchoStore(
  (state) => state.setEchoes
);

useEffect(() => {
  async function loadEchoes() {
    try {
      const echoes = await getEchoes();

      console.log("📦 Echoes from MongoDB", echoes);

      setEchoes(echoes);
    } catch (error) {
      console.error("Failed to load echoes", error);
    }
  }

  loadEchoes();
}, [setEchoes]);

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