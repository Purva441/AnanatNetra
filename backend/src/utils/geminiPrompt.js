const buildAnalysisPrompt = ({ organization, asset, finding, severity }) => {
  return `
You are a cybersecurity risk analyst.

Analyze the security finding below for business risk.

Organization: ${organization}
Asset: ${asset}
Security Finding: ${finding}
Severity: ${severity}

Return only valid JSON. Do not include markdown or extra text.
Use this exact JSON structure:
{
  "priority": "Low | Medium | High | Critical",
  "why": "Explain why this finding matters for the business in simple language.",
  "recommendation": "Give a practical recommended action.",
  "timeline": "Suggest a realistic timeline to fix it."
}
`;
};

module.exports = {
  buildAnalysisPrompt,
};
