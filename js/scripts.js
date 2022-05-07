// UI Logic
$(document).ready(function(){
  $("form#pizza-toppings").submit(function(event) {
    event.preventDefault();

    let selectedToppings = []
    $("input:checkbox[name=pizza-toppings-input]:checked").each(function() {
      const pizzaToppings = $(this).val();
      selectedToppings.push(pizzaToppings);
    });
    
    const selectedSize = $("input:radio[name=size]:checked").val();

    let selectedPizza = new Pizza(selectedToppings, selectedSize);
    console.log(selectedPizza);

    let selectedPizzaCost = selectedPizza.pizzaCost();
    console.log(selectedPizzaCost);

  })
})




function Pizza(toppings = [], size) {
  this.toppings = toppings;
  this.size = size;
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

