const express = require("express")
const bountyRouter = express.Router()
const Bounties = require("../model/bounties")


bountyRouter.get("/", async (req, res, next) => {
    try{
        const bounties = await Bounties.find()
        return res.status(200).send(bounties)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.get("/:bountyId", async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId
        const foundBounty = await Bounties.find({_id: req.params.bountyId})
        return res.status(200).send(foundBounty)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.post("/", async (req, res, next) => {
    try {
        const newBounty = new Bounties(req.body)
        const savedBounty = await newBounty.save()
        return res.status(201).send(savedBounty)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.delete("/:bountyId", async (req, res, next) => {
    try {
        const deletedBounty = await Bounties.findOneAndDelete({_id: req.params.bountyId})
        return res.status(200).send(`Successfully deleted ${deletedBounty.name} from the database`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.put("/:bountyId", async (req, res, next) => {
    try {
        const updatedBounty = await Bounties.findOneAndUpdate(
            {_id: req.params.bountyId},
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedBounty)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


module.exports = bountyRouter
