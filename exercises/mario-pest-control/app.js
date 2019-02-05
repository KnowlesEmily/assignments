function total(event){
  event.preventDefault();
  var goomba = document.getElementById("goomba").value;
  var bobomb = document.getElementById("bobomb").value;
  var cheepcheep = document.getElementById("cheepcheep").value;

  var totalCoins = (goomba * 5) + (bobomb * 7) + (cheepcheep * 11);

  document.getElementsByClassName("totalCoins")[0].innerHTML = `Your total fee has come out to ${totalCoins} coins.`;
}

document.totalForm.addEventListener('submit', total)
// console.log(document.totalForm)

