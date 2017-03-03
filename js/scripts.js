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
// var largeSize = 20
// var pepperoni = 3
// var totalCost;

function Pizza(sizeCost, toppingsCost){
  this.sizeCost = sizeCost;
  this.toppingsCost = toppingsCost;
}

Pizza.prototype.calculate = function() {
  var totalCost = this.sizeCost + this.toppingsCost;
  return totalCost;
}

// var toppingsArray = [];

// FRONT OF HOUSE
$(function(){
  $("#orderForm").submit(function(event){
    event.preventDefault();
    $("#totalPriceSpan").empty();
    var finalToppings = 0;

    // var finalSize = parseInt($("input:radio[name=size]:checked").val());
    var finalSize = parseInt($("input:checkbox[name=size]:checked").val());
    console.log(finalSize);

    // var finalToppings = parseInt($("input:radio[name=toppings]:checked").val());
    $("input:checkbox[name=toppings]:checked").each(function(){
      finalToppings = finalToppings + parseInt($(this).val());
      // console.log(parseInt($(this).val()));
    });
    console.log(finalToppings);

    var finalPizza = new Pizza(finalSize, finalToppings);
    var finalCost = finalPizza.calculate();
    $("#totalPriceSpan").append(finalCost);
    $("#totalPriceDiv").show();
  });
});
