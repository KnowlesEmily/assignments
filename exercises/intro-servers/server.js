const express = require("express")


const app = express()
const port = 7000

//a middleware that has a handful of methods that convert incoming info to js object 
const bodyParser = require("body-parser")

//how to handle a get request
//this takes two parameters, the route in one and a request and a response in the other.
//the first parameter of get is a URL string, the second is a callback function with the parameters of request and response
//app is everything we are getting from express
/*app.get("/", (request, response) => {
  //this is where we would send over whatever we want
  //this is whatever we want to return back to the user
  response.send({sport: "football"})
})*/

//when you want to use bodyParser
//it's gonna change the incoming json object into javascript
app.use(bodyParser.json())

const database = [
  {
    name: "spaghetti",
    type: "pasta",
    sauce: "red",
    _id: 420
  }, {
    name: "fettuccine",
    type: "pasta",
    sauce: "alfredo",
    _id: 69
  },{
    name: "lasagna",
    type: "pasta",
    sauce: "marinara",
    _id: 369
  }
]

app.get("/food", (request, response) => {
  response.send({database})
})
//go to postman and put in localhost:7000/food

//go to postman in the body and create a json object of what you want and post it
app.post("/food", (request, response) => {
  console.log(request.body)
  database.push(request.body)
  response.send(database)
})

app.put("/food", (request, response) => {

  response.send(database)
})

//This establishes what porter the server is going to live, avoid 3000 because that's where react is and 8080 is for wordpress above 1023.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})