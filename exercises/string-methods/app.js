//#1

// function capAndLow(hello) {
//   return hello.toUpperCase() + hello.toLowerCase()
// }

// console.log(capAndLow("hello"))

//#2

function midIndex(half) {
  return Math.floor(half.length / 2)
}

// console.log(midIndex("hello"))
// console.log(midIndex("hello world"))

// //#4

// function returnFirstHalf(help){
//   return help.slice(0, midIndex(help))
// }

// console.log(returnFirstHalf("Hello"))
// console.log(returnFirstHalf("Hello World"))

//#5

function capLow(first) {
  var firstHalf = first.slice(0, midIndex(first));
  var lastHalf = first.slice(midIndex(first));
  return firstHalf.toUpperCase() + lastHalf.toLowerCase();
}

console.log(capLow("Hello"))
console.log(capLow("Hello World"))

// function findMiddleIndex(str){

//   return Math.floor(str.length / 2)
// }

// console.log(findMiddleIndex("Hello"))
// console.log(findMiddleIndex("Hello World"))