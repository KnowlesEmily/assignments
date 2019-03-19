const express = require("express")
const app = express()
const port = 3333
const mongoose = require("mongoose")

//converts back and forth between json and javascript
//first argument is always a string, if it's not there then app.use automatically puts it in
//the second argument is a function or the middleware we are going to use
app.use(express.json())
//it needs to see the first argument so that it can fire off on the second one
app.use("/spot", require("./vacationRoutes"))

mongoose.connect("mongodb://localhost:27017/vacationSpots", {useNewUrlParser: true}).then(() => {
  console.log("Connected to MongoDB")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
