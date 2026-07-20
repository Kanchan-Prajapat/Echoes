export interface User {

  id: string;

  username: string;

  email: string;

 avatar?: string;

  bio?: string;

  dateOfBirth?: Date;

  gender?:
    | "male"
    | "female"
    | "other"
    | "prefer_not_to_say";

  city?: string;

  profileCompleted: boolean;

}