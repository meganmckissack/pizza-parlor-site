// UI Logic
$(document).ready(function(){
  $("form#pizza-toppings").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      const selectedToppings = $(this).val();
      console.log(selectedToppings);
    })
  })
})




function Pizza(toppings = [], size, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost = cost;
}

Pizza.prototype.pizzaCost = function () {
  let toppingsCost = 0;
  this.toppings.forEach(function(toppings, index) {
    toppingsCost = (index + 1) * 2;
    return toppingsCost
  })
  
  if (this.size === "small") {
    return toppingsCost + 16
  } else if (this.size === "medium") {
    return toppingsCost + 18
  } else if (this.size === "large") { //typescript error appears when using else without if
    return toppingsCost + 20
  }
  return toppingsCost
};



const pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"], "large");
