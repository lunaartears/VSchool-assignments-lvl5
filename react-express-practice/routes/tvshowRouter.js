const express = require("express")
const tvshowRouter = express.Router()
const {v4:uuidv4} = require("uuid")


const tvshows = [
    {title: "Steins Gate", _id: uuidv4()},
    {title: "Knights of Sidonia", _id: uuidv4()},
    {title: "Sailor Moon", _id: uuidv4()},
    {title: "Dark", _id: uuidv4()},
]

tvshowRouter.get("/", (req, res) => {
    res.send(tvshows)
})

// Get one
tvshowRouter.get("/:tvshowId", (req, res) => {
    const tvshowId = req.params.movieId
    const foundTvshow = tvshows.find(tvshow => tvshow._id === tvshowId)
    res.send(foundTvshow)
})

tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`Successfully added ${newShow.title} to database`)
})


module.exports = tvshowRouter
