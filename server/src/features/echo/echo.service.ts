import EchoModel from "./echo.model.js";

import {
  CreateEchoDTO,
  UpdateEchoDTO,
  IMedia,
} from "./echo.types.js";
import cloudinary from "../../config/cloudinary.js";

export async function createEcho(
  data: CreateEchoDTO
) {
  const echo = await EchoModel.create(data);

  return echo.toJSON();
}

export async function addMediaToEcho(
  id: string,
  media: IMedia[]
) {
  const echo = await EchoModel.findById(id);

  if (!echo) {
    return null;
  }

  echo.media.push(...media);

  // If no cover image exists, make the first uploaded media the cover
  if (!echo.coverMediaId && media.length > 0) {
    echo.coverMediaId = media[0].publicId;
  }

  await echo.save();

  return echo.toJSON();
}



export async function deleteMediaFromEcho(
  id: string,
  publicId: string
) {
  const echo = await EchoModel.findById(id);

  if (!echo) {
    return null;
  }

  // Delete from Cloudinary
  await cloudinary.uploader.destroy(publicId);

  // Remove from MongoDB
  echo.media = echo.media.filter(
    (media) => media.publicId !== publicId
  );

  // If cover image was deleted, assign a new one
  if (echo.coverMediaId === publicId) {
    echo.coverMediaId =
      echo.media[0]?.publicId ?? "";
  }

  await echo.save();

  return echo.toJSON();
}



export async function getAllEchoes() {
    return await EchoModel.find().sort({
        date: -1,
    });
}

export async function getEchoById(
    id: string
) {
    return await EchoModel.findById(id);
}

export async function updateEcho(
    id: string,
    data: UpdateEchoDTO
) {
    return await EchoModel.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true,
        }
    );
}

export async function deleteEcho(
    id: string
) {
    return await EchoModel.findByIdAndDelete(
        id
    );
}


export async function setCoverMedia(
  id: string,
  coverMediaId: string
) {
  const echo = await EchoModel.findById(id);

  if (!echo) {
    return null;
  }

  const mediaExists = echo.media.some(
    (media) => media.publicId === coverMediaId
  );

  if (!mediaExists) {
    throw new Error(
      "Selected media does not exist."
    );
  }
  echo.coverMediaId = coverMediaId;
  await echo.save();
  return echo.toJSON();
}


export async function toggleFavorite(
    id: string
) {
    const echo =
        await EchoModel.findById(id);

    if (!echo) return null;

    echo.favorite = !echo.favorite;

    await echo.save();

    return echo.toJSON();
}

export async function searchEchoes(
    query: string
) {
    return await EchoModel.find({
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
                tags: {
                    $regex: query,
                    $options: "i",
                },
            },
        ],
    }).sort({
        date: -1,
    });
}