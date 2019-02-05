var fightingObject = {
  fighters: [
    {
      name: "Tim",
      birthPlace: "Brazil",
      age: 40,
      fightStyles: [
        {
          style: "Boxing",
          proficiency: "Mediocre",
          appearance: "Pretty lame",
          yearsPracticing: 10,
        },
        {
          style: "Karate",
          proficiency: "Black belt",
          appearance: "Jackie Chan",
          yearsPracticing: 35,
        },
        {
          style: "Ju Jitsu",
          proficiency: "Really Jitsu-ish",
          appearance: "professional",
          yearsPracticing: 23,
        }
      ]
    },
    {
      name: "Tiny Tina",
      birthPlace: "India",
      age: 10,
      fightStyles: [
        {
          style: "Karate",
          proficiency: "Glitter Belt",
          appearance: "How you would imagine a 10 year old doing Karate",
          yearsPracticing: 7,
        },
        {
          style: "Ju Jitsu",
          proficiency: "Suprisingly really good???",
          appearance: "adorable, yet terrifying",
          yearsPracticing: 2,
        }
      ]
    },
    {
      name: "Shaq",
      birthPlace: "United States of America",
      age: 46,
      fightStyles: [
        {
          style: "Boxing",
          proficiency: "Mediocre",
          appearance: "Pretty lame",
          yearsPracticing: 10,
        },
        {
          style: "Punch Dancing",
          proficiency: "Hip Hop 2001",
          appearance: "Andre the Giant in a blender of fists",
          yearsPracticing: "since womb",
        }
      ]
    }
  ],
  place: "California",
  entryPrice: 10,
  fight: function (){
    console.log(fightingObject.fighters[0].name + " vs " + fightingObject.fighters[2].name)
  }
}

fightingObject.fight();

// function (x, y); {
// console.log(x + ' vs ' + y)
// }

// function(Shaq, Tim)