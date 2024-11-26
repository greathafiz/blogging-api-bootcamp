import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().max(8).required(),
  lastName: Joi.string().max(8).required(),
  emailAddress: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const loginSchema = Joi.object({
  emailAddress: Joi.string().email(),
  password: Joi.string().required().min(8),
});
