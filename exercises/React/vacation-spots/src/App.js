import React from "react";
import Card from "./Card"

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  },{
    place: "Canada",
    price: 800,
    timeToGo: "Winter"
  },{
    place: "Poland, Maine",
    price: 4000,
    timeToGo: "Fall"
  },{
    place: "Iraq",
    price: 0,
    timeToGo: "Summer"
  }
]

const App = ()=> {
  const mappedSpots = vacationSpots.map((card, i) => {
    let backgroundColor;
    if(card.timeToGo === "Winter"){
      backgroundColor = "lightBlue";
    } else if (card.timeToGo === "Spring"){
      backgroundColor = "lightPink";
    } else if (card.timeToGo === "Summer"){
      backgroundColor = "lightGreen";
    } else if (card.timeToGo === "Fall"){
      backgroundColor = "Orange"
    }

    let priceSign;
    if(card.price <= 500){
      priceSign = "$";
    } else if(card.price < 1000){
      priceSign = "$$"
    } else if(card.price > 1000){
      priceSign = "$$$"
    }
    return (
      <Card place={card.place}
            price={card.price}
            timeToGo={card.timeToGo}
            key={i+card.place}
            backgroundColor={backgroundColor}
            priceSign={priceSign}
      />
    )
  })
  return (
    <div>
      {mappedSpots}
    </div>
  )
}

export default App