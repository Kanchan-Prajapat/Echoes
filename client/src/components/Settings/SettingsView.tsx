import { useState } from "react";

import AppContainer from "@/styles/AppContainer";

import { settingsSections } from "@/types/data";
import useToast from "@/hooks/useToast";

import SettingsHeader from "./components/SettingsHeader";
import SettingsSection from "./components/SettingsSection";
import SettingsFooter from "./components/SettingsFooter";
import AccountCard from "./components/AccountCard";
import useProfile from "@/hooks/useProfile";
import { useNavigationStore } from "@/store/navigationStore";
import ErrorState from "../Shared/ErrorState";
interface Props {

    onBack: () => void;

    onChangePassword: () => void;

    onPrivacy: () => void;

    onTerms: () => void;

    onAbout: () => void;

}

export default function SettingsView({

    onBack,

}: Props) {

    const [toggles, setToggles] =
        useState({

            notifications: true,

            darkmode: false,

        });

    const navigate = useNavigationStore(
        (state) => state.navigate
    );

    const toast = useToast();

    function handleToggle(
        id: string
    ) {

        setToggles((prev) => {

            const updated = {

                ...prev,

                [id]: !prev[id as keyof typeof prev],

            };

            // toast.info(

            //   updated[id as keyof typeof updated]

            //     ? `${id} enabled`

            //     : `${id} disabled`

            // );

            return updated;

        });
           toast.info(
                "This Feature will be available soon."
            );

    }

    function handleItemClick(
        id: string
    ) {

        switch (id) {

            case "password":

                navigate("change-password");

                break;

            case "privacy":

                toast.info(
                    "Privacy Policy coming soon."
                );
                break;

            case "terms":

                toast.info(
                    "Terms & Conditions coming soon."
                );

                break;

            case "about":

                toast.info(
                    "About Echoes coming soon."
                );
                break;

        }

    }



    const {

        profile,

        loading,
        error

    } = useProfile();

    if (loading) {

        return (

            <AppContainer className="py-8">

                Loading...

            </AppContainer>

        );

    }

    if (error) {
  return (
    <AppContainer className="py-8">
      <ErrorState
        message="Unable to load settings."
      />
    </AppContainer>
  );
}

    return (


        <AppContainer className="py-8 pb-32">

            <SettingsHeader

                onBack={onBack}

            />

          {profile ? (

  <AccountCard
    profile={profile}
    onClick={onBack}
  />

) : (

  <div className="mb-8 rounded-2xl border p-6 text-center text-gray-400">

    No account information found.

  </div>

)}
            {settingsSections.map(

                (section) => (

                    <SettingsSection

                        key={section.title}

                        title={section.title}

                        items={section.items}

                        toggles={toggles}

                        onToggle={handleToggle}

                        onItemClick={handleItemClick}

                    />

                )

            )}

            <SettingsFooter />

        </AppContainer>

    );

}