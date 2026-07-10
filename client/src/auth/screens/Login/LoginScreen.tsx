import AppContainer from "@/styles/AppContainer";

import GlassCard from "@/auth/components/ui/GlassCard";

import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import SignupLink from "./components/SignupLink";

export default function LoginScreen() {

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

        <LoginHeader />

        <GlassCard className="mt-8">

          <LoginForm />

          <SignupLink />

        </GlassCard>

      </AppContainer>

    </main>

  );

}