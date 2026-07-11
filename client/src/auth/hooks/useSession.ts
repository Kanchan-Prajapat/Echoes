import { useEffect } from "react";

import { getCurrentUser } from "@/auth/api/auth.api";
import { useAuthStore } from "@/auth/stores/authStore";

export default function useSession() {

  const token = useAuthStore((state) => state.token);

  const login = useAuthStore((state) => state.login);

  const logout = useAuthStore((state) => state.logout);

  const setLoading = useAuthStore((state) => state.setLoading);

  const setSessionChecked = useAuthStore(
    (state) => state.setSessionChecked
  );

  useEffect(() => {

     async function restoreSession() {

      setLoading(true);

      // Splash should stay visible for at least 1.5 sec
      const minimumSplash = new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      try {

        if (token) {

          const response = await getCurrentUser();

          login(
            response.data,
            token
          );

        }

      } catch {

        logout();

      } finally {

        await minimumSplash;

        setLoading(false);

        setSessionChecked(true);

      }

    }

    restoreSession();

  }, []);

}