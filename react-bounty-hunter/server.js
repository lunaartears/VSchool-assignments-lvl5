const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


app.use(express.json())
app.use(morgan('dev'))
app.use("/bounties", require("./routes/bountyRouter.js"))

async function connectToDB() {
    try {
        mongoose.connect('mongodb+srv://lunarlightandshadow:8cLNV7gTeNzyEReZ@cluster0.ahfdoty.mongodb.net/')
        console.log('Connected to DB')
    } catch (err) {
        console.log(err)
    }
}

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})


app.listen(7001, () => {
    console.log("Server is running on port 7001")
    connectToDB()
})


// 8cLNV7gTeNzyEReZ  mongodb+srv://lunarlightandshadow:<password>@cluster0.ahfdoty.mongodb.net/
