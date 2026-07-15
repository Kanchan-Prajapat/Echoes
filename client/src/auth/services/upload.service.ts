import api from "@/auth/api/axios";

export async function uploadAvatar(
  file: File
) {

  const formData = new FormData();

  formData.append(
    "media",
    file
  );

  const response =
    await api.post(

      "/media/upload",

      formData,

      {

        headers: {

          "Content-Type":
            "multipart/form-data",

        },

      }

    );

  return response.data;

}