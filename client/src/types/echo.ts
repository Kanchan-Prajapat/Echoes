import { Media } from "./media";

export interface Echo {
  id: string;

  title: string;

  description: string;

  media: Media[];

  date: string;

  location: string;

  mood: string;

  favorite: boolean;

  createdAt: string;
}