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

const navigation =
  useNavigationStore.getState();

if (response.user.profileCompleted) {

  navigation.reset("home");

} else {

  navigation.reset("setup-profile");

}

    }

   catch (error: any) {

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