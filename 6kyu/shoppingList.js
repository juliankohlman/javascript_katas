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
  const discount = (item) => groceries[item].discount === 0 ? 0 : (groceries[item].price / groceries[item].discount);
  const listObj = arr.reduce((l,[k,v]) => (l[k] = v,l),{});
//   console.log(groceries)
  for (let item in listObj) {
    listObj[item] *= groceries[item].price;
  }
  for (let item in listObj) {
    listObj[item] -= (listObj[item] * discount(item))
  }
//   console.log(arr)
//   console.log(groceries)
  for (let item in listObj) {
    if (groceries[item].bogof) {
      let deduct = Math.floor(listObj[item] / 2)
//       console.log(item, deduct);
      listObj[item] -= deduct
      listObj[item] = listObj[item].toFixed(2);
    }
  }
  console.log(listObj)
}
