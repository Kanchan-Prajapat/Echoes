import Echo from "../echo/echo.model.js";

export interface SaveAIInsightDTO {
  caption: string;
  insight: string;
  tags: string[];
}

export async function saveAIInsight(
  echoId: string,
  owner: string,
  ai: SaveAIInsightDTO
) {
  return Echo.findOneAndUpdate(
    {
      _id: echoId,
      owner,
    },
    {
      aiCaption: ai.caption,
      aiInsight: ai.insight,
      aiTags: ai.tags,
      aiGeneratedAt: new Date(),
      aiModel: "llama-3.1-8b-instant",
    },
    {
      new: true,
      runValidators: true,
    }
  );
}