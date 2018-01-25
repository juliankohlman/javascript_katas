// Define a function largestDifference that takes an array, and returns the highest difference from
// left to right.

// For example, [10, 7, 5, 8, 11, 9] the largestDifference is 6, from 5 to 11.

// Given an array of numbers that don't return a positive number, such as [100, 90, 80, 50, 10]
// return 0.

function largestDifference(arr) {
  console.log(arr);
  let maxDiff = 0;
  arr.forEach((number, idx) => {
    for (let i = idx + 1; i < arr.length; i += 1) {
      if (arr[i] - number > maxDiff) {
        maxDiff = arr[i] - number;
      }
    }
  });
  return maxDiff;
}

largestDifference([10, 7, 5, 8, 11, 9]);
largestDifference([100, 90, 80, 50, 10]);
