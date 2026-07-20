import { motion } from "framer-motion";

import useSignup from "@/hooks/useSignup";

import TextField from "../../../components/ui/TextField";
import PasswordField from "../../../components/ui/PasswordField";
import PrimaryButton from "../../../components/ui/PrimaryButton";

export default function SignupForm() {

  const {

    form,

    loading,

    error,

    updateField,

    submit,

  } = useSignup();

  return (

    <motion.form

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        delay: 0.15,
      }}

      onSubmit={(e) => {

        e.preventDefault();

        submit();

      }}

      className="space-y-5"

    >

      <TextField

        label="Username"

        placeholder="Choose a username"

        value={form.username}

        onChange={(e) =>
          updateField(
            "username",
            e.target.value
          )
        }

      />

      <TextField

        label="Email"

        type="email"

        placeholder="Enter your email"

        value={form.email}

        onChange={(e) =>
          updateField(
            "email",
            e.target.value
          )
        }

      />

      <PasswordField

        label="Password"

        placeholder="Create a password"

        value={form.password}

        onChange={(e) =>
          updateField(
            "password",
            e.target.value
          )
        }

      />

      <PasswordField

        label="Confirm Password"

        placeholder="Confirm your password"

        value={form.confirmPassword}

        onChange={(e) =>
          updateField(
            "confirmPassword",
            e.target.value
          )
        }

      />

    {error && (
  <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3">
    {error.split("\n").map((msg, index) => (
      <p
        key={index}
        className="text-sm text-red-400"
      >
        • {msg}
      </p>
    ))}
  </div>
)}
      <PrimaryButton

        type="submit"

        loading={loading}

      >

        Create Account

      </PrimaryButton>

    </motion.form>

  );

}