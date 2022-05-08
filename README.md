# _Pizza Parlor Site_

#### By _**Megan McKissack**_

## Description

The pizza parlor site project is a mock website for a pizza parlor that you can select topping and the size of the pizza you'd like to see how much the pizza will be based on your choices.

## Technologies Used

- _HTML_
- _CSS_
- _JavaScript_

## Setup/Installation Requirements

- clone or download this repository to your computer
- Open files in your favorite text editor or IDE
- To view the pizza parlor site, open the index.html file in your web browser or click this link [Pizza Parlor](https://meganmckissack.github.io/pizza-parlor-site/)

- _To test the app functionality:_

  - Click a pizza size (small, medium, or large) and then select some toppings for the pizza. When you click the "Add to order button" you should see text that states what size pizza you picked, the toppings, and the price.

## Known Bugs

_none that I know of_

## License

_MIT_

Copyright (c) _April 23, 2022_ _Megan McKissack_

---

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

**Test:** "It should return the cost of a pizza with multiple toppings based on size"
**Code:** const pizza1 = new Pizza(["pepperoni", "pineapple", "bacon"], "large");
pizza1.pizzaCost()
**Expected Output:** 26
