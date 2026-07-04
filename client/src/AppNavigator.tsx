import HomeView from "./components/Home/HomeView";
import TimelineView from "./components/Timeline/TimelineView";
import CalendarView from "./components/Calendar/CalendarView";
import ProfileView from "./components/Profile/ProfileView";
import EchoDetailView from "./components/EchoDetailView";
import NewEchoView from "./components/NewEchoView";
import SearchView from "./components/Search/SearchView";

import {openScreen, openEcho, editEcho, } from "@/navigation/navigation";
import { NavigationState } from "@/types/navigation";

interface Props {
  navigation: NavigationState;

  setNavigation: React.Dispatch<
    React.SetStateAction<NavigationState>
  >;
}



export default function AppNavigator({
  navigation,
  setNavigation,
}: Props) {

  /* ---------- Echo Detail ---------- */

  if (navigation.selectedEchoId) {
    return (
      <EchoDetailView
        echoId={navigation.selectedEchoId}
        onBack={() =>
          setNavigation({
            screen:
              navigation.previousScreen ??
              "home",
          })
        }
       onEdit={(echoId) =>
  setNavigation(
    editEcho(
      navigation.previousScreen ??
        "home",
      echoId
    )
  )
}
      />
    );
  }

  /* ---------- Home ---------- */

  if (navigation.screen === "home") {
    return (
     <HomeView
  onOpenEcho={(echo) =>
    setNavigation(
      openEcho("home", echo.id)
    )
  }

  onCreateEcho={() =>
    setNavigation({
      screen: "new-echo",
      previousScreen: "home",
    })
  }

  onSearch={() =>
    setNavigation(
      openScreen("search")
    )
  }
/>
    );
  }

  /* ---------- Timeline ---------- */

  if (navigation.screen === "timeline") {
    return (
      <TimelineView
        onOpenEcho={(echo) =>
          setNavigation(
            openEcho("timeline", echo.id)
          )
        }
      />
    );
  }

  /* ---------- Calendar ---------- */

  if (navigation.screen === "calendar") {
    return (
         <CalendarView
  onOpenEcho={(echo) =>
    setNavigation(
      openEcho("calendar", echo.id)
    )
  }
/>
    );
  }


/* ---------- New Echo ---------- */

if (navigation.screen === "new-echo") {
  return (
    <NewEchoView
      editingEchoId={navigation.editingEchoId}
      onSaved={() =>
        setNavigation(
          openScreen(
            navigation.previousScreen ?? "home"
          )
        )
      }
    />
  );
}

  /* ---------- Search ---------- */

  if (navigation.screen === "search") {
    return (
   <SearchView
  onClose={() =>
    setNavigation(
      openScreen(
        navigation.previousScreen ??
          "home"
      )
    )
  }

  onOpenEcho={(echo) =>
    setNavigation(
      openEcho("search", echo.id)
    )
  }
/>
    );
  }

  /* ---------- Profile ---------- */

  return <ProfileView />;
}