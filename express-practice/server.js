const express = require("express")
const app = express()
const uuid = require("uuid/v4")



//app.get("/", (req, res) => {     // get() ect. takes 2 arguments 1. endpoint 2. CB function
//    res.send("Hello Woo!")
//})

// fake data //
// const users = [
//     {name: 'Winter', age: 11},
//     {name: 'Lori', age: 60},
//     {name: 'Clark', age: 61},
//     {name: 'CJ', age: 18},
// ]

app.use("/", express.json())
app.use("/movies", require("./routes/movieRouter.js"))


app.listen(9000, () => {         // listen() takes 2 arguments 1. port 2. CB function
    console.log("server is running on port 9000")
})
