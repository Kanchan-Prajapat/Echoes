import { useState } from "react";

import { updateProfile } from "@/auth/api/profile.api";

import { UpdateProfileDTO } from "../types/profile.types";

export default function useEditProfile() {

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function saveProfile(

    data: UpdateProfileDTO

  ) {

    try {

      setLoading(true);

      setError("");

      const response =
        await updateProfile(data);

      return response;

    }

    catch (error: any) {

      const message =

        error.response?.data?.message ??

        "Failed to update profile.";

      setError(message);

      throw error;

    }

    finally {

      setLoading(false);

    }

  }

  return {

    saveProfile,

    loading,

    error,

  };

}