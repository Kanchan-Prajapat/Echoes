import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { env } from "../../config/env.js";

import {
  createUser,
  findUserByEmail,
  findUserById,
  updateProfile,
  updatePassword,
} from "../user/user.repository.js";

import {
  SignupDTO,
  LoginDTO,
  AuthResponse,
} from "./auth.types.js";

import { UpdateProfileDTO } from "../user/user.types.js";

/* -------------------------------- */
/* Generate JWT */
/* -------------------------------- */

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

/* -------------------------------- */
/* Signup */
/* -------------------------------- */

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

/* -------------------------------- */
/* Login */
/* -------------------------------- */

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

  const matched =
    await bcrypt.compare(
      data.password,
      user.password
    );

  if (!matched) {
    throw new Error(
      "Invalid email or password."
    );
  }

  const token =
    generateToken(user.id);

  return {
    user: user.toJSON(),
    token,
  };
}

/* -------------------------------- */
/* Current User */
/* -------------------------------- */

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

/* -------------------------------- */
/* Update Profile */
/* -------------------------------- */

export async function updateMyProfile(
  id: string,
  data: UpdateProfileDTO
) {

  const user = await updateProfile(id, {
    username: data.username,
    avatar: data.avatar,
    bio: data.bio,
    dateOfBirth: new Date(data.dateOfBirth),
    gender: data.gender,
    city: data.city,
    profileCompleted: true,

  });

  if (!user) {

    throw new Error("User not found.");

  }

  return user;

}

/* -------------------------------- */
/* Change Password */
/* -------------------------------- */

export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string
) {

  const user =
    await findUserById(
      userId,
      true
    );

  if (!user) {
    throw new Error(
      "User not found."
    );
  }

  const matched =
    await bcrypt.compare(
      currentPassword,
      user.password
    );

  if (!matched) {
    throw new Error(
      "Current password is incorrect."
    );
  }

  const samePassword =
    await bcrypt.compare(
      newPassword,
      user.password
    );

  if (samePassword) {
    throw new Error(
      "New password cannot be the same as current password."
    );
  }

  const hashedPassword =
    await bcrypt.hash(
      newPassword,
      10
    );

  await updatePassword(
    userId,
    hashedPassword
  );
}