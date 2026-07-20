import { Document } from "mongoose";

export interface IMusic extends Document {
  title: string;
  artist: string;
  album?: string;
  cover: string;
  url: string;
  previewUrl?: string;
  duration: number;
  category: string;
  tags: string[];
  premium: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MusicData {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
  duration: number;
  category: string;
}