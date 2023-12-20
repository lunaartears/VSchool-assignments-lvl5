const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movie.jsx")


// Routes //

// Get all
movieRouter.get("/", async (req, res, next) => {        // don't need "movies" here bc it's on the router file
            try{
                const movies = await Movie.find()
                return res.status(200).send(movies)     // chained status and send bc both res methods
            } catch(err) {
                res.status(500)
                return next(err)
            }
})

// Get one
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if (!foundMovie) {                                                         // Created an error object to send error message
        const error = new Error(`The item ID, ${movieId} was not found`)
        res.status(500)                                                     // Sending res error code
        return next(error)
    }
    res.status(200).send(foundMovie)
})

// Get by genre
movieRouter.get("/search/genre", async (req, res, next) => {
    try {
        const movies = await Movie.find({genre: req.query.genre})
        return res.status(200).send(movies)
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

// Add one
movieRouter.post("/", async (req, res, next) => {       // Don't need "movies" here either
    try {
        const newMovie = new Movie(req.body)
        const savedMovie = await newMovie.save()
        return res.status(201).send(savedMovie)
    } catch {
        res.status(500)
        return next(err)
    }
})

// Delete one
movieRouter.delete("/:movieId", async (req, res, next) => {
    try {
        const deletedMovie = await Movie.findOneAndDelete({_id: req.params.movieId})
        return res.status(200).send(`Successfully deleted ${deletedMovie.title} from the database`)
    } catch {
        res.status(500)
        return next(err)
    }
})

// Edit one
movieRouter.put("/:movieId", async (req, res, next) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            {_id: req.params.movieId},
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedMovie)
    } catch {
        res.status(500)
        return next(err)
    }

})



module.exports = movieRouter
