const express = require("express");
const analysisRoutes = require("./analysis.routes");

const router = express.Router();

router.use("/", analysisRoutes);

module.exports = router;
