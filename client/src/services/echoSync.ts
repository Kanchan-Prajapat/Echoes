import { getEchoes } from "./echo.service";
import { useEchoStore } from "@/store/echoStore";

export async function refreshEchoes() {
  try {
    const echoes = await getEchoes();
    useEchoStore.getState().setEchoes(echoes);

  } catch (error) {
    console.error(error);
  }
}