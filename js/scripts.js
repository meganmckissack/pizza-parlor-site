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
  console.log(this.toppings + " " + toppingsCost);
}



const pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"], "large");