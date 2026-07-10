


 import { useEffect } from "react";

import { getEchoes } from "./services/echo.service";
import { useEchoStore } from "./store/echoStore";
import { useAuthStore } from "@/auth/stores/authStore";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {

  const setEchoes = useEchoStore(
    (state) => state.setEchoes
  );


const authenticated = useAuthStore(
  (state) => state.isAuthenticated
);

useEffect(() => {

  if (!authenticated) return;

  async function loadEchoes() {

    try {

      const response = await getEchoes();

      setEchoes(response.data ?? response);

    }

    catch (error) {

      console.error(error);

    }

  }

  loadEchoes();

}, [authenticated, setEchoes]);

  return <RootNavigator />;

}