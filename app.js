const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welecom');
});

app.listen(3000, () => {
  console.log('wooooo');
});