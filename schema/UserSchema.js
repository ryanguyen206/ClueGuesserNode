const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    email : {
        required: true,
        type: String
    },
    guessingScore: {
        type: Number,
        required: true,
    },
    creationScore: {
        type: Number,
        required: true,
    },
    totalWins: {
        type: Number,
        required: true,
    },
    totalGames: {
        type: Number,
        required: true,
    },
    },
    { collection: 'User' }
    );

module.exports = mongoose.model("User", UserSchema);