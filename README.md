# Tests

### Describe Pizza()

**Test:** "It should return a Pizza object with one property for toppings"
**Code:** const pizza1 = new Pizza("pepperoni");
**Expected Output:** Pizza { toppings: "pepperoni"}

**Test:** "It should return a Pizza object with multiple properties for toppings"
**Code:** const pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"]);
**Expected Output:** Pizza { toppings: ["pepperoni", "pineapple", "bacon"]}

**Test:** "It should return a Pizza object with multiple properties for toppings and a size property"
**Code:** const pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"], "large");
**Expected Output:** Pizza { toppings: ["pepperoni", "pineapple", "bacon"], size: "large"}

### Describe Pizza.pizzaCost()

**Test:** "It should return the cost of a pizza with multiple toppings"
**Code:** pizza1.pizzaCost()
**Expected Output:** 6
