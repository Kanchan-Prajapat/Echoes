import { useState } from "react";

import Splash from "./components/Splash";
import Welcome from "./components/Welcome";
import BottomNav from "./components/BottomNav";

import AppNavigator from "./AppNavigator";

import { Echo } from "./types/echo";

export type Tab =
  | "home"
  | "timeline"
  | "calendar"
  | "profile"
  | "new-echo";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  const [tab, setTab] =
    useState<Tab>("home");

  const [selectedEcho, setSelectedEcho] =
    useState<Echo | null>(null);

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
        tab={tab}
        setTab={setTab}
        selectedEcho={selectedEcho}
        setSelectedEcho={setSelectedEcho}
      />

      {!selectedEcho && (
        <BottomNav
          active={tab}
          onChange={setTab}
        />
      )}
    </>
  );
}