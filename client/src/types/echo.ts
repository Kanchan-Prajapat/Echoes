import { Media } from "./media";
import { EchoMusic } from "./music";

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
}