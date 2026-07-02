import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";

import Splash from "@/pages/Splash";
import Welcome from "@/pages/Welcome";
import Home from "@/pages/Home";
import Timeline from "@/pages/Timeline";
import Calendar from "@/pages/Calendar";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";

import { ROUTES } from "@/constants/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Splash />,
      },

      {
        path: ROUTES.WELCOME,
        element: <Welcome />,
      },

      {
        path: ROUTES.HOME,
        element: <Home />,
      },

      {
        path: ROUTES.TIMELINE,
        element: <Timeline />,
      },

      {
        path: ROUTES.CALENDAR,
        element: <Calendar />,
      },

      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
    ],
  },
]);