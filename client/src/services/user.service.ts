import api from "@/services/api";

import {
  Profile,
  UpdateProfileDTO,
} from "@/types/profile.types";

export async function getMyProfile(): Promise<Profile> {

  const response = await api.get(
    "/auth/me"
  );

  return response.data.data;

}

export async function updateProfile(
  data: UpdateProfileDTO
): Promise<Profile> {

const response = await api.patch(
  "/auth/me",
  data
);
  return response.data.data;

}