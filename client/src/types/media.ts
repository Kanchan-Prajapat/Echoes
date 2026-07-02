export type MediaType = "image" | "video";

export interface Media {
  id: string;

  type: MediaType;

  url: string;

  thumbnail?: string;

  duration?: number;
}