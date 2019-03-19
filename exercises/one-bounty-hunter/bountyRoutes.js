const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid")
const data = require("./database")

bountyRouter.route("/")

  .get((request, response) => {
    response.send(data)
  })

  .post((request, response) => {
    const newObj = request.body
    newObj._id = uuid.v4()
    data.push(newObj)
    response.send(newObj)
  })

bountyRouter.route("/:id")

  .put((request, response) => {
    const updatedObject = request.body
    const {id} = request.params
    data.forEach(bounty => {
      if(bounty._id === id) {
        bounty = Object.assign(bounty, updatedObject)
      }
    })
  })

  .delete((request, response) => {
    const {id} = request.params
    const index = data.findIndex(bounty => bounty._id === id)
    data.splice(index, 1)
    response.send("Item Successfully removed")
  })

module.exports = bountyRouter