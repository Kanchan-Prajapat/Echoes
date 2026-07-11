/* -------------------------------- */
/* Profile */
/* -------------------------------- */

export interface Profile {

  id: string;

  username: string;

  email: string;

  avatar?: string;

  bio?: string;

  onboardingCompleted: boolean;

  createdAt: string;

  updatedAt: string;

}

/* -------------------------------- */
/* Update Profile */
/* -------------------------------- */

export interface UpdateProfileDTO {

  username?: string;

  bio?: string;

  avatar?: string;

}