var ask = require('readline-sync');
console.log('Hello! My name is Bartha. Help me get to know you!\n');
var firstName = ask.question('\tWhat is your first name? ');

// var responseFirstName = firstName;
console.log(`Welcome to npm ${firstName.toUpperCase()}!`);

var firstNameLength = firstName.length
console.log(`Did you know you have ${firstNameLength} characters in your name?`)

var str1 = "Do you like lettuce? "
var str2 = "Because I don't."
console.log(`I have a question your you, ${str1.concat(str2)}`)

var memory = ask.question("\tTell me about a memory you have with lettuce.");
function length(memory){
  if (memory.length >= 20) {
    var half = memory.length / 2;
    return memory.slice(Math.floor(half))
  } else {
    return memory
  }
}

console.log(length(memory))

var index = ask.question("\tChoose a number");
function splitIt(index) {
  return memory.slice(index);
}

console.log(splitIt(index));