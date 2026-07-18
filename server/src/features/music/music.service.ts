import * as repository from "./music.repository.js";
import { IMusic } from "./music.types.js";

/* -------------------------------- */
/* Create */
/* -------------------------------- */

export async function createMusic(
  data: Partial<IMusic>
) {

  // Future:
  // Duplicate title check
  // Audio validation
  // Cloudinary upload

  return repository.createMusic(data);

}

/* -------------------------------- */
/* Get All */
/* -------------------------------- */

export async function getAllMusic() {

  return repository.getAllMusic();

}

/* -------------------------------- */
/* Get By Id */
/* -------------------------------- */

export async function getMusicById(
  id: string
) {

  return repository.getMusicById(id);

}

/* -------------------------------- */
/* Update */
/* -------------------------------- */

export async function updateMusic(
  id: string,
  data: Partial<IMusic>
) {

  return repository.updateMusic(
    id,
    data
  );

}

/* -------------------------------- */
/* Delete */
/* -------------------------------- */

export async function deleteMusic(
  id: string
) {

  return repository.deleteMusic(id);

}