import User from "./user.model.js";

import {

  CreateUserDTO,

  UpdateProfileDTO,

} from "./user.types.js";

/* Create */

export async function createUser(
  data: CreateUserDTO
) {

  const user = await User.create(data);

  return user.toJSON();

}

/* Find by ID */

export async function findUserById(
  id: string
) {

  return User.findById(id);

}

/* Find by Username */

export async function findUserByUsername(
  username: string
) {

  return User.findOne({

    username,

  }).select("+password");

}

/* Find by Email */
export async function findUserByEmail(
  email: string,
  includePassword = false
) {

  const query =
    User.findOne({
      email,
    });

  if (includePassword) {

    query.select("+password");

  }

  return query;

}

/* Update Profile */

export async function updateProfile(
  id: string,
  data: UpdateProfileDTO
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

/* Delete */

export async function deleteUser(
  id: string
) {

  return User.findByIdAndDelete(id);

}