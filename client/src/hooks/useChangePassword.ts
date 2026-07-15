import { useState } from "react";

import {

  changePassword,

} from "@/auth/api/password.api";

export default function useChangePassword() {

  const [loading, setLoading] =

    useState(false);

  const [error, setError] =

    useState("");

  async function savePassword(

    currentPassword: string,

    newPassword: string

  ) {

    try {

      setLoading(true);

      setError("");

      const response =

        await changePassword({

          currentPassword,

          newPassword,

        });

      return response;

    }

    catch (error: any) {

      const message =

        error.response?.data?.message ??

        "Failed to change password.";

      setError(message);

      throw error;

    }

    finally {

      setLoading(false);

    }

  }

  return {

    savePassword,

    loading,

    error,

  };

}