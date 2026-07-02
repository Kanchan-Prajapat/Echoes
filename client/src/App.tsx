import { useState } from "react";

import Splash from "./components/Splash";
import Welcome from "./components/Welcome";
import BottomNav from "./components/BottomNav";

import AppNavigator from "./AppNavigator";

import { Memory } from "./types/memory";

export type Tab =
  | "home"
  | "timeline"
  | "calendar"
  | "profile"
  | "new-memory";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  const [tab, setTab] =
    useState<Tab>("home");

  const [selectedMemory, setSelectedMemory] =
    useState<Memory | null>(null);

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
        selectedMemory={selectedMemory}
        setSelectedMemory={setSelectedMemory}
      />

      {!selectedMemory && (
        <BottomNav
          active={tab}
          onChange={setTab}
        />
      )}
    </>
  );
}