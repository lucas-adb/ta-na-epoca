const { frutasModel } = require('../models');

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

module.exports = {
  findAll,
  findById,
};