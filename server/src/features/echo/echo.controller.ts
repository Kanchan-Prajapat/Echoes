import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  createEchoService,
  getAllEchoesService,
  getEchoByIdService,
  updateEchoService,
  deleteEchoService,
  searchEchoesService,
  toggleFavoriteService,
  addMediaService,
  removeMediaService,
  setCoverMediaService,
} from "./echo.service.js";

import {
  createEchoSchema,
  updateEchoSchema,
} from "./echo.validation.js";

import {
  successResponse,
  errorResponse,
} from "../../utils/apiResponse.js";

/* -------------------------------- */
/* Create Echo */
/* -------------------------------- */

export async function createEchoController(
  req: AuthRequest,
  res: Response
) {

  try {

    const body =
      createEchoSchema.parse(req.body);

    const echo =
      await createEchoService(
        req.user!.id,
        body
      );

console.dir(req.body, { depth: null });

    return res.status(201).json(
      

      successResponse(
        "Echo created successfully.",
        echo
      )

    );

  }

 catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}
}

/* -------------------------------- */
/* Get All Echoes */
/* -------------------------------- */

export async function getAllEchoesController(
  req: AuthRequest,
  res: Response
) {
  try {

    const echoes =
      await getAllEchoesService(
        req.user!.id
      );

    return res.json(
      successResponse(
        "Echoes fetched successfully.",
        echoes
      )
    );

  } catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}
}

/* -------------------------------- */
/* Get Echo By ID */
/* -------------------------------- */

export async function getEchoByIdController(
  req: AuthRequest,
  res: Response
) {

  try {

    const echo =
      await getEchoByIdService(
        req.user!.id,
        req.params.id
      );

    return res.json(

      successResponse(
        "Echo fetched successfully.",
        echo
      )

    );

  }

 catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}

}

/* -------------------------------- */
/* Update Echo */
/* -------------------------------- */

export async function updateEchoController(
  req: AuthRequest,
  res: Response
) {

  try {

    const body =
      updateEchoSchema.parse(req.body);

    const echo =
      await updateEchoService(

        req.user!.id,

        req.params.id,

        body

      );

    return res.json(

      successResponse(
        "Echo updated successfully.",
        echo
      )

    );

  }

catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}

}

/* -------------------------------- */
/* Delete Echo */
/* -------------------------------- */

export async function deleteEchoController(
  req: AuthRequest,
  res: Response
) {

  try {

    await deleteEchoService(

      req.user!.id,

      req.params.id

    );

    return res.json(

      successResponse(
        "Echo deleted successfully."
      )

    );

  }

catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}

}

/* -------------------------------- */
/* Search Echoes */
/* -------------------------------- */

export async function searchEchoesController(
  req: AuthRequest,
  res: Response
) {

  try {

    const echoes =
      await searchEchoesService(

        req.user!.id,

        String(req.query.q ?? "")

      );

    return res.json(

      successResponse(
        "Search completed.",
        echoes
      )

    );

  }

catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}

}

/* -------------------------------- */
/* Toggle Favorite */
/* -------------------------------- */

export async function toggleFavoriteController(
  req: AuthRequest,
  res: Response
) {

  try {

    const echo =
      await toggleFavoriteService(

        req.user!.id,

        req.params.id

      );

    return res.json(

      successResponse(
        "Favorite updated.",
        echo
      )

    );

  }

catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}

}

/* -------------------------------- */
/* Add Media */
/* -------------------------------- */

export async function addMediaToEchoController(
  req: AuthRequest,
  res: Response
) {

  try {

    const echo =
      await addMediaService(

        req.user!.id,

        req.params.id,

        req.body.media

      );

    return res.json(

      successResponse(
        "Media added successfully.",
        echo
      )

    );

  }

catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}

}

/* -------------------------------- */
/* Delete Media */
/* -------------------------------- */

export async function deleteMediaController(
  req: AuthRequest,
  res: Response
) {

  try {

    const echo =
      await removeMediaService(

        req.user!.id,

        req.params.id,

       decodeURIComponent(req.params.publicId),

      );

    return res.json(

      successResponse(
        "Media deleted successfully.",
        echo
      )

    );

  }

catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}

}

/* -------------------------------- */
/* Set Cover */
/* -------------------------------- */

export async function setCoverMediaController(
  req: AuthRequest,
  res: Response
) {

  try {

    const echo =
      await setCoverMediaService(

        req.user!.id,

        req.params.id,

        req.body.coverMediaId

      );

    return res.json(

      successResponse(
        "Cover updated successfully.",
        echo
      )

    );

  }

catch (error: any) {

  if (error.issues) {
    return res.status(400).json(
      errorResponse(
        error.issues.map((issue: any) => issue.message)
      )
    );
  }

  return res.status(400).json(
    errorResponse(
      error.message || "Something went wrong."
    )
  );

}

}