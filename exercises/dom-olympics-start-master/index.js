// document.getElementById("header").innerHTML = `<h1 class="header">JavaScript Made This!!</h1>
// <h5 class="header"> <div> <span class="name">Emily</span> wrote the JavaScript</h5></div>`;

document.getElementById("header").innerHTML = `<h1 class="header"> JavaScript Made This!! </h1> <h5 class="header"> <div> <span class="name"> Emily </span> wrote the JavaScript </div> </h5>`;

document.getElementById("main").innerHTML = `<div class="messages"> <div class="message left"> I have something fun to talk about </div> <div class="message right"> I would love to talk. About what? </div> <div class="message left"> Shaq mostly </div> <div class="message right"> I am shaq </div>   </div> <input placeholder=":)"/> <button> Send </button> </form> <button id='clear-button'> clear </button> </div> </div>`

function clear() {
  document.getElementsByClassName("messages")[0].innerHTML = `<div></div>`
}
document.getElementById("clear-button").addEventListener("click", clear); 

var left = document.getElementsByClassName("message left");
var right = document.getElementsByClassName("message right");

function colorChange() {
  if (document.getElementById("theme-drop-down").value === "theme-two") {
    left[0].style.backgroundColor = "blue";
    left[1].style.backgroundColor = "blue";
    right[0].style.backgroundColor = "brown";
    right[1].style.backgroundColor = "brown";
  } else {
    left[0].style.backgroundColor = "red";
    left[1].style.backgroundColor = "red";
    right[0].style.backgroundColor = "black";
    right[1].style.backgroundColor = "black";
  }
}

document.getElementById("theme-drop-down").addEventListener("change", colorChange);

function newMessage(){
  // var userMessage = document.getElementById("messageInput");
  var newMessage = document.createElement("div");
  newMessage.className = "message right";
  newMessage.textContent = document.getElementById("messageInput").value;
  document.getElementsByClassName("messages")[0].appendChild(newMessage);
}

document.getElementById("addMessage").addEventListener("click", newMessage);