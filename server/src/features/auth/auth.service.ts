import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { env } from "../../config/env.js";

import {
  createUser,
  findUserByEmail,
  findUserById,
  updateProfile,
} from "../user/user.repository.js";

import {
  SignupDTO,
  LoginDTO,
  AuthResponse,
} from "./auth.types.js";

/* ------------------------------------------------ */
/* Generate JWT */
/* ------------------------------------------------ */

function generateToken(userId: string) {
  return jwt.sign(
    {
      id: userId,
    },
    env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
}

/* ------------------------------------------------ */
/* Signup */
/* ------------------------------------------------ */

export async function signup(
  data: SignupDTO
): Promise<AuthResponse> {

  const existingUser =
    await findUserByEmail(data.email);

  if (existingUser) {

    throw new Error(
      "Email already registered."
    );

  }

  const hashedPassword =
    await bcrypt.hash(
      data.password,
      10
    );

  const user =
    await createUser({

      ...data,

      password: hashedPassword,

    });

  const token =
    generateToken(user.id);

  return {

    user,

    token,

  };

}

/* ------------------------------------------------ */
/* Login */
/* ------------------------------------------------ */

export async function login(
  data: LoginDTO
): Promise<AuthResponse> {

  const user =
    await findUserByEmail(
      data.email,
      true
    );

  if (!user) {

    throw new Error(
      "Invalid email or password."
    );

  }

  const passwordMatched =
    await bcrypt.compare(

      data.password,

      user.password

    );

  if (!passwordMatched) {

    throw new Error(
      "Invalid email or password."
    );

  }

  const token =
    generateToken(
      user.id
    );

  return {

    user: user.toJSON(),

    token,

  };

}

/* ------------------------------------------------ */
/* Current User */
/* ------------------------------------------------ */

export async function getCurrentUser(
  id: string
) {

  const user =
    await findUserById(id);

  if (!user) {

    throw new Error(
      "User not found."
    );

  }

  return user;

}

/* ------------------------------------------------ */
/* Update Profile */
/* ------------------------------------------------ */

export async function updateMyProfile(

  id: string,

  data: any

) {

  const user =
    await updateProfile(
      id,
      data
    );

  if (!user) {

    throw new Error(
      "User not found."
    );

  }

  return user;

}