var readline = require("readline-sync");
var name = readline.question("What is your name? ");
var isAlive = true;
var hasKey = false;

console.log (`Welcome to the escape room ${name}.`)

while(isAlive === true){
  var index = readline.keyInSelect(["Put hand in hole", "Find the key", "Open the door"], "Choose Wisely...")
  
  if(index === 0){
      console.log("U ded")
      isAlive = false
  }

  if (index === 1){
      if(hasKey){
          console.log("you already got it boo boo");
      } else {
          console.log("you found the key");
          hasKey = true;
      }
      
  }
  if (index === 2){
      if(hasKey){
          console.log("you're freeeeeeeee");
          break;
      } else {
          console.log("It's locked stupid")
      }   
  }
}


// write if statement for the find the key option
        // consider a nested if asking if they've already found the key

    // write an if statement for the open the door option
        // consider a nested if asking if they've found the key