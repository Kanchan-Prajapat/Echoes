import { NavigationState, Screen } from "@/types/navigation";

export const openScreen = (
  screen: Screen
): NavigationState => ({
  screen,
  previousScreen: screen,
});

export const openEcho = (
  screen: Screen,
  echoId: string
): NavigationState => ({
  screen,
  previousScreen: screen,
  selectedEchoId: echoId,
});

export const editEcho = (
  previousScreen: Screen,
  echoId: string
): NavigationState => ({
  screen: "new-echo",
  previousScreen,
  editingEchoId: echoId,
});