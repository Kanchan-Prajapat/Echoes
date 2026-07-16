import api from "@/services/api";

import { UpdateProfileDTO } from "@/types/profile.types.ts";

export async function setupProfile(

  data: UpdateProfileDTO

) {

  const response = await api.patch(

    "/auth/profile",

    data

  );

  return response.data.data;

}