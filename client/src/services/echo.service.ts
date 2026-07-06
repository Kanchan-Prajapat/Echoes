import api from "./api";

export async function uploadMedia(file: File) {
  const formData = new FormData();

  formData.append("media", file);

  const response = await api.post(
    "/media/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data;
}

export async function createEcho(body: any) {
  const response = await api.post("/echo", body);

  return response.data.data;
}


export async function getEchoes() {
  const { data } = await api.get(
    "/echo"
  );

  return data.data;
}

export async function deleteEcho(
  id: string
) {
  await api.delete(
    `/echo/${id}`
  );
}

export async function updateEcho(
  id: string,
  body: any
) {
  const { data } =
    await api.patch(
      `/echo/${id}`,
      body
    );

  return data.data;
}

export async function addMediaToEcho(
  id: string,
  media: any[]
) {
  const { data } = await api.patch(
    `/echo/${id}/media`,
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
    `/echo/${echoId}/media/${encodeURIComponent(publicId)}`
  );

  return data.data;
}


export async function toggleFavorite(
  id: string
) {
  const { data } =
    await api.patch(
      `/echo/${id}/favorite`
    );

  return data.data;
}


export async function setCoverMedia(
  echoId: string,
  coverMediaId: string
) {
  console.log("SERVICE CALLED");
  console.log({ echoId, coverMediaId });

  const { data } = await api.patch(
    `/echo/${echoId}/cover`,
    {
      coverMediaId,
    }
  );

  console.log("PATCH SUCCESS");
  console.log(data);

  return data.data;
}