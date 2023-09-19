const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [fruits] = await connection.execute(
    'SELECT * from taNaEpocaDB.frutas',
    );

  return camelize(fruits);
};

const findById = async (frutaId) => {
  const [[fruit]] = await connection.execute(
    'SELECT * from taNaEpocaDB.frutas WHERE fruta_id = ?',
    [frutaId],
  );

  return camelize(fruit);
};

module.exports = {
  findAll,
  findById,
};