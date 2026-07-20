export interface Echo {

  id: string;

  owner: string;

  title: string;

  description?: string;

  date: Date;

  location?: string;

  mood?: string;

  weather?: string;

  favorite?: boolean;

  tags?: string[];

  media?: MediaDTO[];

  coverMediaId?: string;

  music?: {
    id: string;
    title: string;
    artist: string;
    cover: string;
    url: string;
    duration: number;
    source: "echoes" | "uploaded";
  };

}

export interface MediaDTO {

  url: string;

  publicId: string;

  type: "image" | "video";

}

export interface CreateEchoDTO {

  owner: string;

  title: string;

  description?: string;

  date: Date;

  location?: string;

  mood?: string;

  weather?: string;

  favorite?: boolean;

  tags?: string[];

  media?: MediaDTO[];

  coverMediaId?: string;

  music?: {

  id: string;

  title: string;

  artist: string;

  cover: string;

  url: string;

  duration: number;

  source:
    | "echoes"
    | "uploaded";

};

}

export interface UpdateEchoDTO {

  title?: string;

  description?: string;

  date?: Date;

  location?: string;

  mood?: string;

  weather?: string;

  favorite?: boolean;

  tags?: string[];

  media?: MediaDTO[];

  coverMediaId?: string;

  
music?: {

  id: string;

  title: string;

  artist: string;

  cover: string;

  url: string;

  duration: number;

  source:
    | "echoes"
    | "uploaded";

};
}


