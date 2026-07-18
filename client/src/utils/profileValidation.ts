export interface ProfileValidationData {
  username: string;
  bio: string;
  dateOfBirth: string;
  city: string;
}

export interface ProfileErrors {
  username?: string;
  bio?: string;
  dateOfBirth?: string;
  city?: string;
}

export function validateProfile(
  data: ProfileValidationData
) {
  const errors: ProfileErrors = {};

  /* ---------------- Username ---------------- */

  const username = data.username.trim();

  if (!username) {
    errors.username = "Username is required.";
  } else if (username.length < 3) {
    errors.username =
      "Username must be at least 3 characters.";
  } else if (username.length > 25) {
    errors.username =
      "Username cannot exceed 25 characters.";
  }

  /* ---------------- Bio ---------------- */

  if (data.bio.length > 250) {
    errors.bio =
      "Bio cannot exceed 250 characters.";
  }

  /* ---------------- Date of Birth ---------------- */

  if (data.dateOfBirth) {
    const dob = new Date(data.dateOfBirth);
    const today = new Date();

    if (dob > today) {
      errors.dateOfBirth =
        "Date of birth cannot be in the future.";
    } else {
      const age =
        today.getFullYear() -
        dob.getFullYear();

      if (age < 10) {
        errors.dateOfBirth =
          "You must be at least 10 years old.";
      }
    }
  }

  /* ---------------- City ---------------- */

  if (data.city.length > 100) {
    errors.city =
      "City cannot exceed 100 characters.";
  }

  return {
    errors,
    isValid:
      Object.keys(errors).length === 0,
  };
}