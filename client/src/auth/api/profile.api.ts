import api from "@/auth/api/axios";

/* -------------------------------- */
/* Types */
/* -------------------------------- */

export interface UpdateProfileRequest {
  username?: string;
  bio?: string;
  avatar?: string;

  dateOfBirth?: string;
  gender?: string;
  city?: string;
}
/* -------------------------------- */
/* Get Profile */
/* -------------------------------- */

export async function getProfile() {

  const response = await api.get(
    "/auth/me"
  );

  return response.data;

}

/* -------------------------------- */
/* Update Profile */
/* -------------------------------- */

export async function updateProfile(
  data: UpdateProfileRequest
) {



  const response = await api.patch(

    "/auth/me",

    data

  );

  return response.data;

}