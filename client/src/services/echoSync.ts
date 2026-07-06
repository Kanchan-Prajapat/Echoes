import { getEchoes } from "./echo.service";
import { useEchoStore } from "@/store/echoStore";

export async function refreshEchoes() {
  try {
    const echoes = await getEchoes();

    useEchoStore.getState().setEchoes(echoes);

    console.log("✅ Echoes synchronized");
  } catch (error) {
    console.error(
      "❌ Failed to synchronize Echoes",
      error
    );
  }
}