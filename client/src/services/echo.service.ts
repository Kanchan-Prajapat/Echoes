import api from "./api";

import { Echo } from "@/types/echo";

import { Media } from "@/types/media";

/* ---------------------------------- */
/* Upload Media */
/* ---------------------------------- */

export async function uploadMedia(
  file: File
): Promise<Media> {

  const formData = new FormData();

  formData.append("media", file);

  const { data } = await api.post(
  "/media/upload",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);

  return data.data;
}

/* ---------------------------------- */
/* Get My Echoes */
/* ---------------------------------- */

export async function getEchoes() {
  const { data } = await api.get("/echo");
console.log(data);
  return data.data;
}
/* ---------------------------------- */
/* Get Single Echo */
/* ---------------------------------- */

export async function getEcho(
  id: string
) {

  const { data } = await api.get(
    `/echo/${id}`
  );

  return data.data;
}

/* ---------------------------------- */
/* Create Echo */
/* ---------------------------------- */

export async function createEcho(
  echo: Partial<Echo>
) {

  const { data } = await api.post(
    "/echo",
    echo
  );

  return data.data;
}

/* ---------------------------------- */
/* Update Echo */
/* ---------------------------------- */

export async function updateEcho(
  id: string,
  echo: Partial<Echo>
) {

  const { data } = await api.patch(
    `/echo/${id}`,
    echo
  );

  return data.data;
}

/* ---------------------------------- */
/* Delete Echo */
/* ---------------------------------- */

export async function deleteEcho(
  id: string
) {

  const { data } = await api.delete(
    `/echo/${id}`
  );

  return data.data;
}


export async function addMediaToEcho(
  echoId: string,
  media: Omit<Media, "id" | "file">[]
) {
  const { data } = await api.patch(
    `/echo/${echoId}/media`,
    {
      media,
    }
  );

  return data.data;
}

export async function deleteMediaFromEcho(
  echoId: string,
  publicId: string
) {
  const { data } = await api.delete(
    `/echo/${echoId}/media/${publicId}`
  );

  return data.data;
}

export async function setCoverMedia(
  echoId: string,
  coverMediaId: string
) {
  const { data } = await api.patch(
    `/echo/${echoId}/cover`,
    {
      coverMediaId,
    }
  );

  return data.data;
}

export async function toggleFavorite(
  echoId: string
) {
  const { data } = await api.patch(
    `/echo/${echoId}/favorite`
  );

  return data.data;
}