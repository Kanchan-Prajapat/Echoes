import User from "./user.model.js";

/* -------------------------------- */
/* Create User */
/* -------------------------------- */

export async function createUser(data: {
  username: string;
  email: string;
  password: string;
}) {
  const user = await User.create(data);

  return user.toJSON();
}

/* -------------------------------- */
/* Find By Email */
/* -------------------------------- */

export async function findUserByEmail(
  email: string,
  withPassword = false
) {
  const query = User.findOne({ email });

  if (withPassword) {
    query.select("+password");
  }

  return query;
}

/* -------------------------------- */
/* Find By ID */
/* -------------------------------- */

export async function findUserById(
  id: string,
  withPassword = false
) {
  const query = User.findById(id);

  if (withPassword) {
    query.select("+password");
  }

  return query;
}

/* -------------------------------- */
/* Update Profile */
/* -------------------------------- */

export async function updateProfile(
  id: string,
  data: {
    username?: string;
    avatar?: string;
    bio?: string;
    onboardingCompleted?: boolean;
  }
) {
  return User.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
}

/* -------------------------------- */
/* Update Password */
/* -------------------------------- */

export async function updatePassword(
  id: string,
  password: string
) {
  return User.findByIdAndUpdate(
    id,
    {
      password,
    },
    {
      new: true,
    }
  );
}