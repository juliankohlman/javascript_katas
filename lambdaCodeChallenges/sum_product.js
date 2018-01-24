// Given a sum and a product, find two integers x and y, where x + y === sum, and x * y === product.
// You will return this in an array.

// For example, calling sumAndProduct(6, 9) should return [3, 3] because 3 + 3 === 6, and 3 * 3 ===
// 9.

// Please make sure to return your array such that x <= y in the format [x, y].

// If there is no solution, please return null.

function sumAndProduct(sum, product) {
  for (let i = 0; i <= sum / 2; i++) { // sum / 2 working towards middle
    if (i * (sum - i) === product) return [i, (sum - 1)];
  }
  return null;
}