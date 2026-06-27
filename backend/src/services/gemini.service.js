const env = require("../config/env");
const AppError = require("../utils/appError");
const { buildAnalysisPrompt } = require("../utils/geminiPrompt");

const GEMINI_MODEL = "gemini-2.5-flash";

const parseGeminiJson = (text) => {
  const cleanedText = text.replace(/```json|```/gi, "").trim();

  try {
    return JSON.parse(cleanedText);
  } catch (error) {
    throw new AppError("Unable to parse AI response", 502);
  }
};

const analyzeFindingWithGemini = async (payload) => {
  const prompt = buildAnalysisPrompt(payload);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.geminiApiKey}`;
 
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    if (process.env.NODE_ENV !== "production") {
      console.error("Gemini API error:", errorText);
    }

    throw new AppError("Gemini API request failed", 502);
  }

  const result = await response.json();
  const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new AppError("Gemini returned an empty response", 502);
  }

  return parseGeminiJson(text);
};

module.exports = {
  analyzeFindingWithGemini,
};
