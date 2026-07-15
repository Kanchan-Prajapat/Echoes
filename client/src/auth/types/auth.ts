export interface LoginPayload {

  email: string;

  password: string;

}

export interface SignupPayload {

  name: string;

  email: string;

  password: string;

}

export interface AuthResponse {

  token: string;

  owner: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    createdAt: string;
  };

}