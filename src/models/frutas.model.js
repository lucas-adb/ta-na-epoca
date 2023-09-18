const connection = require('./connection');

const findAll = async () => {
  const [fruits] = await connection.execute(
    'SELECT * from taNaEpocaDB.frutas',
  );

  return fruits;
};

module.exports = {
  findAll,
};