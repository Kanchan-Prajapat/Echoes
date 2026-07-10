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

        <p
          className="
            text-center
            text-sm
            text-red-400
          "
        >
          {error}
        </p>

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