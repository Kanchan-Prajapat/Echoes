import HomeView from "@/components/Home/HomeView";
import TimelineView from "@/components/Timeline/TimelineView";
import CalendarView from "@/components/Calendar/CalendarView";
import SearchView from "@/components/Search/SearchView";
import ProfileView from "@/components/Profile/ProfileView";
import SettingsView from "@/components/Settings/SettingsView";
import EchoDetailView from "@/components/EchoDetailView";
import NewEchoView from "@/components/NewEchoView";
import ChangePasswordView from "@/components/Settings/ChangePassword/ChangePasswordView";
import BottomNav from "@/components/Shared/BottomNav";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/Shared/PageTransition";

import { useNavigationStore } from "@/store/navigationStore";

export default function AppNavigator() {


  const current = useNavigationStore(
    (state) => state.current
  );

  const navigate = useNavigationStore(
    (state) => state.navigate
  );

  const goBack = useNavigationStore(
    (state) => state.goBack
  );

  const selectedEchoId = useNavigationStore(
    (state) => state.selectedEchoId
  );

  const editingEchoId = useNavigationStore(
    (state) => state.editingEchoId
  );


  /* -----------------------------
     Echo Detail
  ----------------------------- */

  if (
    current === "echo-detail" &&
    selectedEchoId
  ) {

    return (

      <EchoDetailView

        echoId={selectedEchoId}

        onBack={goBack}

        onEdit={(echoId) =>

          navigate(

            "new-echo",

            {

              editingEchoId: echoId,

            }

          )

        }

      />

    );

  }

  /* -----------------------------
     New Echo
  ----------------------------- */

  if (current === "new-echo") {

    return (

      <NewEchoView

        editingEchoId={editingEchoId}

        onSaved={goBack}

      />

    );

  }

  /* -----------------------------
     Search
  ----------------------------- */

  if (current === "search") {

    return (

      <SearchView

        onClose={goBack}

        onOpenEcho={(echo) =>

          navigate(

            "echo-detail",

            {

              selectedEchoId: echo.id,

            }

          )

        }

      />

    );

  }

  if (current === "change-password") {

    return (

      <ChangePasswordView
        onBack={goBack} />

    );

  }

  /* -----------------------------
     Settings
  ----------------------------- */

  if (current === "settings") {

    return (

      <SettingsView

        onBack={goBack}

        onChangePassword={() =>

          navigate("change-password")

        }

        onPrivacy={() =>

          navigate("privacy")

        }

        onTerms={() =>

          navigate("terms")

        }

        onAbout={() =>

          navigate("about")

        }

      />

    );

  }

  /* -----------------------------
     Main Screens
  ----------------------------- */
  console.log("Current Screen:", current);
  return (

    <>

      {current === "home" && (

        <PageTransition>

          <HomeView

            onOpenEcho={(echo) =>

              navigate(

                "echo-detail",

                {

                  selectedEchoId: echo.id,

                }

              )

            }

            onCreateEcho={() =>

              navigate("new-echo")

            }

            onSearch={() =>

              navigate("search")

            }

          />
        </PageTransition>

      )}

      {current === "timeline" && (

        <PageTransition>

          <TimelineView

            onOpenEcho={(echo) =>

              navigate(

                "echo-detail",

                {

                  selectedEchoId: echo.id,

                }

              )

            }

          />
        </PageTransition>

      )}

      {current === "calendar" && (

        <PageTransition>

          <CalendarView

            onOpenEcho={(echo) =>

              navigate(

                "echo-detail",

                {

                  selectedEchoId: echo.id,

                }

              )

            }

          />
        </PageTransition>

      )}

      {current === "profile" && (
        <PageTransition>
          <ProfileView />
        </PageTransition>

      )}

      <BottomNav

        active={current}

        onChange={navigate}

      />

    </>

  );

}