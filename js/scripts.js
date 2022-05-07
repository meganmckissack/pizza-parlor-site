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
    let selectedPizzaCost = selectedPizza.pizzaCost();
    
    // Show order details and cost
    $("#order-details").show();
    let viewToppings = selectedToppings.join(", ");
    $(".order-size").html(selectedSize);
    $(".order-toppings").html(viewToppings);
    $(".order-total").html(selectedPizzaCost);
  });
});




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
  
  if (this.size === "Small") {
    return toppingsCost + 16
  } else if (this.size === "Medium") {
    return toppingsCost + 18
  } else if (this.size === "Large") { //typescript error appears when using else without if
    return toppingsCost + 20
  }
  return toppingsCost
};

