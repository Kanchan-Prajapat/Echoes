export interface UserDocument {
  id: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
  onboardingCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface UpdateProfileDTO {
  username?: string;
  avatar?: string;
  bio?: string;
  onboardingCompleted?: boolean;
}