const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = require('./UserSchema');


const PuzzleSchema = new Schema({
  cards: {
    type: [String],
    required:true
  },
  answerKey: {
    type: [Number],
    required:true,
  },
  clue: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  }
},
{ collection: 'Puzzle' }
);

module.exports = mongoose.model("Puzzle", PuzzleSchema);