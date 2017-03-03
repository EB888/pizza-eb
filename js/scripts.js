// BACK
var finalToppingsArray = [];

function Pizza(size){
  this.size = size;
}

Pizza.prototype.calculate = function(array) {
  var toppingDollars = 0;
  for(i=0;i<array.length;i++){
    toppingDollars += array[i]
  }
  var finalDollars = toppingDollars + this.size;
  return finalDollars;
}

// FRONT
$(function(){
  $("#orderForm").submit(function(event){
    event.preventDefault();
    $("#totalPriceSpan").empty();
    finalToppingsArray = [];
    var finalSize = parseInt($("input:checkbox[name=size]:checked").val());
    $("input:checkbox[name=toppings]:checked").each(function(){
      finalToppingsArray.push(parseInt($(this).val()));
    });
    var finalPizza = new Pizza(finalSize);
    var outputCost = finalPizza.calculate(finalToppingsArray);
    $("#totalPriceSpan").append(outputCost);
    $("#totalPriceDiv").show();
  });
});
