import { nanoid } from "nanoid";

import {
  createShare,
  findShareByEcho,
  findShareByToken,
} from "./share.repository.js";

import Echo from "../echo/echo.model.js";

/* -------------------------------- */
/* Create Share Link */
/* -------------------------------- */

export async function createShareService(
  owner: string,
  echoId: string
) {

  const echo = await Echo.findById(echoId);

  if (!echo) {
    throw new Error("Echo not found.");
  }

  if (echo.owner.toString() !== owner) {
    throw new Error("You don't own this memory.");
  }

  const existing = await findShareByEcho(
    echoId,
    owner
  );

  if (existing) {
    return existing;
  }

  const token = nanoid(10);

  return createShare({
    owner,
    echoId,
    token,
  });

}
/* -------------------------------- */
/* Get Shared Echo */
/* -------------------------------- */

export async function getSharedEchoService(
  token: string
) {

  const share =
    await findShareByToken(token);

  if (!share) {

    throw new Error(
      "Shared memory not found."
    );

  }

  const echo =
    await Echo.findById(
      share.echoId
    );

  if (!echo) {

    throw new Error(
      "Echo not found."
    );

  }

  return echo;

}