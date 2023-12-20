const express = require("express")
const app = express()

app.use(express.json())
app.use("/todos", require("./todosRouter.jsx"))




app.listen(8003, () => {
    console.log("Server is running on port 8003")
})
