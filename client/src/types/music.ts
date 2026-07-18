export interface Music {
  _id: string;

  title: string;

  artist: string;

  album?: string;

  cover: string;

  url: string;

  previewUrl?: string;

  duration: number;

  category: string;

  tags?: string[];

  premium?: boolean;
}

export interface EchoMusic {
  id: string;

  title: string;

  artist: string;

  cover: string;

  url: string;

  duration: number;

  source: "echoes" | "uploaded";
}