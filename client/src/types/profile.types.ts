/* -------------------------------- */
/* Profile */
/* -------------------------------- */

export interface Profile {

  id: string;

  username: string;

  email: string;

  avatar?: string;

  bio?: string;

  dateOfBirth?: string;

  gender?: "male" | "female" | "other" | "prefer_not_to_say";

  city?: string;

  profileCompleted: boolean;

  createdAt: string;

  updatedAt: string;


}

/* -------------------------------- */
/* Update Profile */
/* -------------------------------- */

export interface UpdateProfileDTO {

  username: string;

  bio?: string;

  avatar?: string;

  dateOfBirth: string;

  gender?: "male" | "female" | "other" | "prefer_not_to_say";

  city?: string;


}