const { frutasModel } = require('../models');
const schema = require('./validations/validationsInput');

const findAll = async () => {
  const frutas = await frutasModel.findAll();
  return { status: 'SUCCESSFUL', data: frutas };
};

const findById = async (frutaId) => {
  const fruta = await frutasModel.findById(frutaId);
  if (!fruta) {
    return { status: 'NOT_FOUND', data: { message: 'Fruta não encontrada' } };
  }

  return { status: 'SUCCESSFUL', data: fruta };
};

const insert = async (nome) => {
  const error = schema.validateNewFruit(nome);
  if (error.status) return error;

  const frutaId = await frutasModel.insert(nome);

  return { status: 'SUCCESSFUL', data: { frutaId, nome } };
};

module.exports = {
  findAll,
  findById,
  insert,
};