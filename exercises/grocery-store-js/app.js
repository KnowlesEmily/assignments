var shopper = {
  hatredOfWalmart: "Enought to passivly display to others how rich you are.",
  groceryFund: 12000,
  isRich: true,
  groceryCart: ["Cage-Free Organic Eggs", "Cage-Free Organic Nut Milk", "Cage-Free Organic Lettuce Bread"],
  beAJerk: function (rude){
    console.log("Don't touch my " + rude + "!")
  }
}
shopper.beAJerk(shopper.groceryCart[2])