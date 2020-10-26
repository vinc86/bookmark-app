const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model("bookmarks", bookmarkSchema);