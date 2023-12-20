const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Inventory blueprint
const inventorySchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now       // auto updates with current date
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)
