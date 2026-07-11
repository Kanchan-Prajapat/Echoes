export type Screen =
  | "home"
  | "timeline"
  | "calendar"
  | "search"
  | "profile"
  | "echo-details"
  | "new-echo";

export interface NavigationState {
  /**
   * Current visible screen
   */
  screen: Screen;

  /**
   * Used when closing Detail/Search/New Echo
   */
  previousScreen?: Screen;

  /**
   * Opened Echo
   */
  selectedEchoId?: string;

  /**
   * Editing Echo
   */
  editingEchoId?: string;
}