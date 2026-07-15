import { useState } from "react";

import AppContainer from "@/styles/AppContainer";

import useChangePassword from "@/hooks/useChangePassword";
import useToast from "@/hooks/useToast";
import PasswordHeader from "./components/PasswordHeader";
import PasswordInput from "./components/PasswordInput";
import PasswordStrength from "./components/PasswordStrength";
import SaveButton from "./components/SaveButton";

interface Props {

  onBack: () => void;

}

export default function ChangePasswordView({

  onBack,

}: Props) {

  const [

    currentPassword,

    setCurrentPassword,

  ] = useState("");

  const [

    newPassword,

    setNewPassword,

  ] = useState("");

  const [

    confirmPassword,

    setConfirmPassword,

  ] = useState("");

  const {

    savePassword,

    loading,

    error,

  } = useChangePassword();

  const toast = useToast();

  async function handleSave() {

    if (newPassword !== confirmPassword) {

     toast.error("Passwords do not match.");

      return;

    }

    try {

      await savePassword(

        currentPassword,

        newPassword

      );

     toast.success(
  "Password updated successfully."
);
      onBack();

    }

    catch {}

  }

  const disabled =

    !currentPassword ||

    !newPassword ||

    !confirmPassword ||

    newPassword !== confirmPassword;

  return (

    <AppContainer
      className="
        mx-auto
        max-w-xl
        py-8
        pb-24
      "
    >

      <PasswordHeader

        onBack={onBack}

      />

      <PasswordInput

        label="Current Password"

        value={currentPassword}

        placeholder="Enter current password"

        onChange={setCurrentPassword}

      />

      <PasswordInput

        label="New Password"

        value={newPassword}

        placeholder="Create a new password"

        onChange={setNewPassword}

      />

      <PasswordStrength

        password={newPassword}

      />

      <PasswordInput

        label="Confirm Password"

        value={confirmPassword}

        placeholder="Confirm new password"

        onChange={setConfirmPassword}

      />

      {

        newPassword &&

        confirmPassword &&

        newPassword !== confirmPassword && (

          <p
            className="
              mb-4
              text-sm
              text-red-500
            "
          >

           ❌ Current Password is incorrect

          </p>

        )

      }

      {

        error && (

          <p
            className="
              mb-4
              text-sm
              text-red-500
            "
          >

            {error}

          </p>

        )

      }

      <SaveButton

        loading={loading}

        disabled={disabled}

        onClick={handleSave}

      />

    </AppContainer>

  );

}