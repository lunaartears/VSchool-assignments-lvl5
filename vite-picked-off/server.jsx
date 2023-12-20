const express = require("express")
const app = express()


app.use(Express.json())

app.use("/items", (req, res, next) => {   // this will fire on any request made to ./items
    console.log("The items middleware was executed")
    next()
})

app.get("./items", (req, res, next) => {    // Every request must either end with next() or res.send()
    console.log("Get request recived")
    res.send("Hello World")
})


app.listen(8002, () => {
    console.log("Server is running on port 8002")
})
