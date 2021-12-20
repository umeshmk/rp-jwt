const Joi = require('@hapi/joi');

const email = Joi.string().email().min(6).max(255).required();
const password = Joi.string().min(6).max(1024).required();

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email,
    password,
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email,
    password,
  });
  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
};
