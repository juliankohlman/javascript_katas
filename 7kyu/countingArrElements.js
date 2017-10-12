// Write a function that takes an array and counts the number of each unique
// element present.

// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

function count (array) {
  const result = {};
  for (let element of array) {
    result[element] = array.filter(i => i === element).length
  }
  return result;
}

count(['a', 'a', 'b', 'b', 'b']) // { 'a': 2, 'b': 3 }