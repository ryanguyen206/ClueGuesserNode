const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const WordSchema = require('./schema/PuzzleCreation/WordSchema')
const mongoose = require('mongoose');


var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

mongoose.connect('mongodb+srv://ryanninja595:ryanninja595@clueguesserdata.emp8nhu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(cors(corsOptions));
app.use(bodyParser.json());

//import routes
const usersRoute = require('./routes/users')
const puzzleCreationRoute = require('./routes/puzzleCreation')
app.use('/users', usersRoute);
app.use('/puzzle-creation', puzzleCreationRoute);




//puzzle
app.get('/puzzle', (req, res) => {
  res.send('Goodbye Cruel World. This is the puzzle page');
});



