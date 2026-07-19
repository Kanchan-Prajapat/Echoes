export interface AIInsightResponse {
  caption: string;

  reflection: string;

  emotion: string;

  confidence: number;

  themes: string[];

  tags: string[];
}



export interface AIInsightRequest {
  title: string;
  description: string;

  mood?: string;
  location?: string;
  date?: string;

}