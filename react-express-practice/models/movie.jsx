const mongoose = require("mongoose")
const Schema = mongoose.Schema


// Movie blueprint
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: String,
    releaseYear: Number
})

module.exports = mongoose.model("Movie", movieSchema)
