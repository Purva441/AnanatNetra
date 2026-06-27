require("dotenv").config();

const requiredEnv = ["DATABASE_URL", "GEMINI_API_KEY"];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`${key} is required in environment variables`);
  }
});

module.exports = {
  port: process.env.PORT || 5000,
  databaseUrl: process.env.DATABASE_URL,
  geminiApiKey: process.env.GEMINI_API_KEY,
};
