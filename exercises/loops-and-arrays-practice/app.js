//Optional Bonus Challenge

function toggleSwitch(switches) {
  var on = true;

  for (var i = 0; i < switches.length; i++) {
    for(var j = 0; j < switches[i]; j++){
      on = !on;
    }
  }

  if(on) {
    return "the light is on"
  } else {
    return "the light is off"
  }
}

console.log(toggleSwitch([2, 5, 435, 4, 3])) //"the light is on"
// console.log(toggleSwitch([1, 1, 1, 1, 3]))//"the light is off"
// console.log(toggleSwitch([9, 3, 4, 2]))//"the light is on"