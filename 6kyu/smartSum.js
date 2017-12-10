// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of
// arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

// smartSum(1,2,3,[4,5],6); // returns 21
// smartSum(1,2,[[3,4],5],6); // returns 21

function smartSum(...args) {
  let result = [];
  args.map((item) => {
    Array.isArray(item) ? result = result.concat(smartSum(...item)) : result.push(item);
  });
  return result.reduce((a, b) => a + b);
}

smartSum(1, 2);
smartSum([1, 2], 3);
