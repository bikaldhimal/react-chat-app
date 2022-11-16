// Validation
const Joi = require("@hapi/joi");

// SignUp Validation
const signupValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(8).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

// Chatting messsage validation
const messageValidation = (data) => {
  const schema = Joi.object({
    message: Joi.string().required(),
  });
};

module.exports.signupValidation = signupValidation;
module.exports.loginValidation = loginValidation;
module.exports.messageValidation = messageValidation;
