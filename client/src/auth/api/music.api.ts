import api from "./axios";
import { Music } from "@/types/music";

export async function getAllMusic(): Promise<Music[]> {

  const response = await api.get("/music");

  return response.data.data;

}