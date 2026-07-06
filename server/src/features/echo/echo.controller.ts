import { Request, Response } from "express";

import {
  createEcho,
  getAllEchoes,
  getEchoById,
  updateEcho,
  deleteEcho,
  toggleFavorite,
  searchEchoes,
  addMediaToEcho,
  deleteMediaFromEcho,
  setCoverMedia,
} from "./echo.service.js";

import {
  createEchoSchema,
  updateEchoSchema,
} from "./echo.validation.js";

import {
  successResponse,
  errorResponse,
} from "../../utils/apiResponse.js";

export async function createEchoController(
  req: Request,
  res: Response
) {
  try {
    const body =
      createEchoSchema.parse(req.body);

    const echo =
      await createEcho(body);

    return res.status(201).json(
      successResponse(
        "Echo created successfully.",
        echo
      )
    );
  } catch (error: any) {

  console.log("===== CREATE ECHO ERROR =====");

  console.dir(error, { depth: null });

  return res.status(400).json({
    success: false,
    error,
  });
}
}

export async function getAllEchoesController(
  _req: Request,
  res: Response
) {
  try {
    const echoes =
      await getAllEchoes();

    return res.json(
      successResponse(
        "Echoes fetched successfully.",
        echoes
      )
    );
  } catch {
    return res.status(500).json(
      errorResponse(
        "Failed to fetch Echoes."
      )
    );
  }
}

export async function getEchoByIdController(
  req: Request,
  res: Response
) {
  try {
    const echo =
      await getEchoById(req.params.id);

    if (!echo) {
      return res.status(404).json(
        errorResponse(
          "Echo not found."
        )
      );
    }

    return res.json(
      successResponse(
        "Echo fetched successfully.",
        echo
      )
    );
  } catch {
    return res.status(500).json(
      errorResponse(
        "Failed to fetch Echo."
      )
    );
  }
}

export async function updateEchoController(
  req: Request,
  res: Response
) {
  try {
    const body =
      updateEchoSchema.parse(req.body);

    const echo =
      await updateEcho(
        req.params.id,
        body
      );

    if (!echo) {
      return res.status(404).json(
        errorResponse(
          "Echo not found."
        )
      );
    }

    return res.json(
      successResponse(
        "Echo updated successfully.",
        echo
      )
    );
  } catch (error: any) {
    return res.status(400).json(
      errorResponse(
        error.message ??
          "Failed to update Echo."
      )
    );
  }
}


export async function addMediaToEchoController(
  req: Request,
  res: Response
) {
  try {
    const { media } = req.body;

    if (!media || !Array.isArray(media)) {
      return res.status(400).json(
        errorResponse("Media array is required.")
      );
    }

    const echo = await addMediaToEcho(
      req.params.id,
      media
    );

    if (!echo) {
      return res.status(404).json(
        errorResponse("Echo not found.")
      );
    }

    return res.json(
      successResponse(
        "Media added successfully.",
        echo
      )
    );

  }catch (error: any) {

  console.log("===== ADD MEDIA ERROR =====");

  console.log(error);

  return res.status(500).json(
    errorResponse(
      error.message ?? "Failed to add media."
    )
  );

}
}



export async function deleteMediaController(
  req: Request,
  res: Response
) {
  try {
    const { id, publicId } = req.params;

    const echo = await deleteMediaFromEcho(
      id,
      publicId
    );

    if (!echo) {
      return res.status(404).json(
        errorResponse("Echo not found.")
      );
    }

    return res.json(
      successResponse(
        "Media deleted successfully.",
        echo
      )
    );

  } catch (error) {

    console.error(
      "===== DELETE MEDIA ERROR ====="
    );

    console.error(error);

    return res.status(500).json(
      errorResponse(
        "Failed to delete media."
      )
    );
  }
}



export async function deleteEchoController(
  req: Request,
  res: Response
) {
  try {
    const echo =
      await deleteEcho(req.params.id);

    if (!echo) {
      return res.status(404).json(
        errorResponse(
          "Echo not found."
        )
      );
    }

    return res.json(
      successResponse(
        "Echo deleted successfully."
      )
    );
  } catch {
    return res.status(500).json(
      errorResponse(
        "Failed to delete Echo."
      )
    );
  }
}

export async function toggleFavoriteController(
  req: Request,
  res: Response
) {
  try {
    const echo =
      await toggleFavorite(req.params.id);

    if (!echo) {
      return res.status(404).json(
        errorResponse(
          "Echo not found."
        )
      );
    }

    return res.json(
      successResponse(
        "Favorite updated.",
        echo
      )
    );
  } catch {
    return res.status(500).json(
      errorResponse(
        "Failed to update favorite."
      )
    );
  }
}


export async function setCoverMediaController(
  req: Request,
  res: Response
) {
  try {

    const { id } = req.params;

    const { coverMediaId } = req.body;

    const echo = await setCoverMedia(
      id,
      coverMediaId
    );

    if (!echo) {
      return res.status(404).json(
        errorResponse("Echo not found.")
      );
    }

    return res.json(
      successResponse(
        "Cover media updated successfully.",
        echo
      )
    );

  } catch (error) {

    console.error(
      "===== SET COVER ERROR ====="
    );

    console.error(error);

    return res.status(500).json(
      errorResponse(
        "Failed to update cover media."
      )
    );

  }
}


export async function searchEchoesController(
  req: Request,
  res: Response
) {
  try {
    const q =
      String(req.query.q ?? "");

    const echoes =
      await searchEchoes(q);

    return res.json(
      successResponse(
        "Search completed.",
        echoes
      )
    );
  } catch {
    return res.status(500).json(
      errorResponse(
        "Search failed."
      )
    );
  }
}