import OpenAI from "openai";

export const getApiKey = () => {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  return openai.apiKey;
};
