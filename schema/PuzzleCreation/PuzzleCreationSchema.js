const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WordSchema = require('./WordSchema');


const PuzzleCreationSchema = new Schema({
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'WordSchema' 
    }
  ],
  clue: {
    type: String,
    required: true,
  },
},
{ collection: 'PuzzleCreation' }
);

module.exports = mongoose.model("PuzzleCreation", PuzzleCreationSchema);