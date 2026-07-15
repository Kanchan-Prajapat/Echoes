import WelcomeScreen from "@/auth/screens/welcome/WelcomeScreen";
import SignupScreen from "@/auth/screens/Signup/SignupScreen";
import LoginScreen from "@/auth/screens/Login/LoginScreen";

import { useNavigationStore } from "@/store/navigationStore";

export default function AuthNavigator() {

  const current = useNavigationStore(
    (state) => state.current
  );

  switch (current) {

    case "welcome":
      return <WelcomeScreen />;

    case "signup":
      return <SignupScreen />;

    case "login":
      return <LoginScreen />;

    default:
      return <WelcomeScreen />;

  }

}