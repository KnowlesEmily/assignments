const express = require("express")
const app = express()
const port = 5555

app.use(express.json())

app.use("/bounty", require("./bountyRoutes"))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})