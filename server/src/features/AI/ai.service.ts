import Groq from "groq-sdk";
import { env } from "../../config/env.js";
interface EchoInput {
  title: string;
  description?: string;
  mood?: string;
  location?: string;
  date: Date;
}

const groq = new Groq({
  apiKey: env.GROQ_API_KEY,
});

export interface AIInsight {
  caption: string;
  insight: string;
  tags: string[];
}

export async function generateAIInsight(
  echo: EchoInput
): Promise<AIInsight> {
  const prompt = `
You are an AI assistant for a personal memory journaling app called Echoes.

Analyze the following memory and return ONLY valid JSON.

Schema:
{
  "caption": "short emotional caption",
  "insight": "2-4 sentence reflection",
  "tags": ["tag1","tag2","tag3"]
}

Memory

Title: ${echo.title}

Description:
${echo.description ?? ""}

Mood:
${echo.mood ?? ""}

Location:
${echo.location ?? ""}

Date:
${echo.date}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    temperature: 0.7,
    response_format: {
      type: "json_object",
    },
    messages: [
      {
        role: "system",
        content:
          "You are a thoughtful journaling assistant. Always respond with valid JSON only.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("AI returned an empty response.");
  }

  return JSON.parse(content);
}