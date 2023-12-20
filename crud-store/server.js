const express = require("express")      // requiring express
const app = express()                   // creating an instance of an express application
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())         //parsing data
app.use(morgan("dev"))          // dev is a perameter that pre defined logs that it will run

async function connectToDb() {
    try {
        mongoose.connect("mongodb+srv://lunarlightandshadow:cZ8CwbSjfL672etN@cluster0.hakya8n.mongodb.net/?retryWrites=true&w=majority")
            console.log("connected to the DB")
    } catch(err) {
        console.log(err)
    }
}

app.use("/inventory", require("./routes/inventoryRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7000, () => {
    console.log("server is running on port 7000")
    connectToDb()
})



//cZ8CwbSjfL672etN   mongodb+srv://lunarlightandshadow:<password>@cluster0.hakya8n.mongodb.net/
