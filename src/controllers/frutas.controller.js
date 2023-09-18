const { frutasService } = require('../services');
const mapStatusHTTP = require('../utils/httpErrorMap');

const findAll = async (_req, res) => {
  const { status, data } = await frutasService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
};