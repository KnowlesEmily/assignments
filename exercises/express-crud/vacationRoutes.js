const express = require("express")
const vacationRouter = express.Router()
const uuid = require("uuid")
const data = require("./database")
const Vacation = require("./vacation")

vacationRouter.route("/")

  .get((request, response) => {
    Vacation.find((err, vacation)=> {
      if (err) {
        return response.status(500).send(err)
      }
      return response.status(200).send(vacation)
    })
  })
  // {
  //   response.send(data)
  // })

  .post((request, response) => {
    //don't need data anymore because it's storing it to mongo instead of database
    //don't need uuid anymore because mongo is creating it for you
    if(Object.keys(request.body).length !==0){
      const newObj = new Vacation(req.body)
      newObj.save(err => {
        if (err) return resizeBy.status(500).send(err)
        return resizeBy.status(200).send(newObj)
      })
    } else {
      resizeBy.send("Must have values in new posted items")
    }
  }
  
  // {
  //   const newObj = request.body;
  //   //the object doesn't have an id yet so when you do "something . something that doesnt exist yet" you're creating an id for it
  //   //then you're making it eyqual to uuid.v4() that generates a new id for it
  //   newObj._id = uuid.v4();

  //   data.push(newObj)
  //   response.send(newObj)
  // }
  )

vacationRouter.route("/:_id")

  .get((request, response) => {
    const {_id} = request.params
    response.send(data.find(spot => spot._id === _id))
    if (found){
      response.send(found)
    } else {
      response.send("Not found")
    }
  })

  .put((request, response) => {
    const updatedObj = request.body;
    const {_id} = request.params;
    data.forEach(spot => {
      if(spot._id === _id){
        spot = Object.assign(spot, updatedObj)
      }
    })
  })

  .delete((request, response) => {
    const {_id} = request.params
    const index = data.findIndex(spot => spot._id === _id)
    data.splice(index, 1)
    response.send("item successfully removed")
  })

module.exports = vacationRouter