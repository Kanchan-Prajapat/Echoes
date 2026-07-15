


 import { useEffect } from "react";

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

  loadEchoes();

}, [authenticated, setEchoes]);
    useSession();

 return (

  <>

    <RootNavigator />

    <Toast />

    <ConfirmModal />

  </>

);
}