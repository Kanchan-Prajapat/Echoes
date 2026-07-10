import AppContainer from "@/styles/AppContainer";

import Header from "./components/Header";
import Pagination from "./components/Pagination";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SkipButton from "./components/SkipButton";

import WelcomeSlide from "./WelcomeSlide";

import { slides } from "../../utils/slides";
import useWelcome from "@/hooks/useWelcome";


export default function WelcomeScreen() {

  const {
  current,
  last,
  next,
  skip,
} = useWelcome();

    return (

        <main
            className="
relative
min-h-screen
overflow-hidden
bg-[#090611]
">

            {/* Background Glow */}

            <>
                <div
                    className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,#7C3AED22,transparent_45%)]
    "
                />

                <div
                    className="
        absolute
        left-1/2
        top-[-120px]
        h-[650px]
        w-[650px]
        -translate-x-1/2
        rounded-full
        bg-violet-500/10
        blur-[220px]
    "
                />

                <div
                    className="
        absolute
        bottom-[-180px]
        left-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-fuchsia-600/10
        blur-[220px]
    "
                />
            </>

            <AppContainer
                className="
          relative

          flex

          min-h-screen

          flex-col

         pt-8 pb-6
        "
            >

                {/* Header */}

                <Header />

                {/* Slide */}

                <div
                    className="
flex
flex-1
items-center
justify-center
pt-4
pb-6
">

                    <WelcomeSlide

                        slide={slides[current]}

                    />

                </div>

                {/* Footer */}

                <footer
                    className="
            space-y-8

            pb-8
          "
                >

                    <Pagination

                        current={current}

                        total={slides.length}

                    />

                    <PrimaryButton
                        onClick={next}
                    >
                        {last ? "Get Started" : "Next"}
                    </PrimaryButton>

                    <SkipButton

                        visible={!last}

                        onClick={skip}

                    />

                </footer>

            </AppContainer>

        </main>

    );

}