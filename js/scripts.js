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
  } else if (this.size === "large") {
    return toppingsCost + 20
  }
  console.log(toppingsCost);
};



const pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"], "large");