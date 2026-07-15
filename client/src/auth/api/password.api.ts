import api from "./axios";

export interface ChangePasswordRequest {

  currentPassword: string;

  newPassword: string;

}

export async function changePassword(

  data: ChangePasswordRequest

) {

  const response = await api.patch(

    "/auth/change-password",

    data

  );

  return response.data;

}