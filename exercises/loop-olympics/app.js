//Preliminaries

//1

// for (var i = 0; i <= 9; i++) {
//   console.log(i);
// }

//2

// for (var i = 9; i >= 0; i--) {
//   console.log(i)
// }

//3

// var fruit = ["banana", "orange", "apple", "kiwi"]


// var fruits = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0; i < 4; i++) {
//   console.log(fruits[i]);
// }

//Bronze Medal

//1

// var numbers = []
// for (var i = 0; i <= 9; i++) {
// numbers.push(i)
// }

// console.log(numbers)

//2

// for (var i = 0; i <= 100; i++){
//   if (i % 2 === 0) {
//     console.log(i + " ");
//   }
// }

//3

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var fruits = []

// for (var i = 0; i < fruit.length; i+= 2) {
//  fruits.push(fruit[i])
// } 

// console.log(fruits)

//Silver Medal

//1

// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
// //   }
// ]

// for (var i = 0; i < peopleArray.length; i++)

// console.log(peopleArray[i].name)

//2

// var name = []
// var occupation = []

// for (var i = 0; i < peopleArray.length; i++) {
//   name.push(peopleArray[i].name)
//   occupation.push(peopleArray[i].occupation)
// }

// console.log(name)
// console.log(occupation)

//3

// var name = []
// var occupation = []

// for (var i = 0, j = 1; i < peopleArray.length; i += 2, j += 2) {
//   name.push(peopleArray[i].name);
//   occupation.push(peopleArray[j].occupation)
// }

// console.log(name)
// console.log(occupation)
  
//Gold Medal

//1

// var zer = [[0,0,0],[0,0,0],[0,0,0]];
//   for (var i = 0; i < zer.length; i++) {
//         console.log(zer[i]);
//       }

//2

// var arr = [[0,0,0],[1,1,1],[2,2,2]];
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }

//3

// var arr = [[0,1,2],[0,1,2],[0,1,2]];
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }

//4

var grid = [[0,0,0],[0,0,0],[0,0,0]];
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      grid[i][j] = "x";
    }
  console.log(grid[i])
}

