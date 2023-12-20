const express = require("express")
const Inventory = require("../models/cruds.js/inventory.js")
const inventoryRouter = express.Router()

// add one/ post
inventoryRouter.post('/', async (req, res, next) => {
    try {
        const newItem = new Inventory(req.body)
        const savedItem = await newItem.save()
        return res.status(201).send(savedItem)        // res.send on the backend is res.data on the frontend
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// get all
inventoryRouter.get('/', async (req, res, next) => {
    try {
        const items = await Inventory.find()
        return res.status(200).send(items)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// get one
inventoryRouter.get('/:itemId', async (req, res, next) => {
    try {
        const itemId = req.params.itemId
        const foundItem = await Inventory.find({ _id: req.params.itemId })
        return res.status(200).send(foundItem)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// delete one
inventoryRouter.delete('/:itemId', async (req, res, next) => {
    try {
        const deletedItem = await Inventory.findOneAndDelete({ _id: req.params.itemId })
        return res.status(200).send(`Successfully deleted ${deletedItem.title} from the database`)
    } catch {
        res.status(500)
        return next(err)
    }
})

// edit one
inventoryRouter.put('/:itemId', async (req, res, next) => {
    try {
        const updatedItem = await Inventory.findOneAndUpdate(
            { _id: req.params.itemId },
            req.body,
            { new: true }
        )
        return res.status(201).send(updatedItem)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


module.exports = inventoryRouter
