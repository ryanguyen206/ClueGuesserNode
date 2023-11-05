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

//puzzle
app.get('/puzzle', (req, res) => {
  res.send('Goodbye Cruel World. This is the puzzle page');
});

//win/loss  record
app.get('/records', (req, res) => {
  res.send('This is the records page');
});
