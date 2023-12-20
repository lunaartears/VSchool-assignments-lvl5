const express = require("express")
const movieRouter = express.Router()
const uuid = require("uuid/v4")

const movies = [
    {title: "lord of the rings", genre: "fantasy", _id: uuid()},
    {title: "Dune", genre: "science fiction", _id: uuid()},
    {title: "planet of the apes", genre: "science fiction", _id: uuid()},
    {title: "annihilation", genre: "horror", _id: uuid()}
]


// Routes //
app.get("/", (req, res) => {        // don't need "movies" here bc it's on the router file
    res.send(movies)
})

movieRouter.post("/", (req, res) => {       // and here either
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to database`)
})

movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie")
})

movieRouter.put("/:movieId", (req, res) => {
    const movieId= req.params.movieId
    const updateObject = req.body
    const movieIndex = movies.findIndex(movie => movie_id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], updateObject)
    res.send(updatedMovie)
})



module.exports = movieRouter
