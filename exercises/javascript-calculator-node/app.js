var readline = require("readline-sync")
console.log("Welcome to the Node Calculator!\n")
var num1 = readline.question("Gimme a number: ")
var num2 = readline.question("Gimme another one: ")
var options = ["Addition", "Subtraction", "Multiplication", "Division"];
var index = readline.keyInSelect(options, "What do you want to happen to these two numbers?");

function add(num1, num2) {
  return (parseInt(num1) + (parseInt(num2)))
}

function sub(num1, num2) {
  return (parseInt(num1) - (parseInt(num2)))
}

function mult(num1, num2) {
  return (parseInt(num1) * (parseInt(num2)))
}

function div(num1, num2) {
  return (parseInt(num1) / (parseInt(num2)))
}

if (options[index] === "Addition") {
  console.log(`The result is ${add(num1, num2)}`)
} else if (options[index] === "Subtraction") {
  console.log(`The result is ${sub(num1, num2)}`)
} else if (options[index] === "Multiplication") {
  console.log(`The result is ${mult(num1, num2)}`)
} else if (options[index] === "Division") {
  console.log(`The result is ${div(num1, num2)}`)
}

