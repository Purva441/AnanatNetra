const express = require("express");
const analysisController = require("../../controllers/analysis.controller");
const validate = require("../../middlewares/validate");
const { analyzeSchema } = require("../../validations/analyze.validation");

const router = express.Router();

router.post("/analyze", validate(analyzeSchema), analysisController.analyzeFinding);
router.get("/history", analysisController.getHistory);

module.exports = router;
