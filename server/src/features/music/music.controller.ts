import { Request, Response } from "express";
import * as service from "./music.service.js";

/* -------------------------------- */
/* Create */
/* -------------------------------- */

export async function createMusic(
  req: Request,
  res: Response
) {
  try {

    const music = await service.createMusic(
      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Music created successfully.",
      data: music,
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to create music.",
    });

  }
}

/* -------------------------------- */
/* Get All */
/* -------------------------------- */

export async function getAllMusic(
  req: Request,
  res: Response
) {
  try {

    const music =
      await service.getAllMusic();

    return res.json({
      success: true,
      data: music,
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch music.",
    });

  }
}

/* -------------------------------- */
/* Get By Id */
/* -------------------------------- */

export async function getMusicById(
  req: Request,
  res: Response
) {
  try {

    const music =
      await service.getMusicById(
        req.params.id
      );

    if (!music) {

      return res.status(404).json({
        success: false,
        message: "Music not found.",
      });

    }

    return res.json({
      success: true,
      data: music,
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch music.",
    });

  }
}

/* -------------------------------- */
/* Update */
/* -------------------------------- */

export async function updateMusic(
  req: Request,
  res: Response
) {
  try {

    const music =
      await service.updateMusic(
        req.params.id,
        req.body
      );

    if (!music) {

      return res.status(404).json({
        success: false,
        message: "Music not found.",
      });

    }

    return res.json({
      success: true,
      message: "Music updated successfully.",
      data: music,
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to update music.",
    });

  }
}

/* -------------------------------- */
/* Delete */
/* -------------------------------- */

export async function deleteMusic(
  req: Request,
  res: Response
) {
  try {

    const music =
      await service.deleteMusic(
        req.params.id
      );

    if (!music) {

      return res.status(404).json({
        success: false,
        message: "Music not found.",
      });

    }

    return res.json({
      success: true,
      message: "Music deleted successfully.",
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to delete music.",
    });

  }
}