import AppContainer from "@/styles/AppContainer";

import SignupHeader from "./components/SignupHeader";
import SignupForm from "./components/SignupForm";
import LoginLink from "./components/LoginLink";

export default function SignupScreen() {

  return (

    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#090611]
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-40
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
      />

      <AppContainer
        className="
          relative
          flex
          min-h-screen
          flex-col
          justify-center
          py-10
        "
      >

        <SignupHeader />

        <SignupForm />

        <LoginLink />

      </AppContainer>

    </main>

  );

}