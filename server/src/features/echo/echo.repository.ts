import Echo from "./echo.model.js";

import {
  CreateEchoDTO,
  UpdateEchoDTO,
  MediaDTO,
} from "./echo.types.js";

/* ------------------------------------------------ */
/* Create Echo */
/* ------------------------------------------------ */

export async function createEcho(
  data: CreateEchoDTO
) {
  const echo = await Echo.create(data);

  return echo.toJSON();
}

/* ------------------------------------------------ */
/* Get All Echoes */
/* ------------------------------------------------ */

export async function findAllEchoes(
  owner: string
) {
  return Echo.find({
    owner,
  }).sort({
    date: -1,
  });
}

/* ------------------------------------------------ */
/* Get Echo By ID */
/* ------------------------------------------------ */

export async function findEchoById(
  id: string,
  owner: string
) {
  return Echo.findOne({
    _id: id,
    owner,
  });
}

/* ------------------------------------------------ */
/* Update Echo */
/* ------------------------------------------------ */

export async function updateEcho(
  id: string,
  owner: string,
  data: UpdateEchoDTO
) {
  return Echo.findOneAndUpdate(
    {
      _id: id,
      owner,
    },
    data,
    {
      new: true,
      runValidators: true,
    }
  );
}

/* ------------------------------------------------ */
/* Delete Echo */
/* ------------------------------------------------ */

export async function deleteEcho(
  id: string,
  owner: string
) {
  return Echo.findOneAndDelete({
    _id: id,
    owner,
  });
}

/* ------------------------------------------------ */
/* Toggle Favorite */
/* ------------------------------------------------ */

export async function toggleFavorite(
  id: string,
  owner: string
) {
  const echo = await Echo.findOne({
    _id: id,
    owner,
  });

  if (!echo) return null;

  echo.favorite = !echo.favorite;

  await echo.save();

  return echo;
}

/* ------------------------------------------------ */
/* Search Echoes */
/* ------------------------------------------------ */

export async function searchEchoes(
  owner: string,
  query: string
) {
  return Echo.find({
    owner,
    $or: [
      {
        title: {
          $regex: query,
          $options: "i",
        },
      },
      {
        description: {
          $regex: query,
          $options: "i",
        },
      },
      {
        location: {
          $regex: query,
          $options: "i",
        },
      },
      {
        mood: {
          $regex: query,
          $options: "i",
        },
      },
      {
        tags: {
          $in: [
            new RegExp(query, "i"),
          ],
        },
      },
    ],
  }).sort({
    date: -1,
  });
}

/* ------------------------------------------------ */
/* Add Media */
/* ------------------------------------------------ */

export async function addMedia(
  id: string,
  owner: string,
  media: MediaDTO[]
) {
  return Echo.findOneAndUpdate(
    {
      _id: id,
      owner,
    },
    {
      $push: {
        media: {
          $each: media,
        },
      },
    },
    {
      new: true,
    }
  );
}

/* ------------------------------------------------ */
/* Delete Media */
/* ------------------------------------------------ */

export async function removeMedia(
  id: string,
  owner: string,
  publicId: string
) {
  return Echo.findOneAndUpdate(
    {
      _id: id,
      owner,
    },
    {
      $pull: {
        media: {
          publicId,
        },
      },
    },
    {
      new: true,
    }
  );
}

/* ------------------------------------------------ */
/* Set Cover */
/* ------------------------------------------------ */

export async function setCoverMedia(
  id: string,
  owner: string,
  coverMediaId: string
) {
  return Echo.findOneAndUpdate(
    {
      _id: id,
      owner,
    },
    {
      coverMediaId,
    },
    {
      new: true,
    }
  );
}


/* ------------------------------------------------ */
/* Save AI Insight */
/* ------------------------------------------------ */

export async function saveAIInsight(
  id: string,
  owner: string,
  ai: {
    caption: string;
    insight: string;
    tags: string[];
  }
) {
  return Echo.findOneAndUpdate(
    {
      _id: id,
      owner,
    },
    {
      aiCaption: ai.caption,
      aiInsight: ai.insight,
      aiTags: ai.tags,
      aiGeneratedAt: new Date(),
      aiModel: "llama-3.1-8b-instant",
    },
    {
      new: true,
      runValidators: true,
    }
  );
}