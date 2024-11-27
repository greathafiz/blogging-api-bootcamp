import Joi from "joi";

export const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().max(200).required(),
});
