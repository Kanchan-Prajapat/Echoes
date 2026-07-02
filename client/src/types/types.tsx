export interface Memory {
  id: string;
  title: string;
  journal: string;
  date: string;
  time: string;
  location: string;
  mood: string;
  tags: string[];
  weather: {
    temp: string;
    condition: string;
  };
  favorite: boolean;
  highlight: string; // "None", "Highlights", "Milestones"
  people: string[];
  coverUrl: string;
  song?: string;
  reflection?: string;
  createdAt: string;
}

export type TabType = "home" | "timeline" | "add" | "calendar" | "profile";

export interface MoodConfig {
  name: string;
  label: string;
  iconName: string;
  color: string; // Tailwind class text
  bg: string;    // Tailwind bg
  border: string; // Tailwind border accent
  gradient: string; // Tailwind gradient
  description: string;
}

export const MOODS: MoodConfig[] = [
  {
    name: "Peaceful",
    label: "Peaceful",
    iconName: "Cloud",
    color: "text-sky-500",
    bg: "bg-sky-50/70 dark:bg-sky-950/20",
    border: "border-sky-100 dark:border-sky-900/30",
    gradient: "from-sky-500/10 to-transparent",
    description: "Quiet stillness, a calm and settled heart."
  },
  {
    name: "Reflective",
    label: "Reflective",
    iconName: "Moon",
    color: "text-indigo-500",
    bg: "bg-indigo-50/70 dark:bg-indigo-950/20",
    border: "border-indigo-100 dark:border-indigo-900/30",
    gradient: "from-indigo-500/10 to-transparent",
    description: "Deep in thought, searching for life's alignment."
  },
  {
    name: "Joyful",
    label: "Joyful",
    iconName: "Sun",
    color: "text-amber-500",
    bg: "bg-amber-50/70 dark:bg-amber-950/20",
    border: "border-amber-100 dark:border-amber-900/30",
    gradient: "from-amber-500/10 to-transparent",
    description: "Bursting with radiant light, warm, and happy."
  },
  {
    name: "Nostalgic",
    label: "Nostalgic",
    iconName: "Sparkles",
    color: "text-rose-400",
    bg: "bg-rose-50/70 dark:bg-rose-950/20",
    border: "border-rose-100 dark:border-rose-900/30",
    gradient: "from-rose-500/10 to-transparent",
    description: "The sweet, tender ache of cherished yesterdays."
  },
  {
    name: "Melancholic",
    label: "Melancholic",
    iconName: "CloudRain",
    color: "text-slate-400",
    bg: "bg-slate-50/70 dark:bg-slate-900/20",
    border: "border-slate-100 dark:border-slate-800/30",
    gradient: "from-slate-400/10 to-transparent",
    description: "Soft sadness, honoring heavy or healing seasons."
  }
];

export interface SongConfig {
  title: string;
  artist: string;
  url?: string;
}

export const COZY_SONGS: SongConfig[] = [
  { title: "Weightless", artist: "Marconi Union" },
  { title: "Solitude", artist: "Ryuichi Sakamoto" },
  { title: "Sakura Wind", artist: "Lofi Dreamer" },
  { title: "Quiet Study", artist: "Lofi Cafe" },
  { title: "First Ascent", artist: "Hammock" },
  { title: "Cinematic Mix", artist: "L.T-J" },
  { title: "Starlight Echo", artist: "Cosmic Ambiance" }
];
