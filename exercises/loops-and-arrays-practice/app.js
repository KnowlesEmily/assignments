// #1

// function computerCounter() {
//   var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer", "computer"];

//   var counter = 0;

//   for (var i = 0; i < officeItems.length; i++) {
//     officeItems[i] === "computer" ? counter++ : i++;
//   }
//   return counter;
// }

// console.log(computerCounter());

// #2

var mmfrFans = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

for (var i = 0; i < mmfrFans.length; i++) {
  if (mmfrFans[i].age >= 18) {
    console.log("old enough");
  } else {
    console.log("not old enough");
  }
}



// //Optional Bonus Challenge

// function toggleSwitch(switches) {
//   var on = true;

//   for (var i = 0; i < switches.length; i++) {
//     for(var j = 0; j < switches[i]; j++){
//       on = !on;
//     }
//   }

//   if(on) {
//     return "the light is on"
//   } else {
//     return "the light is off"
//   }
// }

// console.log(toggleSwitch([2, 5, 435, 4, 3])) //"the light is on"
// // console.log(toggleSwitch([1, 1, 1, 1, 3]))//"the light is off"
// // console.log(toggleSwitch([9, 3, 4, 2]))//"the light is on"