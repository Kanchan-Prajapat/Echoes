import { Echo } from "./echo";

export type Screen =
  | "home"
  | "new-echo"
  | "timeline"
  | "calendar"
  | "search"
  | "profile";


export interface NavigationState {
  screen: Screen;

  selectedEchoId?: string;

  editingEchoId?: string;
}