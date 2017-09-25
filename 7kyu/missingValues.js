// You are given an array of positive ints where every element appears three
// times, except one that appears only once (let's call it x) and one that
// appears only twice (let's call it y).

// Your task is to find x * x * y.

// Example

// For arr=[1, 1, 1, 2, 2, 3], the result should be 18

// 3 x 3 x 2 = 18

// For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be
// 4000000

// 200 x 200 x 100 = 4000000

// Input/Output

// [input] integer array arr

// an array contains positive integers. [output] an integer

// The value of x * x * y

var _ = require('lodash');

function missingValues (arr) {
  let counts = _.invert(_.countBy(arr));
  let x = +counts[1]
  let y = +counts[2]
  return x * x * y;
}

// Top CW solution
// const _ = require('lodash');

// function missingValues(arr) {
//   const xs = _(arr).countBy().invert().value();
//   return xs[1] * xs[1] * xs[2];
// }

missingValues([1, 1, 1, 2, 2, 3]) // 18

missingValues([6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200]) // 4000000

missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]) // 28431

missingValues([66, 4, 80, 66, 4, 83, 97, 81, 19, 4, 80, 51, 83, 81, 83, 66, 51, 80, 97, 81, 97]) // 18411
