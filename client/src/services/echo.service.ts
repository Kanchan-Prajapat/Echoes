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

  formData.append("file", file);

  const { data } = await api.post(
    "/upload",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return data;
}

/* ---------------------------------- */
/* Get My Echoes */
/* ---------------------------------- */

export async function getEchoes() {

  const { data } = await api.get(
    "/echoes"
  );

  return data;
}

/* ---------------------------------- */
/* Get Single Echo */
/* ---------------------------------- */

export async function getEcho(
  id: string
) {

  const { data } = await api.get(
    `/echoes/${id}`
  );

  return data;
}

/* ---------------------------------- */
/* Create Echo */
/* ---------------------------------- */

export async function createEcho(
  echo: Partial<Echo>
) {

  const { data } = await api.post(
    "/echoes",
    echo
  );

  return data;
}

/* ---------------------------------- */
/* Update Echo */
/* ---------------------------------- */

export async function updateEcho(
  id: string,
  echo: Partial<Echo>
) {

  const { data } = await api.put(
    `/echoes/${id}`,
    echo
  );

  return data;
}

/* ---------------------------------- */
/* Delete Echo */
/* ---------------------------------- */

export async function deleteEcho(
  id: string
) {

  const { data } = await api.delete(
    `/echoes/${id}`
  );

  return data;
}


export async function addMediaToEcho(
  echoId: string,
  media: Omit<Media, "id" | "file">[]
) {
  const { data } = await api.patch(
    `/echoes/${echoId}/media`,
    {
      media,
    }
  );

  return data;
}

export async function deleteMediaFromEcho(
  echoId: string,
  publicId: string
) {
  const { data } = await api.delete(
    `/echoes/${echoId}/media/${publicId}`
  );

  return data;
}

export async function setCoverMedia(
  echoId: string,
  coverMediaId: string
) {
  const { data } = await api.patch(
    `/echoes/${echoId}/cover`,
    {
      coverMediaId,
    }
  );

  return data;
}

export async function toggleFavorite(
  echoId: string
) {
  const { data } = await api.patch(
    `/echoes/${echoId}/favorite`
  );

  return data;
}