// BACK END
function Pizza(size, toppings){
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.calculate = function(toppingArray) {
  var toppingDollars = 0;
  for(i=0;i<toppingArray.length;i++){
    toppingDollars += toppingArray[i]
  }
  var finalDollars = toppingDollars + this.size;
  return finalDollars;
}

// FRONT END
$(function(){
  $("#orderForm").submit(function(event){
    event.preventDefault();
    $("#totalPriceSpan").empty();
    var finalSize = parseInt($("input:radio[name=size]:checked").val());
    var finalPizza = new Pizza(finalSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      finalPizza.toppings.push(parseInt($(this).val()));
    });
    var outputCost = finalPizza.calculate(finalPizza.toppings);
    $("#totalPriceSpan").append(outputCost);
    $("#totalPriceDiv").show();
  });
});
