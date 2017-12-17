// This object contains the price of the item, the discount currently being offered on that item,
// and whether the item is currently "buy one get one free" (meaning for every item purchased, one
// of the same item is free).

// Return the cost of the shopping list. If the input array contains no items, return zero. Round
// the answer to 2 decimal places.

// All input arrays will be valid and contain items included in the global groceries object. Each
// item will only appear once in any input array.

// Examples

// shoppingListCost([["Orange Juice", 2],["Chocolate", 4]])

// returns 6.7

// shoppingListCost([["Chocolate", 5],["Orange Juice", 15]])

// returns 26.25

function shoppingListCost(arr) {
  //your code here
  console.log(groceries.Chocolate);
  arr.forEach(item => {
    let name = item[0];
    let amount = item[1];
    let price = groceries[name].price * amount
    if (groceries[name].discount > 0) {
      price = price - (price / groceries[name].discount)
    }
    if (groceries[name].bogof) {
      price = price / 2
    }
//     let discount =
    console.log(`${name} cost $ ${price}`);
  });
}