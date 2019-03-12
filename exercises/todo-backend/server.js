const express = require("express");
const app = express();
const port = 3000;
const uuid = require("uuid")
const data = require("./database")

app.use(express.json())

app.get("/todo", (request, response) => {
  response.send(data)
})

app.post("/todo", (request, response) => {
  const newObject = request.body;
  newObject._id = uuid.v4();
  data.push(newObject);
  response.send(newObject);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})