const route = require('express').Router();
const { frutasController } = require('../controllers');

route.get('/frutas', frutasController.findAll);

module.exports = route;