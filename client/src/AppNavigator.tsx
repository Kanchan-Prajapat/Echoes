import HomeView from "./components/HomeView";
import TimelineView from "./components/TimelineView";
import CalendarView from "./components/CalendarView";
import ProfileView from "./components/ProfileView";
import MemoryDetailView from "./components/MemoryDetailView";
import NewMemoryView from "./components/NewMemoryView";

import { Memory } from "./types/memory";
import { Tab } from "./App";

interface Props {
  tab: Tab;
  selectedMemory: Memory | null;

  setTab: (tab: Tab) => void;

  setSelectedMemory: (
    memory: Memory | null
  ) => void;
}

export default function AppNavigator({
  tab,
  selectedMemory,
  setTab,
  setSelectedMemory,
}: Props) {
  if (selectedMemory) {
    return (
      <MemoryDetailView
        memory={selectedMemory}
        onBack={() => setSelectedMemory(null)}
      />
    );
  }

  switch (tab) {
    case "home":
      return (
        <HomeView
          onOpenMemory={(memory) =>
            setSelectedMemory(memory)
          }
          onCreateMemory={() =>
            setTab("new-memory")
          }
        />
      );

    case "timeline":
      return <TimelineView />;

    case "calendar":
      return <CalendarView />;

    case "profile":
      return <ProfileView />;

    case "new-memory":

return (

    <NewMemoryView

        onSaved={() => {

            setTab("home");

        }}

    />

);

    default:
      return <HomeView
        onOpenMemory={(memory) =>
          setSelectedMemory(memory)
        }
        onCreateMemory={() =>
          setTab("new-memory")
        }
      />;
  }
}