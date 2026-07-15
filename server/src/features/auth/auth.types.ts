export interface SignupDTO {
  username: string;
  email: string;
  password: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface JwtPayload {
  id: string;
}

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  onboardingCompleted: boolean;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}