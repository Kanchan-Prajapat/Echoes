import {
  createEcho,
  findAllEchoes,
  findEchoById,
  updateEcho,
  deleteEcho,
  searchEchoes,
  toggleFavorite,
  addMedia,
  removeMedia,
  setCoverMedia,
} from "./echo.repository.js";

import {
  CreateEchoDTO,
  UpdateEchoDTO,
  MediaDTO,
} from "./echo.types.js";

/* ------------------------------------------------ */
/* Create */
/* ------------------------------------------------ */

export async function createEchoService(
  owner: string,
  data: Omit<CreateEchoDTO, "owner">
) {

  return createEcho({
    owner,
    ...data,
  });

}

/* ------------------------------------------------ */
/* Get All */
/* ------------------------------------------------ */

export async function getAllEchoesService(
  owner: string
) {

  return findAllEchoes(owner);

}

/* ------------------------------------------------ */
/* Get By ID */
/* ------------------------------------------------ */

export async function getEchoByIdService(
  owner: string,
  id: string
) {

  const echo =
    await findEchoById(id, owner);

  if (!echo) {

    throw new Error(
      "Echo not found."
    );

  }

  return echo;

}

/* ------------------------------------------------ */
/* Update */
/* ------------------------------------------------ */

export async function updateEchoService(
  owner: string,
  id: string,
  data: UpdateEchoDTO
) {

  const echo =
    await updateEcho(
      id,
      owner,
      data
    );

  if (!echo) {

    throw new Error(
      "Echo not found."
    );

  }

  return echo;

}

/* ------------------------------------------------ */
/* Delete */
/* ------------------------------------------------ */

export async function deleteEchoService(
  owner: string,
  id: string
) {

  const echo =
    await deleteEcho(
      id,
      owner
    );

  if (!echo) {

    throw new Error(
      "Echo not found."
    );

  }

  return echo;

}

/* ------------------------------------------------ */
/* Search */
/* ------------------------------------------------ */

export async function searchEchoesService(
  owner: string,
  query: string
) {

  return searchEchoes(
    owner,
    query
  );

}

/* ------------------------------------------------ */
/* Toggle Favorite */
/* ------------------------------------------------ */

export async function toggleFavoriteService(
  owner: string,
  id: string
) {

  const echo =
    await toggleFavorite(
      id,
      owner
    );

  if (!echo) {

    throw new Error(
      "Echo not found."
    );

  }

  return echo;

}

/* ------------------------------------------------ */
/* Add Media */
/* ------------------------------------------------ */

export async function addMediaService(
  owner: string,
  id: string,
  media: MediaDTO[]
) {

  const echo =
    await addMedia(
      id,
      owner,
      media
    );

  if (!echo) {

    throw new Error(
      "Echo not found."
    );

  }

  return echo;

}

/* ------------------------------------------------ */
/* Remove Media */
/* ------------------------------------------------ */

export async function removeMediaService(
  owner: string,
  id: string,
  publicId: string
) {

  const echo =
    await removeMedia(
      id,
      owner,
      publicId
    );

  if (!echo) {

    throw new Error(
      "Echo not found."
    );

  }

  return echo;

}

/* ------------------------------------------------ */
/* Set Cover */
/* ------------------------------------------------ */

export async function setCoverMediaService(
  owner: string,
  id: string,
  coverMediaId: string
) {

  const echo =
    await setCoverMedia(
      id,
      owner,
      coverMediaId
    );

  if (!echo) {

    throw new Error(
      "Echo not found."
    );

  }

  return echo;

}