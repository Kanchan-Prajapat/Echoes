import api from "./api";

export async function createShareLink(
  echoId: string
) {

  const { data } = await api.post(
    `/share/${echoId}`
  );

  return data.data;

}

export async function getSharedEcho(
  token: string
) {

  const { data } = await api.get(
    `/share/${token}`
  );

  return data.data;

}