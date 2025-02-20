const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Elon’s Rocket Engine is Online!');
});

app.listen(3000, () => {
  console.log('Engine roaring on port 3000!');
});
