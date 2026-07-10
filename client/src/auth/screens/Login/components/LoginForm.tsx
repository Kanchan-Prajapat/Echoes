import { motion } from "framer-motion";

import TextField from "@/auth/components/ui/TextField";
import PasswordField from "@/auth/components/ui/PasswordField";
import PrimaryButton from "@/auth/components/ui/PrimaryButton";

import useLogin from "@/hooks/useLogin";

export default function LoginForm() {

  const {

    form,

    loading,

    error,

    updateField,

    submit,

  } = useLogin();

  return (

    <motion.form

      initial={{
        opacity: 0,
        y: 25,
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

        placeholder="Enter your password"

        value={form.password}

        onChange={(e) =>

          updateField(

            "password",

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

        Sign In

      </PrimaryButton>

    </motion.form>

  );

}