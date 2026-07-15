


 import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SharedEchoPage from "../src/components/Share/SharedEchoPage";

import { getEchoes } from "./services/echo.service";
import { useEchoStore } from "./store/echoStore";
import { useAuthStore } from "@/auth/stores/authStore";
import RootNavigator from "./navigation/RootNavigator";
import useSession from "@/auth/hooks/useSession";
import Toast from "@/components/Toast/Toast";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";

export default function App() {

  const setEchoes = useEchoStore(
    (state) => state.setEchoes

  );
const setLoading =
useEchoStore(
    state => state.setLoading
);

const setError =
useEchoStore(
    state => state.setError
);

const authenticated = useAuthStore(
  (state) => state.isAuthenticated
);

useEffect(() => {
  console.log("authenticated:", authenticated);
}, [authenticated]);

useEffect(() => {
  console.log("Echoes:", useEchoStore.getState().echoes);
});


useEffect(() => {

  if (!authenticated) return;

  async function loadEchoes() {
  try {
    const response = await getEchoes();

    console.log("API Response:", response);

    setEchoes(response);

    console.log("Store After:", useEchoStore.getState().echoes);

  } catch (e) {
    console.error(e);
  }
}

 async function loadEchoes() {

  try {

    setLoading(true);

    const response =
      await getEchoes();

    setEchoes(response);

  }

  catch (error) {

    console.error(error);

    setError(
      "Failed to load memories."
    );

  }

  finally {

    setLoading(false);

  }

}
}, [authenticated, setEchoes]);
    useSession();

 return (

    <>

      <Routes>

        <Route
          path="/share/:token"
          element={<SharedEchoPage />}
        />

        <Route
          path="/*"
          element={<RootNavigator />}
        />

      </Routes>

      <Toast />

      <ConfirmModal />

    </>

);
}