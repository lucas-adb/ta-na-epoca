const { insertFruitSchema } = require('./schema');

const validateNewFruit = (nome) => {
  const { error } = insertFruitSchema.validate({ nome });
  if (!nome) return { status: 'BAD_REQUEST', data: { message: 'É necessário inserir um "nome"' } };
  if (error) {
    return (
      {
        status: 'INVALID_VALUE',
        data: { message: 'O "nome" deve ter pelo menos 2 caracteres' },
      }
    );
  }

  return { status: null, data: '' };
};

module.exports = {
  validateNewFruit,
};