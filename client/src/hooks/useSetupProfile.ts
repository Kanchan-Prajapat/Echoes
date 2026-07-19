import { useState } from "react";

import { updateProfile } from "@/services/user.service";
import type { Gender } from "@/types/profile.types";
import { useAuthStore } from "@/auth/stores/authStore";
import { useNavigationStore } from "@/store/navigationStore";

export default function useSetupProfile() {

  const updateOwner = useAuthStore(
    (state) => state.updateOwner
  );

  const navigation =
    useNavigationStore.getState();

  const [dateOfBirth, setDateOfBirth] =
    useState("");

 const [gender, setGender] =
  useState<Gender | undefined>(undefined);

  const [city, setCity] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const owner = useAuthStore(
    state => state.owner
  );

  const [username, setUsername] = useState(
    owner?.username ?? ""
  );

  async function submit() {
    setError("");
    if (!username.trim()) {
      setError("Username is required.");
      return;
    }

    if (!dateOfBirth) {
      setError("Please select your birthday.");
      return;
    }

    try {

      setLoading(true);

      const updatedUser =
        await updateProfile({
          username,
          dateOfBirth,
          gender:
            gender || undefined,
          city:
            city.trim() || undefined,

        });

      updateOwner(updatedUser);
      navigation.reset("home");
    }

    catch (error: any) {
      console.error(error);
      setError(
        error?.response?.data?.message ??
        "Failed to update profile."
      );
    }
    finally {
      setLoading(false);
    }

  }

  return {

    username,
    setUsername,

    dateOfBirth,
    setDateOfBirth,

    gender,
    setGender,

    city,
    setCity,

    loading,

    error,

    submit,

  };

}