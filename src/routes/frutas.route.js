const route = require('express').Router();
const { frutasController } = require('../controllers');

route.get('/', frutasController.findAll);
route.get('/:id', frutasController.findById);

module.exports = route;