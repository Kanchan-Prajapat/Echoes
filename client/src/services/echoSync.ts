import { getEchoes } from "./echo.service";
import { useEchoStore } from "@/store/echoStore";

export async function refreshEchoes() {
  try {
    const echoes = await getEchoes();

    console.log("===== REFRESH =====");
    console.log(echoes);
    console.log("Is Array:", Array.isArray(echoes));
    console.log("Type:", typeof echoes);

    useEchoStore.getState().setEchoes(echoes);

  } catch (error) {
    console.error(error);
  }
}