const route = require('express').Router();
const { frutasController } = require('../controllers');

route.get('/', frutasController.findAll);
route.get('/:id', frutasController.findById);
route.post('/', frutasController.insert);
route.delete('/:id', frutasController.deleteFruit);

module.exports = route;