import { useState } from "react";

import HomeView from "@/components/Home/HomeView";
import TimelineView from "@/components/Timeline/TimelineView";
import CalendarView from "@/components/Calendar/CalendarView";
import ProfileView from "@/components/Profile/ProfileView";
import BottomNav from "@/components/Shared/BottomNav";
import NewEchoView from "@/components/NewEchoView";
import EchoDetailView from "@/components/EchoDetailView";

export type Tab =
  | "home"
  | "timeline"
  | "calendar"
  | "echo-details"
  | "profile"
  | "new-echo";

export default function HomeNavigator() {

  const [tab, setTab] =
    useState<Tab>("home");

  function renderScreen() {

    switch (tab) {

      case "home":
        return <HomeView />;

      case "timeline":
        return <TimelineView />;

      case "echo-details":
        return <EchoDetailView/>;

      case "calendar":
        return <CalendarView />;

      case "new-echo":
        return <NewEchoView/>;

      case "profile":
        return <ProfileView />;

      default:
        return <HomeView />;

    }

  }

  return (

    <>
      {renderScreen()}

      <BottomNav
        active={tab}
        onChange={setTab}
      />
    </>

  );

}