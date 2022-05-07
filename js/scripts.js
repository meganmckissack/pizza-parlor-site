function Pizza(toppings = [], size) {
  this.toppings = toppings;
  this.size = size;
}

const Pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"], "large");