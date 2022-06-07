const express = require('express');
const app = express();
const file = require('./stateData.json');

app.get('/', (req, res) => res.status(200).json(file));

module.exports = app;
