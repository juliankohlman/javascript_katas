// An array is called zero-balanced if its elements sum to 0 and for each
// positive element n, there exists another element that is the negative of n.
// Write a function named ìsZeroBalanced that returns true if its argument is
// zero-balanced array, else return false. Note that an empty array will not sum
// to zero.


function ìsZeroBalanced (n) {
  console.log(n);
//   console.log(n.filter(i => i > 0))
//   console.log(n.filter(i => i < 0))
  let i = n.filter(n => n === 0)
  if (n.includes(0) || n.length === 0 || n.length % 2 !== 0) return false;
  return (n.every( function(item, index,arr) {
    return arr.includes(-item);
  }));
//   if (n.every(i => i === 0)) return true;
//   if (n.filter(i => i < 0).length === 0) return false

}