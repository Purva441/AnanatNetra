import Joi from 'joi';
import { SEVERITY_OPTIONS } from '../utils/constants';

export const analysisSchema = Joi.object({
  organization: Joi.string().trim().min(2).required().messages({
    'string.empty': 'Organization name is required.',
    'string.min': 'Organization name must be at least 2 characters.',
  }),
  asset: Joi.string().trim().min(2).required().messages({
    'string.empty': 'Asset name is required.',
    'string.min': 'Asset name must be at least 2 characters.',
  }),
  finding: Joi.string().trim().min(10).required().messages({
    'string.empty': 'Security finding is required.',
    'string.min': 'Security finding must be at least 10 characters.',
  }),
  severity: Joi.string()
    .valid(...SEVERITY_OPTIONS)
    .required()
    .messages({
      'any.only': 'Please select a valid severity.',
      'string.empty': 'Please select a severity.',
    }),
});
