const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid")
const data = require("./database")

todoRouter.route("/")

  .get((resquest, response) => {
    response.send(data)
  })

  .post((request, response) => {
    const newObject = request.body;
    newObject._id = uuid.v4();
    data.push(newObject);
    response.send(newObject);
  })
  
  todoRouter.route("/:id")
  
    .get((request, response) => {
      const {id} = request.params;
      response.send(data.find(todo => todo._id === id))
      if(found){
        response.send(found)
      } else {
        response.send("not found")
      }
    })

  .put((request, response) => {
    const updatedObject = request.body;
    const {id} = request.params;
    data.forEach(todo => {
      if(todo._id === id){
        todo = Object.assign(todo, updatedObject)
      }
    })
  })

  .delete((request, response) => {
    const {id} = request.params;
    const index = data.findIndex(todo => todo._id === id);
    data.splice(index, 1);
    response.send("item succesfuly deleted")
  })

module.exports = todoRouter