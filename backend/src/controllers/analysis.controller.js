const analysisService = require("../services/analysis.service");
const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess } = require("../utils/apiResponse");

const analyzeFinding = asyncHandler(async (req, res) => {
  const analysis = await analysisService.createAnalysis(req.body);

  return sendSuccess(res, "Analysis completed successfully", analysis, 201);
});

const getAllHistory = asyncHandler(async (req, res) => {
  const history = await analysisService.getHistory();

  return sendSuccess(res, "Analysis history fetched successfully", history);
});

module.exports = {
  analyzeFinding,
  getAllHistory,
};
