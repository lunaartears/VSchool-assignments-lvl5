const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bountySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Bounty', bountySchema)
