var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1
function arrMeth() {
  vegetables.pop();
  fruit.shift();
  fruit.push(fruit.indexOf("orange"));
  vegetables.push(vegetables.length);
  var food = fruit.concat(vegetables);
  food.splice(4, 2);
  food.reverse();
  return food.join();
}
console.log(arrMeth())
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables.length);