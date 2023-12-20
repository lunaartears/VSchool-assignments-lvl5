const express = require("express")
const app = express()

app.use(express.json())
app.use("/inventory", require("./routes/inventoryRouter.jsx"))


app.listen(8001, () => {
    console.log("Server is running on port 8001")
})
