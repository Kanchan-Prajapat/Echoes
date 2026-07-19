  import { Router } from "express";

  import {
    createMusic,
    getAllMusic,
    getMusicById,
    updateMusic,
    deleteMusic,
  } from "./music.controller.js";

  const router = Router();

  /* -------------------------------- */
  /* Music */
  /* -------------------------------- */

  router.post("/", createMusic);

  router.get("/", getAllMusic);

  router.get("/:id", getMusicById);

  router.patch("/:id", updateMusic);

  router.delete("/:id", deleteMusic);

  export default router;