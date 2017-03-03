// BACK
var finalToppings = 0;
var finalToppingsArray = [];

function Pizza(sizeCost, toppingsCost){
  this.sizeCost = sizeCost;
  this.toppingsCost = toppingsCost;
}

Pizza.prototype.calculate = function() {
  // var totalCost = this.sizeCost + this.toppingsCost;
  // return totalCost;
  var count = 0;
  for(i=0;i<finalToppingsArray.length;i++){
    count += finalToppingsArray[i]
  }
  // need to add the value of all indexes of the topping array together, then add to size cost
}

// FRONT
$(function(){
  $("#orderForm").submit(function(event){
    event.preventDefault();
    $("#totalPriceSpan").empty();
    var finalSize = parseInt($("input:checkbox[name=size]:checked").val());
    $("input:checkbox[name=toppings]:checked").each(function(){
      // finalToppings = finalToppings + parseInt($(this).val());
      finalToppingsArray.push(parseInt($(this).val());
    });
    var finalPizza = new Pizza(finalSize, finalToppings);
    var finalCost = finalPizza.calculate();
    $("#totalPriceSpan").append(finalCost);
    $("#totalPriceDiv").show();
  });
});
