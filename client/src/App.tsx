import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import RootNavigator from "./navigation/RootNavigator";
import SharedEchoPage from "./components/Share/SharedEchoPage";

import Toast from "@/components/Toast/Toast";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";

import useSession from "@/auth/hooks/useSession";
import { useAuthStore } from "@/auth/stores/authStore";

import { getEchoes } from "@/services/echo.service";

import { useEchoStore } from "@/store/echoStore";

export default function App() {

  useSession();

  const authenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const setEchoes = useEchoStore(
    (state) => state.setEchoes
  );

  const setLoading = useEchoStore(
    (state) => state.setLoading
  );

  const setError = useEchoStore(
    (state) => state.setError
  );

  useEffect(() => {

    if (!authenticated) return;

    async function loadEchoes() {

      try {

        setLoading(true);

        const echoes = await getEchoes();

        setEchoes(echoes);

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

    loadEchoes();

  }, [
    authenticated,
    setEchoes,
    setLoading,
    setError,
  ]);

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