const { frutasModel } = require('../models');

const findAll = async () => {
  const frutas = await frutasModel.findAll();
  return { status: 'SUCCESSFUL', data: frutas };
};

module.exports = {
  findAll,
};