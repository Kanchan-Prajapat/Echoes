import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

export interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

interface JwtPayload {
  id: string;
}

export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {

    const authorization =
      req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing.",
      });
    }

    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format.",
      });
    }

    const token =
      authorization.split(" ")[1];

    const decoded = jwt.verify(
      token,
      env.JWT_SECRET
    ) as JwtPayload;

    req.user = {
      id: decoded.id,
    };

    next();

  } catch (error) {

    console.error("AUTH ERROR");
    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });

  }
}