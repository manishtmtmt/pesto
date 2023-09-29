import axios from "axios";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const getPrompt = (payload) => {
  return `Suggest some gift ideas for a ${payload.gae} ${payload.gender} that is into ${payload.interest} in budget less than 10,000 rupees.`;
};

export const getGiftRecommendation = async (payload) => {
  const url = "https://api.openai.com/v1/completions";
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Charset: "utf-8",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const prompt = getPrompt(payload);
  const response = await axios.post(
    url,
    {
      model: "gpt-3.5-turbo-instruct",
      prompt,
      max_tokens: 7,
      temperature: 0,
    },
    { headers }
  );

  return response;
};
