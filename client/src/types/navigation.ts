export type Screen =
  | "splash"
  | "welcome"

  | "login"
  | "signup"
  | "forgot-password"

  | "home"
  | "timeline"
  | "calendar"
  | "search"

  | "profile"
  | "settings"

  | "about"
  | "privacy"
  | "terms"
  | "change-password"

  | "echo-detail"
  | "setup-profile"
  | "new-echo";

export interface NavigationState {

  current: Screen;

  history: Screen[];

  selectedEchoId?: string;

  editingEchoId?: string;

}