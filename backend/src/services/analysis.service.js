const analysisRepository = require("../repositories/analysis.repository");
const { analyzeFindingWithGemini } = require("./gemini.service");

const createAnalysis = async (payload) => {
  const aiResponse = await analyzeFindingWithGemini(payload);

  const analysisData = {
    organization: payload.organization,
    asset: payload.asset,
    finding: payload.finding,
    severity: payload.severity,
    priority: aiResponse.priority,
    why: aiResponse.why,
    recommendation: aiResponse.recommendation,
    timeline: aiResponse.timeline,
  };

  return analysisRepository.createAnalysis(analysisData);
};

const getHistory = () => {
  return analysisRepository.getAnalysisHistory();
};

module.exports = {
  createAnalysis,
  getHistory,
};
