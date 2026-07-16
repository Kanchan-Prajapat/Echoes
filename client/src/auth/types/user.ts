export interface User {

  id: string;

  username: string;

  email: string;

  avatar: string;

  bio?: string;

  dateOfBirth?: string;

  gender?:
    | "male"
    | "female"
    | "other"
    | "prefer_not_to_say";

  city?: string;

  profileCompleted: boolean;

}