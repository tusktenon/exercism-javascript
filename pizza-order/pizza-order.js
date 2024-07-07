/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  // Select an implementation
  // return pizzaPrice1(pizza, ...extras)
  return pizzaPrice2(pizza, ...extras)
}

// My original solution
function pizzaPrice1(pizza, ...extras) {
  switch (extras.pop()) {
    case 'ExtraSauce':
      return 1 + pizzaPrice(pizza, ...extras)
    case 'ExtraToppings':
      return 2 + pizzaPrice(pizza, ...extras)
    case undefined:
      switch (pizza) {
        case 'Caprese':
          return 9
        case 'Formaggio':
          return 10
        case 'Margherita':
          return 7
      }
  }
}

const PIZZA_PRICES = { Caprese: 9, Formaggio: 10, Margherita: 7 }
const EXTRA_PRICES = { ExtraSauce: 1, ExtraToppings: 2 }

// An alternative solution using the const objects above and the array `slice` method
function pizzaPrice2(pizza, ...extras) {
  if (extras.length === 0) return PIZZA_PRICES[pizza]
  return EXTRA_PRICES[extras[0]] + pizzaPrice(pizza, ...extras.slice(1))
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  // Select an implementation
  // return orderPriceRecursive(pizzaOrders)
  // return orderPriceTailRecursive(pizzaOrders)
  // return orderPriceLoop(pizzaOrders)
  return orderPriceReduce(pizzaOrders)
}

// A recursive solution.
// As expected, this will exceed the maximum call stack size for sufficiently large `pizzaOrders`.
function orderPriceRecursive(pizzaOrders) {
  let order = pizzaOrders.pop()
  if (order === undefined) return 0
  return pizzaPrice(order.pizza, ...order.extras) + orderPrice(pizzaOrders)
}

// A tail-recursive solution.
// This will also exceed the maximum call stack size for sufficiently large `pizzaOrders`.
// Although tail call optimization is part of the ECMAScript 6 specification, it is not
// implemented by the V8 JavaScript engine (which Node.js runs).
function orderPriceTailRecursive(pizzaOrders) {
  const helper = (orders, acc) => {
    let order = orders.pop()
    if (order === undefined) return acc
    return helper(orders, acc + pizzaPrice(order.pizza, ...order.extras))
  }

  return helper(pizzaOrders, 0)
}

// An imperative (loop-based) solution.
// Works even for large `pizzaOrders`.
function orderPriceLoop(pizzaOrders) {
  let total = 0
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras)
  }
  return total
}

// A solution using the `reduce` array transformation.
// Works even for large `pizzaOrders`.
function orderPriceReduce(pizzaOrders) {
  return pizzaOrders.reduce(
    (acc, order) => acc + pizzaPrice(order.pizza, ...order.extras),
    0,
  )
}
