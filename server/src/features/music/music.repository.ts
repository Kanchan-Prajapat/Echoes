import MusicModel from "./music.model.js";
import { IMusic } from "./music.types.js";

/* -------------------------------- */
/* Create */
/* -------------------------------- */

export async function createMusic(
  data: Partial<IMusic>
) {
  return MusicModel.create(data);
}

/* -------------------------------- */
/* Get All */
/* -------------------------------- */

export async function getAllMusic() {
  return MusicModel.find({
    active: true,
  }).sort({
    createdAt: -1,
  });
}

/* -------------------------------- */
/* Get By Id */
/* -------------------------------- */

export async function getMusicById(
  id: string
) {
  return MusicModel.findById(id);
}

/* -------------------------------- */
/* Update */
/* -------------------------------- */

export async function updateMusic(
  id: string,
  data: Partial<IMusic>
) {
  return MusicModel.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
}

/* -------------------------------- */
/* Soft Delete */
/* -------------------------------- */

export async function deleteMusic(
  id: string
) {
  return MusicModel.findByIdAndUpdate(
    id,
    {
      active: false,
    },
    {
      new: true,
    }
  );
}