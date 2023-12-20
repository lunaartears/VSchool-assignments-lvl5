const express = require("express")
const inventoryRouter = express.Router()
const {v4:uuidv4} = require("uuid")

const inventory = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

// Get all
inventoryRouter.get("/", (req, res) => {
    res.send(inventory)
})

inventoryRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredInventory = inventory.filter(item => item.type === type)
    res.send(filteredInventory)
})

module.exports = inventoryRouter
