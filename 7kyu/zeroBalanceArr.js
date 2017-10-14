// An array is called zero-balanced if its elements sum to 0 and for each
// positive element n, there exists another element that is the negative of n.
// Write a function named ìsZeroBalanced that returns true if its argument is
// zero-balanced array, else return false. Note that an empty array will not sum
// to zero.


function ìsZeroBalanced (n) {
  console.log(n)
  let pos = n.sort((a, b) => a - b )
  let a = pos.slice(0, pos.length / 2)
  let b = pos.slice(pos.length / 2)
  console.log(a);
  console.log(b);
  console.log(n.sort((a ,b) => a - b))
  if (n.length % 2 !== 0 || n.length < 1) return false
  return a.reduce((a, b) => a + b) + b.reduce((a, b) => a + b) === 0
//   return a.every(x => b.includes(-x))
}