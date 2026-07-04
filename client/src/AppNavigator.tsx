import HomeView from "./components/Home/HomeView";
import TimelineView from "./components/Timeline/TimelineView";
import CalendarView from "./components/Calendar/CalendarView";
import ProfileView from "./components/ProfileView";
import EchoDetailView from "./components/EchoDetailView";
import NewEchoView from "./components/NewEchoView";
import SearchView from "./components/Search/SearchView";

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
  if (navigation.selectedEchoId) {
    return (
    <EchoDetailView
    echoId={navigation.selectedEchoId!}

        onBack={() =>
          setNavigation({
            screen: "home",
          })
        }

        onEdit={(echoId) =>

          setNavigation({

            screen: "new-echo",

            editingEchoId: echoId,

          })

        }

      />
    );
  }

  const renderHome = () => (
   <HomeView
      onOpenEcho={(echo) =>
        setNavigation({
          screen: "home",
          selectedEchoId: echo.id,
        })
      }
      onCreateEcho={() =>
        setNavigation({
          screen: "new-echo",
        })
      }
      onSearch={() =>
        setNavigation({
          screen: "search",
        })
      }
    />
);

  switch (navigation.screen) {
    
    case "home":
      return (
        renderHome()
      );

    case "timeline":
  return (
    <TimelineView
      onOpenEcho={(echo) =>
        setNavigation({
          screen: "home",
          selectedEchoId: echo.id,
        })
      }
    />
  );

    case "calendar":
      return <CalendarView />;

    case "profile":
      return <ProfileView />;

    case "search":

return (

<SearchView

    onClose={()=>

        setNavigation({

            screen:"home",

        })

    }

   onOpenEcho={(echo) =>
    setNavigation({
        screen: "home",
        selectedEchoId: echo.id,
    })
}

/>

);

    case "new-echo":

      return (

       <NewEchoView
    editingEchoId={navigation.editingEchoId}
    onSaved={() =>
        setNavigation({
            screen: "home",
        })
    }
/>

      );

    default:
      return renderHome();

  }
}