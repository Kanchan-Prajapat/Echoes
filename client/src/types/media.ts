export type MediaType = "image" | "video";

export interface Media {
  id: string;

  type: MediaType;

  url: string;

  thumbnail?: string;

  file?: File;          

  publicId?: string;   

  duration?: number;
}