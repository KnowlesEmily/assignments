const mongoose = require("mongoose");
const Schema = mongoose.Schema

//schema is a template that has to be followed or else it won't be posted
const vacationSchema = new Schema({
  //data types has to be captialized or else it thinks it's justa variable
  place: String,
  price: Number,
  timeToGo: String
})

module.exports = mongoose.model("Vacation", vacationSchema)