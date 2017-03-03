// Objects drive business logic
// Constructors and prototypes are used successfully
// Plain english specs included in README.md
    // (me) make sure specs are for backend
    // (me) make sure front and back of house are separate

// Create website for a pizza company
//   be able to choose one or more individual toppings
//   be able to choose a size
//   create a prototype method for the cost depending on the selections chosen
//     use your own formula

// tools
    // variables
    // functions
    // for, while loops
    // map arrays
    // arrays

// BACK OF HOUSE
var largeSize = 20
var pepperoni = 3

function Pizza(sizeCost, toppingsCost){
  this.sizeCost = sizeCost;
  this.toppingsCost = toppingsCost;
}

Pizza.prototype.calculate = function() {
  totalCost = this.sizeCost + this.toppingsCost;
  return totalCost;
}

var testPizza = new Pizza(largeSize, pepperoni);
// FRONT OF HOUSE
$(function(){
  
})
