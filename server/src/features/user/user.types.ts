export interface UserDocument {
  id: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female" | "other" | "prefer_not_to_say";
  city?: string;
  profileCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface UpdateProfileDTO {
  username: string;
  avatar?: string;
  bio?: string;
  dateOfBirth: string;
  gender?: "male" | "female" | "other" | "prefer_not_to_say";
  city?: string;
}