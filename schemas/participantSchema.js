import Joi from "joi";

export const createParticipantSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
});
