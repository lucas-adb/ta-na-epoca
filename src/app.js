const express = require('express');
const { frutasRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.use('/frutas', frutasRoutes);

module.exports = app;