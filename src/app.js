const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const num1 = req.body.num1;
  if (num1 === undefined || num1 === null || isNaN(num1)) {
    res.status(400).send('Invalid request payload');
  } else {
    if (num1 % 2 === 0) {
      res.status(200).send('The number is even');
    } else {
      res.status(404).send('The number is odd');
    }
  }
});
module.exports = server;
