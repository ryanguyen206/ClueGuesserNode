const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/puzzlecreation', (req, res) => {
  const createdPuzzle = req.body;
  res.status(200).json({
    message: 'puzzle pushed successfully',
    data: createdPuzzle
  });
});

app.get('/puzzle', (req, res) => {
  //pull puzzle from mongo.
  const puzzleToGiveUser = req.body;
  res.status(200).json({
    message: 'Puzzle recieved successfully',
    data: puzzleToGiveUser
  });
});
