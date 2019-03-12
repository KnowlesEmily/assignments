const uuid = require("uuid")

module.exports = [
  {
    name: "Get gas",
    description: "Drive to the gas station to get gas",
    imageUrl: "http://www.automoblog.net/wp-content/uploads/2015/10/fuel-gauge.jpg",
    completed: false,
    _id: uuid.v4()
  },{
    name: "Flirt with cute guy getting gas next to you",
    description: "Wow that guy is cute, so chat them up",
    imageUrl: "hhttps://i.pinimg.com/originals/dd/65/36/dd653658935b760b691205f0eacfceab.jpg",
    completed: false,
    _id: uuid.v4()
  },{
    name: "Get distracted",
    description: "You're not paying attention to the fact that the gas pump is out of order because that guy is so cute",
    imageUrl: "http://i.imgur.com/BrJQ1UZ.jpg",
    completed: false,
    _id: uuid.v4()
  },{
    name: "Over-fill the gas tank",
    description: "Oh no, there's gas everywhere...",
    imageUrl: "http://myjeeptj.com/wp-content/uploads/fuel-filler-overflow/wrangler-fuel-overflow.jpg",
    completed: false,
    _id: uuid.v4()
  }
]