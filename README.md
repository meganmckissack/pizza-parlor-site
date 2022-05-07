# Tests

### Describe Pizza()

**Test:** "It should return a Pizza object with one property for toppings"
**Code:** const Pizza1 = new Pizza("pepperoni");
**Expected Output:** Pizza { toppings: "pepperoni"}

**Test:** "It should return a Pizza object with multiple properties for toppings"
**Code:** const Pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"]);
**Expected Output:** Pizza { toppings: ["pepperoni", "pineapple", "bacon"]}

**Test:** "It should return a Pizza object with multiple properties for toppings and a size property"
**Code:** const Pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"], "large");
**Expected Output:** Pizza { toppings: ["pepperoni", "pineapple", "bacon"], size: "large"}
