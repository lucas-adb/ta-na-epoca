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

const insert = async (nome) => {
  const [{ frutaId }] = await connection.execute(
    'INSERT INTO taNaEpocaDB.frutas (nome) VALUES (?)',
    [nome],
  );

  return frutaId;
};

const deleteFruit = async (frutaId) => {
  await connection.execute(
    'DELETE FROM taNaEpocaDB.frutas WHERE fruta_id = ?',
    [frutaId],
  );
};

module.exports = {
  findAll,
  findById,
  insert,
  deleteFruit,
};