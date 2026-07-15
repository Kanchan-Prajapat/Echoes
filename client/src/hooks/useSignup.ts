import { useState } from "react";
import { signup } from "@/auth/api/auth.api";
interface SignupData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
import { useAuthStore } from "@/auth/stores/authStore";
import { useNavigationStore } from "@/store/navigationStore";
export default function useSignup() {
const login = useAuthStore(
  (state) => state.login
);

  const [form, setForm] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const updateField = (
    field: keyof SignupData,
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
      !form.username ||
      !form.email ||
      !form.password
    ) {

      setError(
        "Please fill all fields."
      );

      return;

    }

    if (
      form.password !==
      form.confirmPassword
    ) {

      setError(
        "Passwords do not match."
      );

      return;

    }

    try {

      setLoading(true);

 const response = await signup({
  username: form.username,
  email: form.email,
  password: form.password,
});

login(
  response.user,
  response.token
);



useNavigationStore
  .getState()
  .reset("home");

console.log(response);

// Next we'll navigate to Login screen

      console.log(form);

    }

   catch (error: any) {

  console.log("Signup Error:", error.response);

  console.log("Backend:", error.response?.data);

  setError(

    error.response?.data?.message ??

    "Signup failed"

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