// An element in an array is dominant if it is greater than all elements to its
// right.

// For example,in the array [1, 21, 4,7,5], we see that 21,7,5 are dominant.
// Therefore, solve([1,21,4,7,5]) = [21,7,5], which is the order in which they
// appear.

function solve(arr) {
  return arr.filter((num, idx, col) => col.slice(idx + 1).every(i => num > i));
}

solve([16, 17, 14, 3, 14, 5, 2])//, [ 17, 14, 5, 2]);
solve([92, 52, 93, 31, 89, 87, 77, 105])//, [105]);
solve([75, 47, 42, 56, 13, 55])//,  [75, 56, 55]);
solve([67, 54, 27, 85, 66, 88, 31, 24, 49])//, [88, 49]);
solve([76, 17, 25, 36, 29])//, [76, 36, 29]);
solve([104, 18, 37, 9, 36, 47, 28])//, [104, 47, 28]);