// In this Kata, you will be given an array of unique elements, and your task is
// to rerrange the values so that the first max value is followed by the first
// minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]

// The first max is 15 and the first min is 7. The second max is 12 and the
// second min is 10 and so on.

function solve(arr){
  let res = [];
  let a = arr;
  let sorted = a.sort((a,b)=> a < b)
  while (sorted.length > 0) {
    res.push(sorted.shift(),sorted.pop());
    if (sorted.length === 1) { res.push(sorted.shift())}
  }
  return res
};

function solve(arr){
//   let res = [];
//   let a = arr.slice(0).sort((a,b)=> a < b)
//   while (a.length > 0) {
//     res.push(a.shift(),a.pop());
//     if (a.length === 1) { res.push(a.shift())}
//   }
//   return res
  arr.sort((a, b) => a-b);

  for (var i = 0; i < arr.length; i+=2) {
    arr.splice(i, 0, arr.pop());
  }
  return arr
};