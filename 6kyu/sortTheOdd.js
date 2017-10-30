// You have an array of numbers.

// Your task is to sort ascending odd numbers but
// even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty
// array, you need to return it.

// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray (array) {
  let sortedOdds = array.filter(i => i % 2 !== 0).sort((a, b) => a - b);
  return array.map(n => n % 2 === 1 ? sortedOdds.shift() : n);
}

sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]) // [1, 3, 5, 8, 0]
sortArray([]) // []
