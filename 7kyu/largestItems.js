// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

function largest (n, xs) {
  return xs.sort(function (a, b) { return b - a }).slice(0, n).reverse()
}

largest(2, [7, 6, 5, 4, 3, 2, 1]);
// Top voted solution did not have to reverse items at the end
// Because they sorted them properly
// function largest(n,xs){
//   return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
// }
