import Share from "./share.model.js";

export async function findShareByEcho(
  echoId: string,
  owner: string
) {

  return Share.findOne({
    echoId,
    owner,
  });

}

export async function findShareByToken(
  token: string
) {

  return Share.findOne({
    token,
    isActive: true,
  });

}

export async function createShare(
  data: {
    token: string;
    echoId: string;
    owner: string;
  }
) {

  return Share.create(data);

}