const express = require("express")
const tvShowRouter = express.Router()
const uuid = uuid("uuid/v4")


const tvShows = [
    {title: "Steins Gate", _id: uuid()},
    {title: "Knights of Sidonia", _id: uuid()},
    {title: "Sailor Moon", _id: uuid()},
    {title: "Dark", _id: uuid()},
]

tvShowRouter.get("/tvShows", (req, res) => {
    res.send(tvShows)
})

tvShowRouter.post("/tvShows", (req, res) => {
    const newShow = req.body
    newShow._id = uuid()
    tvShows.push(newShow)
    res.send(`Successfully added ${newShow.title} to database`)
})


module.exports = tvShowsRouter
