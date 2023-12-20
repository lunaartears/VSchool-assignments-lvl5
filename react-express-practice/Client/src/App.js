import React, { useState, useEffect } from "react"
import axios from "axios"
import Movie from "./components/Movie.jsx"
import AddMovieForm from "./components/AddMovieForm.jsx"
import './App.css';

function App() {
    const [movies, setMovies] = useState([])

    function getMovies() {
        axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))             // err.response.data.errMsg (to check the error message)
    }

    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
        .then(res => setMovies(prevMovies => [...prevMovies, res.data]))
        .catch(err => console.log(err))
    }

    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
        .then(res => setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId)))
        .catch(err => console.log(err))
    }

    function editMovie(updates, movieId) {
        axios.put(`/movies/${movieId}`, updates)
        .then(res => setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data)))
        .catch(err => console.log(err))
    }

    function handleFilter(e) {
        if (e.target.value === "reset") {       //reset is hardcoded value added to the select tag so I could call get movies()
            getMovies()
        } else {
            axios.get(`/movies/search/genre?genre=${e.target.value}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getMovies()
    }, [])


    return (
        <div>
            <div>
                <AddMovieForm
                submit={addMovie}
                buttonText="Add Movie"
                />

                <h4>Filter by Genre</h4>
                <select onChange={handleFilter} className="filterForm">
                    <option value="reset">All Movies</option>
                    <option value="science fiction">Science Fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="comedy">Comedy</option>
                </select>

                {movies.map(movie =>
                <Movie
                {...movie}
                key={movie.title}
                deleteMovie={deleteMovie}
                editMovie={editMovie}
                />)}
            </div>
        </div>

    )

}

export default App;
