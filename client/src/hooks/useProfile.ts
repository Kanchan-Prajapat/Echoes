import { useCallback, useEffect, useState } from "react";

import { getProfile } from "@/auth/api/profile.api";

import { Profile } from "../types/profile.types";

export default function useProfile() {

  const [profile, setProfile] =
    useState<Profile | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchProfile = useCallback(

    async () => {

      try {

        setLoading(true);

        setError("");

        const response =
          await getProfile();

        setProfile(
          response.data
        );

      }

      catch (error: any) {

        setError(

          error.response?.data?.message ??

          "Failed to load profile."

        );

      }

      finally {

        setLoading(false);

      }

    },

    []

  );

  useEffect(() => {

    fetchProfile();

  }, [fetchProfile]);

  return {

    profile,

    loading,

    error,

    refreshProfile: fetchProfile,

  };

}