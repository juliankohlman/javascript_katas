// Create two functions, max and min which, given an "iterable" as argument would
// return maximum (and minimum) value of this argument.

// eg :
// max([1,2,3]) // -> 3
// min([5,3,4]) // -> 3
// "Iterable" argument may be an array, a string or a set.

// eg :
// max([1,2,3]) // -> 3   ...array
// max("AZBYC") // -> "Z" ...string
// min({5,6,7}) // -> 5   ...set
// Items/elements of array or set may be number, string or date.

// eg :
// min([1,2,3]) // -> 1    ...array of integers
// min(["zzz","bb","aaaa"]) // -> "aaaa"   ...array of strings

// max([new Date(2017,1,1), new Date(2015,2,2), new Date(2013,3,3)]) // -> new
// Date(2017,1,1)   ...array of dates

// Note You may assume each items/elements of an iterable will be of same type (
// no [ 1, 2, "a", "foo", new Date()] )

function min (xx) {
  let arr = Array.from(xx);
  if (arr.length === 1) return arr[0];
  if (typeof arr[0] === 'string') {
    return arr.sort()[0];
  }
  if (typeof arr[0] === 'number') {
    let min = null;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (min === null || min > item) min = item;
    }
    return min;
  }
  return arr.sort(function (a, b) {
    return a.getFullYear() > b.getFullYear();
  })[0];
}

function max (xx) {
  // or let arr = [...xx]
  let arr = Array.from(xx);
  if (arr.length === 1) return arr[0];
  if (typeof arr[0] === 'string') {
    return arr.sort()[arr.length - 1];
  }
  if (typeof arr[0] === 'number') {
    if (arr.length < 500) return arr.sort(function (a, b) { return a - b })[arr.length - 1];
    let max = null;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (max === null || max < item) max = item;
    }
    return max;
  }
  return arr.sort(function (a, b) {
    return a.getFullYear() < b.getFullYear()
  })[0]
}

// Solution from codewars
// function max(xx){
//   return [...xx].reduce((a,b) => a > b ? a : b)
// }

// function min(xx){
//   return [...xx].reduce((a,b) => a < b ? a : b)
// }

min([2, 5, 3, 1, 4])
max([2, 5, 3, 1, 4])
