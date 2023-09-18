const express = require('express');
const { frutasRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.get('/frutas', frutasRoutes);

module.exports = app;