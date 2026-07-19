import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";
import { useAuthStore } from "@/auth/stores/authStore";
import useSetupProfile from "@/hooks/useSetupProfile";
import { useState } from "react";
import { format } from "date-fns";
import type { Gender } from "@/types/profile.types";
import CalendarModal from "@/components/Modals/CalendarModal";
import { DatePickerCard } from "../NewEcho";
export default function SetupProfileView() {

  const {

    username,
    setUsername,

    dateOfBirth,
    setDateOfBirth,

    gender,
    setGender,

    city,
    setCity,

    loading,

    error,

    submit,

  } = useSetupProfile();

  const owner = useAuthStore(
    (state) => state.owner
  );

const [calendarOpen, setCalendarOpen] =
  useState(false); 

const GENDERS: {
  value: Gender;
  label: string;
}[] = [
  {
    value: "male",
    label: "👨 Male",
  },
  {
    value: "female",
    label: "👩 Female",
  },
  {
    value: "other",
    label: "🌈 Other",
  },
];

  return (

    <main className="min-h-screen bg-[#F8F9FD]">

      <div className="mx-auto max-w-xl px-6 py-14">

        <motion.div

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: .45,
          }}

        >

          {/* Avatar */}

          <div className="mb-8 flex justify-center">

            <div
              className="
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                bg-violet-100
              "
            >

              {owner?.avatar ? (

                <img
                  src={owner.avatar}
                  alt={owner.username}
                  className="
      h-28
      w-28
      rounded-full
      object-cover
    "
                />

              ) : (

                <User
                  size={50}
                  className="text-violet-600"
                />

              )}

            </div>

          </div>

          {/* Heading */}

       <h1 className="text-center text-4xl font-black">

  Welcome to Echoes ✨

</h1>

<p className="mt-4 text-center text-gray-500">

  Complete your profile to unlock birthday surprises,
  AI memory insights and personalized experiences.

</p>

          {/* Form */}

          <div className="mt-12 space-y-6">

            {/* Username */}

            <div>

              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                "
              >

                Username

              </label>

              <input
                value={username}
                placeholder="Enter Username"
                onChange={(e) =>

                  setUsername(
                    e.target.value
                  )

                }

                className="
                  w-full
                  rounded-2xl
                  border
                  bg-white
                  p-4
                  outline-none
                  focus:border-violet-500
                "

              />

            </div>

            <div>

  <label
    className="
      mb-2
      mt-5
      block
      text-sm
      font-semibold
    "
  >

    Email

  </label>

  <input

    value={owner?.email ?? ""}

    disabled

    className="
      w-full
      rounded-2xl
      border
      bg-gray-100
      p-4
      text-gray-500
      cursor-not-allowed
    "

  />

</div>

            {/* DOB */}

           <div>

  <label
    className="
      mb-2
      block
      text-sm
      font-semibold
    "
  >
    Birthday
  </label>

  <DatePickerCard
    label="Birthday"
    placeholder="Select your birthday"
    date={dateOfBirth}
    onClick={() => setCalendarOpen(true)}
  />

</div>

            {/* Gender */}

            <div>

              <label
                className="
                  mb-3
                  block
                  text-sm
                  font-semibold
                "
              >

                Gender

              </label>

              <div className="flex flex-wrap gap-3">
          {GENDERS.map((item) => (

                  <button
                    key={item.value}
                    type="button"
                    onClick={() =>
                      setGender(item.value)
                    }
                    className={`
      rounded-full
      px-5
      py-3
      transition

      ${gender === item.value
                        ? "bg-violet-600 text-white"
                        : "bg-white"
                      }
    `}
                  >

                    {item.label}

                  </button>

                ))
                }

              </div>

            </div>

            {/* City */}



            <div>

              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                "
              >

                City

              </label>

              <div className="relative">

                <MapPin
                  size={18}
                  className="
                    absolute
                    left-4
                    top-4
                    text-gray-400
                  "
                />

                <input

                  value={city}
                  placeholder="Jaipur"
                  onChange={(e) =>

                    setCity(
                      e.target.value
                    )

                  }

                  className="
                    w-full
                    rounded-2xl
                    border
                    bg-white
                    py-4
                    pl-12
                    pr-4
                    outline-none
                    focus:border-violet-500
                  "

                />

              </div>

            </div>

          </div>

          {error && (

            <p className="mb-4 text-center text-sm text-red-500">

              {error}

            </p>

          )}

          {error && (

            <p
              className="
      mb-5
      rounded-xl
      bg-red-50
      px-4
      py-3
      text-center
      text-sm
      font-medium
      text-red-600
      border
      border-red-100
    "
            >

              {error}

            </p>

          )}

          {/* Continue */}

          <button

            disabled={loading}

            onClick={submit}

            className="
              mt-10
              w-full
              rounded-2xl
              bg-violet-600
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:bg-violet-700
              disabled:opacity-60
            "

          >

            {

              loading

                ?

                "Saving..."

                :

                "Continue"

            }

          </button>

          <p
            className="
              mt-8
              text-center
              text-sm
              text-gray-400
            "
          >

            Your birthday helps Echoes celebrate your special day
            and create personalized memories.

          </p>

        </motion.div>

      </div>
      <CalendarModal
  open={calendarOpen}
  value={
    dateOfBirth
      ? new Date(dateOfBirth)
      : undefined
  }
  onClose={() => setCalendarOpen(false)}
  onSelect={(date) => {
    setDateOfBirth(
      format(date, "yyyy-MM-dd")
    );
  }}
/>

    </main>

  );

}