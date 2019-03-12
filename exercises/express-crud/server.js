const express = require("express")
const app = express()
const uuid = require("uuid")
const port = 3333
const data = require("./database")

app.use(express.json())

app.get("/spot", (request, response) => {
  response.send(data)
})

app.post("/spot", (request, response) => {
  const newObj = request.body;
  //the object doesn't have an id yet so when you do "something . something that doesnt exist yet" you're creating an id for it
  //then you're making it eyqual to uuid.v4() that generates a new id for it
  newObj._id = uuid.v4();
  data.push(newObj)
  response.send(newObj)
})

app.get("/spot/:_id", (request, response) => {
  const {_id} = request.params
  response.send(data.find(spot => spot._id === _id))
  if (found){
    response.send(found)
  } else {
    response.send("Not found")
  }
})

app.put("/spot/:_id", (request, response) => {
  const updatedObj = request.body;
  const {_id} = request.params;
  data.forEach(spot => {
    if(spot._id === _id){
      spot = object.assign(spot, updatedObj)
    }
  })
})

app.delete("/spot/:_id", (request, response) => {
  const {_id} = request.params
  const index = data.findIndex(spot => spot._id === _id)
  data.splice(index, 1)
  response.send("item successfully removed")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
