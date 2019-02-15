var readline = require("readline-sync");

var name = readline.question("Who is you? ");

console.log("\t Well shoot " + name + ", looks like you've gotta save us. Welcome.");

console.log("\t The year you're from is 2045, Shaquille O'Neal has taken over the earth. You're now in the year 1972 - his birth year. Your job is to locate Patrick Ewing - one of Shaq's foes in the future and convince him to put an end to Shaq. It's for the greater good. He should be 10 years old, tread carefully. So " + name + "...");

if (readline.keyInYN("\t Do you accept your mission? ")) {
  console.log("\t Perfect. No going back now. Unless you turn off your computer. Crap, Did I just break the fourth wall???? Anyways... You have 100 health. Press [w] to walk along until you find Patrick. Be careful - some of Shaq's goons are on to us. You may have to fight some hoes. Good luck. Oh also, if you run out of health u ded. 4ever. L8R!!!!");
  letTheGamesBegin();
} else {
  console.log("\t Wow. Selfish. I'll throw you to Shaq myself. Enjoy your large black dic...tator jerk.")
}

function letTheGamesBegin() {
  var player = {
    name: name,
    health: 100,
    inventory: [],
    gameRunning: true
  }

  displayOptions()

  while (player.gameRunning) {
    var action = readline.keyIn("What would you like to do? ", {
      limit: ['w', 'i', 'h']
    })
    if (action === 'w') {
      walk()
    } else if (action === 'i') {
      checkInventory()
    // } else if (action === 's') {
    //   stealCandy()
    }
  }

  function walk() {
    switch (getRandomNumber(1, 4)) {
      case 1:
        console.log("No Patrick here, keep walkin'.");
        break;
      case 2:
        console.log("No Patrick here, keep walkin'.");
        break;
      case 3:
        getAttacked();
        break;
      case 4:
        playerWon();
        break;
    }
  }

  function displayOptions() {
    console.log("Here are your options. Press the button to select what you would like to do: \n [w] Walk \n [i] Check Inventory");
  }

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
 
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function checkInventory() {
    console.log(player)
  }

  function playerWon() {
    player.gameRunning = false;
    console.log("YOU'VE FOUND HIM! YOU'VE FOUND PATRICK AND YOU CONVINCED HIM TO KILL SHAQ!!! YOU HAVE WON!! You may now return to your world. You'll probably die during the time travel sequence... Thanks for your sacrifice! Byeeeeee")
  }

  function playerDied() {
    player.gameRunning = false;
    console.log("You done did died real ded dude. GAME OVER.")
  }

  function enemyDied() {
    player.inventory.push("Dance Emote: The Shaq Shimmy");
    // idk if this works???
    player.health = player.health + 100;
    console.log("Congratzzzzzz!!! You have received Shaq's most prized ability and 100 extra health points. Let's goooooo.")
  }

  // function stealCandy() {
  //   // random number between 1 - 2
  //   var chance = Math.floor(Math.random() * 2)
  //   // if number is 1 === attack
  //   if (chance === 1) {
  //     console.log("You're under arrest dude")
  //   } else {
  //     console.log("Nothing happened but now you have candy.")
  //   }
  // }
  function getAttacked() {
    var enemyHealth;
    var attacker = getRandomItem(["KAREEM ABDUL JABBAR", "KOBE BRYANT", "SHAQ"]);
    if (attacker === "KAREEM ABDUL JABBAR") {
      enemyHealth = 10;
    } else if (attacker === "KOBE BRYANT") {
      enemyHealth = 20;
    } else if (attacker === "SHAQ") {
      enemyHealth = 30;
    }
    console.log(`${attacker} ATTACK. HE HAS ${enemyHealth} HEALTH. GOOD LUCK.`);
    var fightOrRun = readline.keyIn("Do you want to fight or run?", {
      limit: ["f", "r"]
    })

    if (fightOrRun === "r"){
      var success = getRandomNumber(1, 2) === 1 ? true : false;
      success ? console.log("YOU ESCAPED! You ain't gonna die today son.") : fightOrRun = "f";
    }

    if (fightOrRun === "f") {
      while(enemyHealth > 0 && player.health > 0) {
        var attackPower = getRandomNumber(1, 10);
        enemyHealth = enemyHealth - attackPower;
        console.log(`You attacked the enemy and he lost ${attackPower} health.`);
        var enemyAttackPower = getRandomNumber(1, 100);
        player.health = player.health - enemyAttackPower;
        console.log(`The enemy attacked you and you lost ${enemyAttackPower} health`);
      }
      enemyHealth ? playerDied() : enemyDied();
    }
  }
}