import api from "./api";
import { Echo } from "@/types/echo";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function generateAIInsight(
  echoId: string
): Promise<Echo> {
  const response = await api.post(
    `${API_BASE_URL}/ai/insight/${echoId}`
  );

  return response.data.data;
}


export interface AIInsightRequest {
  title: string;
  description: string;
  mood?: string;
  location?: string;
  date?: string;

}

export interface AIInsightResponse {
  caption: string;
  themes: string[];
  tags: string[];
}
