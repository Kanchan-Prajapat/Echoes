import axios from "axios";
import { env } from "../../config/env.js";

export async function searchMusic(query: string) {

  const { data } = await axios.get(
    "https://api.jamendo.com/v3.0/tracks/",
    {
      params: {
        client_id: env.JAMENDO_CLIENT_ID,
        format: "json",
        limit: 20,
        search: query,
        audioformat: "mp32",
        include: "musicinfo",
      },
    }
  );


  return data.results.map((track: any) => ({
    id: track.id,
    title: track.name,
    artist: track.artist_name,
    album: track.album_name,
    duration: track.duration,
    audio: track.audio,
    image: track.image,
  }));
}