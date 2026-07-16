import { useState } from "react";

import { login } from "../auth/api/auth.api";

import { useAuthStore } from "@/auth/stores/authStore";
import { useNavigationStore } from "@/store/navigationStore";


interface LoginData {
  email: string;
  password: string;
}

export default function useLogin() {

  const [form, setForm] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const loginStore =
    useAuthStore(
      (state) => state.login
    );


  const updateField = (
    field: keyof LoginData,
    value: string
  ) => {

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

  };

  async function submit() {

    setError("");

    if (
      !form.email ||
      !form.password
    ) {

      setError(
        "Please fill all fields."
      );

      return;

    }

    try {

      setLoading(true);

   const response = await login(form);

loginStore(
  response.user,
  response.token
);

const navigation =
  useNavigationStore.getState();

if (response.user.profileCompleted) {

  navigation.reset("home");

} else {

  navigation.reset("setup-profile");

}

    catch (error: any) {

      setError(

        error.response?.data?.message ??

        "Login failed."

      );

    }

    finally {

      setLoading(false);

    }

  }

  return {

    form,

    loading,

    error,

    updateField,

    submit,

  };

}