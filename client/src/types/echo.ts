import { Media } from "./media";

export interface EchoMusic {
  id: string;
  title: string;
  artist: string;
  cover: string;
  url: string;
  duration: number;
  source: "echoes" | "uploaded";
}

export interface Echo {
  id: string;

  title: string;

  description: string;

  media: Media[];

  date: Date;

  location: string;

  mood: string;

  favorite: boolean;

  createdAt: string;

    updatedAt: string;

  lastViewedIndex: number;

  viewed: boolean;
  coverMediaId?: string;

  viewCount: number;

aiCaption?: string;

aiInsight?: string;

aiTags?: string[];

aiGeneratedAt?: string;

aiModel?: string;

music?: EchoMusic;

aiEmotion?: string;

aiConfidence?: number;

aiThemes?: string[];
}