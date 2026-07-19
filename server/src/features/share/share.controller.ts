import { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  createShareService,
  getSharedEchoService,
} from "./share.service.js";

import {
  successResponse,
  errorResponse,
} from "../../utils/apiResponse.js";
import { env } from "../../config/env.js";
import { Response } from "express";

/* -------------------------------- */
/* Create Share Link */
/* -------------------------------- */

export async function createShareController(
  req: AuthRequest,
  res: Response
) {

  try {

    const share =
      await createShareService(

        req.user!.id,

        req.params.echoId

      );

    return res.json(

      successResponse(

        "Share link generated successfully.",

        {
          token: share.token,

        url: `${env.CLIENT_URL}/share/${share.token}`,

        }

      )

    );

  }

  catch (error: any) {
  console.error("========== SHARE ERROR ==========");
  console.error(error);
  console.error(error.message);
  console.error(error.stack);

  return res.status(400).json({
    success: false,
    message: error.message,
  });
}
}

/* -------------------------------- */
/* Get Shared Echo */
/* -------------------------------- */

export async function getSharedEchoController(
  req: Request<{ token: string }>,
  res: Response
) {

  try {

    const echo =
      await getSharedEchoService(
        req.params.token
      );

    return res.json(

      successResponse(

        "Shared echo fetched successfully.",

        echo

      )

    );

  }

  catch (error: any) {

    return res.status(404).json(

      errorResponse(

        error.message

      )

    );

  }

}