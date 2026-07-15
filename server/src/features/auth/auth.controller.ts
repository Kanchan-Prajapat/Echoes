import { Request, Response } from "express";
import {
  signup,
  login,
  getCurrentUser,
  updateMyProfile,
  changePassword,
} from "./auth.service.js";

import {
  signupSchema,
  loginSchema,
  updateProfileSchema,
  changePasswordSchema,
} from "./auth.validation.js";

import { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  successResponse,
  errorResponse,
} from "../../utils/apiResponse.js";

/* -------------------------------- */
/* Signup */
/* -------------------------------- */

export async function signupController(
  req: Request,
  res: Response
) {
  try {

    const body =
      signupSchema.parse(req.body);

    const result =
      await signup(body);

    return res.status(201).json(

      successResponse(
        "Account created successfully.",
        result
      )

    );

  } catch (error: any) {

    return res.status(400).json(

      errorResponse(
        error.message
      )

    );

  }
}

/* -------------------------------- */
/* Login */
/* -------------------------------- */

export async function loginController(
  req: Request,
  res: Response
) {

  try {

    const body =
      loginSchema.parse(req.body);

    const result =
      await login(body);

    return res.json(

      successResponse(
        "Login successful.",
        result
      )

    );

  }

  catch (error: any) {

    return res.status(400).json(

      errorResponse(
        error.message
      )

    );

  }

}

/* -------------------------------- */
/* Current User */
/* -------------------------------- */

export async function meController(
  req: AuthRequest,
  res: Response
) {

  try {

    const user =
      await getCurrentUser(
        req.user!.id
      );

    return res.json(

      successResponse(
        "User fetched successfully.",
        user
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

/* -------------------------------- */
/* Update Profile */
/* -------------------------------- */

export async function updateProfileController(
  req: AuthRequest,
  res: Response
) {

  try {

    const body =
      updateProfileSchema.parse(
        req.body
      );

    const user =
      await updateMyProfile(
        req.user!.id,
        body
      );

    return res.json(

      successResponse(
        "Profile updated successfully.",
        user
      )

    );

  }

  catch (error: any) {

    return res.status(400).json(

      errorResponse(
        error.message
      )

    );

  }

}




export async function changePasswordController(

  req: AuthRequest,

  res: Response

) {

  try {


    const {

      currentPassword,

      newPassword,

    } = req.body;


const body = changePasswordSchema.parse(req.body);

await changePassword(

  req.user!.id,

  body.currentPassword,

  body.newPassword

);
    return res.status(200).json(

      successResponse(

        "Password changed successfully."

      )

    );

  }

  catch (error: any) {

    return res.status(400).json(

      errorResponse(

        error.message ||

        "Failed to change password."

      )

    );

  }

}