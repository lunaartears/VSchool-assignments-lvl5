import React, {useState} from "react"
import AddMovieForm from "./AddMovieForm.jsx"

export default function Movie(props) {
    // const {title, genre, _id} = props * deconstruct props so I wont have to use the word props over and over *
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div>
            { !editToggle ?
            <>
            <h1>Title: {props.title}</h1>
            <p>Genre: {props.genre}</p>
            <button
                className="delete-button"
                onClick={() => props.deleteMovie(props._id)}
            >Delete Movie</button>
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >Edit</button>
            </>
            :
            <>
            <AddMovieForm
                title={props.title}
                genre={props.genre}
                _id={props._id}
                buttonText="Submit Edit"
                submit={props.editMovie}
            />
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >Close Edit</button>
            </>
            }

        </div>
    )
}
