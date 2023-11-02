const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(bodyParser.json());

app.post('/puzzlecreation', (req, res) => {

  const createdPuzzle = req.body;

  res.status(200).json({
    message: 'puzzle pushed successfully',
    data: createdPuzzle
  });
});
