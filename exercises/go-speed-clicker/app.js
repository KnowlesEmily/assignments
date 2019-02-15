var buttonOne = document.getElementById("button1");
var counterOne = localStorage.count || 0;
var numberOne = document.getElementById("number1")

numberOne.textContent = counterOne;

buttonOne.addEventListener("click", function(){
  counterOne++
  localStorage.count = counterOne;
  numberOne.textContent = counterOne;
})




var button = document.getElementById("button2");
var counter = localStorage.count || 0;
var number = document.getElementById("number2")

number.textContent = counter;

button.addEventListener("click", function(){
  counter++
  localStorage.count = counter;
  number.textContent = counter;
})