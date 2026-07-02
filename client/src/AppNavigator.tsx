import HomeView from "./components/HomeView";
import TimelineView from "./components/TimelineView";
import CalendarView from "./components/CalendarView";
import ProfileView from "./components/ProfileView";
import EchoDetailView from "./components/EchoDetailView";
import NewEchoView from "./components/NewEchoView";

import { Echo } from "./types/echo";
import { Tab } from "./App";


interface Props {
  tab: Tab;
  selectedEcho: Echo | null;

  setTab: (tab: Tab) => void;

  setSelectedEcho: (
    echo: Echo | null
  ) => void;
}

export default function AppNavigator({
  tab,
  selectedEcho,
  setTab,
  setSelectedEcho,
}: Props) {
  if (selectedEcho) {
    return (
      <EchoDetailView
        echo={selectedEcho}
        onBack={() => setSelectedEcho(null)}
      />
    );
  }

  switch (tab) {
    case "home":
      return (
        <HomeView
          onOpenEcho={(echo) =>
            setSelectedEcho(echo)
          }
          onCreateEcho={() =>
            setTab("new-echo")
          }
        />
      );

    case "timeline":
      return <TimelineView />;

    case "calendar":
      return <CalendarView />;

    case "profile":
      return <ProfileView />;

    case "new-echo":

return (

    <NewEchoView

        onSaved={() => {

            setTab("home");

        }}

    />

);

    default:
      return <HomeView
        onOpenEcho={(echo) =>
          setSelectedEcho(echo)
        }
        onCreateEcho={() =>
          setTab("new-echo")
        }
      />;
  }
}