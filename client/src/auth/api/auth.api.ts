import api from "./axios";

/* -------------------------------- */
/* Types */
/* -------------------------------- */

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

/* -------------------------------- */
/* Signup */
/* -------------------------------- */
export async function signup(data: SignupRequest) {

  const { data: response } = await api.post(
    "/auth/signup",
    data
  );

    return response.data;

}

/* -------------------------------- */
/* Login */
/* -------------------------------- */
export async function login(data: LoginRequest) {

  const { data: response } = await api.post(
    "/auth/login",
    data
  );

  return response.data;

}

/* -------------------------------- */
/* Current User */
/* -------------------------------- */

export async function getCurrentUser() {

  const response = await api.get(
    "/auth/me"
  );

  return response.data;

}

/* -------------------------------- */
/* Update Profile */
/* -------------------------------- */

export async function updateProfile(
  data: Record<string, any>
) {

  const response = await api.patch(
    "/auth/me",
    data
  );

  return response.data;

}