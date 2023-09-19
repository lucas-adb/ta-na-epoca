const Joi = require('joi');

const insertFruitSchema = Joi.object({
  nome: Joi.string().min(2).required(),
});

module.exports = {
  insertFruitSchema,
};