const express = require('express');

const app = express();

app.use(express.static('./public'));

app.get('/test', (req, res, next) => {
  res.send('This is the Test Page');
});

app.listen(8080, () => {
  console.log('Listening on Port 8080');
});

app.use((req, res) => {
  res.status(404).send('Unknown Request');
});
