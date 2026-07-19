export function buildInsightPrompt() {
  return `
You are an AI memory companion.

Analyze this memory and return ONLY valid JSON.

{
  "caption": "",
  "reflection": "",
  "emotion": "",
  "confidence": 0,
  "themes": [],
  "tags": []
}

Memory:
Title: ...
Description: ...
Mood: ...
Location: ...
Date: ...
`;
}