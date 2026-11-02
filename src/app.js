const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('O meu servidor Node.js está a correr perfeitamente na AWS!');
});

app.listen(port, () => {
  console.log(`Aplicação a correr na porta ${port}`);
});
