const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configure middleware to parse JSON requests
app.use(bodyParser.json());

// Define the route for the exponentiation calculation
app.post('/', (req, res) => {
  // Check that the request has the correct format
  if (!req.body || !req.body.num1) {
    return res.status(400).send('Invalid request');
  }

  // Get the number from the request payload
  const num1 = parseInt(req.body.num1);

  // Check whether the number is even or odd
  if (num1 % 2 === 0) {
    res.status(200).send(`The number ${num1} is even`);
  } else {
    res.status(404).send(`The number ${num1} is odd`);
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

