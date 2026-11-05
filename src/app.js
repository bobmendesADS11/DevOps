const express = require('express');
const app = express();
const port = 3000;

app.get('/index', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

module.exports = app;
