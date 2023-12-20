const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")



// Middleware (for every request)
app.use(express.json())      // look for a request body and turns it into req.body
app.use(morgan("dev"))       //logs requests to the console

// Connect to DB
//mongoose.connect("mongodb://localhost:27017/moviesdb", () => console.log("connected to database"))          // Endpoint is the name I give the database (db)
async function connectToDB(){
    try{
        mongoose.connect("mongodb+srv://lunarlightandshadow:7cFlill9czVhvEnV@cluster0.fsu1sfo.mongodb.net/Practice?retryWrites=true&w=majority")
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDB()
    //useNewUrlParser: true,                                    // Mongoose depreciation warnings (go to website to see suggested warnings to include)
    //useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false


// Routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))

// Error handler
app.use((err, req, res, next) => {     // err perameter makes it specifically for error handling
    console.log(err)
    return res.send({ errMsg: err.message })
})


// server listener
app.listen(8000, () => {         // listen() takes 2 arguments 1. port 2. CB function
    console.log("server is running on port 8000")
},
    () => console.log("Connected to the DB")
)
