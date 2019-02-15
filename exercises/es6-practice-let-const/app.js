//Let and const

// const name = "John"
// let age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//   let name;
//   for (let i = 0; i < pets.length; i++) {
//     const pet = {
//       type: pets[i]
//     }
//     if (pets[i] === "cat") {
//       name = "fluffy"
//     } else {
//       name = "spot"
//     }
//     pet.name = name
//     petObjects.push(pet)
//   }
//   return name
// }

// console.log(runForLoop())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Arrow Functions
//Task 1

// const numbers = [1, 2, 3];

// console.log(numbers.map(number => 2 * number));

// numbers.map(function (number) {
//   return 2 * number;
// }, )

const arr = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//   return arr.map(function (carrot) {
//     return {
//       type: "carrot",
//       name: carrot
//     }
//   })
// }

const mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }))
console.log(mapVegetables(arr))


// const mapVegetables = arr