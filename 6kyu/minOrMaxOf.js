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



function max(xx){
  console.log(Object.entries(xx))
//   for (let item of xx) {
//     console.log(typeof item);
//   }
//   console.log(Math.max(...xx));
  return // max of xx
}

function min(xx){
  for (let item of xx) {
    console.log(typeof item);
  }
  console.log(Math.min(...xx));
  return // min of xx
}