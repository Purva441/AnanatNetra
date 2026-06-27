const Joi = require("joi");
const { SEVERITIES } = require("../constants/severity");

const analyzeSchema = Joi.object({
  organization: Joi.string().trim().min(2).max(100).required(),
  asset: Joi.string().trim().min(2).max(100).required(),
  finding: Joi.string().trim().min(3).max(200).required(),
  severity: Joi.string()
    .valid(...SEVERITIES)
    .required(),
});

module.exports = {
  analyzeSchema,
};
