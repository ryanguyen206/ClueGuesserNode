const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    selected: {
        type: Boolean,
        required: true,
    },
    answerClass: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model("WordSchema", WordSchema);