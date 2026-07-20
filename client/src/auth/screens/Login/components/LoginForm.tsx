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

        Sign In

      </PrimaryButton>

    </motion.form>

  );

}