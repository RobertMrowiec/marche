const express = require('express');
const cors = require('cors');
const file = require('./stateData.json');

const app = express();

app.use(cors());

app.get('/', (req, res) => res.status(200).json(file));

module.exports = app;
