//1

// function doubleNum(numbers){
//   var num = numbers.map(function(number){
//     return number * 2
//   })
//   return num
// }

// console.log(doubleNum([2, 5, 100]));


//2

// function stringItUp(numbers){
//   var num = numbers.map(function(number){
//   return number.toString()
// })
//   return num
// }

// console.log(stringItUp([2, 5, 100]));

//3

// function capitalizeNames(arr){
//   var capName = arr.map(function(item){
//     return item.toUpperCase()
//   })
//   return capName
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//4

// function namesOnly(arr){
//   var name = arr.map(function(item){
//     return item.name
//   })
//   return name
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))

//5

// function makeStrings(arr){
//   var matrix = arr.map(function(item){
//     if (item.age < 17) {
//       console.log(item.name + " is underage!!")
//     } else {
//       console.log(item.name + " can go to the Matrix")
//     }
//     return item.name
//   })
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))

//6

function readyToPutInTheDOM(arr){
    var dom = arr.map(function(item) {
        return `<h1> ${item.name} </h1> <h2> ${item.age} </h2>`
  })
  return dom
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))