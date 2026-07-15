import { useAuthStore } from "@/auth/stores/authStore";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import AppSplash from "@/auth/screens/Splash/AppSplash";

export default function RootNavigator() {


  const loading = useAuthStore(
    state => state.loading
);

const sessionChecked = useAuthStore(
    state => state.sessionChecked
);

const authenticated = useAuthStore(
    state => state.isAuthenticated
);

if (!sessionChecked || loading) {

    return <AppSplash />;

}

if (!authenticated) {

    return <AuthNavigator />;

}

return <AppNavigator />;


}