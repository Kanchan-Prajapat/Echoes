import { Types } from "mongoose";

export type MediaType = "image" | "video";

export interface IMedia {
  url: string;
  publicId: string;
  type: MediaType;
}

export interface IEcho {
  _id?: Types.ObjectId;

  userId?: Types.ObjectId;

  title: string;

  description?: string;

  date: Date;

  location?: string;

  mood?: string;

  weather?: string;

  tags?: string[];

  favorite?: boolean;

  media: IMedia[];

  coverMediaId?: string;

  createdAt?: Date;

  updatedAt?: Date;
}

export interface CreateEchoDTO {
  title: string;

  description?: string;

  date: Date;

  location?: string;

  mood?: string;

  weather?: string;

  tags?: string[];

  favorite?: boolean;

  media: IMedia[];

  coverMediaId?: string;
}

export interface UpdateEchoDTO {
  title?: string;

  description?: string;

  date?: Date;

  location?: string;

  mood?: string;

  weather?: string;

  tags?: string[];

  favorite?: boolean;

  media?: IMedia[];

  coverMediaId?: string;
}