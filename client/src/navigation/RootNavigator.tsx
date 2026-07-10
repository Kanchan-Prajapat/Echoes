import { useAuthStore } from "@/auth/stores/authStore";

import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

export default function RootNavigator() {

  const authenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  if (!authenticated) {

    return <AuthNavigator />;

  }

  return <HomeNavigator />;

}